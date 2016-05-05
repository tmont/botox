'use strict';

const cheerio = require('cheerio');
const http = require('http');
const https = require('https');
const inflection = require('inflection');

const typeMatchers = [
	(type) => {
		switch (type.toLowerCase()) {
			case 'string':
			case 'boolean':
				return type;
			case 'integer':
				return 'Number';
			case 'json object':
				return 'Object';
			case 'string list':
			case 'a list of amazon sns topics arns': //http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html
				return 'String[]';
			case 'customorigin type':
				return 'CloudFrontDistributionConfigOriginCustomOrigin';
		}

		return null;
	},
	(type) => {
		if (/^List of references to AWS::IAM::Role/i.test(type)) {
			return 'IAMRole[]';
		}

		return null;
	},
	(type) => {
		if (/^A list of security groups/i.test(type)) {
			return 'String[]';
		}

		return null;
	},
	(type)=> {
		if (/^List of AWS::Route53::RecordSet/.test(type)) {
			return 'Route53RecordSet[]';
		}

		return null;
	},
	(type) => {
		if (/String (?:Valid|\()/i.test(type)) {
			return 'String';
		}

		return null;
	},
	(type) => {
		const match = /^\s*(?::\s*)?(?:A )?list of (?:Amazon )?([\w\s]+)/i.exec(type);
		if (!match) {
			return null;
		}

		let newType = normalizeType(match[1]).replace(/\s/g, '');
		switch (newType) {
			case 'CodePipelinePipelineStagesActions':
			case 'EC2InstanceSsmAssociationsAssociationParameters':
			case 'S3NotificationConfigurationConfigFilterS3KeyRules':
			case 'ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings':
			case 'EC2ContainerServiceTaskDefinitionVolumes':
			case 'EC2ContainerServiceTaskDefinitionContainerDefinitions':
			case 'WAFByteMatchSetByteMatchTuples':
			case 'WAFIPSetIPSetDescriptors':
			case 'CodePipelinePipelineStagesBlockers':
			case 'S3ReplicationConfigurationRules':
			case 'CodePipelineCustomActionTypeConfigurationProperties':
			case 'CodePipelinePipelineDisableInboundStageTransitions':
			case 'DynamoDBGlobalSecondaryIndexes':
			case 'DynamoDBAttributeDefinitions':
			case 'Route53HealthCheckTags':
			case 'Route53HostedZoneTags':
			case 'WAFSqlInjectionMatchSetSqlInjectionMatchTuples':
			case 'CodePipelinePipelineStagesActionsInputArtifacts':
			case 'EC2ContainerServiceServiceLoadBalancers':
			case 'WAFRulePredicates':
			case 'ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications':
			case 'Route53HostedZoneVPCs':
			case 'WAFWebACLRules':
			case 'CodePipelinePipelineStagesActionsOutputArtifacts':
			case 'DynamoDBLocalSecondaryIndexes':
			case 'DataPipelinePipelineObjects':
			case 'ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses':
			case 'EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints':
			case 'ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces':
			case 'AutoScalingScalingPolicyStepAdjustments':
			case 'EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings':
			case 'ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups':
			case 'AutoScalingNotificationConfigurations':
			case 'EC2InstanceSsmAssociations':
			case 'ConfigConfigRuleSourceSourceDetails':
				break;
			case 'routetableIDs':
				//handle "List of route table IDs" from
				//http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html
				newType = 'String';
				break;
			case 'AutoScalingprocesses':
				//handle "List of Auto Scaling processes" from
				//http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html
				newType = 'String';
				break;
			default:
				newType = inflection.singularize(newType);
				break;
		}

		switch (newType) {
			case 'EC2MountPoint':
				newType = 'EC2MountPointPropertyType';
				break;
			case 'JSONname':
				newType = 'Object';
				break;
		}

		return newType + '[]';
	},
	(type) => {
		type = type.replace(/\W/g, '');
		switch (type) {
			case 'CloudFormationResourceTags':
				return type + 'Type[]';
			default:
				return null;
		}
	},
	(type) => {
		if (/^an empty map/i.test(type)) {
			return 'Object';
		}

		return null;
	},
	(type) => {
		//handle "Number BgpAsn is always an integer value." from
		//http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html
		if (/^Number/.test(type)) {
			return 'Number';
		}

		return null;
	},
	(type) => {
		if (/^A JSON/.test(type)) {
			//handle AdvancedOptions from
			//http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html

			//handle AssumeRolePolicyDocument from
			//http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html
			return 'Object';
		}

		return null;
	},
	(type) => {
		if (/^Key-value pairs/.test(type)) {
			return 'Object';
		}

		return null;
	},
	(type) => {
		const lastResort = type.replace(/^Amazon\s+/i, '').replace(/\W/g, '');

		switch (lastResort) {
			case 'Stringtostringmap':
				return 'Object';
		}

		return lastResort;
	}
];

function getRealType(type) {
	if (!type) {
		return type;
	}

	const suffixRegex = /\[]$/;
	const typeSuffix = suffixRegex.test(type) ? '[]' : '';
	let nakedType = type.replace(suffixRegex, '');

	switch (nakedType) {
		case 'string':
			nakedType = 'String';
			break;
		case 'object':
			nakedType = 'Object';
			break;
		case 'AutoScalingEBSBlockDevice':
			nakedType = 'CloudFormationAutoScalingEBSBlockDevicePropertyType';
			break;
		case 'AliasTarget':
			nakedType = 'Route53AliasTargetProperty';
			break;
		case 'CacheBehavior':
			nakedType = 'CloudFrontDistributionConfigCacheBehavior';
			break;
		case 'BlockDeviceMapping':
			nakedType = 'CloudFormationAutoScalingBlockDeviceMappingPropertyType';
			break;
		case 'DistributionConfigtype':
			nakedType = 'CloudFrontDistributionConfig';
			break;
		case 'Timestamp':
			nakedType = 'String';
			break;
		case 'SourceBundle':
			nakedType = 'ElasticBeanstalkSourceBundlePropertyType';
			break;
		case 'resourcetag':
			nakedType = 'CloudFormationResourceTagsType';
			break;
		case 'EC2SecurityGroupRule':
			nakedType = 'EC2SecurityGroupRulePropertyType';
			break;
		case 'SNSSubscription':
			nakedType = 'SNSSubscriptionPropertyType';
			break;
		case 'OptionSetting':
			nakedType = 'ElasticBeanstalkOptionSettingsPropertyType';
			break;
		case 'ForwardedValuestype':
			nakedType = 'CloudFrontForwardedValues';
			break;
		case 'DefaultCacheBehaviortype':
			nakedType = 'CloudFrontDefaultCacheBehavior';
			break;
		case 'S3Origintype':
			nakedType = 'CloudFrontDistributionConfigOriginS3Origin';
			break;
		case 'MetricDimension':
			nakedType = 'CloudWatchMetricDimensionPropertyType';
			break;
		case 'PrivateIpAddressSpecification':
			nakedType = 'EC2NetworkInterfacePrivateIPSpecification';
			break;
		case 'AppCookieStickinessPolicyobject':
		case 'LBCookieStickinessPolicyobject':
			nakedType = 'ElasticLoadBalancingAppCookieStickinessPolicyType';
			break;
		case 'RefID':
			nakedType = 'String';
			break;
		case 'Loggingtype':
			nakedType = 'CloudFrontLogging';
			break;
		case 'Origin':
			nakedType = 'CloudFrontDistributionConfigOrigin';
			break;
		case 'WebsiteConfigurationType':
			nakedType = 'S3WebsiteConfigurationProperty';
			break;
		case 'AutoScalingTag':
			nakedType = 'AutoScalingTagsPropertyType';
			break;
		case 'EC2securitygroup':
			nakedType = 'String';
			break;
		case 'ElasticLoadBalancingListenerPropertyTypeobject':
			nakedType = 'ElasticLoadBalancingListenerPropertyType';
			break;
		case 'ElasticLoadBalancingpolicyobject':
			nakedType = 'ElasticLoadBalancingPolicyType';
			break;
	}

	return nakedType + typeSuffix;
}

function normalizeType(type) {
	return type
		.replace(/^[\s:]+/, '') //remove leading colons and whitespace
		.trim()
		.replace(/\.+$/, '') //remove trailing periods
		.replace(/^(AWS|Amazon)/i, ''); //remove common default stuff
}

module.exports = {
	fetchDoc: function(url, callback) {
		let lib = http;
		if (url.indexOf('https') === 0) {
			lib = https;
		}

		const req = lib.get(url, (res) => {
			let body = '';
			res.on('data', (chunk) => {
				body += chunk;
			});

			res.on('end', () => {
				callback(null, cheerio.load(body));
			});
		});

		req.on('error', callback);
	},

	getReferenceUrls: function(url, next) {
		const prefix = url.substring(0, url.lastIndexOf('/') + 1);
		this.fetchDoc(url, (err, $) => {
			if (err) {
				next(err);
				return;
			}

			const urls = $('#main-col-body')
				.find('.highlights li a')
				.map((i, el) => {
					return prefix + $(el).attr('href');
				})
				.get();

			next(null, urls);
		});
	},

	getPropertyInfo: function($, parseAttrs) {
		function normalize(text) {
			return (text || '').replace(/\s/g, ' ').replace(/\s{2,}/g, ' ').trim();
		}

		const $body = $('#main-col-body');
		const name = normalize($body.find('h1.topictitle').text())
			.replace(/^amazon/i, '')
			.replace(/\s/g, '');
		const desc = normalize($body.find('p').first().text());

		const properties = $body
			.find('h2.title')
			.filter((i, el) => {
				return /Properties|Members|Parameters/i.test($(el).text());
			})
			.closest('.section')
			.find('> .variablelist > dl > dt')
			.map((i, el) => {
				const $el = $(el);
				const propertyType = (/(.+) Properties/.exec($el.closest('.section').find('h2.title').text()) || [])[1];
				const $dd = $(el).next('dd');
				let desc = normalize($dd.find('p').first().text());
				let typeDesc = '';
				const pText = $dd.find('p').map((i, el) => {
					return normalize($(el).text());
				}).get();

				const required = pText
					.map((text) => {
						const result = /^Required:\s*(.+)/i.exec(text);
						return result && result[1];
					})
					.filter(Boolean)[0];

				const type = pText
					.map((text) => {
						const result = /^Type:\s*(.+)/i.exec(text);
						if (!result) {
							return null;
						}

						typeDesc = result[1];

						let type = normalizeType(result[1]);
						for (let i = 0; i < typeMatchers.length; i++) {
							const newType = typeMatchers[i](type);
							if (newType) {
								return newType;
							}
						}

						return type;
					})
					.filter(Boolean)[0];

				const update = pText
					.map((text) => {
						const result = /^Update requires:\s*(.+)/i.exec(text);
						return result && result[1];
					})
					.filter(Boolean)[0];

				let name = normalizeType(normalize($el.find('.term').text()));
				const extraName = /(\w+)(\s\(.+\))/.exec(name);
				if (extraName) {
					name = extraName[1];
					desc += extraName[2];
				}

				const result = {
					name: name,
					description: desc,
					typeDescription: typeDesc,
					required: /^yes/i.test(required),
					type: getRealType(type),
					update: update
				};

				if (propertyType) {
					result.propertyType = propertyType;
				}

				return result;
			})
			.get();

		const attributes = parseAttrs && $body
			.find('h3')
			.filter((i, el) => {
				return normalize($(el).text()) === 'Fn::GetAtt';
			})
			.closest('.section')
			.find('.variablelist dt')
			.map((i, el) => {
				const name = normalizeType(normalize($(el).text()));
				const desc = normalize($(el).next('dd').text());

				return {
					name: name,
					description: desc
				};
			})
			.get();

		const hasNamespace = name.indexOf('::') !== -1;

		const result = {};
		if (hasNamespace) {
			result.fullName = name;
			result.namespace = name.split('::')[0];
			result.category = name.split('::')[1];
			result.name = name.split('::')[2];
			//result.className = result.category + result.name;
		} else {
			result.name = normalizeType(name);
			//result.className = result.name;
		}

		result.description = desc;
		result.properties = properties;
		if (parseAttrs) {
			result.attributes = attributes;
		}

		return result;
	}
};
