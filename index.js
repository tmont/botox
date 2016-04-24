var Template = require('./src/template');
var Resources = require('./src/gen/resources');
var Types = require('./src/gen/types');
var Functions = require('./src/fun');

module.exports = {
	resources: Resources,
	types: Types,
	fun: Functions,

	Template: Template,

	base64: function(value) {
		return new Functions.Base64(value);
	},

	select: function(index, things) {
		return new Functions.Select(index, things);
	},

	findInMap: function(mapName, topLevelKey, secondLevelKey) {
		return new Functions.FindInMap(mapName, topLevelKey, secondLevelKey);
	},

	getAZs: function(region) {
		return new Functions.GetAZs(region);
	},

	join: function(things, delimiter) {
		return new Functions.Join(things, delimiter);
	},

	template: (description) => {
		return new Template(description);
	},

	//@@start sugar

	/**
	 * The AWS::IAM::AccessKey resource type generates a secret access key and assigns it to an IAM user or AWS account.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMAccessKey}
	 */
	accessKey: function(name) {
		return new Resources.IAM.AccessKey(name);
	},

	/**
	 * The AWS::ApiGateway::Account resource specifies the AWS Identity and Access Management (IAM) role that Amazon API Gateway (API Gateway) uses to write API logs to Amazon CloudWatch Logs (CloudWatch Logs).
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayAccount}
	 */
	account: function(name) {
		return new Resources.ApiGateway.Account(name);
	},

	/**
	 * The AWS::CloudWatch::Alarm type creates an CloudWatch alarm.
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudWatchAlarm}
	 */
	alarm: function(name) {
		return new Resources.CloudWatch.Alarm(name);
	},

	/**
	 * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet, which you can use to anonymize your fleet. You can reference the alias instead of a specific fleet when you create game sessions. For more information, see the CreateAlias action in the Amazon GameLift API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {GameLiftAlias}
	 */
	alias: function(name) {
		return new Resources.GameLift.Alias(name);
	},

	/**
	 * The AWS::ApiGateway::ApiKey resource creates a unique key that you can distribute to clients who are executing Amazon API Gateway (API Gateway) Method resources that require an API key. To specify which API key clients must use, map the API key with the RestApi and Stage resources that include the methods requiring a key.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayApiKey}
	 */
	apiKey: function(name) {
		return new Resources.ApiGateway.ApiKey(name);
	},

	/**
	 * Defines an AWS OpsWorks app for an AWS OpsWorks stack. The app represents code that you want to run on an application server.
	 *
	 * @param {String} name Name of the resource
	 * @return {OpsWorksApp}
	 */
	app: function(name) {
		return new Resources.OpsWorks.App(name);
	},

	/**
	 * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application. An application revision, deployment configuration, and deployment group must all be included in an AWS CodeDeploy application. For more information, see AWS CodeDeploy Deployments in the AWS CodeDeploy User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {CodeDeployApplication}
	 */
	application: function(name) {
		return new Resources.CodeDeploy.Application(name);
	},

	/**
	 * Creates an application version, an iteration of deployable code, for an Elastic Beanstalk application.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElasticBeanstalkApplicationVersion}
	 */
	applicationVersion: function(name) {
		return new Resources.ElasticBeanstalk.ApplicationVersion(name);
	},

	/**
	 * Use the AWS::CloudFormation::Authentication resource to specify authentication credentials for files or sources that you specify with the AWS::CloudFormation::Init resource.
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFormationAuthentication}
	 */
	authentication: function(name) {
		return new Resources.CloudFormation.Authentication(name);
	},

	/**
	 * The AWS::ApiGateway::Authorizer resource creates an authorization layer that Amazon API Gateway (API Gateway) activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayAuthorizer}
	 */
	authorizer: function(name) {
		return new Resources.ApiGateway.Authorizer(name);
	},

	/**
	 * The AWS::AutoScaling::AutoScalingGroup type creates an Auto Scaling group.
	 *
	 * @param {String} name Name of the resource
	 * @return {AutoScalingAutoScalingGroup}
	 */
	autoScalingGroup: function(name) {
		return new Resources.AutoScaling.AutoScalingGroup(name);
	},

	/**
	 * The AWS::ApiGateway::BasePathMapping resource creates a base path that clients who call your Amazon API Gateway API must use in the invocation URL.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayBasePathMapping}
	 */
	basePathMapping: function(name) {
		return new Resources.ApiGateway.BasePathMapping(name);
	},

	/**
	 * The AWS::S3::Bucket type creates an Amazon S3 bucket.
	 *
	 * @param {String} name Name of the resource
	 * @return {S3Bucket}
	 */
	bucket: function(name) {
		return new Resources.S3.Bucket(name);
	},

	/**
	 * The AWS::S3::BucketPolicy type applies an Amazon S3 bucket policy to an Amazon S3 bucket.
	 *
	 * @param {String} name Name of the resource
	 * @return {S3BucketPolicy}
	 */
	bucketPolicy: function(name) {
		return new Resources.S3.BucketPolicy(name);
	},

	/**
	 * The AWS::GameLift::Build resource creates a build that includes all of the components to run your game server in an Amazon GameLift (GameLift) fleet.
	 *
	 * @param {String} name Name of the resource
	 * @return {GameLiftBuild}
	 */
	build: function(name) {
		return new Resources.GameLift.Build(name);
	},

	/**
	 * The AWS::WAF::ByteMatchSet resource creates an AWS WAF ByteMatchSet that identifies a part of a web request that you want to inspect. For more information, see CreateByteMatchSet in the AWS WAF API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {WAFByteMatchSet}
	 */
	byteMatchSet: function(name) {
		return new Resources.WAF.ByteMatchSet(name);
	},

	/**
	 * The AWS::ElastiCache::CacheCluster type creates an Amazon ElastiCache cache cluster.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElastiCacheCacheCluster}
	 */
	cacheCluster: function(name) {
		return new Resources.ElastiCache.CacheCluster(name);
	},

	/**
	 * The AWS::ApiGateway::ClientCertificate resource creates a client certificate that Amazon API Gateway (API Gateway) uses to configure client-side SSL authentication for sending requests to the integration endpoint.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayClientCertificate}
	 */
	clientCertificate: function(name) {
		return new Resources.ApiGateway.ClientCertificate(name);
	},

	/**
	 * The AWS::ECS::Cluster resource creates an Amazon EC2 Container Service (Amazon ECS) cluster. This resource has no properties; use the Amazon ECS container agent to connect to the cluster. For more information, see Amazon ECS Container Agent in the Amazon EC2 Container Service Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {ECSCluster}
	 */
	cluster: function(name) {
		return new Resources.ECS.Cluster(name);
	},

	/**
	 * Creates an Amazon Redshift parameter group that you can associate with an Amazon Redshift cluster. The parameters in the group apply to all the databases that you create in the cluster.
	 *
	 * @param {String} name Name of the resource
	 * @return {RedshiftClusterParameterGroup}
	 */
	clusterParameterGroup: function(name) {
		return new Resources.Redshift.ClusterParameterGroup(name);
	},

	/**
	 * Creates an Amazon Redshift security group. You use security groups to control access to Amazon Redshift clusters that are not in a VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {RedshiftClusterSecurityGroup}
	 */
	clusterSecurityGroup: function(name) {
		return new Resources.Redshift.ClusterSecurityGroup(name);
	},

	/**
	 * Specifies inbound (ingress) rules for an Amazon Redshift security group.
	 *
	 * @param {String} name Name of the resource
	 * @return {RedshiftClusterSecurityGroupIngress}
	 */
	clusterSecurityGroupIngress: function(name) {
		return new Resources.Redshift.ClusterSecurityGroupIngress(name);
	},

	/**
	 * Creates an Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon VPC when creating an Amazon Redshift subnet group.
	 *
	 * @param {String} name Name of the resource
	 * @return {RedshiftClusterSubnetGroup}
	 */
	clusterSubnetGroup: function(name) {
		return new Resources.Redshift.ClusterSubnetGroup(name);
	},

	/**
	 * The AWS::Config::ConfigRule resource uses an AWS Lambda (Lambda) function that evaluates configuration items to assess whether your AWS resources comply with your specified configurations. This function can run when AWS Config detects a configuration change or delivers a configuration snapshot. The resources this function evaluates must be in the recording group. For more information, see Evaluating AWS Resource Configurations with AWS Config in the AWS Config Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {ConfigConfigRule}
	 */
	configRule: function(name) {
		return new Resources.Config.ConfigRule(name);
	},

	/**
	 * The AWS::Config::ConfigurationRecorder resource describes the AWS resource types for which AWS Config records configuration changes. The configuration recorder stores the configurations of the supported resources in your account as configuration items.
	 *
	 * @param {String} name Name of the resource
	 * @return {ConfigConfigurationRecorder}
	 */
	configurationRecorder: function(name) {
		return new Resources.Config.ConfigurationRecorder(name);
	},

	/**
	 * Creates a configuration template for an Elastic Beanstalk application. You can use configuration templates to deploy different versions of an application by using the configuration settings that you define in the configuration template.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElasticBeanstalkConfigurationTemplate}
	 */
	configurationTemplate: function(name) {
		return new Resources.ElasticBeanstalk.ConfigurationTemplate(name);
	},

	/**
	 * The AWS::CodePipeline::CustomActionType resource creates a custom action for activities that aren't included in the AWS CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline. For more information, see Create and Add a Custom Action in AWS CodePipeline in the AWS CodePipeline User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {CodePipelineCustomActionType}
	 */
	customActionType: function(name) {
		return new Resources.CodePipeline.CustomActionType(name);
	},

	/**
	 * Provides information to AWS about your VPN customer gateway device.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2CustomerGateway}
	 */
	customerGateway: function(name) {
		return new Resources.EC2.CustomerGateway(name);
	},

	/**
	 * In an AWS CloudFormation template, you use the AWS::CloudFormation::CustomResource or Custom::String resource type to specify custom resources.
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFormationCustomResource}
	 */
	customResource: function(name) {
		return new Resources.CloudFormation.CustomResource(name);
	},

	/**
	 * Creates a data pipeline that you can use to automate the movement and transformation of data. In each pipeline, you define pipeline objects, such as activities, schedules, data nodes, and resources. For information about pipeline objects and components that you can use, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {DataPipelinePipeline}
	 */
	dataPipelinePipeline: function(name) {
		return new Resources.DataPipeline.Pipeline(name);
	},

	/**
	 * The AWS::RDS::DBCluster resource creates a cluster, such as an Aurora for Amazon RDS (Amazon Aurora) DB cluster. Amazon Aurora is a fully managed, MySQL-compatible, relational database engine. For more information, see Aurora on Amazon RDS in the Amazon Relational Database Service User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSDBCluster}
	 */
	dbCluster: function(name) {
		return new Resources.RDS.DBCluster(name);
	},

	/**
	 * The AWS::RDS::DBClusterParameterGroup resource creates a new Amazon Relational Database Service (Amazon RDS) database (DB) cluster parameter group. For more information about DB cluster parameter groups, see Appendix: DB Cluster and DB Instance Parameters in the Amazon Relational Database Service User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSDBClusterParameterGroup}
	 */
	dbClusterParameterGroup: function(name) {
		return new Resources.RDS.DBClusterParameterGroup(name);
	},

	/**
	 * The AWS::RDS::DBInstance type creates an Amazon RDS database instance. For detailed information about configuring RDS DB instances, see CreateDBInstance.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSDBInstance}
	 */
	dbInstance: function(name) {
		return new Resources.RDS.DBInstance(name);
	},

	/**
	 * Creates a custom parameter group for an RDS database family. For more information about RDS parameter groups, see Working with DB Parameter Groups in the Amazon Relational Database Service User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSDBParameterGroup}
	 */
	dbParameterGroup: function(name) {
		return new Resources.RDS.DBParameterGroup(name);
	},

	/**
	 * The AWS::RDS::DBSecurityGroup type is used to create or update an Amazon RDS DB Security Group. For more information about DB Security Groups, see Working with DB Security Groups in the Amazon Relational Database Service Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSDBSecurityGroup}
	 */
	dbSecurityGroup: function(name) {
		return new Resources.RDS.DBSecurityGroup(name);
	},

	/**
	 * The AWS::RDS::DBSecurityGroupIngress type enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. For more information about DB security groups, see Working with DB security groups
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSDBSecurityGroupIngress}
	 */
	dbSecurityGroupIngress: function(name) {
		return new Resources.RDS.DBSecurityGroupIngress(name);
	},

	/**
	 * The AWS::RDS::DBSubnetGroup type creates an RDS database subnet group. Subnet groups must contain at least two subnet in two different Availability Zones in the same region.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSDBSubnetGroup}
	 */
	dbSubnetGroup: function(name) {
		return new Resources.RDS.DBSubnetGroup(name);
	},

	/**
	 * The AWS::Config::DeliveryChannel resource describes where AWS Config stores configuration changes to an AWS resource.
	 *
	 * @param {String} name Name of the resource
	 * @return {ConfigDeliveryChannel}
	 */
	deliveryChannel: function(name) {
		return new Resources.Config.DeliveryChannel(name);
	},

	/**
	 * The AWS::ApiGateway::Deployment resource deploys an Amazon API Gateway (API Gateway) RestApi resource to a stage so that clients can call the API over the Internet. The stage acts as an environment
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayDeployment}
	 */
	deployment: function(name) {
		return new Resources.ApiGateway.Deployment(name);
	},

	/**
	 * The AWS::CodeDeploy::DeploymentConfig resource creates a set of deployment rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy uses during a deployment.
	 *
	 * @param {String} name Name of the resource
	 * @return {CodeDeployDeploymentConfig}
	 */
	deploymentConfig: function(name) {
		return new Resources.CodeDeploy.DeploymentConfig(name);
	},

	/**
	 * The AWS::CodeDeploy::DeploymentGroup resource creates an AWS CodeDeploy deployment group that details which application revision to use and which instances your application revisions are deployed to.
	 *
	 * @param {String} name Name of the resource
	 * @return {CodeDeployDeploymentGroup}
	 */
	deploymentGroup: function(name) {
		return new Resources.CodeDeploy.DeploymentGroup(name);
	},

	/**
	 * The AWS::Logs::Destination resource creates an Amazon CloudWatch Logs (CloudWatch Logs) destination, which enables you to specify a physical resource (such as an Amazon Kinesis stream) that subscribes to CloudWatch Logs log events from another AWS account. For more information, see Cross-Account Log Data Sharing with Subscriptions in the Amazon CloudWatch Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {LogsDestination}
	 */
	destination: function(name) {
		return new Resources.Logs.Destination(name);
	},

	/**
	 * Creates a set of DHCP options for your VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2DHCPOptions}
	 */
	dhcpOptions: function(name) {
		return new Resources.EC2.DHCPOptions(name);
	},

	/**
	 * Creates an Amazon CloudFront web distribution. For general information about CloudFront distributions, see the Introduction to Amazon CloudFront in the Amazon CloudFront Developer Guide. For specific information about creating CloudFront web distributions, see POST Distribution in the Amazon CloudFront API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFrontDistribution}
	 */
	distribution: function(name) {
		return new Resources.CloudFront.Distribution(name);
	},

	/**
	 * The AWS::SSM::Document resource creates an Amazon EC2 Simple Systems Manager (SSM) document that describes an instance configuration, which you can use to set up and run commands on your instances.
	 *
	 * @param {String} name Name of the resource
	 * @return {SSMDocument}
	 */
	document: function(name) {
		return new Resources.SSM.Document(name);
	},

	/**
	 * The AWS::Elasticsearch::Domain resource creates an Amazon Elasticsearch Service (Amazon ES) domain that encapsulates the Amazon ES engine instances. For more information, see CreateElasticsearchDomain in the Amazon Elasticsearch Service Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElasticsearchDomain}
	 */
	domain: function(name) {
		return new Resources.Elasticsearch.Domain(name);
	},

	/**
	 * The AWS::EC2::EIP resource allocates an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2EIP}
	 */
	eip: function(name) {
		return new Resources.EC2.EIP(name);
	},

	/**
	 * The AWS::EC2::EIPAssociation resource type associates an Elastic IP address with an Amazon EC2 instance. The Elastic IP address can be an existing Elastic IP address or an Elastic IP address allocated through an AWS::EC2::EIP resource.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2EIPAssociation}
	 */
	eipAssociation: function(name) {
		return new Resources.EC2.EIPAssociation(name);
	},

	/**
	 * The AWS::ElastiCache::SecurityGroup resource creates a cache security group. For more information about cache security groups, go to Cache Security Groups in the Amazon ElastiCache User Guide or go to CreateCacheSecurityGroup in the Amazon ElastiCache API Reference Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElastiCacheSecurityGroup}
	 */
	elastiCacheSecurityGroup: function(name) {
		return new Resources.ElastiCache.SecurityGroup(name);
	},

	/**
	 * The AWS::ElastiCache::SecurityGroupIngress type authorizes ingress to a cache security group from hosts in specified Amazon EC2 security groups. For more information about ElastiCache security group ingress, go to AuthorizeCacheSecurityGroupIngress in the Amazon ElastiCache API Reference Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElastiCacheSecurityGroupIngress}
	 */
	elastiCacheSecurityGroupIngress: function(name) {
		return new Resources.ElastiCache.SecurityGroupIngress(name);
	},

	/**
	 * Creates an Elastic Beanstalk application.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElasticBeanstalkApplication}
	 */
	elasticBeanstalkApplication: function(name) {
		return new Resources.ElasticBeanstalk.Application(name);
	},

	/**
	 * Attaches an Elastic Load Balancing load balancer to an AWS OpsWorks layer that you specify.
	 *
	 * @param {String} name Name of the resource
	 * @return {OpsWorksElasticLoadBalancerAttachment}
	 */
	elasticLoadBalancerAttachment: function(name) {
		return new Resources.OpsWorks.ElasticLoadBalancerAttachment(name);
	},

	/**
	 * The AWS::EMR::Cluster resource creates an Amazon Elastic MapReduce (Amazon EMR) cluster, which is a collection of EC2 instances on which you can run big data frameworks to process and analyze vast amounts of data. For more information, see Plan an Amazon EMR Cluster in the Amazon Elastic MapReduce Management Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {EMRCluster}
	 */
	emrCluster: function(name) {
		return new Resources.EMR.Cluster(name);
	},

	/**
	 * Creates or updates an AWS Elastic Beanstalk environment.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElasticBeanstalkEnvironment}
	 */
	environment: function(name) {
		return new Resources.ElasticBeanstalk.Environment(name);
	},

	/**
	 * The AWS::Lambda::EventSourceMapping resource specifies a stream as an event source for an AWS Lambda (Lambda) function. The stream can be an Amazon Kinesis stream or an Amazon DynamoDB (DynamoDB) stream. Lambda invokes the associated function when records are posted to the stream. For more information, see CreateEventSourceMapping in the AWS Lambda Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {LambdaEventSourceMapping}
	 */
	eventSourceMapping: function(name) {
		return new Resources.Lambda.EventSourceMapping(name);
	},

	/**
	 * Use the AWS::RDS::EventSubscription resource to get notifications for Amazon Relational Database Service events through the Amazon Simple Notification Service. For more information, see Using Amazon RDS Event Notification in the Amazon Relational Database Service User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSEventSubscription}
	 */
	eventSubscription: function(name) {
		return new Resources.RDS.EventSubscription(name);
	},

	/**
	 * The AWS::EFS::FileSystem resource creates a new, empty file system in Amazon Elastic File System (Amazon EFS). You must create a mount target (AWS::EFS::MountTarget) to mount your Amazon EFS file system on an Amazon Elastic Compute Cloud (Amazon EC2) instance. For more information, see the CreateFileSystem API in the Amazon Elastic File System User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {EFSFileSystem}
	 */
	fileSystem: function(name) {
		return new Resources.EFS.FileSystem(name);
	},

	/**
	 * The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 instances, each of which is a host in the fleet. For more information, see the CreateFleet action in the Amazon GameLift API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {GameLiftFleet}
	 */
	fleet: function(name) {
		return new Resources.GameLift.Fleet(name);
	},

	/**
	 * The AWS::Lambda::Function resource creates an AWS Lambda (Lambda) function that can run code in response to events. For more information, see CreateFunction in the AWS Lambda Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {LambdaFunction}
	 */
	function: function(name) {
		return new Resources.Lambda.Function(name);
	},

	/**
	 * The AWS::IAM::Group type creates an Identity and Access Management (IAM) group.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMGroup}
	 */
	group: function(name) {
		return new Resources.IAM.Group(name);
	},

	/**
	 * You can use the AWS::Route53::HealthCheck resource to check the health of your resources before Amazon Route 53 responds to a DNS query. For more information, see How Health Checks Work in Simple Amazon Route 53 Configurations in the Amazon Route 53 Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {Route53HealthCheck}
	 */
	healthCheck: function(name) {
		return new Resources.Route53.HealthCheck(name);
	},

	/**
	 * The AWS::Route53::HostedZone resource creates a hosted zone, which can contain a collection of record sets for a domain. You cannot create a hosted zone for a top-level domain (TLD). For more information, see POST CreateHostedZone or POST CreateHostedZone (Private) in the Amazon Route 53 API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {Route53HostedZone}
	 */
	hostedZone: function(name) {
		return new Resources.Route53.HostedZone(name);
	},

	/**
	 * Topics
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFormationInit}
	 */
	init: function(name) {
		return new Resources.CloudFormation.Init(name);
	},

	/**
	 * The AWS::EC2::Instance type creates an Amazon EC2 instance.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2Instance}
	 */
	instance: function(name) {
		return new Resources.EC2.Instance(name);
	},

	/**
	 * The AWS::EMR::InstanceGroupConfig resource configures a task instance group for an Amazon Elastic MapReduce (Amazon EMR) cluster.
	 *
	 * @param {String} name Name of the resource
	 * @return {EMRInstanceGroupConfig}
	 */
	instanceGroupConfig: function(name) {
		return new Resources.EMR.InstanceGroupConfig(name);
	},

	/**
	 * Creates an AWS Identity and Access Management (IAM) Instance Profile that can be used with IAM Roles for EC2 Instances.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMInstanceProfile}
	 */
	instanceProfile: function(name) {
		return new Resources.IAM.InstanceProfile(name);
	},

	/**
	 * AWS::CloudFormation::Interface is a metadata key that defines how parameters are grouped and sorted in the AWS CloudFormation console. When you create or update stacks in the console, the console lists input parameters in alphabetical order by their logical IDs. By using this key, you can define your own parameter grouping and ordering so that users can efficiently specify parameter values. For example, you could group all EC2-related parameters in one group and all VPC-related parameters in another group.
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFormationInterface}
	 */
	interface: function(name) {
		return new Resources.CloudFormation.Interface(name);
	},

	/**
	 * Creates a new Internet gateway in your AWS account. After creating the Internet gateway, you then attach it to a VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2InternetGateway}
	 */
	internetGateway: function(name) {
		return new Resources.EC2.InternetGateway(name);
	},

	/**
	 * The AWS::WAF::IPSet resource creates an AWS WAF IPSet that specifies which web requests to permit or block based on the IP addresses from which the requests originate. For more information, see CreateIPSet in the AWS WAF API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {WAFIPSet}
	 */
	ipSet: function(name) {
		return new Resources.WAF.IPSet(name);
	},

	/**
	 * The AWS::KMS::Key resource creates a customer master key (CMK) in AWS Key Management Service (AWS KMS). Users (customers) can use the master key to encrypt their data stored in AWS services that are integrated with AWS KMS or within their applications. For more information, see What is the AWS Key Management Service? in the AWS Key Management Service Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {KMSKey}
	 */
	key: function(name) {
		return new Resources.KMS.Key(name);
	},

	/**
	 * The AWS::Lambda::Alias resource creates an alias that points to an AWS Lambda (Lambda) function that you specify. Use aliases when you want to control which version of your function other services or applications invoke. Those services or applications can use your function's alias so that they don't need to be updated whenever you release a new version of your function. For more information, see Introduction to AWS Lambda Aliases in the AWS Lambda Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {LambdaAlias}
	 */
	lambdaAlias: function(name) {
		return new Resources.Lambda.Alias(name);
	},

	/**
	 * The AWS::AutoScaling::LaunchConfiguration type creates an Auto Scaling launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances in the Auto Scaling group.
	 *
	 * @param {String} name Name of the resource
	 * @return {AutoScalingLaunchConfiguration}
	 */
	launchConfiguration: function(name) {
		return new Resources.AutoScaling.LaunchConfiguration(name);
	},

	/**
	 * Creates an AWS OpsWorks layer. A layer defines, for example, which packages and applications are installed and how they are configured.
	 *
	 * @param {String} name Name of the resource
	 * @return {OpsWorksLayer}
	 */
	layer: function(name) {
		return new Resources.OpsWorks.Layer(name);
	},

	/**
	 * Use AWS::AutoScaling::LifecycleHook to control the state of an instance in an Auto Scaling group after it is launched or terminated. When you use a lifecycle hook, the Auto Scaling group either pauses the instance after it is launched (before it is put into service) or pauses the instance as it is terminated (before it is fully terminated). For more information, see Examples of How to Use Lifecycle Hooks in the Auto Scaling Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {AutoScalingLifecycleHook}
	 */
	lifecycleHook: function(name) {
		return new Resources.AutoScaling.LifecycleHook(name);
	},

	/**
	 * The AWS::ElasticLoadBalancing::LoadBalancer type creates a LoadBalancer.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElasticLoadBalancingLoadBalancer}
	 */
	loadBalancer: function(name) {
		return new Resources.ElasticLoadBalancing.LoadBalancer(name);
	},

	/**
	 * The AWS::Logs::LogGroup resource creates an Amazon CloudWatch Logs log group that defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
	 *
	 * @param {String} name Name of the resource
	 * @return {LogsLogGroup}
	 */
	logGroup: function(name) {
		return new Resources.Logs.LogGroup(name);
	},

	/**
	 * The AWS::Logs::LogStream resource creates an Amazon CloudWatch Logs log stream in a log group. A log stream represents the sequence of events coming from an application instance or resource that you are monitoring. For more information, see Monitoring Log Files in the Amazon CloudWatch Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {LogsLogStream}
	 */
	logStream: function(name) {
		return new Resources.Logs.LogStream(name);
	},

	/**
	 * AWS::IAM::ManagedPolicy creates an AWS Identity and Access Management (IAM) managed policy for your AWS account that you can use to apply permissions to IAM users, groups, and roles. For more information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMManagedPolicy}
	 */
	managedPolicy: function(name) {
		return new Resources.IAM.ManagedPolicy(name);
	},

	/**
	 * The AWS::ApiGateway::Method resource creates Amazon API Gateway (API Gateway) methods that define the parameters and body that clients must send in their requests.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayMethod}
	 */
	method: function(name) {
		return new Resources.ApiGateway.Method(name);
	},

	/**
	 * The AWS::Logs::MetricFilter resource creates a metric filter that describes how Amazon CloudWatch Logs extracts information from logs that you specify and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
	 *
	 * @param {String} name Name of the resource
	 * @return {LogsMetricFilter}
	 */
	metricFilter: function(name) {
		return new Resources.Logs.MetricFilter(name);
	},

	/**
	 * The AWS::DirectoryService::MicrosoftAD resource creates a Microsoft Active Directory in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. For more information, see What Is AWS Directory Service? in the AWS Directory Service Administration Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {DirectoryServiceMicrosoftAD}
	 */
	microsoftAD: function(name) {
		return new Resources.DirectoryService.MicrosoftAD(name);
	},

	/**
	 * The AWS::ApiGateway::Model resource defines the structure of a request or response payload for an Amazon API Gateway (API Gateway) method.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayModel}
	 */
	model: function(name) {
		return new Resources.ApiGateway.Model(name);
	},

	/**
	 * The AWS::EFS::MountTarget resource creates a mount target for an Amazon Elastic File System (Amazon EFS) file system (AWS::EFS::FileSystem). Use the mount target to mount file systems on Amazon Elastic Compute Cloud (Amazon EC2) instances. For more information, see the CreateMountTarget API in the Amazon Elastic File System User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {EFSMountTarget}
	 */
	mountTarget: function(name) {
		return new Resources.EFS.MountTarget(name);
	},

	/**
	 * The AWS::EC2::NatGateway resource creates a network address translation (NAT) gateway in the specified public subnet. Use a NAT gateway to allow instances in a private subnet to connect to the Internet or to other AWS services, but prevent the Internet from initiating a connection with those instances. For more information and a sample architectural diagram, see NAT Gateways in the Amazon VPC User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2NatGateway}
	 */
	natGateway: function(name) {
		return new Resources.EC2.NatGateway(name);
	},

	/**
	 * Creates a new network ACL in a VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2NetworkAcl}
	 */
	networkAcl: function(name) {
		return new Resources.EC2.NetworkAcl(name);
	},

	/**
	 * Creates an entry (i.e., rule) in a network ACL with a rule number you specify. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2NetworkAclEntry}
	 */
	networkAclEntry: function(name) {
		return new Resources.EC2.NetworkAclEntry(name);
	},

	/**
	 * Describes a network interface in an Elastic Compute Cloud (EC2) instance for AWS CloudFormation. This is provided in a list in the NetworkInterfaces property of AWS::EC2::Instance.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2NetworkInterface}
	 */
	networkInterface: function(name) {
		return new Resources.EC2.NetworkInterface(name);
	},

	/**
	 * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instances without interruption.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2NetworkInterfaceAttachment}
	 */
	networkInterfaceAttachment: function(name) {
		return new Resources.EC2.NetworkInterfaceAttachment(name);
	},

	/**
	 * Creates an instance for an AWS OpsWorks stack. These instances are the Amazon Elastic Compute Cloud (Amazon EC2) instances that, for example, handle the work of serving applications and balancing traffic.
	 *
	 * @param {String} name Name of the resource
	 * @return {OpsWorksInstance}
	 */
	opsWorksInstance: function(name) {
		return new Resources.OpsWorks.Instance(name);
	},

	/**
	 * Creates an AWS OpsWorks stack. An AWS OpsWorks stack represents a set of instances that you want to manage collectively, typically because they have a common purpose such as serving PHP applications.
	 *
	 * @param {String} name Name of the resource
	 * @return {OpsWorksStack}
	 */
	opsWorksStack: function(name) {
		return new Resources.OpsWorks.Stack(name);
	},

	/**
	 * Use the AWS::RDS::OptionGroup resource to create an option group that can make managing data and databases easier. For more information about option groups, see Working with Option Groups in the Amazon Relational Database Service User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {RDSOptionGroup}
	 */
	optionGroup: function(name) {
		return new Resources.RDS.OptionGroup(name);
	},

	/**
	 * The AWS::ElastiCache::ParameterGroup type creates a new cache parameter group. Cache parameter groups control the parameters for a cache cluster.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElastiCacheParameterGroup}
	 */
	parameterGroup: function(name) {
		return new Resources.ElastiCache.ParameterGroup(name);
	},

	/**
	 * The AWS::Lambda::Permission resource associates a policy statement with a specific AWS Lambda (Lambda) function's access policy. The function policy grants a specific AWS service or application permission to invoke the function. For more information, see AddPermission in the AWS Lambda Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {LambdaPermission}
	 */
	permission: function(name) {
		return new Resources.Lambda.Permission(name);
	},

	/**
	 * The AWS::CodePipeline::Pipeline resource creates an AWS CodePipeline pipeline that describes how software changes go through a release process. For more information, see What Is AWS CodePipeline? in the AWS CodePipeline User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {CodePipelinePipeline}
	 */
	pipeline: function(name) {
		return new Resources.CodePipeline.Pipeline(name);
	},

	/**
	 * The AWS::EC2::PlacementGroup resource is a logical grouping of instances within a single Availability Zone (AZ) that enables applications to participate in a low-latency, 10 Gbps network. You create a placement group first, and then you can launch instances in the placement group.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2PlacementGroup}
	 */
	placementGroup: function(name) {
		return new Resources.EC2.PlacementGroup(name);
	},

	/**
	 * The AWS::IAM::Policy resource associates an IAM policy with IAM users, roles, or groups. For more information about IAM policies, see Overview of IAM Policies in the IAM User Guide guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMPolicy}
	 */
	policy: function(name) {
		return new Resources.IAM.Policy(name);
	},

	/**
	 * The AWS::SQS::Queue type creates an Amazon SQS queue.
	 *
	 * @param {String} name Name of the resource
	 * @return {SQSQueue}
	 */
	queue: function(name) {
		return new Resources.SQS.Queue(name);
	},

	/**
	 * The AWS::SQS::QueuePolicy type applies a policy to SQS queues.
	 *
	 * @param {String} name Name of the resource
	 * @return {SQSQueuePolicy}
	 */
	queuePolicy: function(name) {
		return new Resources.SQS.QueuePolicy(name);
	},

	/**
	 * The AWS::Route53::RecordSet type can be used as a standalone resource or as an embedded property in the AWS::Route53::RecordSetGroup type. Note that some AWS::Route53::RecordSet properties are valid only when used within AWS::Route53::RecordSetGroup.
	 *
	 * @param {String} name Name of the resource
	 * @return {Route53RecordSet}
	 */
	recordSet: function(name) {
		return new Resources.Route53.RecordSet(name);
	},

	/**
	 * The AWS::Route53::RecordSetGroup resource creates record sets for a hosted zone. For more information about constraints and values for each property, see POST CreateHostedZone for hosted zones and POST ChangeResourceRecordSet for resource record sets.
	 *
	 * @param {String} name Name of the resource
	 * @return {Route53RecordSetGroup}
	 */
	recordSetGroup: function(name) {
		return new Resources.Route53.RecordSetGroup(name);
	},

	/**
	 * Creates an Amazon Redshift cluster. A cluster is a fully managed data warehouse that consists of set of compute nodes. For more information about default values and valid values, see CreateCluster in the Amazon Redshift API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {RedshiftCluster}
	 */
	redshiftCluster: function(name) {
		return new Resources.Redshift.Cluster(name);
	},

	/**
	 * The AWS::ElastiCache::ReplicationGroup resource creates an Amazon ElastiCache replication group. A replication group is a collection of cache clusters, where one of the clusters is a primary read-write cluster and the others are read-only replicas.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElastiCacheReplicationGroup}
	 */
	replicationGroup: function(name) {
		return new Resources.ElastiCache.ReplicationGroup(name);
	},

	/**
	 * The AWS::ECR::Repository resource creates an Amazon EC2 Container Registry (Amazon ECR) repository, where users can push and pull Docker images. For more information, see Amazon ECR Repositories in the Amazon EC2 Container Registry User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {ECRRepository}
	 */
	repository: function(name) {
		return new Resources.ECR.Repository(name);
	},

	/**
	 * The AWS::ApiGateway::Resource resource creates a resource in an Amazon API Gateway (API Gateway) API.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayResource}
	 */
	resource: function(name) {
		return new Resources.ApiGateway.Resource(name);
	},

	/**
	 * The AWS::ApiGateway::RestApi resource contains a collection of Amazon API Gateway (API Gateway) resources and methods that can be invoked through HTTPS endpoints.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayRestApi}
	 */
	restApi: function(name) {
		return new Resources.ApiGateway.RestApi(name);
	},

	/**
	 * Creates an AWS Identity and Access Management (IAM) role. An IAM role can be used to enable applications running on an Amazon EC2 instance to securely access your AWS resources.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMRole}
	 */
	role: function(name) {
		return new Resources.IAM.Role(name);
	},

	/**
	 * Creates a new route in a route table within a VPC. The route's target can be either a gateway attached to the VPC or a NAT instance in the VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2Route}
	 */
	route: function(name) {
		return new Resources.EC2.Route(name);
	},

	/**
	 * Creates a new route table within a VPC. After you create a new route table, you can add routes and associate the table with a subnet.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2RouteTable}
	 */
	routeTable: function(name) {
		return new Resources.EC2.RouteTable(name);
	},

	/**
	 * The AWS::Events::Rule resource creates a rule that matches incoming Amazon CloudWatch Events (CloudWatch Events) events and routes them to one or more targets for processing. For more information, see Using CloudWatch Events in the Amazon CloudWatch Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {EventsRule}
	 */
	rule: function(name) {
		return new Resources.Events.Rule(name);
	},

	/**
	 * The AWS::AutoScaling::ScalingPolicy resource adds a scaling policy to an auto scaling group. A scaling policy specifies whether to scale the auto scaling group up or down, and by how much. For more information on scaling policies, see Scaling by Policy in the Auto Scaling Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {AutoScalingScalingPolicy}
	 */
	scalingPolicy: function(name) {
		return new Resources.AutoScaling.ScalingPolicy(name);
	},

	/**
	 * Creates a scheduled scaling action for an Auto Scaling group, changing the number of servers available for your application in response to predictable load changes.
	 *
	 * @param {String} name Name of the resource
	 * @return {AutoScalingScheduledAction}
	 */
	scheduledAction: function(name) {
		return new Resources.AutoScaling.ScheduledAction(name);
	},

	/**
	 * The AWS::SDB::Domain type does not have any properties.
	 *
	 * @param {String} name Name of the resource
	 * @return {SDBDomain}
	 */
	sdbDomain: function(name) {
		return new Resources.SDB.Domain(name);
	},

	/**
	 * Creates an Amazon EC2 security group. To create a VPC security group, use the VpcId property.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2SecurityGroup}
	 */
	securityGroup: function(name) {
		return new Resources.EC2.SecurityGroup(name);
	},

	/**
	 * The AWS::EC2::SecurityGroupEgress resource adds an egress rule to an Amazon VPC security group.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2SecurityGroupEgress}
	 */
	securityGroupEgress: function(name) {
		return new Resources.EC2.SecurityGroupEgress(name);
	},

	/**
	 * The AWS::EC2::SecurityGroupIngress resource adds an ingress rule to an Amazon EC2 or Amazon VPC security group.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2SecurityGroupIngress}
	 */
	securityGroupIngress: function(name) {
		return new Resources.EC2.SecurityGroupIngress(name);
	},

	/**
	 * The AWS::ECS::Service resource creates an Amazon EC2 Container Service (Amazon ECS) service that runs and maintains the desired number of tasks and associated load balancers.
	 *
	 * @param {String} name Name of the resource
	 * @return {ECSService}
	 */
	service: function(name) {
		return new Resources.ECS.Service(name);
	},

	/**
	 * The AWS::DirectoryService::SimpleAD resource creates an AWS Directory Service Simple Active Directory (Simple AD) in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. Simple AD is a Microsoft Active Directory–compatible directory. For more information, see What Is AWS Directory Service? in the AWS Directory Service Administration Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {DirectoryServiceSimpleAD}
	 */
	simpleAD: function(name) {
		return new Resources.DirectoryService.SimpleAD(name);
	},

	/**
	 * The AWS::WAF::SizeConstraintSet resource specifies a size constraint that AWS WAF uses to check the size of a web request and which parts of the request to check. For more information, see CreateSizeConstraintSet in the AWS WAF API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {WAFSizeConstraintSet}
	 */
	sizeConstraintSet: function(name) {
		return new Resources.WAF.SizeConstraintSet(name);
	},

	/**
	 * The AWS::EC2::SpotFleet resource creates a request for a collection of Spot instances. The Spot fleet attempts to launch the number of Spot instances to meet the target capacity that you specified. For more information, see Spot Instances in the Amazon EC2 User Guide for Linux Instances.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2SpotFleet}
	 */
	spotFleet: function(name) {
		return new Resources.EC2.SpotFleet(name);
	},

	/**
	 * The AWS::WAF::SqlInjectionMatchSet resource creates an AWS WAF SqlInjectionMatchSet, which you use to allow, block, or count requests that contain malicious SQL code in a specific part of web requests. For more information, see CreateSqlInjectionMatchSet in the AWS WAF API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {WAFSqlInjectionMatchSet}
	 */
	sqlInjectionMatchSet: function(name) {
		return new Resources.WAF.SqlInjectionMatchSet(name);
	},

	/**
	 * The AWS::CloudFormation::Stack type nests a stack as a resource in a top-level template.
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFormationStack}
	 */
	stack: function(name) {
		return new Resources.CloudFormation.Stack(name);
	},

	/**
	 * The AWS::ApiGateway::Stage resource creates a stage for an Amazon API Gateway (API Gateway) deployment.
	 *
	 * @param {String} name Name of the resource
	 * @return {ApiGatewayStage}
	 */
	stage: function(name) {
		return new Resources.ApiGateway.Stage(name);
	},

	/**
	 * The AWS::EMR::Step resource creates a unit of work (a job flow step) that you submit to an Amazon Elastic MapReduce (Amazon EMR) cluster. The job flow step contains instructions for processing data on the cluster.
	 *
	 * @param {String} name Name of the resource
	 * @return {EMRStep}
	 */
	step: function(name) {
		return new Resources.EMR.Step(name);
	},

	/**
	 * Creates an Amazon Kinesis stream that captures and transports data records that are emitted from data sources. For specific information about creating streams, see CreateStream in the Amazon Kinesis API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {KinesisStream}
	 */
	stream: function(name) {
		return new Resources.Kinesis.Stream(name);
	},

	/**
	 * Creates a subnet in an existing VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2Subnet}
	 */
	subnet: function(name) {
		return new Resources.EC2.Subnet(name);
	},

	/**
	 * Creates a cache subnet group. For more information about cache subnet groups, go to Cache Subnet Groups in the Amazon ElastiCache User Guide or go to CreateCacheSubnetGroup in the Amazon ElastiCache API Reference Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {ElastiCacheSubnetGroup}
	 */
	subnetGroup: function(name) {
		return new Resources.ElastiCache.SubnetGroup(name);
	},

	/**
	 * Associates a subnet with a network ACL.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2SubnetNetworkAclAssociation}
	 */
	subnetNetworkAclAssociation: function(name) {
		return new Resources.EC2.SubnetNetworkAclAssociation(name);
	},

	/**
	 * Associates a subnet with a route table.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2SubnetRouteTableAssociation}
	 */
	subnetRouteTableAssociation: function(name) {
		return new Resources.EC2.SubnetRouteTableAssociation(name);
	},

	/**
	 * The AWS::Logs::SubscriptionFilter resource creates an Amazon CloudWatch Logs (CloudWatch Logs) subscription filter that defines which log events are delivered to your Amazon Kinesis stream or AWS Lambda (Lambda) function and where to send them.
	 *
	 * @param {String} name Name of the resource
	 * @return {LogsSubscriptionFilter}
	 */
	subscriptionFilter: function(name) {
		return new Resources.Logs.SubscriptionFilter(name);
	},

	/**
	 * Creates a DynamoDB table.
	 *
	 * @param {String} name Name of the resource
	 * @return {DynamoDBTable}
	 */
	table: function(name) {
		return new Resources.DynamoDB.Table(name);
	},

	/**
	 * The AWS::ECS::TaskDefinition resource describes the container and volume definitions of an Amazon EC2 Container Service (Amazon ECS) task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
	 *
	 * @param {String} name Name of the resource
	 * @return {ECSTaskDefinition}
	 */
	taskDefinition: function(name) {
		return new Resources.ECS.TaskDefinition(name);
	},

	/**
	 * The AWS::SNS::Topic type creates an Amazon SNS topic.
	 *
	 * @param {String} name Name of the resource
	 * @return {SNSTopic}
	 */
	topic: function(name) {
		return new Resources.SNS.Topic(name);
	},

	/**
	 * The AWS::SNS::TopicPolicy resource associates Amazon SNS topics with a policy.
	 *
	 * @param {String} name Name of the resource
	 * @return {SNSTopicPolicy}
	 */
	topicPolicy: function(name) {
		return new Resources.SNS.TopicPolicy(name);
	},

	/**
	 * The AWS::CloudTrail::Trail resource creates a trail and specifies where logs are published. An AWS CloudTrail (CloudTrail) trail can capture AWS API calls made by your AWS account and publishes the logs to an Amazon S3 bucket. For more information, see What is AWS CloudTrail? in the AWS CloudTrail User Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudTrailTrail}
	 */
	trail: function(name) {
		return new Resources.CloudTrail.Trail(name);
	},

	/**
	 * The AWS::IAM::User type creates a user.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMUser}
	 */
	user: function(name) {
		return new Resources.IAM.User(name);
	},

	/**
	 * The AWS::IAM::UserToGroupAddition type adds AWS Identity and Access Management (IAM) users to a group.
	 *
	 * @param {String} name Name of the resource
	 * @return {IAMUserToGroupAddition}
	 */
	userToGroupAddition: function(name) {
		return new Resources.IAM.UserToGroupAddition(name);
	},

	/**
	 * The AWS::Lambda::Version resource publishes a specified version of an AWS Lambda (Lambda) function. When publishing a new version of your function, Lambda copies the latest version of your function. For more information, see Introduction to AWS Lambda Versioning in the AWS Lambda Developer Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {LambdaVersion}
	 */
	version: function(name) {
		return new Resources.Lambda.Version(name);
	},

	/**
	 * The AWS::EC2::Volume type creates a new Amazon Elastic Block Store (Amazon EBS) volume.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2Volume}
	 */
	volume: function(name) {
		return new Resources.EC2.Volume(name);
	},

	/**
	 * Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VolumeAttachment}
	 */
	volumeAttachment: function(name) {
		return new Resources.EC2.VolumeAttachment(name);
	},

	/**
	 * Creates a Virtual Private Cloud (VPC) with the CIDR block that you specify.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPC}
	 */
	vpc: function(name) {
		return new Resources.EC2.VPC(name);
	},

	/**
	 * Associates a set of DHCP options (that you've previously created) with the specified VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPCDHCPOptionsAssociation}
	 */
	vpcdhcpOptionsAssociation: function(name) {
		return new Resources.EC2.VPCDHCPOptionsAssociation(name);
	},

	/**
	 * The AWS::EC2::VPCEndpoint resource creates a VPC endpoint that you can use to establish a private connection between your VPC and another AWS service without requiring access over the Internet, a VPN connection, or AWS Direct Connect.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPCEndpoint}
	 */
	vpcEndpoint: function(name) {
		return new Resources.EC2.VPCEndpoint(name);
	},

	/**
	 * Attaches a gateway to a VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPCGatewayAttachment}
	 */
	vpcGatewayAttachment: function(name) {
		return new Resources.EC2.VPCGatewayAttachment(name);
	},

	/**
	 * A VPC peering connection enables a network connection between two virtual private clouds (VPCs) so that you can route traffic between them by means of a private IP addresses. For more information about VPC peering and its limitation, see VPC Peering Overview in the Amazon VPC Peering Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPCPeeringConnection}
	 */
	vpcPeeringConnection: function(name) {
		return new Resources.EC2.VPCPeeringConnection(name);
	},

	/**
	 * Creates a new VPN connection between an existing virtual private gateway and a VPN customer gateway.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPNConnection}
	 */
	vpnConnection: function(name) {
		return new Resources.EC2.VPNConnection(name);
	},

	/**
	 * A static route that is associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPNConnectionRoute}
	 */
	vpnConnectionRoute: function(name) {
		return new Resources.EC2.VPNConnectionRoute(name);
	},

	/**
	 * Creates a virtual private gateway. A virtual private gateway is the VPC-side endpoint for your VPN connection.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPNGateway}
	 */
	vpnGateway: function(name) {
		return new Resources.EC2.VPNGateway(name);
	},

	/**
	 * Enables a virtual private gateway (VGW) to propagate routes to the routing tables of a VPC.
	 *
	 * @param {String} name Name of the resource
	 * @return {EC2VPNGatewayRoutePropagation}
	 */
	vpnGatewayRoutePropagation: function(name) {
		return new Resources.EC2.VPNGatewayRoutePropagation(name);
	},

	/**
	 * The AWS::WAF::Rule resource creates an AWS WAF rule that specifies a combination of IPSet, ByteMatchSet, and SqlInjectionMatchSet objects that identify the web requests to allow, block, or count. To implement rules, you must associate them with a web ACL.
	 *
	 * @param {String} name Name of the resource
	 * @return {WAFRule}
	 */
	wafRule: function(name) {
		return new Resources.WAF.Rule(name);
	},

	/**
	 * Important
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFormationWaitCondition}
	 */
	waitCondition: function(name) {
		return new Resources.CloudFormation.WaitCondition(name);
	},

	/**
	 * Important
	 *
	 * @param {String} name Name of the resource
	 * @return {CloudFormationWaitConditionHandle}
	 */
	waitConditionHandle: function(name) {
		return new Resources.CloudFormation.WaitConditionHandle(name);
	},

	/**
	 * The AWS::WAF::WebACL resource creates an AWS WAF web access control group (ACL) containing the rules that identify the Amazon CloudFront (CloudFront) web requests that you want to allow, block, or count. For more information, see CreateWebACL in the AWS WAF API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {WAFWebACL}
	 */
	webACL: function(name) {
		return new Resources.WAF.WebACL(name);
	},

	/**
	 * The AWS::WorkSpaces::Workspace resource creates an Amazon WorkSpaces workspace, which is a cloud-based desktop experience for end users. For more information, see the Amazon WorkSpaces Administration Guide.
	 *
	 * @param {String} name Name of the resource
	 * @return {WorkSpacesWorkspace}
	 */
	workspace: function(name) {
		return new Resources.WorkSpaces.Workspace(name);
	},

	/**
	 * The AWS::WAF::XssMatchSet resource specifies the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and the name of the header to inspect. For more information, see XssMatchSet in the AWS WAF API Reference.
	 *
	 * @param {String} name Name of the resource
	 * @return {WAFXssMatchSet}
	 */
	xssMatchSet: function(name) {
		return new Resources.WAF.XssMatchSet(name);
	}
	//@@end sugar
};
