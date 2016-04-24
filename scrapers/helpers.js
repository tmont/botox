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
			case 'integer.':
				return 'Number';
			case 'json object':
				return 'Object';
			case 'string list':
				return 'String[]';
			case 'customorigin type':
				return 'CloudFrontDistributionConfigOriginCustomOrigin';
		}

		return null;
	},
	(type) => {
		const match = /^(?:A )?list of (?:Amazon )?([\w\s]+)/i.exec(type);
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
		const lastResort = type.replace(/^Amazon\s+/i, '').replace(/\W/g, '');

		if (lastResort === 'Stringtostringmap') {
			return 'Object';
		}

		return lastResort;
	}
];

function normalizeType(type) {
	return type
		.trim()
		.replace(/\.$/, '') //remove trailing period
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
			return (text || '').replace(/[\n\t]/g, ' ').replace(/\s{2,}/g, ' ').trim();
		}

		const $body = $('#main-col-body');
		const name = normalize($body.find('h1.topictitle').text())
			.replace(/^amazon/i, '')
			.replace(/\s/g, '');
		const desc = normalize($body.find('p').first().text());

		const properties = $body
			.find('.variablelist')
			.first()
			.find('> dl > dt')
			.map((i, el) => {
				const $el = $(el);
				const $dd = $(el).next('dd');
				let desc = normalize($dd.find('p').first().text());
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

				return {
					name: name,
					description: desc,
					required: /^yes/i.test(required),
					type: type,
					update: update
				};
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
