const expect = require('expect.js');
const Template = require('../src/template');
const Instance = require('../src/gen/resources/EC2Instance');
const botox = require('../');

describe('Template', () => {
	it('should generate template using resource', () => {
		const template = new Template('lol')
			.resource(new Instance('datInstance').imageId('ami-deadbeef'));

		const json = template.getTemplateJson();

		expect(json).to.eql({
			AWSTemplateFormatVersion: '2010-09-09',
			Description: 'lol',
			Resources: {
				datInstance: {
					Type: 'AWS::EC2::Instance',
					Properties: {
						ImageId: 'ami-deadbeef'
					}
				}
			}
		});
	});

	it('should generate complicated template', () => {
		const template = botox.template(
			'Similar template to the one at ' +
			'https://s3-us-west-1.amazonaws.com/cloudformation-templates-us-west-1/LAMP_Multi_AZ.template'
		);

		const keyName = botox.parameter('KeyName')
			.description('Name of an existing EC2 KeyPair to enable SSH access to the instances')
			.type('AWS::EC2::KeyPair::KeyName')
			.constraintDescription('must be the name of an existing EC2 KeyPair.');

		template.parameter(keyName);

		const region = new botox.fun.Reference('AWS::Region');

		const isEc2Vpc = botox.condition('Is-EC2-VPC', botox.or(
			botox.equals(region, 'eu-central-1'),
			botox.equals(region, 'cn-north-1'),
			botox.equals(region, 'ap-northeast-2')
		));

		const isEc2Classic = botox.condition('Is-EC2-Classic', botox.not(isEc2Vpc));
		template.condition(isEc2Vpc).condition(isEc2Classic);

		const lb = botox.loadBalancer('ElasticLoadBalancer')
			.crossZone(true)
			.availabilityZones(botox.getAZs())
			.lbCookieStickinessPolicy([
				botox.elasticLoadBalancingLBCookieStickinessPolicyType()
					.policyName('CookieBasedPolicy')
					.cookieExpirationPeriod('30')
			])
			.listeners([
				botox.elasticLoadBalancingListenerPropertyType()
					.loadBalancerPort('80')
					.instancePort('80')
					.protocol('HTTP')
					.policyNames([ 'CookieBasedPolicy' ])
			])
			.healthCheck(botox.elasticLoadBalancingHealthCheckType()
				.target('HTTP:80/')
				.healthyThreshold('2')
				.unhealthyThreshold('5')
				.interval('10')
				.timeout('5')
			);

		template.resource(lb);

		const json = template.getTemplateJson();

		expect(json).to.eql({
			AWSTemplateFormatVersion: '2010-09-09',
			Description: 'Similar template to the one at https://s3-us-west-1.amazonaws.com/cloudformation-templates-us-west-1/LAMP_Multi_AZ.template',
			Parameters: {
				"KeyName": {
					"Description": "Name of an existing EC2 KeyPair to enable SSH access to the instances",
					"Type": "AWS::EC2::KeyPair::KeyName",
					"ConstraintDescription": "must be the name of an existing EC2 KeyPair."
				}
			},
			Conditions: {
				"Is-EC2-VPC": {
					"Fn::Or": [{"Fn::Equals": [{"Ref": "AWS::Region"}, "eu-central-1"]},
						{"Fn::Equals": [{"Ref": "AWS::Region"}, "cn-north-1"]},
						{"Fn::Equals": [{"Ref": "AWS::Region"}, "ap-northeast-2"]}]
				},
				"Is-EC2-Classic": {"Fn::Not": [{"Condition": "Is-EC2-VPC"}]}
			},
			Resources: {
				"ElasticLoadBalancer": {
					"Type": "AWS::ElasticLoadBalancing::LoadBalancer",
					"Properties": {
						"CrossZone": true,
						"AvailabilityZones": {"Fn::GetAZs": ""},
						"LBCookieStickinessPolicy": [{
							"PolicyName": "CookieBasedPolicy",
							"CookieExpirationPeriod": "30"
						}],
						"Listeners": [{
							"LoadBalancerPort": "80",
							"InstancePort": "80",
							"Protocol": "HTTP",
							"PolicyNames": ["CookieBasedPolicy"]
						}],
						"HealthCheck": {
							"Target": "HTTP:80/",
							"HealthyThreshold": "2",
							"UnhealthyThreshold": "5",
							"Interval": "10",
							"Timeout": "5"
						}
					}
				}
			}
		});
	});
});
