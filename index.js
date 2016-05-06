var Template = require('./src/template');
var Resources = require('./src/gen/resources');
var Attributes = require('./src/gen/attributes');
var Types = require('./src/gen/types');
var Functions = require('./src/fun');
var Parameter = require('./src/parameter');
var Output = require('./src/output');
var Condition = require('./src/condition');
var CloudFormationInit = require('./src/cfn-init');
var cfg = require('./src/init');
var Reference = Functions.Reference;

var pseudoParams = {
	region: new Reference('AWS::Region'),
	accountId: new Reference('AWS::AccountId'),
	notificationARNs: new Reference('AWS::NotificationARNs'),
	noValue: new Reference('AWS::NoValue'),
	stackId: new Reference('AWS::StackId'),
	stackName: new Reference('AWS::StackName')
};

/**
 * Syntax sugar for AWS::CloudFormation::Init stuff
 * @constructor
 */
function ConfigSugar() {

}

ConfigSugar.prototype = {
	/**
	 * Creates a cfn-init configuration
	 * @param {String} [name]
	 * @returns {Config}
	 */
	config: function(name) {
		return new cfg.Config(name);
	},
	/**
	 * You can use the files key to create files on the EC2 instance. The content can be either inline in the template or the content can be pulled from a URL. The files are written to disk in lexicographic order.
	 * @param {String} filePath
	 * @returns {File}
	 */
	file: function(filePath) {
		return new cfg.File(filePath);
	},
	/**
	 * You can use the commands key to execute commands on the EC2 instance. The commands are processed in alphabetical order by name.
	 * @param {String} name
	 * @returns {Command}
	 */
	command: function(name) {
		return new cfg.Command(name);
	},
	/**
	 * You can use the groups key to create Linux/UNIX groups and to assign group IDs. The groups key is not supported for Windows systems.
	 *
	 * To create a group, add a new key-value pair that maps a new group name to an optional group ID. The groups key can contain one or more group names.
	 * @param {String} groupName
	 * @returns Group
	 */
	group: function(groupName) {
		return new cfg.Group(groupName);
	},
	/**
	 * You can use the users key to create Linux/UNIX users on the EC2 instance. The users key is not supported for Windows systems.
	 *
	 * Users are created as non-interactive system users with a shell of /sbin/nologin. This is by design and cannot be modified.
	 * @param {String} name
	 * @returns {User}
	 */
	user: function(name) {
		return new cfg.User(name);
	},
	/**
	 * You can use the packages key to download and install pre-packaged applications and components. On Windows systems, the packages key supports only the MSI installer.
	 *
	 * The cfn-init script currently supports the following package formats: apt, msi, python, rpm, rubygems, and yum. Packages are processed in the following order: rpm, yum/apt, and then rubygems and python. There is no ordering between rubygems and python, and packages within each package manager are not guaranteed to be installed in any order.
	 * @param {String} type One of "apt", "msi", "python", "rpm", "rubygems" or "yum"
	 * @returns {Package}
	 */
	package: function(type) {
		return new cfg.Package(type);
	},
	/**
	 * You can use the services key to define which services should be enabled or disabled when the instance is launched. On Linux systems, this key is supported by using sysvinit. On Windows systems, it is supported by using the Windows service manager.
	 *
	 * The services key also allows you to specify dependencies on sources, packages and files so that if a restart is needed due to files being installed, cfn-init will take care of the service restart. For example, if you download the Apache HTTP Server package, the package installation will automatically start the Apache HTTP Server during the stack creation process. However, if the Apache HTTP Server configuration is updated later in the stack creation process, the update won't take effect unless the Apache server is restarted. You can use the services key to ensure that the Apache HTTP service is restarted.
	 * @param {String} serviceName
	 * @returns {Service}
	 */
	service: function(serviceName) {
		return new cfg.Service(serviceName);
	}
};

/**
 * Convenience shortcuts for creating resources, property types, pseduo-parameters,
 * outputs, conditions and functions.
 * @constructor
 */
function Botox() {}

Botox.prototype = {
	/**
	 * Returns a string representing the AWS Region in which the encompassing resource is being created, such as us-west-2.
	 * @returns {Reference}
	 */
	get region() {
		return pseudoParams.region;
	},
	/**
	 * Returns the AWS account ID of the account in which the stack is being created, such as 123456789012.
	 * @returns {Reference}
	 */
	get accountId() {
		return pseudoParams.accountId;
	},
	/**
	 * Returns the list of notification Amazon Resource Names (ARNs) for the current stack.
	 * @returns {Reference}
	 */
	get notificationARNs() {
		return pseudoParams.notificationARNs;
	},
	/**
	 * Removes the corresponding resource property when specified as a return value in the Fn::If intrinsic function.
	 * @returns {Reference}
	 */
	get noValue() {
		return pseudoParams.noValue;
	},
	/**
	 * Returns the ID of the stack as specified with the aws cloudformation create-stack command, such as arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123.
	 * @returns {Reference}
	 */
	get stackId() {
		return pseudoParams.stackId;
	},
	/**
	 * Returns the name of the stack as specified with the aws cloudformation create-stack command, such as teststack.
	 * @returns {Reference}
	 */
	get stackName() {
		return pseudoParams.stackName;
	},

	/**
	 * Returns base64 representation of a string
	 * @param {String|Join|Reference|FindInMap|Select} value
	 * @returns {Base64}
	 */
	base64: function(value) {
		return new Functions.Base64(value);
	},

	/**
	 * Selects a single thing from an array of things
	 * @param {Number} index
	 * @param {Array|Reference} things
	 * @returns {Select}
	 */
	select: function(index, things) {
		return new Functions.Select(index, things);
	},

	/**
	 * Gets an element from a mapping
	 * @param {String|Reference|FindInMap|Select|Join} mapName
	 * @param {String|Reference|FindInMap|Select|Join} topLevelKey
	 * @param {String|Reference|FindInMap|Select|Join} secondLevelKey
	 * @returns {FindInMap}
	 */
	findInMap: function(mapName, topLevelKey, secondLevelKey) {
		return new Functions.FindInMap(mapName, topLevelKey, secondLevelKey);
	},

	/**
	 * Creates a new GetAZs function
	 * @param {String|Reference|FindInMap} [region]
	 * @returns {GetAZs}
	 */
	getAZs: function(region) {
		return new Functions.GetAZs(region);
	},

	/**
	 * Joins some things together
	 * @param {Array|FindInMap|Reference} things
	 * @param {String} delimiter
	 * @returns {Join}
	 */
	join: function(things, delimiter) {
		return new Functions.Join(things, delimiter);
	},

	/**
	 * Creates an "Or" conditional function
	 * @param conditions Between 2 and 10 conditional functions
	 * @returns Or
	 */
	or: function(conditions) {
		if (Array.isArray(conditions)) {
			return new Functions.Or(conditions);
		}
		return new Functions.Or([].slice.call(arguments));
	},
	/**
	 * Creates an "And" conditional function
	 * @param {...*} conditions Between 2 and 10 conditional functions
	 * @returns And
	 */
	and: function(conditions) {
		return new Functions.And(conditions);
	},
	/**
	 * Creates an "If" conditional function
	 * @param {Condition} condition
	 * @param trueValue
	 * @param falseValue
	 * @returns If
	 */
	$if: function(condition, trueValue, falseValue) {
		return new Functions.If(condition, trueValue, falseValue);
	},
	/**
	 * Creates a "Not" conditional function
	 * @param {Condition} condition
	 * @returns {Not}
	 */
	not: function(condition) {
		return new Functions.Not(condition);
	},
	/**
	 * Creates an "Equals" conditional function
	 * @param lhs
	 * @param rhs
	 * @returns {Equals}
	 */
	equals: function(lhs, rhs) {
		return new Functions.Equals(lhs, rhs);
	},

	/**
	 * Creates a new template
	 * @param {String} description
	 * @returns {Template}
	 */
	template: function(description) {
		return new Template(description);
	},
	/**
	 * Creates a new template output
	 * @param {String} name
	 * @returns {Output}
	 */
	output: function(name) {
		return new Output(name);
	},
	/**
	 * Creates a new template parameter
	 * @param {String} name
	 * @returns {Parameter}
	 */
	parameter: function(name) {
		return new Parameter(name);
	},
	/**
	 * Creates a new template condition
	 * @param {String} name
	 * @param {If|And|Or|Equals|Not} conditional
	 * @returns {Condition}
	 */
	condition: function(name, conditional) {
		return new Condition(name, conditional);
	},
	/**
	 * Creates new cfn-init configuration
	 * @returns {CloudFormationInit}
	 */
	cfnInit: function() {
		return new CloudFormationInit();
	},
	/**
	 * @returns ConfigSugar
	 */
	get cfg() {
		return new ConfigSugar();
	},

	//@@start resource sugar

	/**
	 * The AWS::IAM::AccessKey resource type generates a secret access key and assigns it to an IAM user or AWS account.
	 * @param {String} name
	 * @returns {IAMAccessKey}
	 */
	accessKey: function(name) {
		return new Resources.IAM.AccessKey(name);
	},

	/**
	 * The AWS::ApiGateway::Account resource specifies the AWS Identity and Access Management (IAM) role that Amazon API Gateway (API Gateway) uses to write API logs to Amazon CloudWatch Logs (CloudWatch Logs).
	 * @param {String} name
	 * @returns {ApiGatewayAccount}
	 */
	account: function(name) {
		return new Resources.ApiGateway.Account(name);
	},

	/**
	 * The AWS::CloudWatch::Alarm type creates an CloudWatch alarm.
	 * @param {String} name
	 * @returns {CloudWatchAlarm}
	 */
	alarm: function(name) {
		return new Resources.CloudWatch.Alarm(name);
	},

	/**
	 * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet, which you can use to anonymize your fleet. You can reference the alias instead of a specific fleet when you create game sessions. For more information, see the CreateAlias action in the Amazon GameLift API Reference.
	 * @param {String} name
	 * @returns {GameLiftAlias}
	 */
	alias: function(name) {
		return new Resources.GameLift.Alias(name);
	},

	/**
	 * The AWS::ApiGateway::ApiKey resource creates a unique key that you can distribute to clients who are executing Amazon API Gateway (API Gateway) Method resources that require an API key. To specify which API key clients must use, map the API key with the RestApi and Stage resources that include the methods requiring a key.
	 * @param {String} name
	 * @returns {ApiGatewayApiKey}
	 */
	apiKey: function(name) {
		return new Resources.ApiGateway.ApiKey(name);
	},

	/**
	 * Defines an AWS OpsWorks app for an AWS OpsWorks stack. The app represents code that you want to run on an application server.
	 * @param {String} name
	 * @returns {OpsWorksApp}
	 */
	app: function(name) {
		return new Resources.OpsWorks.App(name);
	},

	/**
	 * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application. An application revision, deployment configuration, and deployment group must all be included in an AWS CodeDeploy application. For more information, see AWS CodeDeploy Deployments in the AWS CodeDeploy User Guide.
	 * @param {String} name
	 * @returns {CodeDeployApplication}
	 */
	application: function(name) {
		return new Resources.CodeDeploy.Application(name);
	},

	/**
	 * Creates an application version, an iteration of deployable code, for an Elastic Beanstalk application.
	 * @param {String} name
	 * @returns {ElasticBeanstalkApplicationVersion}
	 */
	applicationVersion: function(name) {
		return new Resources.ElasticBeanstalk.ApplicationVersion(name);
	},

	/**
	 * Use the AWS::CloudFormation::Authentication resource to specify authentication credentials for files or sources that you specify with the AWS::CloudFormation::Init resource.
	 * @param {String} name
	 * @returns {CloudFormationAuthentication}
	 */
	authentication: function(name) {
		return new Resources.CloudFormation.Authentication(name);
	},

	/**
	 * The AWS::ApiGateway::Authorizer resource creates an authorization layer that Amazon API Gateway (API Gateway) activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.
	 * @param {String} name
	 * @returns {ApiGatewayAuthorizer}
	 */
	authorizer: function(name) {
		return new Resources.ApiGateway.Authorizer(name);
	},

	/**
	 * The AWS::AutoScaling::AutoScalingGroup type creates an Auto Scaling group.
	 * @param {String} name
	 * @returns {AutoScalingAutoScalingGroup}
	 */
	autoScalingGroup: function(name) {
		return new Resources.AutoScaling.AutoScalingGroup(name);
	},

	/**
	 * The AWS::ApiGateway::BasePathMapping resource creates a base path that clients who call your Amazon API Gateway API must use in the invocation URL.
	 * @param {String} name
	 * @returns {ApiGatewayBasePathMapping}
	 */
	basePathMapping: function(name) {
		return new Resources.ApiGateway.BasePathMapping(name);
	},

	/**
	 * The AWS::S3::Bucket type creates an Amazon S3 bucket.
	 * @param {String} name
	 * @returns {S3Bucket}
	 */
	bucket: function(name) {
		return new Resources.S3.Bucket(name);
	},

	/**
	 * The AWS::S3::BucketPolicy type applies an Amazon S3 bucket policy to an Amazon S3 bucket.
	 * @param {String} name
	 * @returns {S3BucketPolicy}
	 */
	bucketPolicy: function(name) {
		return new Resources.S3.BucketPolicy(name);
	},

	/**
	 * The AWS::GameLift::Build resource creates a build that includes all of the components to run your game server in an Amazon GameLift (GameLift) fleet.
	 * @param {String} name
	 * @returns {GameLiftBuild}
	 */
	build: function(name) {
		return new Resources.GameLift.Build(name);
	},

	/**
	 * The AWS::WAF::ByteMatchSet resource creates an AWS WAF ByteMatchSet that identifies a part of a web request that you want to inspect. For more information, see CreateByteMatchSet in the AWS WAF API Reference.
	 * @param {String} name
	 * @returns {WAFByteMatchSet}
	 */
	byteMatchSet: function(name) {
		return new Resources.WAF.ByteMatchSet(name);
	},

	/**
	 * The AWS::ElastiCache::CacheCluster type creates an Amazon ElastiCache cache cluster.
	 * @param {String} name
	 * @returns {ElastiCacheCacheCluster}
	 */
	cacheCluster: function(name) {
		return new Resources.ElastiCache.CacheCluster(name);
	},

	/**
	 * The AWS::ApiGateway::ClientCertificate resource creates a client certificate that Amazon API Gateway (API Gateway) uses to configure client-side SSL authentication for sending requests to the integration endpoint.
	 * @param {String} name
	 * @returns {ApiGatewayClientCertificate}
	 */
	clientCertificate: function(name) {
		return new Resources.ApiGateway.ClientCertificate(name);
	},

	/**
	 * The AWS::ECS::Cluster resource creates an Amazon EC2 Container Service (Amazon ECS) cluster. This resource has no properties; use the Amazon ECS container agent to connect to the cluster. For more information, see Amazon ECS Container Agent in the Amazon EC2 Container Service Developer Guide.
	 * @param {String} name
	 * @returns {ECSCluster}
	 */
	cluster: function(name) {
		return new Resources.ECS.Cluster(name);
	},

	/**
	 * Creates an Amazon Redshift parameter group that you can associate with an Amazon Redshift cluster. The parameters in the group apply to all the databases that you create in the cluster.
	 * @param {String} name
	 * @returns {RedshiftClusterParameterGroup}
	 */
	clusterParameterGroup: function(name) {
		return new Resources.Redshift.ClusterParameterGroup(name);
	},

	/**
	 * Creates an Amazon Redshift security group. You use security groups to control access to Amazon Redshift clusters that are not in a VPC.
	 * @param {String} name
	 * @returns {RedshiftClusterSecurityGroup}
	 */
	clusterSecurityGroup: function(name) {
		return new Resources.Redshift.ClusterSecurityGroup(name);
	},

	/**
	 * Specifies inbound (ingress) rules for an Amazon Redshift security group.
	 * @param {String} name
	 * @returns {RedshiftClusterSecurityGroupIngress}
	 */
	clusterSecurityGroupIngress: function(name) {
		return new Resources.Redshift.ClusterSecurityGroupIngress(name);
	},

	/**
	 * Creates an Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon VPC when creating an Amazon Redshift subnet group.
	 * @param {String} name
	 * @returns {RedshiftClusterSubnetGroup}
	 */
	clusterSubnetGroup: function(name) {
		return new Resources.Redshift.ClusterSubnetGroup(name);
	},

	/**
	 * The AWS::Config::ConfigRule resource uses an AWS Lambda (Lambda) function that evaluates configuration items to assess whether your AWS resources comply with your specified configurations. This function can run when AWS Config detects a configuration change or delivers a configuration snapshot. The resources this function evaluates must be in the recording group. For more information, see Evaluating AWS Resource Configurations with AWS Config in the AWS Config Developer Guide.
	 * @param {String} name
	 * @returns {ConfigConfigRule}
	 */
	configRule: function(name) {
		return new Resources.Config.ConfigRule(name);
	},

	/**
	 * The AWS::Config::ConfigurationRecorder resource describes the AWS resource types for which AWS Config records configuration changes. The configuration recorder stores the configurations of the supported resources in your account as configuration items.
	 * @param {String} name
	 * @returns {ConfigConfigurationRecorder}
	 */
	configurationRecorder: function(name) {
		return new Resources.Config.ConfigurationRecorder(name);
	},

	/**
	 * Creates a configuration template for an Elastic Beanstalk application. You can use configuration templates to deploy different versions of an application by using the configuration settings that you define in the configuration template.
	 * @param {String} name
	 * @returns {ElasticBeanstalkConfigurationTemplate}
	 */
	configurationTemplate: function(name) {
		return new Resources.ElasticBeanstalk.ConfigurationTemplate(name);
	},

	/**
	 * The AWS::CodePipeline::CustomActionType resource creates a custom action for activities that aren't included in the AWS CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline. For more information, see Create and Add a Custom Action in AWS CodePipeline in the AWS CodePipeline User Guide.
	 * @param {String} name
	 * @returns {CodePipelineCustomActionType}
	 */
	customActionType: function(name) {
		return new Resources.CodePipeline.CustomActionType(name);
	},

	/**
	 * Provides information to AWS about your VPN customer gateway device.
	 * @param {String} name
	 * @returns {EC2CustomerGateway}
	 */
	customerGateway: function(name) {
		return new Resources.EC2.CustomerGateway(name);
	},

	/**
	 * In an AWS CloudFormation template, you use the AWS::CloudFormation::CustomResource or Custom::String resource type to specify custom resources.
	 * @param {String} name
	 * @returns {CloudFormationCustomResource}
	 */
	customResource: function(name) {
		return new Resources.CloudFormation.CustomResource(name);
	},

	/**
	 * Creates a data pipeline that you can use to automate the movement and transformation of data. In each pipeline, you define pipeline objects, such as activities, schedules, data nodes, and resources. For information about pipeline objects and components that you can use, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
	 * @param {String} name
	 * @returns {DataPipelinePipeline}
	 */
	dataPipelinePipeline: function(name) {
		return new Resources.DataPipeline.Pipeline(name);
	},

	/**
	 * The AWS::RDS::DBCluster resource creates a cluster, such as an Aurora for Amazon RDS (Amazon Aurora) DB cluster. Amazon Aurora is a fully managed, MySQL-compatible, relational database engine. For more information, see Aurora on Amazon RDS in the Amazon Relational Database Service User Guide.
	 * @param {String} name
	 * @returns {RDSDBCluster}
	 */
	dbCluster: function(name) {
		return new Resources.RDS.DBCluster(name);
	},

	/**
	 * The AWS::RDS::DBClusterParameterGroup resource creates a new Amazon Relational Database Service (Amazon RDS) database (DB) cluster parameter group. For more information about DB cluster parameter groups, see Appendix: DB Cluster and DB Instance Parameters in the Amazon Relational Database Service User Guide.
	 * @param {String} name
	 * @returns {RDSDBClusterParameterGroup}
	 */
	dbClusterParameterGroup: function(name) {
		return new Resources.RDS.DBClusterParameterGroup(name);
	},

	/**
	 * The AWS::RDS::DBInstance type creates an Amazon RDS database instance. For detailed information about configuring RDS DB instances, see CreateDBInstance.
	 * @param {String} name
	 * @returns {RDSDBInstance}
	 */
	dbInstance: function(name) {
		return new Resources.RDS.DBInstance(name);
	},

	/**
	 * Creates a custom parameter group for an RDS database family. For more information about RDS parameter groups, see Working with DB Parameter Groups in the Amazon Relational Database Service User Guide.
	 * @param {String} name
	 * @returns {RDSDBParameterGroup}
	 */
	dbParameterGroup: function(name) {
		return new Resources.RDS.DBParameterGroup(name);
	},

	/**
	 * The AWS::RDS::DBSecurityGroup type is used to create or update an Amazon RDS DB Security Group. For more information about DB Security Groups, see Working with DB Security Groups in the Amazon Relational Database Service Developer Guide.
	 * @param {String} name
	 * @returns {RDSDBSecurityGroup}
	 */
	dbSecurityGroup: function(name) {
		return new Resources.RDS.DBSecurityGroup(name);
	},

	/**
	 * The AWS::RDS::DBSecurityGroupIngress type enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. For more information about DB security groups, see Working with DB security groups
	 * @param {String} name
	 * @returns {RDSDBSecurityGroupIngress}
	 */
	dbSecurityGroupIngress: function(name) {
		return new Resources.RDS.DBSecurityGroupIngress(name);
	},

	/**
	 * The AWS::RDS::DBSubnetGroup type creates an RDS database subnet group. Subnet groups must contain at least two subnet in two different Availability Zones in the same region.
	 * @param {String} name
	 * @returns {RDSDBSubnetGroup}
	 */
	dbSubnetGroup: function(name) {
		return new Resources.RDS.DBSubnetGroup(name);
	},

	/**
	 * The AWS::Config::DeliveryChannel resource describes where AWS Config stores configuration changes to an AWS resource.
	 * @param {String} name
	 * @returns {ConfigDeliveryChannel}
	 */
	deliveryChannel: function(name) {
		return new Resources.Config.DeliveryChannel(name);
	},

	/**
	 * The AWS::ApiGateway::Deployment resource deploys an Amazon API Gateway (API Gateway) RestApi resource to a stage so that clients can call the API over the Internet. The stage acts as an environment
	 * @param {String} name
	 * @returns {ApiGatewayDeployment}
	 */
	deployment: function(name) {
		return new Resources.ApiGateway.Deployment(name);
	},

	/**
	 * The AWS::CodeDeploy::DeploymentConfig resource creates a set of deployment rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy uses during a deployment.
	 * @param {String} name
	 * @returns {CodeDeployDeploymentConfig}
	 */
	deploymentConfig: function(name) {
		return new Resources.CodeDeploy.DeploymentConfig(name);
	},

	/**
	 * The AWS::CodeDeploy::DeploymentGroup resource creates an AWS CodeDeploy deployment group that details which application revision to use and which instances your application revisions are deployed to.
	 * @param {String} name
	 * @returns {CodeDeployDeploymentGroup}
	 */
	deploymentGroup: function(name) {
		return new Resources.CodeDeploy.DeploymentGroup(name);
	},

	/**
	 * The AWS::Logs::Destination resource creates an Amazon CloudWatch Logs (CloudWatch Logs) destination, which enables you to specify a physical resource (such as an Amazon Kinesis stream) that subscribes to CloudWatch Logs log events from another AWS account. For more information, see Cross-Account Log Data Sharing with Subscriptions in the Amazon CloudWatch Developer Guide.
	 * @param {String} name
	 * @returns {LogsDestination}
	 */
	destination: function(name) {
		return new Resources.Logs.Destination(name);
	},

	/**
	 * Creates a set of DHCP options for your VPC.
	 * @param {String} name
	 * @returns {EC2DHCPOptions}
	 */
	dhcpOptions: function(name) {
		return new Resources.EC2.DHCPOptions(name);
	},

	/**
	 * Creates an Amazon CloudFront web distribution. For general information about CloudFront distributions, see the Introduction to Amazon CloudFront in the Amazon CloudFront Developer Guide. For specific information about creating CloudFront web distributions, see POST Distribution in the Amazon CloudFront API Reference.
	 * @param {String} name
	 * @returns {CloudFrontDistribution}
	 */
	distribution: function(name) {
		return new Resources.CloudFront.Distribution(name);
	},

	/**
	 * The AWS::SSM::Document resource creates an Amazon EC2 Simple Systems Manager (SSM) document that describes an instance configuration, which you can use to set up and run commands on your instances.
	 * @param {String} name
	 * @returns {SSMDocument}
	 */
	document: function(name) {
		return new Resources.SSM.Document(name);
	},

	/**
	 * The AWS::Elasticsearch::Domain resource creates an Amazon Elasticsearch Service (Amazon ES) domain that encapsulates the Amazon ES engine instances. For more information, see CreateElasticsearchDomain in the Amazon Elasticsearch Service Developer Guide.
	 * @param {String} name
	 * @returns {ElasticsearchDomain}
	 */
	domain: function(name) {
		return new Resources.Elasticsearch.Domain(name);
	},

	/**
	 * The AWS::EC2::EIP resource allocates an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
	 * @param {String} name
	 * @returns {EC2EIP}
	 */
	eip: function(name) {
		return new Resources.EC2.EIP(name);
	},

	/**
	 * The AWS::EC2::EIPAssociation resource type associates an Elastic IP address with an Amazon EC2 instance. The Elastic IP address can be an existing Elastic IP address or an Elastic IP address allocated through an AWS::EC2::EIP resource.
	 * @param {String} name
	 * @returns {EC2EIPAssociation}
	 */
	eipAssociation: function(name) {
		return new Resources.EC2.EIPAssociation(name);
	},

	/**
	 * The AWS::ElastiCache::SecurityGroup resource creates a cache security group. For more information about cache security groups, go to Cache Security Groups in the Amazon ElastiCache User Guide or go to CreateCacheSecurityGroup in the Amazon ElastiCache API Reference Guide.
	 * @param {String} name
	 * @returns {ElastiCacheSecurityGroup}
	 */
	elastiCacheSecurityGroup: function(name) {
		return new Resources.ElastiCache.SecurityGroup(name);
	},

	/**
	 * The AWS::ElastiCache::SecurityGroupIngress type authorizes ingress to a cache security group from hosts in specified Amazon EC2 security groups. For more information about ElastiCache security group ingress, go to AuthorizeCacheSecurityGroupIngress in the Amazon ElastiCache API Reference Guide.
	 * @param {String} name
	 * @returns {ElastiCacheSecurityGroupIngress}
	 */
	elastiCacheSecurityGroupIngress: function(name) {
		return new Resources.ElastiCache.SecurityGroupIngress(name);
	},

	/**
	 * Creates an Elastic Beanstalk application.
	 * @param {String} name
	 * @returns {ElasticBeanstalkApplication}
	 */
	elasticBeanstalkApplication: function(name) {
		return new Resources.ElasticBeanstalk.Application(name);
	},

	/**
	 * Attaches an Elastic Load Balancing load balancer to an AWS OpsWorks layer that you specify.
	 * @param {String} name
	 * @returns {OpsWorksElasticLoadBalancerAttachment}
	 */
	elasticLoadBalancerAttachment: function(name) {
		return new Resources.OpsWorks.ElasticLoadBalancerAttachment(name);
	},

	/**
	 * The AWS::EMR::Cluster resource creates an Amazon Elastic MapReduce (Amazon EMR) cluster, which is a collection of EC2 instances on which you can run big data frameworks to process and analyze vast amounts of data. For more information, see Plan an Amazon EMR Cluster in the Amazon Elastic MapReduce Management Guide.
	 * @param {String} name
	 * @returns {EMRCluster}
	 */
	emrCluster: function(name) {
		return new Resources.EMR.Cluster(name);
	},

	/**
	 * Creates or updates an AWS Elastic Beanstalk environment.
	 * @param {String} name
	 * @returns {ElasticBeanstalkEnvironment}
	 */
	environment: function(name) {
		return new Resources.ElasticBeanstalk.Environment(name);
	},

	/**
	 * The AWS::Lambda::EventSourceMapping resource specifies a stream as an event source for an AWS Lambda (Lambda) function. The stream can be an Amazon Kinesis stream or an Amazon DynamoDB (DynamoDB) stream. Lambda invokes the associated function when records are posted to the stream. For more information, see CreateEventSourceMapping in the AWS Lambda Developer Guide.
	 * @param {String} name
	 * @returns {LambdaEventSourceMapping}
	 */
	eventSourceMapping: function(name) {
		return new Resources.Lambda.EventSourceMapping(name);
	},

	/**
	 * Use the AWS::RDS::EventSubscription resource to get notifications for Amazon Relational Database Service events through the Amazon Simple Notification Service. For more information, see Using Amazon RDS Event Notification in the Amazon Relational Database Service User Guide.
	 * @param {String} name
	 * @returns {RDSEventSubscription}
	 */
	eventSubscription: function(name) {
		return new Resources.RDS.EventSubscription(name);
	},

	/**
	 * The AWS::EFS::FileSystem resource creates a new, empty file system in Amazon Elastic File System (Amazon EFS). You must create a mount target (AWS::EFS::MountTarget) to mount your Amazon EFS file system on an Amazon Elastic Compute Cloud (Amazon EC2) instance. For more information, see the CreateFileSystem API in the Amazon Elastic File System User Guide.
	 * @param {String} name
	 * @returns {EFSFileSystem}
	 */
	fileSystem: function(name) {
		return new Resources.EFS.FileSystem(name);
	},

	/**
	 * The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 instances, each of which is a host in the fleet. For more information, see the CreateFleet action in the Amazon GameLift API Reference.
	 * @param {String} name
	 * @returns {GameLiftFleet}
	 */
	fleet: function(name) {
		return new Resources.GameLift.Fleet(name);
	},

	/**
	 * The AWS::Lambda::Function resource creates an AWS Lambda (Lambda) function that can run code in response to events. For more information, see CreateFunction in the AWS Lambda Developer Guide.
	 * @param {String} name
	 * @returns {LambdaFunction}
	 */
	function: function(name) {
		return new Resources.Lambda.Function(name);
	},

	/**
	 * The AWS::IAM::Group type creates an Identity and Access Management (IAM) group.
	 * @param {String} name
	 * @returns {IAMGroup}
	 */
	group: function(name) {
		return new Resources.IAM.Group(name);
	},

	/**
	 * You can use the AWS::Route53::HealthCheck resource to check the health of your resources before Amazon Route 53 responds to a DNS query. For more information, see How Health Checks Work in Simple Amazon Route 53 Configurations in the Amazon Route 53 Developer Guide.
	 * @param {String} name
	 * @returns {Route53HealthCheck}
	 */
	healthCheck: function(name) {
		return new Resources.Route53.HealthCheck(name);
	},

	/**
	 * The AWS::EC2::Host resource allocates a fully dedicated physical server for launching EC2 instances. Because the host is fully dedicated for your use, it can help you address compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses. For more information, see Dedicated Hosts in the Amazon EC2 User Guide for Linux Instances.
	 * @param {String} name
	 * @returns {EC2Host}
	 */
	host: function(name) {
		return new Resources.EC2.Host(name);
	},

	/**
	 * The AWS::Route53::HostedZone resource creates a hosted zone, which can contain a collection of record sets for a domain. You cannot create a hosted zone for a top-level domain (TLD). For more information, see POST CreateHostedZone or POST CreateHostedZone (Private) in the Amazon Route 53 API Reference.
	 * @param {String} name
	 * @returns {Route53HostedZone}
	 */
	hostedZone: function(name) {
		return new Resources.Route53.HostedZone(name);
	},

	/**
	 * The AWS::EC2::Instance resource creates an EC2 instance.
	 * @param {String} name
	 * @returns {EC2Instance}
	 */
	instance: function(name) {
		return new Resources.EC2.Instance(name);
	},

	/**
	 * The AWS::EMR::InstanceGroupConfig resource configures a task instance group for an Amazon Elastic MapReduce (Amazon EMR) cluster.
	 * @param {String} name
	 * @returns {EMRInstanceGroupConfig}
	 */
	instanceGroupConfig: function(name) {
		return new Resources.EMR.InstanceGroupConfig(name);
	},

	/**
	 * Creates an AWS Identity and Access Management (IAM) Instance Profile that can be used with IAM Roles for EC2 Instances.
	 * @param {String} name
	 * @returns {IAMInstanceProfile}
	 */
	instanceProfile: function(name) {
		return new Resources.IAM.InstanceProfile(name);
	},

	/**
	 * AWS::CloudFormation::Interface is a metadata key that defines how parameters are grouped and sorted in the AWS CloudFormation console. When you create or update stacks in the console, the console lists input parameters in alphabetical order by their logical IDs. By using this key, you can define your own parameter grouping and ordering so that users can efficiently specify parameter values. For example, you could group all EC2-related parameters in one group and all VPC-related parameters in another group.
	 * @param {String} name
	 * @returns {CloudFormationInterface}
	 */
	interface: function(name) {
		return new Resources.CloudFormation.Interface(name);
	},

	/**
	 * Creates a new Internet gateway in your AWS account. After creating the Internet gateway, you then attach it to a VPC.
	 * @param {String} name
	 * @returns {EC2InternetGateway}
	 */
	internetGateway: function(name) {
		return new Resources.EC2.InternetGateway(name);
	},

	/**
	 * The AWS::WAF::IPSet resource creates an AWS WAF IPSet that specifies which web requests to permit or block based on the IP addresses from which the requests originate. For more information, see CreateIPSet in the AWS WAF API Reference.
	 * @param {String} name
	 * @returns {WAFIPSet}
	 */
	ipSet: function(name) {
		return new Resources.WAF.IPSet(name);
	},

	/**
	 * The AWS::KMS::Key resource creates a customer master key (CMK) in AWS Key Management Service (AWS KMS). Users (customers) can use the master key to encrypt their data stored in AWS services that are integrated with AWS KMS or within their applications. For more information, see What is the AWS Key Management Service? in the AWS Key Management Service Developer Guide.
	 * @param {String} name
	 * @returns {KMSKey}
	 */
	key: function(name) {
		return new Resources.KMS.Key(name);
	},

	/**
	 * The AWS::Lambda::Alias resource creates an alias that points to an AWS Lambda (Lambda) function that you specify. Use aliases when you want to control which version of your function other services or applications invoke. Those services or applications can use your function's alias so that they don't need to be updated whenever you release a new version of your function. For more information, see Introduction to AWS Lambda Aliases in the AWS Lambda Developer Guide.
	 * @param {String} name
	 * @returns {LambdaAlias}
	 */
	lambdaAlias: function(name) {
		return new Resources.Lambda.Alias(name);
	},

	/**
	 * The AWS::AutoScaling::LaunchConfiguration type creates an Auto Scaling launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances in the Auto Scaling group.
	 * @param {String} name
	 * @returns {AutoScalingLaunchConfiguration}
	 */
	launchConfiguration: function(name) {
		return new Resources.AutoScaling.LaunchConfiguration(name);
	},

	/**
	 * Creates an AWS OpsWorks layer. A layer defines, for example, which packages and applications are installed and how they are configured.
	 * @param {String} name
	 * @returns {OpsWorksLayer}
	 */
	layer: function(name) {
		return new Resources.OpsWorks.Layer(name);
	},

	/**
	 * Use AWS::AutoScaling::LifecycleHook to control the state of an instance in an Auto Scaling group after it is launched or terminated. When you use a lifecycle hook, the Auto Scaling group either pauses the instance after it is launched (before it is put into service) or pauses the instance as it is terminated (before it is fully terminated). For more information, see Examples of How to Use Lifecycle Hooks in the Auto Scaling Developer Guide.
	 * @param {String} name
	 * @returns {AutoScalingLifecycleHook}
	 */
	lifecycleHook: function(name) {
		return new Resources.AutoScaling.LifecycleHook(name);
	},

	/**
	 * The AWS::ElasticLoadBalancing::LoadBalancer type creates a LoadBalancer.
	 * @param {String} name
	 * @returns {ElasticLoadBalancingLoadBalancer}
	 */
	loadBalancer: function(name) {
		return new Resources.ElasticLoadBalancing.LoadBalancer(name);
	},

	/**
	 * The AWS::Logs::LogGroup resource creates an Amazon CloudWatch Logs log group that defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
	 * @param {String} name
	 * @returns {LogsLogGroup}
	 */
	logGroup: function(name) {
		return new Resources.Logs.LogGroup(name);
	},

	/**
	 * The AWS::Logs::LogStream resource creates an Amazon CloudWatch Logs log stream in a log group. A log stream represents the sequence of events coming from an application instance or resource that you are monitoring. For more information, see Monitoring Log Files in the Amazon CloudWatch Developer Guide.
	 * @param {String} name
	 * @returns {LogsLogStream}
	 */
	logStream: function(name) {
		return new Resources.Logs.LogStream(name);
	},

	/**
	 * AWS::IAM::ManagedPolicy creates an AWS Identity and Access Management (IAM) managed policy for your AWS account that you can use to apply permissions to IAM users, groups, and roles. For more information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide guide.
	 * @param {String} name
	 * @returns {IAMManagedPolicy}
	 */
	managedPolicy: function(name) {
		return new Resources.IAM.ManagedPolicy(name);
	},

	/**
	 * The AWS::ApiGateway::Method resource creates Amazon API Gateway (API Gateway) methods that define the parameters and body that clients must send in their requests.
	 * @param {String} name
	 * @returns {ApiGatewayMethod}
	 */
	method: function(name) {
		return new Resources.ApiGateway.Method(name);
	},

	/**
	 * The AWS::Logs::MetricFilter resource creates a metric filter that describes how Amazon CloudWatch Logs extracts information from logs that you specify and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
	 * @param {String} name
	 * @returns {LogsMetricFilter}
	 */
	metricFilter: function(name) {
		return new Resources.Logs.MetricFilter(name);
	},

	/**
	 * The AWS::DirectoryService::MicrosoftAD resource creates a Microsoft Active Directory in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. For more information, see What Is AWS Directory Service? in the AWS Directory Service Administration Guide.
	 * @param {String} name
	 * @returns {DirectoryServiceMicrosoftAD}
	 */
	microsoftAD: function(name) {
		return new Resources.DirectoryService.MicrosoftAD(name);
	},

	/**
	 * The AWS::ApiGateway::Model resource defines the structure of a request or response payload for an Amazon API Gateway (API Gateway) method.
	 * @param {String} name
	 * @returns {ApiGatewayModel}
	 */
	model: function(name) {
		return new Resources.ApiGateway.Model(name);
	},

	/**
	 * The AWS::EFS::MountTarget resource creates a mount target for an Amazon Elastic File System (Amazon EFS) file system (AWS::EFS::FileSystem). Use the mount target to mount file systems on Amazon Elastic Compute Cloud (Amazon EC2) instances. For more information, see the CreateMountTarget API in the Amazon Elastic File System User Guide.
	 * @param {String} name
	 * @returns {EFSMountTarget}
	 */
	mountTarget: function(name) {
		return new Resources.EFS.MountTarget(name);
	},

	/**
	 * The AWS::EC2::NatGateway resource creates a network address translation (NAT) gateway in the specified public subnet. Use a NAT gateway to allow instances in a private subnet to connect to the Internet or to other AWS services, but prevent the Internet from initiating a connection with those instances. For more information and a sample architectural diagram, see NAT Gateways in the Amazon VPC User Guide.
	 * @param {String} name
	 * @returns {EC2NatGateway}
	 */
	natGateway: function(name) {
		return new Resources.EC2.NatGateway(name);
	},

	/**
	 * Creates a new network ACL in a VPC.
	 * @param {String} name
	 * @returns {EC2NetworkAcl}
	 */
	networkAcl: function(name) {
		return new Resources.EC2.NetworkAcl(name);
	},

	/**
	 * Creates an entry (i.e., rule) in a network ACL with a rule number you specify. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules.
	 * @param {String} name
	 * @returns {EC2NetworkAclEntry}
	 */
	networkAclEntry: function(name) {
		return new Resources.EC2.NetworkAclEntry(name);
	},

	/**
	 * Describes a network interface in an Elastic Compute Cloud (EC2) instance for AWS CloudFormation. This is provided in a list in the NetworkInterfaces property of AWS::EC2::Instance.
	 * @param {String} name
	 * @returns {EC2NetworkInterface}
	 */
	networkInterface: function(name) {
		return new Resources.EC2.NetworkInterface(name);
	},

	/**
	 * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instances without interruption.
	 * @param {String} name
	 * @returns {EC2NetworkInterfaceAttachment}
	 */
	networkInterfaceAttachment: function(name) {
		return new Resources.EC2.NetworkInterfaceAttachment(name);
	},

	/**
	 * Creates an instance for an AWS OpsWorks stack. These instances are the Amazon Elastic Compute Cloud (Amazon EC2) instances that, for example, handle the work of serving applications and balancing traffic.
	 * @param {String} name
	 * @returns {OpsWorksInstance}
	 */
	opsWorksInstance: function(name) {
		return new Resources.OpsWorks.Instance(name);
	},

	/**
	 * Creates an AWS OpsWorks stack. An AWS OpsWorks stack represents a set of instances that you want to manage collectively, typically because they have a common purpose such as serving PHP applications.
	 * @param {String} name
	 * @returns {OpsWorksStack}
	 */
	opsWorksStack: function(name) {
		return new Resources.OpsWorks.Stack(name);
	},

	/**
	 * Use the AWS::RDS::OptionGroup resource to create an option group that can make managing data and databases easier. For more information about option groups, see Working with Option Groups in the Amazon Relational Database Service User Guide.
	 * @param {String} name
	 * @returns {RDSOptionGroup}
	 */
	optionGroup: function(name) {
		return new Resources.RDS.OptionGroup(name);
	},

	/**
	 * The AWS::ElastiCache::ParameterGroup type creates a new cache parameter group. Cache parameter groups control the parameters for a cache cluster.
	 * @param {String} name
	 * @returns {ElastiCacheParameterGroup}
	 */
	parameterGroup: function(name) {
		return new Resources.ElastiCache.ParameterGroup(name);
	},

	/**
	 * The AWS::Lambda::Permission resource associates a policy statement with a specific AWS Lambda (Lambda) function's access policy. The function policy grants a specific AWS service or application permission to invoke the function. For more information, see AddPermission in the AWS Lambda Developer Guide.
	 * @param {String} name
	 * @returns {LambdaPermission}
	 */
	permission: function(name) {
		return new Resources.Lambda.Permission(name);
	},

	/**
	 * The AWS::CodePipeline::Pipeline resource creates an AWS CodePipeline pipeline that describes how software changes go through a release process. For more information, see What Is AWS CodePipeline? in the AWS CodePipeline User Guide.
	 * @param {String} name
	 * @returns {CodePipelinePipeline}
	 */
	pipeline: function(name) {
		return new Resources.CodePipeline.Pipeline(name);
	},

	/**
	 * The AWS::EC2::PlacementGroup resource is a logical grouping of instances within a single Availability Zone (AZ) that enables applications to participate in a low-latency, 10 Gbps network. You create a placement group first, and then you can launch instances in the placement group.
	 * @param {String} name
	 * @returns {EC2PlacementGroup}
	 */
	placementGroup: function(name) {
		return new Resources.EC2.PlacementGroup(name);
	},

	/**
	 * The AWS::IAM::Policy resource associates an IAM policy with IAM users, roles, or groups. For more information about IAM policies, see Overview of IAM Policies in the IAM User Guide guide.
	 * @param {String} name
	 * @returns {IAMPolicy}
	 */
	policy: function(name) {
		return new Resources.IAM.Policy(name);
	},

	/**
	 * The AWS::SQS::Queue type creates an Amazon SQS queue.
	 * @param {String} name
	 * @returns {SQSQueue}
	 */
	queue: function(name) {
		return new Resources.SQS.Queue(name);
	},

	/**
	 * The AWS::SQS::QueuePolicy type applies a policy to SQS queues.
	 * @param {String} name
	 * @returns {SQSQueuePolicy}
	 */
	queuePolicy: function(name) {
		return new Resources.SQS.QueuePolicy(name);
	},

	/**
	 * The AWS::Route53::RecordSet type can be used as a standalone resource or as an embedded property in the AWS::Route53::RecordSetGroup type. Note that some AWS::Route53::RecordSet properties are valid only when used within AWS::Route53::RecordSetGroup.
	 * @param {String} name
	 * @returns {Route53RecordSet}
	 */
	recordSet: function(name) {
		return new Resources.Route53.RecordSet(name);
	},

	/**
	 * The AWS::Route53::RecordSetGroup resource creates record sets for a hosted zone. For more information about constraints and values for each property, see POST CreateHostedZone for hosted zones and POST ChangeResourceRecordSet for resource record sets.
	 * @param {String} name
	 * @returns {Route53RecordSetGroup}
	 */
	recordSetGroup: function(name) {
		return new Resources.Route53.RecordSetGroup(name);
	},

	/**
	 * Creates an Amazon Redshift cluster. A cluster is a fully managed data warehouse that consists of set of compute nodes. For more information about default values and valid values, see CreateCluster in the Amazon Redshift API Reference.
	 * @param {String} name
	 * @returns {RedshiftCluster}
	 */
	redshiftCluster: function(name) {
		return new Resources.Redshift.Cluster(name);
	},

	/**
	 * The AWS::ElastiCache::ReplicationGroup resource creates an Amazon ElastiCache replication group. A replication group is a collection of cache clusters, where one of the clusters is a primary read-write cluster and the others are read-only replicas.
	 * @param {String} name
	 * @returns {ElastiCacheReplicationGroup}
	 */
	replicationGroup: function(name) {
		return new Resources.ElastiCache.ReplicationGroup(name);
	},

	/**
	 * The AWS::ECR::Repository resource creates an Amazon EC2 Container Registry (Amazon ECR) repository, where users can push and pull Docker images. For more information, see Amazon ECR Repositories in the Amazon EC2 Container Registry User Guide.
	 * @param {String} name
	 * @returns {ECRRepository}
	 */
	repository: function(name) {
		return new Resources.ECR.Repository(name);
	},

	/**
	 * The AWS::ApiGateway::Resource resource creates a resource in an Amazon API Gateway (API Gateway) API.
	 * @param {String} name
	 * @returns {ApiGatewayResource}
	 */
	resource: function(name) {
		return new Resources.ApiGateway.Resource(name);
	},

	/**
	 * The AWS::ApiGateway::RestApi resource contains a collection of Amazon API Gateway (API Gateway) resources and methods that can be invoked through HTTPS endpoints.
	 * @param {String} name
	 * @returns {ApiGatewayRestApi}
	 */
	restApi: function(name) {
		return new Resources.ApiGateway.RestApi(name);
	},

	/**
	 * Creates an AWS Identity and Access Management (IAM) role. An IAM role can be used to enable applications running on an Amazon EC2 instance to securely access your AWS resources.
	 * @param {String} name
	 * @returns {IAMRole}
	 */
	role: function(name) {
		return new Resources.IAM.Role(name);
	},

	/**
	 * Creates a new route in a route table within a VPC. The route's target can be either a gateway attached to the VPC or a NAT instance in the VPC.
	 * @param {String} name
	 * @returns {EC2Route}
	 */
	route: function(name) {
		return new Resources.EC2.Route(name);
	},

	/**
	 * Creates a new route table within a VPC. After you create a new route table, you can add routes and associate the table with a subnet.
	 * @param {String} name
	 * @returns {EC2RouteTable}
	 */
	routeTable: function(name) {
		return new Resources.EC2.RouteTable(name);
	},

	/**
	 * The AWS::Events::Rule resource creates a rule that matches incoming Amazon CloudWatch Events (CloudWatch Events) events and routes them to one or more targets for processing. For more information, see Using CloudWatch Events in the Amazon CloudWatch Developer Guide.
	 * @param {String} name
	 * @returns {EventsRule}
	 */
	rule: function(name) {
		return new Resources.Events.Rule(name);
	},

	/**
	 * The AWS::AutoScaling::ScalingPolicy resource adds a scaling policy to an auto scaling group. A scaling policy specifies whether to scale the auto scaling group up or down, and by how much. For more information on scaling policies, see Scaling by Policy in the Auto Scaling Developer Guide.
	 * @param {String} name
	 * @returns {AutoScalingScalingPolicy}
	 */
	scalingPolicy: function(name) {
		return new Resources.AutoScaling.ScalingPolicy(name);
	},

	/**
	 * Creates a scheduled scaling action for an Auto Scaling group, changing the number of servers available for your application in response to predictable load changes.
	 * @param {String} name
	 * @returns {AutoScalingScheduledAction}
	 */
	scheduledAction: function(name) {
		return new Resources.AutoScaling.ScheduledAction(name);
	},

	/**
	 * The AWS::SDB::Domain type does not have any properties.
	 * @param {String} name
	 * @returns {SDBDomain}
	 */
	sdbDomain: function(name) {
		return new Resources.SDB.Domain(name);
	},

	/**
	 * Creates an Amazon EC2 security group. To create a VPC security group, use the VpcId property.
	 * @param {String} name
	 * @returns {EC2SecurityGroup}
	 */
	securityGroup: function(name) {
		return new Resources.EC2.SecurityGroup(name);
	},

	/**
	 * The AWS::EC2::SecurityGroupEgress resource adds an egress rule to an Amazon VPC security group.
	 * @param {String} name
	 * @returns {EC2SecurityGroupEgress}
	 */
	securityGroupEgress: function(name) {
		return new Resources.EC2.SecurityGroupEgress(name);
	},

	/**
	 * The AWS::EC2::SecurityGroupIngress resource adds an ingress rule to an Amazon EC2 or Amazon VPC security group.
	 * @param {String} name
	 * @returns {EC2SecurityGroupIngress}
	 */
	securityGroupIngress: function(name) {
		return new Resources.EC2.SecurityGroupIngress(name);
	},

	/**
	 * The AWS::ECS::Service resource creates an Amazon EC2 Container Service (Amazon ECS) service that runs and maintains the desired number of tasks and associated load balancers.
	 * @param {String} name
	 * @returns {ECSService}
	 */
	service: function(name) {
		return new Resources.ECS.Service(name);
	},

	/**
	 * The AWS::DirectoryService::SimpleAD resource creates an AWS Directory Service Simple Active Directory (Simple AD) in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. Simple AD is a Microsoft Active Directory–compatible directory. For more information, see What Is AWS Directory Service? in the AWS Directory Service Administration Guide.
	 * @param {String} name
	 * @returns {DirectoryServiceSimpleAD}
	 */
	simpleAD: function(name) {
		return new Resources.DirectoryService.SimpleAD(name);
	},

	/**
	 * The AWS::WAF::SizeConstraintSet resource specifies a size constraint that AWS WAF uses to check the size of a web request and which parts of the request to check. For more information, see CreateSizeConstraintSet in the AWS WAF API Reference.
	 * @param {String} name
	 * @returns {WAFSizeConstraintSet}
	 */
	sizeConstraintSet: function(name) {
		return new Resources.WAF.SizeConstraintSet(name);
	},

	/**
	 * The AWS::EC2::SpotFleet resource creates a request for a collection of Spot instances. The Spot fleet attempts to launch the number of Spot instances to meet the target capacity that you specified. For more information, see Spot Instances in the Amazon EC2 User Guide for Linux Instances.
	 * @param {String} name
	 * @returns {EC2SpotFleet}
	 */
	spotFleet: function(name) {
		return new Resources.EC2.SpotFleet(name);
	},

	/**
	 * The AWS::WAF::SqlInjectionMatchSet resource creates an AWS WAF SqlInjectionMatchSet, which you use to allow, block, or count requests that contain malicious SQL code in a specific part of web requests. For more information, see CreateSqlInjectionMatchSet in the AWS WAF API Reference.
	 * @param {String} name
	 * @returns {WAFSqlInjectionMatchSet}
	 */
	sqlInjectionMatchSet: function(name) {
		return new Resources.WAF.SqlInjectionMatchSet(name);
	},

	/**
	 * The AWS::CloudFormation::Stack type nests a stack as a resource in a top-level template.
	 * @param {String} name
	 * @returns {CloudFormationStack}
	 */
	stack: function(name) {
		return new Resources.CloudFormation.Stack(name);
	},

	/**
	 * The AWS::ApiGateway::Stage resource creates a stage for an Amazon API Gateway (API Gateway) deployment.
	 * @param {String} name
	 * @returns {ApiGatewayStage}
	 */
	stage: function(name) {
		return new Resources.ApiGateway.Stage(name);
	},

	/**
	 * The AWS::EMR::Step resource creates a unit of work (a job flow step) that you submit to an Amazon Elastic MapReduce (Amazon EMR) cluster. The job flow step contains instructions for processing data on the cluster.
	 * @param {String} name
	 * @returns {EMRStep}
	 */
	step: function(name) {
		return new Resources.EMR.Step(name);
	},

	/**
	 * Creates an Amazon Kinesis stream that captures and transports data records that are emitted from data sources. For specific information about creating streams, see CreateStream in the Amazon Kinesis API Reference.
	 * @param {String} name
	 * @returns {KinesisStream}
	 */
	stream: function(name) {
		return new Resources.Kinesis.Stream(name);
	},

	/**
	 * Creates a subnet in an existing VPC.
	 * @param {String} name
	 * @returns {EC2Subnet}
	 */
	subnet: function(name) {
		return new Resources.EC2.Subnet(name);
	},

	/**
	 * Creates a cache subnet group. For more information about cache subnet groups, go to Cache Subnet Groups in the Amazon ElastiCache User Guide or go to CreateCacheSubnetGroup in the Amazon ElastiCache API Reference Guide.
	 * @param {String} name
	 * @returns {ElastiCacheSubnetGroup}
	 */
	subnetGroup: function(name) {
		return new Resources.ElastiCache.SubnetGroup(name);
	},

	/**
	 * Associates a subnet with a network ACL.
	 * @param {String} name
	 * @returns {EC2SubnetNetworkAclAssociation}
	 */
	subnetNetworkAclAssociation: function(name) {
		return new Resources.EC2.SubnetNetworkAclAssociation(name);
	},

	/**
	 * Associates a subnet with a route table.
	 * @param {String} name
	 * @returns {EC2SubnetRouteTableAssociation}
	 */
	subnetRouteTableAssociation: function(name) {
		return new Resources.EC2.SubnetRouteTableAssociation(name);
	},

	/**
	 * The AWS::Logs::SubscriptionFilter resource creates an Amazon CloudWatch Logs (CloudWatch Logs) subscription filter that defines which log events are delivered to your Amazon Kinesis stream or AWS Lambda (Lambda) function and where to send them.
	 * @param {String} name
	 * @returns {LogsSubscriptionFilter}
	 */
	subscriptionFilter: function(name) {
		return new Resources.Logs.SubscriptionFilter(name);
	},

	/**
	 * Creates a DynamoDB table.
	 * @param {String} name
	 * @returns {DynamoDBTable}
	 */
	table: function(name) {
		return new Resources.DynamoDB.Table(name);
	},

	/**
	 * The AWS::ECS::TaskDefinition resource describes the container and volume definitions of an Amazon EC2 Container Service (Amazon ECS) task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
	 * @param {String} name
	 * @returns {ECSTaskDefinition}
	 */
	taskDefinition: function(name) {
		return new Resources.ECS.TaskDefinition(name);
	},

	/**
	 * The AWS::SNS::Topic type creates an Amazon SNS topic.
	 * @param {String} name
	 * @returns {SNSTopic}
	 */
	topic: function(name) {
		return new Resources.SNS.Topic(name);
	},

	/**
	 * The AWS::SNS::TopicPolicy resource associates Amazon SNS topics with a policy.
	 * @param {String} name
	 * @returns {SNSTopicPolicy}
	 */
	topicPolicy: function(name) {
		return new Resources.SNS.TopicPolicy(name);
	},

	/**
	 * The AWS::CloudTrail::Trail resource creates a trail and specifies where logs are published. An AWS CloudTrail (CloudTrail) trail can capture AWS API calls made by your AWS account and publishes the logs to an Amazon S3 bucket. For more information, see What is AWS CloudTrail? in the AWS CloudTrail User Guide.
	 * @param {String} name
	 * @returns {CloudTrailTrail}
	 */
	trail: function(name) {
		return new Resources.CloudTrail.Trail(name);
	},

	/**
	 * The AWS::IAM::User type creates a user.
	 * @param {String} name
	 * @returns {IAMUser}
	 */
	user: function(name) {
		return new Resources.IAM.User(name);
	},

	/**
	 * The AWS::IAM::UserToGroupAddition type adds AWS Identity and Access Management (IAM) users to a group.
	 * @param {String} name
	 * @returns {IAMUserToGroupAddition}
	 */
	userToGroupAddition: function(name) {
		return new Resources.IAM.UserToGroupAddition(name);
	},

	/**
	 * The AWS::Lambda::Version resource publishes a specified version of an AWS Lambda (Lambda) function. When publishing a new version of your function, Lambda copies the latest version of your function. For more information, see Introduction to AWS Lambda Versioning in the AWS Lambda Developer Guide.
	 * @param {String} name
	 * @returns {LambdaVersion}
	 */
	version: function(name) {
		return new Resources.Lambda.Version(name);
	},

	/**
	 * The AWS::EC2::Volume type creates a new Amazon Elastic Block Store (Amazon EBS) volume.
	 * @param {String} name
	 * @returns {EC2Volume}
	 */
	volume: function(name) {
		return new Resources.EC2.Volume(name);
	},

	/**
	 * Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
	 * @param {String} name
	 * @returns {EC2VolumeAttachment}
	 */
	volumeAttachment: function(name) {
		return new Resources.EC2.VolumeAttachment(name);
	},

	/**
	 * Creates a Virtual Private Cloud (VPC) with the CIDR block that you specify.
	 * @param {String} name
	 * @returns {EC2VPC}
	 */
	vpc: function(name) {
		return new Resources.EC2.VPC(name);
	},

	/**
	 * Associates a set of DHCP options (that you've previously created) with the specified VPC.
	 * @param {String} name
	 * @returns {EC2VPCDHCPOptionsAssociation}
	 */
	vpcdhcpOptionsAssociation: function(name) {
		return new Resources.EC2.VPCDHCPOptionsAssociation(name);
	},

	/**
	 * The AWS::EC2::VPCEndpoint resource creates a VPC endpoint that you can use to establish a private connection between your VPC and another AWS service without requiring access over the Internet, a VPN connection, or AWS Direct Connect.
	 * @param {String} name
	 * @returns {EC2VPCEndpoint}
	 */
	vpcEndpoint: function(name) {
		return new Resources.EC2.VPCEndpoint(name);
	},

	/**
	 * Attaches a gateway to a VPC.
	 * @param {String} name
	 * @returns {EC2VPCGatewayAttachment}
	 */
	vpcGatewayAttachment: function(name) {
		return new Resources.EC2.VPCGatewayAttachment(name);
	},

	/**
	 * A VPC peering connection enables a network connection between two virtual private clouds (VPCs) so that you can route traffic between them by means of a private IP addresses. For more information about VPC peering and its limitation, see VPC Peering Overview in the Amazon VPC Peering Guide.
	 * @param {String} name
	 * @returns {EC2VPCPeeringConnection}
	 */
	vpcPeeringConnection: function(name) {
		return new Resources.EC2.VPCPeeringConnection(name);
	},

	/**
	 * Creates a new VPN connection between an existing virtual private gateway and a VPN customer gateway.
	 * @param {String} name
	 * @returns {EC2VPNConnection}
	 */
	vpnConnection: function(name) {
		return new Resources.EC2.VPNConnection(name);
	},

	/**
	 * A static route that is associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
	 * @param {String} name
	 * @returns {EC2VPNConnectionRoute}
	 */
	vpnConnectionRoute: function(name) {
		return new Resources.EC2.VPNConnectionRoute(name);
	},

	/**
	 * Creates a virtual private gateway. A virtual private gateway is the VPC-side endpoint for your VPN connection.
	 * @param {String} name
	 * @returns {EC2VPNGateway}
	 */
	vpnGateway: function(name) {
		return new Resources.EC2.VPNGateway(name);
	},

	/**
	 * Enables a virtual private gateway (VGW) to propagate routes to the routing tables of a VPC.
	 * @param {String} name
	 * @returns {EC2VPNGatewayRoutePropagation}
	 */
	vpnGatewayRoutePropagation: function(name) {
		return new Resources.EC2.VPNGatewayRoutePropagation(name);
	},

	/**
	 * The AWS::WAF::Rule resource creates an AWS WAF rule that specifies a combination of IPSet, ByteMatchSet, and SqlInjectionMatchSet objects that identify the web requests to allow, block, or count. To implement rules, you must associate them with a web ACL.
	 * @param {String} name
	 * @returns {WAFRule}
	 */
	wafRule: function(name) {
		return new Resources.WAF.Rule(name);
	},

	/**
	 * Important
	 * @param {String} name
	 * @returns {CloudFormationWaitCondition}
	 */
	waitCondition: function(name) {
		return new Resources.CloudFormation.WaitCondition(name);
	},

	/**
	 * Important
	 * @param {String} name
	 * @returns {CloudFormationWaitConditionHandle}
	 */
	waitConditionHandle: function(name) {
		return new Resources.CloudFormation.WaitConditionHandle(name);
	},

	/**
	 * The AWS::WAF::WebACL resource creates an AWS WAF web access control group (ACL) containing the rules that identify the Amazon CloudFront (CloudFront) web requests that you want to allow, block, or count. For more information, see CreateWebACL in the AWS WAF API Reference.
	 * @param {String} name
	 * @returns {WAFWebACL}
	 */
	webACL: function(name) {
		return new Resources.WAF.WebACL(name);
	},

	/**
	 * The AWS::WorkSpaces::Workspace resource creates an Amazon WorkSpaces workspace, which is a cloud-based desktop experience for end users. For more information, see the Amazon WorkSpaces Administration Guide.
	 * @param {String} name
	 * @returns {WorkSpacesWorkspace}
	 */
	workspace: function(name) {
		return new Resources.WorkSpaces.Workspace(name);
	},

	/**
	 * The AWS::WAF::XssMatchSet resource specifies the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and the name of the header to inspect. For more information, see XssMatchSet in the AWS WAF API Reference.
	 * @param {String} name
	 * @returns {WAFXssMatchSet}
	 */
	xssMatchSet: function(name) {
		return new Resources.WAF.XssMatchSet(name);
	},
	//@@end resource sugar

	//@@start type sugar

	/**
	 * StageKey is a property of the AWS::ApiGateway::ApiKey resource that specifies the Amazon API Gateway (API Gateway) stage to associate with the API key. This association allows only clients with the key to make requests to methods in that stage.
	 * @returns {APIGatewayApiKeyStageKey}
	 */
	apiGatewayApiKeyStageKey: function() {
		return new Types.APIGatewayApiKeyStageKey();
	},

	/**
	 * StageKey is a property of the AWS::ApiGateway::Deployment resource that configures an Amazon API Gateway (API Gateway) deployment stage.
	 * @returns {APIGatewayDeploymentStageDescription}
	 */
	apiGatewayDeploymentStageDescription: function() {
		return new Types.APIGatewayDeploymentStageDescription();
	},

	/**
	 * MethodSetting is a property of the Amazon API Gateway Deployment StageDescription property that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
	 * @returns {APIGatewayDeploymentStageDescriptionMethodSetting}
	 */
	apiGatewayDeploymentStageDescriptionMethodSetting: function() {
		return new Types.APIGatewayDeploymentStageDescriptionMethodSetting();
	},

	/**
	 * Integration is a property of the AWS::ApiGateway::Method resource that specifies information about the target back end that an Amazon API Gateway (API Gateway) method calls.
	 * @returns {APIGatewayMethodIntegration}
	 */
	apiGatewayMethodIntegration: function() {
		return new Types.APIGatewayMethodIntegration();
	},

	/**
	 * IntegrationResponse is a property of the Amazon API Gateway Method Integration property that specifies the response that Amazon API Gateway (API Gateway) sends after a method's back end finishes processing a request.
	 * @returns {APIGatewayMethodIntegrationIntegrationResponse}
	 */
	apiGatewayMethodIntegrationIntegrationResponse: function() {
		return new Types.APIGatewayMethodIntegrationIntegrationResponse();
	},

	/**
	 * MethodResponse is a property of the AWS::ApiGateway::Method resource that defines the responses that can be sent to the client who calls an Amazon API Gateway (API Gateway) method.
	 * @returns {APIGatewayMethodMethodResponse}
	 */
	apiGatewayMethodMethodResponse: function() {
		return new Types.APIGatewayMethodMethodResponse();
	},

	/**
	 * S3Location is a property of the AWS::ApiGateway::RestApi resource that specifies the Amazon Simple Storage Service (Amazon S3) location of a Swagger file that defines a set of RESTful APIs in JSON or YAML for an Amazon API Gateway (API Gateway) RestApi.
	 * @returns {APIGatewayRestApiS3Location}
	 */
	apiGatewayRestApiS3Location: function() {
		return new Types.APIGatewayRestApiS3Location();
	},

	/**
	 * MethodSetting is a property of the AWS::ApiGateway::Stage resource that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
	 * @returns {APIGatewayStageMethodSetting}
	 */
	apiGatewayStageMethodSetting: function() {
		return new Types.APIGatewayStageMethodSetting();
	},

	/**
	 * The MetricsCollection is a property of the AWS::AutoScaling::AutoScalingGroup resource that describes the group metrics that an Auto Scaling group sends to CloudWatch. These metrics describe the group rather than any of its instances. For more information, see EnableMetricsCollection in the Auto Scaling API Reference.
	 * @returns {AutoScalingMetricsCollection}
	 */
	autoScalingMetricsCollection: function() {
		return new Types.AutoScalingMetricsCollection();
	},

	/**
	 * The NotificationConfigurations property is an embedded property of the AWS::AutoScaling::AutoScalingGroup resource that specifies the events for which the Auto Scaling group sends notifications.
	 * @returns {AutoScalingNotificationConfigurations}
	 */
	autoScalingNotificationConfigurations: function() {
		return new Types.AutoScalingNotificationConfigurations();
	},

	/**
	 * StepAdjustments is a property of the AWS::AutoScaling::ScalingPolicy resource that describes a scaling adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. For more information, see StepAdjustment in the Auto Scaling API Reference.
	 * @returns {AutoScalingScalingPolicyStepAdjustments}
	 */
	autoScalingScalingPolicyStepAdjustments: function() {
		return new Types.AutoScalingScalingPolicyStepAdjustments();
	},

	/**
	 * The Auto Scaling Tags property is an embedded property of the AWS::AutoScaling::AutoScalingGroup type. For more information about tags, go to Tagging Auto Scaling Groups and Amazon EC2 Instances in the Auto Scaling Developer Guide.
	 * @returns {AutoScalingTagsPropertyType}
	 */
	autoScalingTagsPropertyType: function() {
		return new Types.AutoScalingTagsPropertyType();
	},

	/**
	 * The AutoScaling Block Device Mapping type is an embedded property of the AWS::AutoScaling::LaunchConfiguration type.
	 * @returns {CloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	cloudFormationAutoScalingBlockDeviceMappingPropertyType: function() {
		return new Types.CloudFormationAutoScalingBlockDeviceMappingPropertyType();
	},

	/**
	 * The AutoScaling EBS Block Device type is an embedded property of the AutoScaling Block Device Mapping type.
	 * @returns {CloudFormationAutoScalingEBSBlockDevicePropertyType}
	 */
	cloudFormationAutoScalingEBSBlockDevicePropertyType: function() {
		return new Types.CloudFormationAutoScalingEBSBlockDevicePropertyType();
	},

	/**
	 * Label is a property of the ParameterGroup and ParameterLabel properties that defines name for a parameter group or parameter.
	 * @returns {CloudFormationInterfaceLabel}
	 */
	cloudFormationInterfaceLabel: function() {
		return new Types.CloudFormationInterfaceLabel();
	},

	/**
	 * ParameterGroup is a property of the AWS::CloudFormation::Interface resource that defines a parameter group and the parameters to include in the group.
	 * @returns {CloudFormationInterfaceParameterGroup}
	 */
	cloudFormationInterfaceParameterGroup: function() {
		return new Types.CloudFormationInterfaceParameterGroup();
	},

	/**
	 * ParameterLabel is a property of the AWS::CloudFormation::Interface resource that specifies a friendly name or description for a parameter that the AWS CloudFormation console shows instead of the parameter's logical ID.
	 * @returns {CloudFormationInterfaceParameterLabel}
	 */
	cloudFormationInterfaceParameterLabel: function() {
		return new Types.CloudFormationInterfaceParameterLabel();
	},

	/**
	 * You can use the AWS CloudFormation Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with AWS CloudFormation, see the individual resources in AWS Resource Types Reference.
	 * @returns {CloudFormationResourceTagsType}
	 */
	cloudFormationResourceTagsType: function() {
		return new Types.CloudFormationResourceTagsType();
	},

	/**
	 * The Parameters type is an embedded property of the AWS::CloudFormation::Stack type.
	 * @returns {CloudFormationStackParametersPropertyType}
	 */
	cloudFormationStackParametersPropertyType: function() {
		return new Types.CloudFormationStackParametersPropertyType();
	},

	/**
	 * DefaultCacheBehavior is a property of the DistributionConfig property that describes the default cache behavior for an Amazon CloudFront distribution.
	 * @returns {CloudFrontDefaultCacheBehavior}
	 */
	cloudFrontDefaultCacheBehavior: function() {
		return new Types.CloudFrontDefaultCacheBehavior();
	},

	/**
	 * DistributionConfig is a property of the AWS::CloudFront::Distribution property that describes which Amazon CloudFront origin servers to get your files from when users request the files through your website or application.
	 * @returns {CloudFrontDistributionConfig}
	 */
	cloudFrontDistributionConfig: function() {
		return new Types.CloudFrontDistributionConfig();
	},

	/**
	 * CacheBehavior is a property of the DistributionConfig property that describes the Amazon CloudFront (CloudFront) cache behavior when the requested URL matches a pattern.
	 * @returns {CloudFrontDistributionConfigCacheBehavior}
	 */
	cloudFrontDistributionConfigCacheBehavior: function() {
		return new Types.CloudFrontDistributionConfigCacheBehavior();
	},

	/**
	 * CustomErrorResponse is a property of the CloudFront DistributionConfig resource that defines custom error messages for certain HTTP status codes.
	 * @returns {CloudFrontDistributionConfigCustomErrorResponse}
	 */
	cloudFrontDistributionConfigCustomErrorResponse: function() {
		return new Types.CloudFrontDistributionConfigCustomErrorResponse();
	},

	/**
	 * Origin is a property of the DistributionConfig property that describes an Amazon CloudFront distribution origin.
	 * @returns {CloudFrontDistributionConfigOrigin}
	 */
	cloudFrontDistributionConfigOrigin: function() {
		return new Types.CloudFrontDistributionConfigOrigin();
	},

	/**
	 * CustomOrigin is a property of the Amazon CloudFront Origin property that describes an HTTP server.
	 * @returns {CloudFrontDistributionConfigOriginCustomOrigin}
	 */
	cloudFrontDistributionConfigOriginCustomOrigin: function() {
		return new Types.CloudFrontDistributionConfigOriginCustomOrigin();
	},

	/**
	 * S3Origin is a property of the Origin property that describes the Amazon Simple Storage Service (S3) origin to associate with an Amazon CloudFront origin.
	 * @returns {CloudFrontDistributionConfigOriginS3Origin}
	 */
	cloudFrontDistributionConfigOriginS3Origin: function() {
		return new Types.CloudFrontDistributionConfigOriginS3Origin();
	},

	/**
	 * GeoRestriction is a property of the CloudFront DistributionConfiguration Restrictions property that describes the countries in which Amazon CloudFront allows viewers to access your content.
	 * @returns {CloudFrontDistributionConfigRestrictionsGeoRestriction}
	 */
	cloudFrontDistributionConfigRestrictionsGeoRestriction: function() {
		return new Types.CloudFrontDistributionConfigRestrictionsGeoRestriction();
	},

	/**
	 * Restrictions is a property of the CloudFront DistributionConfig property that lets you limit which viewers can access your content.
	 * @returns {CloudFrontDistributionConfigurationRestrictions}
	 */
	cloudFrontDistributionConfigurationRestrictions: function() {
		return new Types.CloudFrontDistributionConfigurationRestrictions();
	},

	/**
	 * ViewerCertificate is a property of the CloudFront DistributionConfig property that specifies which certificate to use when viewers use HTTPS to request objects.
	 * @returns {CloudFrontDistributionConfigurationViewerCertificate}
	 */
	cloudFrontDistributionConfigurationViewerCertificate: function() {
		return new Types.CloudFrontDistributionConfigurationViewerCertificate();
	},

	/**
	 * ForwardedValues is a property of the DefaultCacheBehavior and CacheBehavior properties that indicates whether Amazon CloudFront forwards query strings or cookies.
	 * @returns {CloudFrontForwardedValues}
	 */
	cloudFrontForwardedValues: function() {
		return new Types.CloudFrontForwardedValues();
	},

	/**
	 * Cookies is a property of the CloudFront ForwardedValues that describes which cookies are forwarded to the Amazon CloudFront origin.
	 * @returns {CloudFrontForwardedValuesCookies}
	 */
	cloudFrontForwardedValuesCookies: function() {
		return new Types.CloudFrontForwardedValuesCookies();
	},

	/**
	 * Logging is a property of the DistributionConfig property that enables Amazon CloudFront to deliver access logs for each distribution to an Amazon Simple Storage Service (S3) bucket.
	 * @returns {CloudFrontLogging}
	 */
	cloudFrontLogging: function() {
		return new Types.CloudFrontLogging();
	},

	/**
	 * Target is a property of the AWS::Events::Rule resource that specifies the targets that CloudWatch Events invokes when a rule is triggered, such as AWS Lambda (Lambda) functions or Amazon Kinesis streams.
	 * @returns {CloudWatchEventsRuleTarget}
	 */
	cloudWatchEventsRuleTarget: function() {
		return new Types.CloudWatchEventsRuleTarget();
	},

	/**
	 * MetricTransformation is a property of the AWS::Logs::MetricFilter resource that describes how to transform log streams into a CloudWatch metric.
	 * @returns {CloudWatchLogsMetricFilterMetricTransformationProperty}
	 */
	cloudWatchLogsMetricFilterMetricTransformationProperty: function() {
		return new Types.CloudWatchLogsMetricFilterMetricTransformationProperty();
	},

	/**
	 * The Metric Dimension is an embedded property of the AWS::CloudWatch::Alarm type. Dimensions are arbitrary name/value pairs that can be associated with a CloudWatch metric. You can specify a maximum of 10 dimensions for a given metric.
	 * @returns {CloudWatchMetricDimensionPropertyType}
	 */
	cloudWatchMetricDimensionPropertyType: function() {
		return new Types.CloudWatchMetricDimensionPropertyType();
	},

	/**
	 * MinimumHealthyHosts is a property of the AWS::CodeDeploy::DeploymentConfig resource that defines how many instances must be healthy during an AWS CodeDeploy deployment.
	 * @returns {CodeDeployDeploymentConfigMinimumHealthyHosts}
	 */
	codeDeployDeploymentConfigMinimumHealthyHosts: function() {
		return new Types.CodeDeployDeploymentConfigMinimumHealthyHosts();
	},

	/**
	 * Deployment is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies the AWS CodeDeploy application revision that will be deployed to the deployment group.
	 * @returns {CodeDeployDeploymentGroupDeployment}
	 */
	codeDeployDeploymentGroupDeployment: function() {
		return new Types.CodeDeployDeploymentGroupDeployment();
	},

	/**
	 * Revision is a property of the AWS::CodeDeploy::DeploymentGroup property that defines the location of the AWS CodeDeploy application revision to deploy.
	 * @returns {CodeDeployDeploymentGroupDeploymentRevision}
	 */
	codeDeployDeploymentGroupDeploymentRevision: function() {
		return new Types.CodeDeployDeploymentGroupDeploymentRevision();
	},

	/**
	 * GitHubLocation is a property of the AWS CodeDeploy DeploymentGroup Deployment Revision property that specifies the location of an application revision that is stored in GitHub.
	 * @returns {CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation}
	 */
	codeDeployDeploymentGroupDeploymentRevisionGitHubLocation: function() {
		return new Types.CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation();
	},

	/**
	 * S3Location is a property of the AWS CodeDeploy DeploymentGroup Deployment Revision property that specifies the location of an application revision that is stored in Amazon Simple Storage Service (Amazon S3).
	 * @returns {CodeDeployDeploymentGroupDeploymentRevisionS3Location}
	 */
	codeDeployDeploymentGroupDeploymentRevisionS3Location: function() {
		return new Types.CodeDeployDeploymentGroupDeploymentRevisionS3Location();
	},

	/**
	 * Ec2TagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which EC2 instances to associate with the deployment group.
	 * @returns {CodeDeployDeploymentGroupEc2TagFilters}
	 */
	codeDeployDeploymentGroupEc2TagFilters: function() {
		return new Types.CodeDeployDeploymentGroupEc2TagFilters();
	},

	/**
	 * OnPremisesInstanceTagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which on-premises instances to associate with the deployment group. To register on-premise instances with AWS CodeDeploy, see Configure Existing On-Premises Instances by Using AWS CodeDeploy in the AWS CodeDeploy User Guide.
	 * @returns {CodeDeployDeploymentGroupOnPremisesInstanceTagFilters}
	 */
	codeDeployDeploymentGroupOnPremisesInstanceTagFilters: function() {
		return new Types.CodeDeployDeploymentGroupOnPremisesInstanceTagFilters();
	},

	/**
	 * ArtifactDetails is a property of the AWS::CodePipeline::CustomActionType resource that specifies the details of an artifact for an AWS CodePipeline custom action. For valid values, see ArtifactDetails in the AWS CodePipeline API Reference.
	 * @returns {CodePipelineCustomActionTypeArtifactDetails}
	 */
	codePipelineCustomActionTypeArtifactDetails: function() {
		return new Types.CodePipelineCustomActionTypeArtifactDetails();
	},

	/**
	 * ConfigurationProperties is a property of the AWS::CodePipeline::CustomActionType resource that defines a configuration for an AWS CodePipeline custom action.
	 * @returns {CodePipelineCustomActionTypeConfigurationProperties}
	 */
	codePipelineCustomActionTypeConfigurationProperties: function() {
		return new Types.CodePipelineCustomActionTypeConfigurationProperties();
	},

	/**
	 * Settings is a property of the AWS::CodePipeline::CustomActionType resource that provides URLs that users can access to view information about the AWS CodePipeline custom action.
	 * @returns {CodePipelineCustomActionTypeSettings}
	 */
	codePipelineCustomActionTypeSettings: function() {
		return new Types.CodePipelineCustomActionTypeSettings();
	},

	/**
	 * ArtifactStore is a property of the AWS::CodePipeline::Pipeline resource that defines the S3 location where AWS CodePipeline stores pipeline artifacts.
	 * @returns {CodePipelinePipelineArtifactStore}
	 */
	codePipelinePipelineArtifactStore: function() {
		return new Types.CodePipelinePipelineArtifactStore();
	},

	/**
	 * EncryptionKey is a property of the AWS CodePipeline Pipeline ArtifactStore property that specifies which key AWS CodePipeline uses to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
	 * @returns {CodePipelinePipelineArtifactStoreEncryptionKey}
	 */
	codePipelinePipelineArtifactStoreEncryptionKey: function() {
		return new Types.CodePipelinePipelineArtifactStoreEncryptionKey();
	},

	/**
	 * DisableInboundStageTransitions is a property of the AWS::CodePipeline::Pipeline resource that specifies which AWS CodePipeline stage to disable transitions to.
	 * @returns {CodePipelinePipelineDisableInboundStageTransitions}
	 */
	codePipelinePipelineDisableInboundStageTransitions: function() {
		return new Types.CodePipelinePipelineDisableInboundStageTransitions();
	},

	/**
	 * Stages is a property of the AWS::CodePipeline::Pipeline resource that specifies a sequence of tasks for AWS CodePipeline to complete on an artifact.
	 * @returns {CodePipelinePipelineStages}
	 */
	codePipelinePipelineStages: function() {
		return new Types.CodePipelinePipelineStages();
	},

	/**
	 * Actions is a property of the AWS CodePipeline Pipeline Stages property that specifies an action for an AWS CodePipeline stage.
	 * @returns {CodePipelinePipelineStagesActions}
	 */
	codePipelinePipelineStagesActions: function() {
		return new Types.CodePipelinePipelineStagesActions();
	},

	/**
	 * ActionTypeId is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies the action type and provider for an AWS CodePipeline action.
	 * @returns {CodePipelinePipelineStagesActionsActionTypeId}
	 */
	codePipelinePipelineStagesActionsActionTypeId: function() {
		return new Types.CodePipelinePipelineStagesActionsActionTypeId();
	},

	/**
	 * InputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that the AWS CodePipeline action works on, such as a test or build artifact.
	 * @returns {CodePipelinePipelineStagesActionsInputArtifacts}
	 */
	codePipelinePipelineStagesActionsInputArtifacts: function() {
		return new Types.CodePipelinePipelineStagesActionsInputArtifacts();
	},

	/**
	 * OutputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that is the result of an AWS CodePipeline action, such as a test or build artifact.
	 * @returns {CodePipelinePipelineStagesActionsOutputArtifacts}
	 */
	codePipelinePipelineStagesActionsOutputArtifacts: function() {
		return new Types.CodePipelinePipelineStagesActionsOutputArtifacts();
	},

	/**
	 * Blockers is a property of the AWS CodePipeline Pipeline Stages property that specifies an AWS CodePipeline gate declaration.
	 * @returns {CodePipelinePipelineStagesBlockers}
	 */
	codePipelinePipelineStagesBlockers: function() {
		return new Types.CodePipelinePipelineStagesBlockers();
	},

	/**
	 * Scope is a property of the AWS::Config::ConfigRule resource that specifies which AWS resources will trigger AWS Config to run an evaluation when their configurations change. The scope can include one or more resource types, a tag key and value, or one resource type and one resource ID. You cannot specify a tag-key value and a resource ID or type.
	 * @returns {ConfigConfigRuleScope}
	 */
	configConfigRuleScope: function() {
		return new Types.ConfigConfigRuleScope();
	},

	/**
	 * Source is a property of the AWS::Config::ConfigRule resource that specifies the rule owner, the rule identifier, and the events that trigger an AWS Config evaluation of your AWS resources.
	 * @returns {ConfigConfigRuleSource}
	 */
	configConfigRuleSource: function() {
		return new Types.ConfigConfigRuleSource();
	},

	/**
	 * SourceDetails is a property of the AWS Config ConfigRule Source property that specifies the source and type of event that triggers AWS Config to evaluate your AWS resources.
	 * @returns {ConfigConfigRuleSourceSourceDetails}
	 */
	configConfigRuleSourceSourceDetails: function() {
		return new Types.ConfigConfigRuleSourceSourceDetails();
	},

	/**
	 * RecordingGroup is property of the AWS::Config::ConfigurationRecorder resource that defines which AWS resource types to include in a recording group.
	 * @returns {ConfigConfigurationRecorderRecordingGroup}
	 */
	configConfigurationRecorderRecordingGroup: function() {
		return new Types.ConfigConfigurationRecorderRecordingGroup();
	},

	/**
	 * ConfigSnapshotDeliveryProperties is a property of the AWS::Config::DeliveryChannel resource that specifies how AWS Config delivers configuration snapshots to the S3 bucket in your delivery channel.
	 * @returns {ConfigDeliveryChannelConfigSnapshotDeliveryProperties}
	 */
	configDeliveryChannelConfigSnapshotDeliveryProperties: function() {
		return new Types.ConfigDeliveryChannelConfigSnapshotDeliveryProperties();
	},

	/**
	 * Key-value pairs that describe the properties of a data pipeline object.
	 * @returns {DataPipelineDataPipelineObjectFields}
	 */
	dataPipelineDataPipelineObjectFields: function() {
		return new Types.DataPipelineDataPipelineObjectFields();
	},

	/**
	 * Attribute is a property of the AWS Data Pipeline Pipeline ParameterObjects property that defines the attributes of a parameter object as key-value pairs.
	 * @returns {DataPipelineParameterObjectsAttributes}
	 */
	dataPipelineParameterObjectsAttributes: function() {
		return new Types.DataPipelineParameterObjectsAttributes();
	},

	/**
	 * PipelineObjects is a property of the AWS::DataPipeline::Pipeline resource that describes a data pipeline object.
	 * @returns {DataPipelinePipelineObjects}
	 */
	dataPipelinePipelineObjects: function() {
		return new Types.DataPipelinePipelineObjects();
	},

	/**
	 * ParameterObjects is a property of the AWS::DataPipeline::Pipeline resource that describes parameters that are used in a pipeline definition.
	 * @returns {DataPipelinePipelineParameterObjects}
	 */
	dataPipelinePipelineParameterObjects: function() {
		return new Types.DataPipelinePipelineParameterObjects();
	},

	/**
	 * ParameterValues is a property of the AWS::DataPipeline::Pipeline resource that sets values for parameters that are used in a pipeline definition.
	 * @returns {DataPipelinePipelineParameterValues}
	 */
	dataPipelinePipelineParameterValues: function() {
		return new Types.DataPipelinePipelineParameterValues();
	},

	/**
	 * PipelineTags is a property of the AWS::DataPipeline::Pipeline resource that defines arbitrary key-value pairs for a pipeline.
	 * @returns {DataPipelinePipelinePipelineTags}
	 */
	dataPipelinePipelinePipelineTags: function() {
		return new Types.DataPipelinePipelinePipelineTags();
	},

	/**
	 * VpcSettings is a property of the AWS::DirectoryService::MicrosoftAD resource that specifies the VPC settings for a Microsoft directory server.
	 * @returns {DirectoryServiceMicrosoftADVpcSettings}
	 */
	directoryServiceMicrosoftADVpcSettings: function() {
		return new Types.DirectoryServiceMicrosoftADVpcSettings();
	},

	/**
	 * VpcSettings is a property of the AWS::DirectoryService::SimpleAD resource that specifies the VPC settings for a directory server.
	 * @returns {DirectoryServiceSimpleADVpcSettings}
	 */
	directoryServiceSimpleADVpcSettings: function() {
		return new Types.DirectoryServiceSimpleADVpcSettings();
	},

	/**
	 * A list of attribute definitions for the AWS::DynamoDB::Table resource. Each element is composed of an AttributeName and AttributeType.
	 * @returns {DynamoDBAttributeDefinitions}
	 */
	dynamoDBAttributeDefinitions: function() {
		return new Types.DynamoDBAttributeDefinitions();
	},

	/**
	 * Describes global secondary indexes for the AWS::DynamoDB::Table resource.
	 * @returns {DynamoDBGlobalSecondaryIndexes}
	 */
	dynamoDBGlobalSecondaryIndexes: function() {
		return new Types.DynamoDBGlobalSecondaryIndexes();
	},

	/**
	 * Describes a primary key for the AWS::DynamoDB::Table resource or a key schema for an index. Each element is composed of an AttributeName and KeyType.
	 * @returns {DynamoDBKeySchema}
	 */
	dynamoDBKeySchema: function() {
		return new Types.DynamoDBKeySchema();
	},

	/**
	 * Describes local secondary indexes for the AWS::DynamoDB::Table resource. Each index is scoped to a given hash key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB.
	 * @returns {DynamoDBLocalSecondaryIndexes}
	 */
	dynamoDBLocalSecondaryIndexes: function() {
		return new Types.DynamoDBLocalSecondaryIndexes();
	},

	/**
	 * Attributes that are copied (projected) from the source table into the index. These attributes are additions to the primary key attributes and index key attributes, which are automatically projected.
	 * @returns {DynamoDBProjectionObject}
	 */
	dynamoDBProjectionObject: function() {
		return new Types.DynamoDBProjectionObject();
	},

	/**
	 * Describes a set of provisioned throughput values for an AWS::DynamoDB::Table resource. DynamoDB uses these capacity units to allocate sufficient resources to provide the requested throughput.
	 * @returns {DynamoDBProvisionedThroughput}
	 */
	dynamoDBProvisionedThroughput: function() {
		return new Types.DynamoDBProvisionedThroughput();
	},

	/**
	 * StreamSpecification is a property of the AWS::DynamoDB::Table resource that defines the settings of a DynamoDB table's stream.
	 * @returns {DynamoDBTableStreamSpecification}
	 */
	dynamoDBTableStreamSpecification: function() {
		return new Types.DynamoDBTableStreamSpecification();
	},

	/**
	 * The Amazon EC2 block device mapping property is an embedded property of the AWS::EC2::Instance resource. For block device mappings for an Auto Scaling launch configuration, see AutoScaling Block Device Mapping.
	 * @returns {EC2BlockDeviceMappingProperty}
	 */
	eC2BlockDeviceMappingProperty: function() {
		return new Types.EC2BlockDeviceMappingProperty();
	},

	/**
	 * DeploymentConfiguration is a property of the AWS::ECS::Service resource that configures how many tasks run when you update a running Amazon EC2 Container Service (Amazon ECS) service.
	 * @returns {EC2ContainerServiceServiceDeploymentConfiguration}
	 */
	eC2ContainerServiceServiceDeploymentConfiguration: function() {
		return new Types.EC2ContainerServiceServiceDeploymentConfiguration();
	},

	/**
	 * LoadBalancers is a property of the AWS::ECS::Service resource that specifies the load balancer to associate with an Amazon EC2 Container Service (Amazon ECS) service.
	 * @returns {EC2ContainerServiceServiceLoadBalancers}
	 */
	eC2ContainerServiceServiceLoadBalancers: function() {
		return new Types.EC2ContainerServiceServiceLoadBalancers();
	},

	/**
	 * ContainerDefinitions is a property of the AWS::ECS::TaskDefinition resource that describes the configuration of an Amazon EC2 Container Service (Amazon ECS) container. The container definitions are passed to the Docker daemon.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitions}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitions: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitions();
	},

	/**
	 * Environment is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies environment variables for a container.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment();
	},

	/**
	 * HostEntry is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies the hostnames and IP address entries to add to the Amazon EC2 Container Service (Amazon ECS) container's /etc/hosts file.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry();
	},

	/**
	 * LogConfiguration is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that configures a custom log driver for an Amazon EC2 Container Service (Amazon ECS) container.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration();
	},

	/**
	 * MountPoints is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies the mount points for data volumes in a container.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints();
	},

	/**
	 * PortMappings is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that maps a container port to a host port.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings();
	},

	/**
	 * Ulimit is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies resource limits for an Amazon EC2 Container Service (Amazon ECS) container.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit();
	},

	/**
	 * VolumesFrom is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that mounts data volumes from other containers.
	 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom}
	 */
	eC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom: function() {
		return new Types.EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom();
	},

	/**
	 * Volumes is a property of the AWS::ECS::TaskDefinition resource that specifies a list of data volumes, which your containers can then access.
	 * @returns {EC2ContainerServiceTaskDefinitionVolumes}
	 */
	eC2ContainerServiceTaskDefinitionVolumes: function() {
		return new Types.EC2ContainerServiceTaskDefinitionVolumes();
	},

	/**
	 * Host is a property of the Amazon EC2 Container Service TaskDefinition Volumes property that specifies the data volume path on the host container instance.
	 * @returns {EC2ContainerServiceTaskDefinitionVolumesHost}
	 */
	eC2ContainerServiceTaskDefinitionVolumesHost: function() {
		return new Types.EC2ContainerServiceTaskDefinitionVolumesHost();
	},

	/**
	 * The EC2 ICMP property is an embedded property of the AWS::EC2::NetworkAclEntry type.
	 * @returns {EC2ICMPPropertyType}
	 */
	eC2ICMPPropertyType: function() {
		return new Types.EC2ICMPPropertyType();
	},

	/**
	 * SsmAssociations is a property of the AWS::EC2::Instance resource that specifies the Amazon EC2 Simple Systems Manager (SSM) document and parameter values to associate with an instance.
	 * @returns {EC2InstanceSsmAssociations}
	 */
	eC2InstanceSsmAssociations: function() {
		return new Types.EC2InstanceSsmAssociations();
	},

	/**
	 * AssociationParameters is a property of the Amazon EC2 Instance SsmAssociations property that specifies input parameter values for an Amazon EC2 Simple Systems Manager (SSM) document.
	 * @returns {EC2InstanceSsmAssociationsAssociationParameters}
	 */
	eC2InstanceSsmAssociationsAssociationParameters: function() {
		return new Types.EC2InstanceSsmAssociationsAssociationParameters();
	},

	/**
	 * The EC2 MountPoint property is an embedded property of the AWS::EC2::Instance type.
	 * @returns {EC2MountPointPropertyType}
	 */
	eC2MountPointPropertyType: function() {
		return new Types.EC2MountPointPropertyType();
	},

	/**
	 * Describes a network interface association for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Association property.
	 * @returns {EC2NetworkInterfaceAssociation}
	 */
	eC2NetworkInterfaceAssociation: function() {
		return new Types.EC2NetworkInterfaceAssociation();
	},

	/**
	 * Describes a network interface attachment for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Attachment property.
	 * @returns {EC2NetworkInterfaceAttachment}
	 */
	eC2NetworkInterfaceAttachment: function() {
		return new Types.EC2NetworkInterfaceAttachment();
	},

	/**
	 * The EC2 Network Interface type is an embedded property of the AWS::EC2::Instance type. It specifies a network interface that is to be attached.
	 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
	 */
	eC2NetworkInterfaceEmbeddedPropertyType: function() {
		return new Types.EC2NetworkInterfaceEmbeddedPropertyType();
	},

	/**
	 * Refers to an individual Amazon EC2 security group by ID or name in a group set. AWS::EC2::NetworkInterface takes a list of objects of this type in its GroupSet property.
	 * @returns {EC2NetworkInterfaceGroupItem}
	 */
	eC2NetworkInterfaceGroupItem: function() {
		return new Types.EC2NetworkInterfaceGroupItem();
	},

	/**
	 * The PrivateIpAddressSpecification type is an embedded property of the AWS::EC2::NetworkInterface type.
	 * @returns {EC2NetworkInterfacePrivateIPSpecification}
	 */
	eC2NetworkInterfacePrivateIPSpecification: function() {
		return new Types.EC2NetworkInterfacePrivateIPSpecification();
	},

	/**
	 * The EC2 PortRange property is an embedded property of the AWS::EC2::NetworkAclEntry type.
	 * @returns {EC2PortRangePropertyType}
	 */
	eC2PortRangePropertyType: function() {
		return new Types.EC2PortRangePropertyType();
	},

	/**
	 * The EC2 Security Group Rule is an embedded property of the AWS::EC2::SecurityGroup type.
	 * @returns {EC2SecurityGroupRulePropertyType}
	 */
	eC2SecurityGroupRulePropertyType: function() {
		return new Types.EC2SecurityGroupRulePropertyType();
	},

	/**
	 * SpotFleetRequestConfigData is a property of the AWS::EC2::SpotFleet resource that defines the configuration of a Spot fleet request.
	 * @returns {EC2SpotFleetSpotFleetRequestConfigData}
	 */
	eC2SpotFleetSpotFleetRequestConfigData: function() {
		return new Types.EC2SpotFleetSpotFleetRequestConfigData();
	},

	/**
	 * Monitoring is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that enables instance monitoring.
	 * @returns {EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring}
	 */
	eC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring: function() {
		return new Types.EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring();
	},

	/**
	 * Describes the environment tier for an AWS::ElasticBeanstalk::Environment resource. For more information, see Environment Tiers in the AWS Elastic Beanstalk Developer Guide.
	 * @returns {ElasticBeanstalkEnvironmentTierPropertyType}
	 */
	elasticBeanstalkEnvironmentTierPropertyType: function() {
		return new Types.ElasticBeanstalkEnvironmentTierPropertyType();
	},

	/**
	 * OptionSettings is an embedded property of the AWS::ElasticBeanstalk::Environment and AWS::ElasticBeanstalk::ConfigurationTemplate resources. You use the OptionSettings property to specify an array of options for the Elastic Beanstalk environment.
	 * @returns {ElasticBeanstalkOptionSettingsPropertyType}
	 */
	elasticBeanstalkOptionSettingsPropertyType: function() {
		return new Types.ElasticBeanstalkOptionSettingsPropertyType();
	},

	/**
	 * The SourceBundle property is an embedded property of the AWS::ElasticBeanstalk::ApplicationVersion resource.
	 * @returns {ElasticBeanstalkSourceBundlePropertyType}
	 */
	elasticBeanstalkSourceBundlePropertyType: function() {
		return new Types.ElasticBeanstalkSourceBundlePropertyType();
	},

	/**
	 * Use settings from another Elastic Beanstalk configuration template for the AWS::ElasticBeanstalk::ConfigurationTemplate resource type.
	 * @returns {ElasticBeanstalkSourceConfigurationPropertyType}
	 */
	elasticBeanstalkSourceConfigurationPropertyType: function() {
		return new Types.ElasticBeanstalkSourceConfigurationPropertyType();
	},

	/**
	 * The Amazon Elastic Block Store block device type is an embedded property of the Amazon EC2 Block Device Mapping Property property.
	 * @returns {ElasticBlockStoreBlockDeviceProperty}
	 */
	elasticBlockStoreBlockDeviceProperty: function() {
		return new Types.ElasticBlockStoreBlockDeviceProperty();
	},

	/**
	 * LaunchSpecifications is a property of the Amazon EC2 SpotFleet SpotFleetRequestConfigData property that defines the launch specifications for the Spot fleet request.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications();
	},

	/**
	 * BlockDeviceMappings is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the block devices that are mapped to an instance.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings();
	},

	/**
	 * Ebs is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications BlockDeviceMappings property that defines a block device for an Amazon Elastic Block Store (Amazon EBS) volume.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs();
	},

	/**
	 * IamInstanceProfile is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that specifies the IAM instance profile to associate with the instances.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile();
	},

	/**
	 * NetworkInterfaces is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the network interface of the instances.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces();
	},

	/**
	 * PrivateIpAddresses is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications NetworkInterfaces property that specifies the private IP address that you want to assign to the network interface.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses();
	},

	/**
	 * Placement is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the placement group for the Spot instances.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement();
	},

	/**
	 * SecurityGroups is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that specifies a security group to associate with the instances.
	 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups}
	 */
	elasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups: function() {
		return new Types.ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups();
	},

	/**
	 * FileSystemTags is a property of the AWS::EFS::FileSystem resource that associates key-value pairs with a file system. You can use any of the following Unicode characters for keys and values: letters, digits, whitespace, _, ., /, =, +, and -.
	 * @returns {ElasticFileSystemFileSystemFileSystemTags}
	 */
	elasticFileSystemFileSystemFileSystemTags: function() {
		return new Types.ElasticFileSystemFileSystemFileSystemTags();
	},

	/**
	 * The AccessLoggingPolicy property describes where and how access logs are stored for the AWS::ElasticLoadBalancing::LoadBalancer resource.
	 * @returns {ElasticLoadBalancingAccessLoggingPolicy}
	 */
	elasticLoadBalancingAccessLoggingPolicy: function() {
		return new Types.ElasticLoadBalancingAccessLoggingPolicy();
	},

	/**
	 * The AppCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 * @returns {ElasticLoadBalancingAppCookieStickinessPolicyType}
	 */
	elasticLoadBalancingAppCookieStickinessPolicyType: function() {
		return new Types.ElasticLoadBalancingAppCookieStickinessPolicyType();
	},

	/**
	 * The ConnectionDrainingPolicy property describes how deregistered or unhealthy instances handle in-flight requests for the AWS::ElasticLoadBalancing::LoadBalancer resource. Connection draining ensures that the load balancer completes serving all in-flight requests made to a registered instance when the instance is deregistered or becomes unhealthy. Without connection draining, the load balancer closes connections to deregistered or unhealthy instances, and any in-flight requests are not completed.
	 * @returns {ElasticLoadBalancingConnectionDrainingPolicy}
	 */
	elasticLoadBalancingConnectionDrainingPolicy: function() {
		return new Types.ElasticLoadBalancingConnectionDrainingPolicy();
	},

	/**
	 * ConnectionSettings is a property of the AWS::ElasticLoadBalancing::LoadBalancer resource that describes how long the front-end and back-end connections of your load balancer can remain idle. For more information, see Configure Idle Connection Timeout in the Elastic Load Balancing Developer Guide.
	 * @returns {ElasticLoadBalancingConnectionSettings}
	 */
	elasticLoadBalancingConnectionSettings: function() {
		return new Types.ElasticLoadBalancingConnectionSettings();
	},

	/**
	 * The ElasticLoadBalancing HealthCheck is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 * @returns {ElasticLoadBalancingHealthCheckType}
	 */
	elasticLoadBalancingHealthCheckType: function() {
		return new Types.ElasticLoadBalancingHealthCheckType();
	},

	/**
	 * The LBCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 * @returns {ElasticLoadBalancingLBCookieStickinessPolicyType}
	 */
	elasticLoadBalancingLBCookieStickinessPolicyType: function() {
		return new Types.ElasticLoadBalancingLBCookieStickinessPolicyType();
	},

	/**
	 * The Listener property is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 * @returns {ElasticLoadBalancingListenerPropertyType}
	 */
	elasticLoadBalancingListenerPropertyType: function() {
		return new Types.ElasticLoadBalancingListenerPropertyType();
	},

	/**
	 * The ElasticLoadBalancing policy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer resource. You associate policies with a listener by referencing a policy's name in the listener's PolicyNames property.
	 * @returns {ElasticLoadBalancingPolicyType}
	 */
	elasticLoadBalancingPolicyType: function() {
		return new Types.ElasticLoadBalancingPolicyType();
	},

	/**
	 * Application is a property of the AWS::EMR::Cluster resource that adds an Amazon Elastic MapReduce (Amazon EMR) application bundle or third-party software to an Amazon EMR cluster.
	 * @returns {ElasticMapReduceClusterApplication}
	 */
	elasticMapReduceClusterApplication: function() {
		return new Types.ElasticMapReduceClusterApplication();
	},

	/**
	 * BootstrapActionConfig is a property of the AWS::EMR::Cluster resource that specifies bootstrap actions that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
	 * @returns {ElasticMapReduceClusterBootstrapActionConfig}
	 */
	elasticMapReduceClusterBootstrapActionConfig: function() {
		return new Types.ElasticMapReduceClusterBootstrapActionConfig();
	},

	/**
	 * ScriptBootstrapActionConfig is a property of the Amazon Elastic MapReduce Cluster BootstrapActionConfig property that specifies the arguments and location of the bootstrap script that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
	 * @returns {ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig}
	 */
	elasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig: function() {
		return new Types.ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig();
	},

	/**
	 * Configuration is a property of the AWS::EMR::Cluster resource that specifies the software configuration of an Amazon Elastic MapReduce (Amazon EMR) cluster. For example configurations, see Amazon EMR Configurations in the Amazon Elastic MapReduce API Reference.
	 * @returns {ElasticMapReduceClusterConfiguration}
	 */
	elasticMapReduceClusterConfiguration: function() {
		return new Types.ElasticMapReduceClusterConfiguration();
	},

	/**
	 * JobFlowInstancesConfig is a property of the AWS::EMR::Cluster resource that configures the EC2 instances (nodes) that will run jobs in an Amazon Elastic MapReduce (Amazon EMR) cluster.
	 * @returns {ElasticMapReduceClusterJobFlowInstancesConfig}
	 */
	elasticMapReduceClusterJobFlowInstancesConfig: function() {
		return new Types.ElasticMapReduceClusterJobFlowInstancesConfig();
	},

	/**
	 * InstanceGroupConfig is a property of the CoreInstanceGroup and MasterInstanceGroup properties of the job flow instances configuration. The InstanceGroupConfig property specifies the settings for instances (nodes) in the core and master instance groups of an Amazon Elastic MapReduce (Amazon EMR) cluster.
	 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
	 */
	elasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig: function() {
		return new Types.ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig();
	},

	/**
	 * PlacementType is a property of the Amazon Elastic MapReduce Cluster JobFlowInstancesConfig property that specifies the Availability Zone (AZ) in which the job flow runs.
	 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigPlacementType}
	 */
	elasticMapReduceClusterJobFlowInstancesConfigPlacementType: function() {
		return new Types.ElasticMapReduceClusterJobFlowInstancesConfigPlacementType();
	},

	/**
	 * EbsConfiguration is a property of the AWS::EMR::Cluster and AWS::EMR::InstanceGroupConfig resources that defines Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your Amazon Elastic MapReduce (Amazon EMR) instances.
	 * @returns {ElasticMapReduceEbsConfiguration}
	 */
	elasticMapReduceEbsConfiguration: function() {
		return new Types.ElasticMapReduceEbsConfiguration();
	},

	/**
	 * EbsBlockDeviceConfig is a property of the Amazon Elastic MapReduce EbsConfiguration property that defines the settings for the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
	 * @returns {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig}
	 */
	elasticMapReduceEbsConfigurationEbsBlockDeviceConfig: function() {
		return new Types.ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig();
	},

	/**
	 * VolumeSpecification is a property of the Amazon Elastic MapReduce EbsConfiguration property that configures the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
	 * @returns {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification}
	 */
	elasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification: function() {
		return new Types.ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification();
	},

	/**
	 * HadoopJarStepConfig is a property of the AWS::EMR::Step resource that specifies a JAR file and runtime settings that Amazon Elastic MapReduce (Amazon EMR) executes.
	 * @returns {ElasticMapReduceStepHadoopJarStepConfig}
	 */
	elasticMapReduceStepHadoopJarStepConfig: function() {
		return new Types.ElasticMapReduceStepHadoopJarStepConfig();
	},

	/**
	 * KeyValue is a property of the Amazon Elastic MapReduce Step HadoopJarStepConfig property that specifies key-value pairs, which are passed to a JAR file that Amazon Elastic MapReduce (Amazon EMR) executes.
	 * @returns {ElasticMapReduceStepHadoopJarStepConfigKeyValue}
	 */
	elasticMapReduceStepHadoopJarStepConfigKeyValue: function() {
		return new Types.ElasticMapReduceStepHadoopJarStepConfigKeyValue();
	},

	/**
	 * EBSOptions is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the Amazon Elasticsearch Service (Amazon ES) domain.
	 * @returns {ElasticsearchServiceDomainEBSOptions}
	 */
	elasticsearchServiceDomainEBSOptions: function() {
		return new Types.ElasticsearchServiceDomainEBSOptions();
	},

	/**
	 * ElasticsearchClusterConfig is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the cluster of an Amazon Elasticsearch Service (Amazon ES) domain.
	 * @returns {ElasticsearchServiceDomainElasticsearchClusterConfig}
	 */
	elasticsearchServiceDomainElasticsearchClusterConfig: function() {
		return new Types.ElasticsearchServiceDomainElasticsearchClusterConfig();
	},

	/**
	 * SnapshotOptions is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the automated snapshot of Amazon Elasticsearch Service (Amazon ES) domain indices.
	 * @returns {ElasticsearchServiceDomainSnapshotOptions}
	 */
	elasticsearchServiceDomainSnapshotOptions: function() {
		return new Types.ElasticsearchServiceDomainSnapshotOptions();
	},

	/**
	 * RoutingStrategy is a property of the AWS::GameLift::Alias resource that configures the routing strategy for an Amazon GameLift (GameLift) alias. For more information, see the RoutingStrategy data type in the Amazon GameLift API Reference.
	 * @returns {GameLiftAliasRoutingStrategy}
	 */
	gameLiftAliasRoutingStrategy: function() {
		return new Types.GameLiftAliasRoutingStrategy();
	},

	/**
	 * StorageLocation is a property of the AWS::GameLift::Build resource that specifies the location of an Amazon GameLift (GameLift) build package files, such as the game server binaries. For more information, see Uploading a Build to Amazon GameLift in the Amazon GameLift Developer Guide.
	 * @returns {GameLiftBuildStorageLocation}
	 */
	gameLiftBuildStorageLocation: function() {
		return new Types.GameLiftBuildStorageLocation();
	},

	/**
	 * EC2InboundPermission is a property of the AWS::GameLift::Fleet resource that specifies the traffic that is permitted to access your game servers in an Amazon GameLift (GameLift) fleet.
	 * @returns {GameLiftFleetEC2InboundPermission}
	 */
	gameLiftFleetEC2InboundPermission: function() {
		return new Types.GameLiftFleetEC2InboundPermission();
	},

	/**
	 * Policies is a property of the AWS::IAM::Role, AWS::IAM::Group, and AWS::IAM::User resources. The Policies property describes what actions are allowed on what resources. For more information about IAM policies, see Overview of Policies in IAM User Guide.
	 * @returns {IAMPolicies}
	 */
	iamPolicies: function() {
		return new Types.IAMPolicies();
	},

	/**
	 * LoginProfile is a property of the AWS::IAM::User resource that creates a login profile for users so that they can access the AWS Management Console.
	 * @returns {IAMUserLoginProfile}
	 */
	iamUserLoginProfile: function() {
		return new Types.IAMUserLoginProfile();
	},

	/**
	 * Code is a property of the AWS::Lambda::Function resource that enables you to specify the source code of an AWS Lambda (Lambda) function. Source code can be located a file in an S3 bucket or, for Node.js and Python 2.7 runtime environments only, you can provide it in inline text.
	 * @returns {LambdaFunctionCode}
	 */
	lambdaFunctionCode: function() {
		return new Types.LambdaFunctionCode();
	},

	/**
	 * VpcConfig is a property of the AWS::Lambda::Function resource that enables to your AWS Lambda (Lambda) function to access resources in a VPC. For more information, see Configuring a Lambda Function to Access Resources in an Amazon VPC in the AWS Lambda Developer Guide.
	 * @returns {LambdaFunctionVPCConfig}
	 */
	lambdaFunctionVPCConfig: function() {
		return new Types.LambdaFunctionVPCConfig();
	},

	/**
	 * For some resources, you can specify a custom name. By default, AWS CloudFormation generates a unique physical ID to name a resource. For example, AWS CloudFormation might name an Amazon S3 bucket with the following physical ID stack123123123123-s3bucket-abcdefghijk1. With custom names, you can specify a name that's easier to read and identify, such as production-app-logs or business-metrics.
	 * @returns {NameType}
	 */
	nameType: function() {
		return new Types.NameType();
	},

	/**
	 * Environment is a property of the AWS::OpsWorks::App resource that specifies the environment variable to associate with the AWS OpsWorks app.
	 * @returns {OpsWorksAppEnvironment}
	 */
	opsWorksAppEnvironment: function() {
		return new Types.OpsWorksAppEnvironment();
	},

	/**
	 * Describes the scaling thresholds for the AWS OpsWorks LoadBasedAutoScaling Type property. For more information, see AutoScalingThresholds in the AWS OpsWorks API Reference.
	 * @returns {OpsWorksAutoScalingThresholdsType}
	 */
	opsWorksAutoScalingThresholdsType: function() {
		return new Types.OpsWorksAutoScalingThresholdsType();
	},

	/**
	 * Describes the Chef configuration for the AWS::OpsWorks::Stack resource type. For more information, see ChefConfiguration in the AWS OpsWorks API Reference.
	 * @returns {OpsWorksChefConfigurationType}
	 */
	opsWorksChefConfigurationType: function() {
		return new Types.OpsWorksChefConfigurationType();
	},

	/**
	 * LifeCycleConfiguration is property of the AWS::OpsWorks::Layer resource that specifies the lifecycle event configuration for the layer.
	 * @returns {OpsWorksLayerLifeCycleConfiguration}
	 */
	opsWorksLayerLifeCycleConfiguration: function() {
		return new Types.OpsWorksLayerLifeCycleConfiguration();
	},

	/**
	 * ShutdownEventConfiguration is a property of the AWS OpsWorks Layer LifeCycleConfiguration property that specifies the shutdown event configuration for a lifecycle event.
	 * @returns {OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration}
	 */
	opsWorksLayerLifeCycleConfigurationShutdownEventConfiguration: function() {
		return new Types.OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration();
	},

	/**
	 * Describes the load-based automatic scaling configuration for an AWS::OpsWorks::Layer resource type. For more information, see SetLoadBasedAutoScaling in the AWS OpsWorks API Reference.
	 * @returns {OpsWorksLoadBasedAutoScalingType}
	 */
	opsWorksLoadBasedAutoScalingType: function() {
		return new Types.OpsWorksLoadBasedAutoScalingType();
	},

	/**
	 * Describes custom event recipes for the AWS::OpsWorks::Layer resource type that AWS OpsWorks runs after the standard event recipes. For more information, see AWS OpsWorks Lifecycle Events in the AWS OpsWorks User Guide.
	 * @returns {OpsWorksRecipesType}
	 */
	opsWorksRecipesType: function() {
		return new Types.OpsWorksRecipesType();
	},

	/**
	 * Describes the information required to retrieve a cookbook or app from a repository for the AWS::OpsWorks::Stack or AWS::OpsWorks::App resource types. For more information, see Source in the AWS OpsWorks API Reference.
	 * @returns {OpsWorksSourceType}
	 */
	opsWorksSourceType: function() {
		return new Types.OpsWorksSourceType();
	},

	/**
	 * Describes an SSL configuration for the AWS::OpsWorks::App resource type.
	 * @returns {OpsWorksSslConfigurationType}
	 */
	opsWorksSslConfigurationType: function() {
		return new Types.OpsWorksSslConfigurationType();
	},

	/**
	 * Describes the stack configuration manager for the AWS::OpsWorks::Stack resource type. For more information, see StackConfigurationManager in the AWS OpsWorks API Reference.
	 * @returns {OpsWorksStackConfigurationManagerType}
	 */
	opsWorksStackConfigurationManagerType: function() {
		return new Types.OpsWorksStackConfigurationManagerType();
	},

	/**
	 * Describes the automatic time-based scaling configuration for an AWS::OpsWorks::Instance resource type. For more information, see SetTimeBasedAutoScaling in the AWS OpsWorks API Reference.
	 * @returns {OpsWorksTimeBasedAutoScalingType}
	 */
	opsWorksTimeBasedAutoScalingType: function() {
		return new Types.OpsWorksTimeBasedAutoScalingType();
	},

	/**
	 * Describes the Amazon EBS volumes for the AWS::OpsWorks::Layer resource type.
	 * @returns {OpsWorksVolumeConfigurationType}
	 */
	opsWorksVolumeConfigurationType: function() {
		return new Types.OpsWorksVolumeConfigurationType();
	},

	/**
	 * Use the OptionConfigurations property to configure an option and its settings for an AWS::RDS::OptionGroup resource.
	 * @returns {RDSOptionGroupOptionConfigurations}
	 */
	rdsOptionGroupOptionConfigurations: function() {
		return new Types.RDSOptionGroupOptionConfigurations();
	},

	/**
	 * Use the OptionSettings property to specify settings for an option in the OptionConfigurations property.
	 * @returns {RDSOptionGroupOptionConfigurationsOptionSettings}
	 */
	rdsOptionGroupOptionConfigurationsOptionSettings: function() {
		return new Types.RDSOptionGroupOptionConfigurationsOptionSettings();
	},

	/**
	 * The Amazon RDS security group rule is an embedded property of the AWS::RDS::DBSecurityGroup type.
	 * @returns {RDSSecurityGroupRule}
	 */
	rdsSecurityGroupRule: function() {
		return new Types.RDSSecurityGroupRule();
	},

	/**
	 * Describes parameters for the AWS::Redshift::ClusterParameterGroup resource type.
	 * @returns {RedshiftParameterType}
	 */
	redshiftParameterType: function() {
		return new Types.RedshiftParameterType();
	},

	/**
	 * AliasTarget is a property of the AWS::Route53::RecordSet resource.
	 * @returns {Route53AliasTargetProperty}
	 */
	route53AliasTargetProperty: function() {
		return new Types.Route53AliasTargetProperty();
	},

	/**
	 * The HealthCheckConfig property is part of the AWS::Route53::HealthCheck resource that describes a health check that Amazon Route 53 uses before responding to a DNS query.
	 * @returns {Route53HealthCheckConfig}
	 */
	route53HealthCheckConfig: function() {
		return new Types.Route53HealthCheckConfig();
	},

	/**
	 * The HealthCheckTags property describes key-value pairs that are associated with an AWS::Route53::HealthCheck resource.
	 * @returns {Route53HealthCheckTags}
	 */
	route53HealthCheckTags: function() {
		return new Types.Route53HealthCheckTags();
	},

	/**
	 * The HostedZoneConfig property is part of the AWS::Route53::HostedZone resource that can contain a comment about the hosted zone.
	 * @returns {Route53HostedZoneConfigProperty}
	 */
	route53HostedZoneConfigProperty: function() {
		return new Types.Route53HostedZoneConfigProperty();
	},

	/**
	 * The HostedZoneTags property describes key-value pairs that are associated with an AWS::Route53::HostedZone resource.
	 * @returns {Route53HostedZoneTags}
	 */
	route53HostedZoneTags: function() {
		return new Types.Route53HostedZoneTags();
	},

	/**
	 * The HostedZoneVPCs property is part of the AWS::Route53::HostedZone resource that specifies the VPCs to associate with the hosted zone.
	 * @returns {Route53HostedZoneVPCs}
	 */
	route53HostedZoneVPCs: function() {
		return new Types.Route53HostedZoneVPCs();
	},

	/**
	 * The GeoLocation property is part of the AWS::Route53::RecordSet resource that describes how Amazon Route 53 responds to DNS queries based on the geographic location of the query.
	 * @returns {Route53RecordSetGeoLocationProperty}
	 */
	route53RecordSetGeoLocationProperty: function() {
		return new Types.Route53RecordSetGeoLocationProperty();
	},

	/**
	 * Describes the cross-origin access configuration for objects in an AWS::S3::Bucket resource.
	 * @returns {S3CorsConfiguration}
	 */
	s3CorsConfiguration: function() {
		return new Types.S3CorsConfiguration();
	},

	/**
	 * Describes cross-origin access rules for the Amazon S3 Cors Configuration property.
	 * @returns {S3CorsConfigurationRule}
	 */
	s3CorsConfigurationRule: function() {
		return new Types.S3CorsConfigurationRule();
	},

	/**
	 * Describes the lifecycle configuration for objects in an AWS::S3::Bucket resource.
	 * @returns {S3LifecycleConfiguration}
	 */
	s3LifecycleConfiguration: function() {
		return new Types.S3LifecycleConfiguration();
	},

	/**
	 * Describes lifecycle rules for the Amazon S3 Lifecycle Configuration property.
	 * @returns {S3LifecycleRule}
	 */
	s3LifecycleRule: function() {
		return new Types.S3LifecycleRule();
	},

	/**
	 * NoncurrentVersionTransition is a property of the Amazon S3 Lifecycle Rule property that describes when noncurrent objects transition to a specified storage class.
	 * @returns {S3LifecycleRuleNoncurrentVersionTransition}
	 */
	s3LifecycleRuleNoncurrentVersionTransition: function() {
		return new Types.S3LifecycleRuleNoncurrentVersionTransition();
	},

	/**
	 * Describes when an object transitions to a specified storage class for the Amazon S3 Lifecycle Rule property.
	 * @returns {S3LifecycleRuleTransition}
	 */
	s3LifecycleRuleTransition: function() {
		return new Types.S3LifecycleRuleTransition();
	},

	/**
	 * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for an AWS::S3::Bucket resource. These logs track requests to an Amazon S3 bucket. For more information, see PUT Bucket logging in the Amazon Simple Storage Service API Reference.
	 * @returns {S3LoggingConfiguration}
	 */
	s3LoggingConfiguration: function() {
		return new Types.S3LoggingConfiguration();
	},

	/**
	 * Describes the notification configuration for an AWS::S3::Bucket resource.
	 * @returns {S3NotificationConfiguration}
	 */
	s3NotificationConfiguration: function() {
		return new Types.S3NotificationConfiguration();
	},

	/**
	 * Filter is a property of the LambdaConfigurations, QueueConfigurations, and TopicConfigurations properties that describes the filtering rules that determine the Amazon Simple Storage Service (Amazon S3) objects for which to send notifications.
	 * @returns {S3NotificationConfigurationConfigFilter}
	 */
	s3NotificationConfigurationConfigFilter: function() {
		return new Types.S3NotificationConfigurationConfigFilter();
	},

	/**
	 * S3Key is a property of the Amazon S3 NotificationConfiguration Config Filter property that specifies the key names of Amazon Simple Storage Service (Amazon S3) objects for which to send notifications.
	 * @returns {S3NotificationConfigurationConfigFilterS3Key}
	 */
	s3NotificationConfigurationConfigFilterS3Key: function() {
		return new Types.S3NotificationConfigurationConfigFilterS3Key();
	},

	/**
	 * Rules is a property of the Amazon S3 NotificationConfiguration Config Filter S3Key property that describes the Amazon Simple Storage Service (Amazon S3) object key name to filter on and whether to filter on the suffix or prefix of the key name.
	 * @returns {S3NotificationConfigurationConfigFilterS3KeyRules}
	 */
	s3NotificationConfigurationConfigFilterS3KeyRules: function() {
		return new Types.S3NotificationConfigurationConfigFilterS3KeyRules();
	},

	/**
	 * Describes the topic and events for the Amazon S3 NotificationConfiguration property.
	 * @returns {S3NotificationConfigurationTopicConfigurations}
	 */
	s3NotificationConfigurationTopicConfigurations: function() {
		return new Types.S3NotificationConfigurationTopicConfigurations();
	},

	/**
	 * ReplicationConfiguration is a property of the AWS::S3::Bucket resource that specifies replication rules and the AWS Identity and Access Management (IAM) role Amazon Simple Storage Service (Amazon S3) uses to replicate objects.
	 * @returns {S3ReplicationConfiguration}
	 */
	s3ReplicationConfiguration: function() {
		return new Types.S3ReplicationConfiguration();
	},

	/**
	 * Rules is a property of the Amazon S3 ReplicationConfiguration property that specifies which Amazon Simple Storage Service (Amazon S3) objects to replicate and where to store them.
	 * @returns {S3ReplicationConfigurationRules}
	 */
	s3ReplicationConfigurationRules: function() {
		return new Types.S3ReplicationConfigurationRules();
	},

	/**
	 * Destination is a property of the Amazon S3 ReplicationConfiguration Rules property that specifies which Amazon Simple Storage Service (Amazon S3) bucket to store replicated objects and their storage class.
	 * @returns {S3ReplicationConfigurationRulesDestination}
	 */
	s3ReplicationConfigurationRulesDestination: function() {
		return new Types.S3ReplicationConfigurationRulesDestination();
	},

	/**
	 * Describes the versioning state of an AWS::S3::Bucket resource. For more information, see PUT Bucket versioning in the Amazon Simple Storage Service API Reference.
	 * @returns {S3VersioningConfiguration}
	 */
	s3VersioningConfiguration: function() {
		return new Types.S3VersioningConfiguration();
	},

	/**
	 * WebsiteConfiguration is an embedded property of the AWS::S3::Bucket resource.
	 * @returns {S3WebsiteConfigurationProperty}
	 */
	s3WebsiteConfigurationProperty: function() {
		return new Types.S3WebsiteConfigurationProperty();
	},

	/**
	 * The RedirectAllRequestsTo code is an embedded property of the Amazon S3 Website Configuration Property property that describes the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
	 * @returns {S3WebsiteConfigurationRedirectAllRequestsToProperty}
	 */
	s3WebsiteConfigurationRedirectAllRequestsToProperty: function() {
		return new Types.S3WebsiteConfigurationRedirectAllRequestsToProperty();
	},

	/**
	 * The RoutingRules property is an embedded property of the Amazon S3 Website Configuration Property property. This property describes the redirect behavior and when a redirect is applied.
	 * @returns {S3WebsiteConfigurationRoutingRulesProperty}
	 */
	s3WebsiteConfigurationRoutingRulesProperty: function() {
		return new Types.S3WebsiteConfigurationRoutingRulesProperty();
	},

	/**
	 * The RedirectRule property is an embedded property of the Amazon S3 Website Configuration Routing Rules Property that describes how requests are redirected. In the event of an error, you can specify a different error code to return.
	 * @returns {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
	 */
	s3WebsiteConfigurationRoutingRulesRedirectRuleProperty: function() {
		return new Types.S3WebsiteConfigurationRoutingRulesRedirectRuleProperty();
	},

	/**
	 * The RoutingRuleCondition property is an embedded property of the Amazon S3 Website Configuration Routing Rules Property that describes a condition that must be met for a redirect to apply.
	 * @returns {S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty}
	 */
	s3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty: function() {
		return new Types.S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty();
	},

	/**
	 * LambdaConfigurations is a property of the Amazon S3 NotificationConfiguration property that describes the AWS Lambda (Lambda) functions to invoke and the events for which to invoke them.
	 * @returns {SimpleStorageServiceNotificationConfigurationLambdaConfigurations}
	 */
	simpleStorageServiceNotificationConfigurationLambdaConfigurations: function() {
		return new Types.SimpleStorageServiceNotificationConfigurationLambdaConfigurations();
	},

	/**
	 * QueueConfigurations is a property of the Amazon S3 NotificationConfiguration property that describes the S3 bucket events about which you want to send messages to Amazon SQS and the queues to which you want to send them.
	 * @returns {SimpleStorageServiceNotificationConfigurationQueueConfigurations}
	 */
	simpleStorageServiceNotificationConfigurationQueueConfigurations: function() {
		return new Types.SimpleStorageServiceNotificationConfigurationQueueConfigurations();
	},

	/**
	 * Subscription is an embedded property of the AWS::SNS::Topic resource that describes the subscription endpoints for a topic.
	 * @returns {SNSSubscriptionPropertyType}
	 */
	snsSubscriptionPropertyType: function() {
		return new Types.SNSSubscriptionPropertyType();
	},

	/**
	 * The RedrivePolicy type is a property of the AWS::SQS::Queue resource.
	 * @returns {SQSRedrivePolicy}
	 */
	sqsRedrivePolicy: function() {
		return new Types.SQSRedrivePolicy();
	},

	/**
	 * ByteMatchTuples is a property of the AWS::WAF::ByteMatchSet resource that specifies settings for an AWS WAF ByteMatchSet resource, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests.
	 * @returns {WAFByteMatchSetByteMatchTuples}
	 */
	wafByteMatchSetByteMatchTuples: function() {
		return new Types.WAFByteMatchSetByteMatchTuples();
	},

	/**
	 * FieldToMatch is a property of the AWS WAF ByteMatchSet ByteMatchTuples property that specifies the part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 * @returns {WAFByteMatchSetByteMatchTuplesFieldToMatch}
	 */
	wafByteMatchSetByteMatchTuplesFieldToMatch: function() {
		return new Types.WAFByteMatchSetByteMatchTuplesFieldToMatch();
	},

	/**
	 * IPSetDescriptors is a property of the AWS::WAF::IPSet resource that specifies the IP address type and IP address range (in CIDR notation) from which web requests originate.
	 * @returns {WAFIPSetIPSetDescriptors}
	 */
	wafipSetIPSetDescriptors: function() {
		return new Types.WAFIPSetIPSetDescriptors();
	},

	/**
	 * Predicates is a property of the AWS::WAF::Rule resource that specifies the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in an AWS WAF rule. If you add more than one predicate to a rule, an incoming request must match all of the specifications in the predicates to be allowed or blocked.
	 * @returns {WAFRulePredicates}
	 */
	wafRulePredicates: function() {
		return new Types.WAFRulePredicates();
	},

	/**
	 * SizeConstraint is a property of the AWS::WAF::SizeConstraintSet resource that specifies a size constraint and which part of a web request that you want AWS WAF to constrain.
	 * @returns {WAFSizeConstraintSetSizeConstraint}
	 */
	wafSizeConstraintSetSizeConstraint: function() {
		return new Types.WAFSizeConstraintSetSizeConstraint();
	},

	/**
	 * FieldToMatch is a property of the AWS WAF SizeConstraintSet SizeConstraint property that specifies the part of a web request that you want AWS WAF to check for a size constraint, such as a specific header or a query string.
	 * @returns {WAFSizeConstraintSetSizeConstraintFieldToMatch}
	 */
	wafSizeConstraintSetSizeConstraintFieldToMatch: function() {
		return new Types.WAFSizeConstraintSetSizeConstraintFieldToMatch();
	},

	/**
	 * SqlInjectionMatchTuples is a property of the AWS::WAF::SqlInjectionMatchSet resource that specifies the parts of web requests that AWS WAF inspects for SQL code.
	 * @returns {WAFSqlInjectionMatchSetSqlInjectionMatchTuples}
	 */
	wafSqlInjectionMatchSetSqlInjectionMatchTuples: function() {
		return new Types.WAFSqlInjectionMatchSetSqlInjectionMatchTuples();
	},

	/**
	 * FieldToMatch is a property of the AWS WAF ByteMatchSet ByteMatchTuples property that specifies the part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 * @returns {WAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch}
	 */
	wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch: function() {
		return new Types.WAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch();
	},

	/**
	 * Action is a property of the AWS::WAF::WebACL resource and the AWS WAF WebACL Rules property that specifies the action AWS WAF takes when a web request matches or doesn't match all rule conditions.
	 * @returns {WAFWebACLAction}
	 */
	wafWebACLAction: function() {
		return new Types.WAFWebACLAction();
	},

	/**
	 * Rules is a property of the AWS::WAF::WebACL resource that specifies the rule to associate with an AWS WAF web access control list (ACL) and the rule's settings.
	 * @returns {WAFWebACLRules}
	 */
	wafWebACLRules: function() {
		return new Types.WAFWebACLRules();
	},

	/**
	 * XssMatchTuple is a property of the AWS::WAF::XssMatchSet resource that specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks.
	 * @returns {WAFXssMatchSetXssMatchTuple}
	 */
	wafXssMatchSetXssMatchTuple: function() {
		return new Types.WAFXssMatchSetXssMatchTuple();
	},

	/**
	 * FieldToMatch is a property of the AWS WAF XssMatchSet XssMatchTuple property that specifies the part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 * @returns {WAFXssMatchSetXssMatchTupleFieldToMatch}
	 */
	wafXssMatchSetXssMatchTupleFieldToMatch: function() {
		return new Types.WAFXssMatchSetXssMatchTupleFieldToMatch();
	},
	//@@end type sugar

	//@@start attr sugar

	/**
	 * You associate the CreationPolicy attribute with a resource to prevent its status from reaching create complete until AWS CloudFormation receives a specified number of success signals or the timeout period is exceeded. To signal a resource, you can use the cfn-signal helper script or SignalResource API. AWS CloudFormation publishes valid signals to the stack events so that you track the number of signals sent.
	 * @returns {CreationPolicy}
	 */
	creationPolicy: function() {
		return new Attributes.CreationPolicy();
	},

	/**
	 * You can use the UpdatePolicy attribute to specify how AWS CloudFormation handles updates to the AWS::AutoScaling::AutoScalingGroup resource.
	 * @returns {UpdatePolicy}
	 */
	updatePolicy: function() {
		return new Attributes.UpdatePolicy();
	}
	//@@end attr sugar
};

module.exports = new Botox();
