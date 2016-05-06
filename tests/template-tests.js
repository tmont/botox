const expect = require('expect.js');
const botox = require('../');

describe('Template', () => {
	it('should create instance or whatever', () => {
		const authName = 'S3Access';
		const configs = [
			botox.cfg.config('download')
				.file(botox.cfg.file('/home/ubuntu/.ssh/authorized_keys')
					.authentication(authName)
					.source(botox.join([
							'https://s3.amazonaws.com',
							botox.findInMap('buckets', 'prod', 'authBucket'),
							'authorized_keys'
						], '/')
					)
					.mode('000600')
					.owner('ubuntu')
					.group('ubuntu')
				),
			botox.cfg.config('install')
				.package(botox.cfg.package('apt').add('nginx-full'))
		];

		const instance = botox.instance('datInstance')
			.imageId('ami-deadbeef')
			.cfnAuth(botox.authentication(authName)
				.type('S3')
				.roleName('myRole')
			)
			.cfnInit(botox.cfnInit()
				.configSet('doStuff', configs.map((config) => { return config.name; }))
				.config(configs[0])
				.config(configs[1])
			);

		const template = botox.template('lol')
			.resource(instance)
			.output(botox.output('privateDns')
				.description('Private DNS of the instance')
				.value(instance.attr().privateDnsName)
			);

		const json = template.getTemplateJson();

		expect(json).to.eql({
			AWSTemplateFormatVersion: '2010-09-09',
			Description: 'lol',
			Resources: {
				datInstance: {
					Type: 'AWS::EC2::Instance',
					Properties: {ImageId: 'ami-deadbeef'},
					Metadata: {
						'AWS::CloudFormation::Init': {
							configSets: {
								doStuff: [ 'download', 'install' ]
							},
							download: {
								files: {
									'/home/ubuntu/.ssh/authorized_keys': {
										source: { 'Fn::Join': [ '/', [
											'https://s3.amazonaws.com',
											{ 'Fn::FindInMap': [ 'buckets', 'prod', 'authBucket' ] },
											'authorized_keys'
										] ] },
										mode: '000600',
										owner: 'ubuntu',
										group: 'ubuntu',
										authentication: 'S3Access'
									}
								}
							},
							install: {
								packages: {
									apt: {
										'nginx-full': []
									}
								}
							}
						},
						'AWS::CloudFormation::Authentication': {
							S3Access: {
								type: 'S3',
								roleName: 'myRole'
							}
						}
					}
				}
			},
			Outputs: {
				privateDns: {
					Description: 'Private DNS of the instance',
					Value: {'Fn::GetAtt': ['datInstance', 'PrivateDnsName']}
				}
			}
		});
	});

	it('should generate complicated template', () => {
		const keyName = botox.parameter('KeyName')
			.description('Name of an existing EC2 KeyPair to enable SSH access to the instances')
			.type('AWS::EC2::KeyPair::KeyName')
			.constraintDescription('must be the name of an existing EC2 KeyPair.');

		const region = botox.region;

		const isEc2Vpc = botox.condition('Is-EC2-VPC', botox.or(
			botox.equals(region, 'eu-central-1'),
			botox.equals(region, 'cn-north-1'),
			botox.equals(region, 'ap-northeast-2')
		));

		const isEc2Classic = botox.condition('Is-EC2-Classic', botox.not(isEc2Vpc));

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

		const template = botox.template('Test template')
			.parameter(keyName)
			.condition(isEc2Vpc)
			.condition(isEc2Classic)
			.resource(lb);

		const json = template.getTemplateJson();

		expect(json).to.eql({
			AWSTemplateFormatVersion: '2010-09-09',
			Description: 'Test template',
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
