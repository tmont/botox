module.exports = {
	ApiGateway: {
		Account: require('./gen/resources/ApiGatewayAccount.js'),
		ApiKey: require('./gen/resources/ApiGatewayApiKey.js'),
		Authorizer: require('./gen/resources/ApiGatewayAuthorizer.js'),
		BasePathMapping: require('./gen/resources/ApiGatewayBasePathMapping.js'),
		ClientCertificate: require('./gen/resources/ApiGatewayClientCertificate.js'),
		Deployment: require('./gen/resources/ApiGatewayDeployment.js'),
		Method: require('./gen/resources/ApiGatewayMethod.js'),
		Model: require('./gen/resources/ApiGatewayModel.js'),
		Resource: require('./gen/resources/ApiGatewayResource.js'),
		RestApi: require('./gen/resources/ApiGatewayRestApi.js'),
		Stage: require('./gen/resources/ApiGatewayStage.js')
	},
	AutoScaling: {
		AutoScalingGroup: require('./gen/resources/AutoScalingAutoScalingGroup.js'),
		LaunchConfiguration: require('./gen/resources/AutoScalingLaunchConfiguration.js'),
		LifecycleHook: require('./gen/resources/AutoScalingLifecycleHook.js'),
		ScalingPolicy: require('./gen/resources/AutoScalingScalingPolicy.js'),
		ScheduledAction: require('./gen/resources/AutoScalingScheduledAction.js')
	},
	CloudFormation: {
		Authentication: require('./gen/resources/CloudFormationAuthentication.js'),
		CustomResource: require('./gen/resources/CloudFormationCustomResource.js'),
		Init: require('./gen/resources/CloudFormationInit.js'),
		Interface: require('./gen/resources/CloudFormationInterface.js'),
		Stack: require('./gen/resources/CloudFormationStack.js'),
		WaitCondition: require('./gen/resources/CloudFormationWaitCondition.js'),
		WaitConditionHandle: require('./gen/resources/CloudFormationWaitConditionHandle.js')
	},
	CloudFront: {
		Distribution: require('./gen/resources/CloudFrontDistribution.js')
	},
	CloudTrail: {
		Trail: require('./gen/resources/CloudTrailTrail.js')
	},
	CloudWatch: {
		Alarm: require('./gen/resources/CloudWatchAlarm.js')
	},
	CodeDeploy: {
		Application: require('./gen/resources/CodeDeployApplication.js'),
		DeploymentConfig: require('./gen/resources/CodeDeployDeploymentConfig.js'),
		DeploymentGroup: require('./gen/resources/CodeDeployDeploymentGroup.js')
	},
	CodePipeline: {
		CustomActionType: require('./gen/resources/CodePipelineCustomActionType.js'),
		Pipeline: require('./gen/resources/CodePipelinePipeline.js')
	},
	Config: {
		ConfigRule: require('./gen/resources/ConfigConfigRule.js'),
		ConfigurationRecorder: require('./gen/resources/ConfigConfigurationRecorder.js'),
		DeliveryChannel: require('./gen/resources/ConfigDeliveryChannel.js')
	},
	DataPipeline: {
		Pipeline: require('./gen/resources/DataPipelinePipeline.js')
	},
	DirectoryService: {
		MicrosoftAD: require('./gen/resources/DirectoryServiceMicrosoftAD.js'),
		SimpleAD: require('./gen/resources/DirectoryServiceSimpleAD.js')
	},
	DynamoDB: {
		Table: require('./gen/resources/DynamoDBTable.js')
	},
	EC2: {
		CustomerGateway: require('./gen/resources/EC2CustomerGateway.js'),
		DHCPOptions: require('./gen/resources/EC2DHCPOptions.js'),
		EIP: require('./gen/resources/EC2EIP.js'),
		EIPAssociation: require('./gen/resources/EC2EIPAssociation.js'),
		Instance: require('./gen/resources/EC2Instance.js'),
		InternetGateway: require('./gen/resources/EC2InternetGateway.js'),
		NatGateway: require('./gen/resources/EC2NatGateway.js'),
		NetworkAcl: require('./gen/resources/EC2NetworkAcl.js'),
		NetworkAclEntry: require('./gen/resources/EC2NetworkAclEntry.js'),
		NetworkInterface: require('./gen/resources/EC2NetworkInterface.js'),
		NetworkInterfaceAttachment: require('./gen/resources/EC2NetworkInterfaceAttachment.js'),
		PlacementGroup: require('./gen/resources/EC2PlacementGroup.js'),
		Route: require('./gen/resources/EC2Route.js'),
		RouteTable: require('./gen/resources/EC2RouteTable.js'),
		SecurityGroup: require('./gen/resources/EC2SecurityGroup.js'),
		SecurityGroupEgress: require('./gen/resources/EC2SecurityGroupEgress.js'),
		SecurityGroupIngress: require('./gen/resources/EC2SecurityGroupIngress.js'),
		SpotFleet: require('./gen/resources/EC2SpotFleet.js'),
		Subnet: require('./gen/resources/EC2Subnet.js'),
		SubnetNetworkAclAssociation: require('./gen/resources/EC2SubnetNetworkAclAssociation.js'),
		SubnetRouteTableAssociation: require('./gen/resources/EC2SubnetRouteTableAssociation.js'),
		Volume: require('./gen/resources/EC2Volume.js'),
		VolumeAttachment: require('./gen/resources/EC2VolumeAttachment.js'),
		VPC: require('./gen/resources/EC2VPC.js'),
		VPCDHCPOptionsAssociation: require('./gen/resources/EC2VPCDHCPOptionsAssociation.js'),
		VPCEndpoint: require('./gen/resources/EC2VPCEndpoint.js'),
		VPCGatewayAttachment: require('./gen/resources/EC2VPCGatewayAttachment.js'),
		VPCPeeringConnection: require('./gen/resources/EC2VPCPeeringConnection.js'),
		VPNConnection: require('./gen/resources/EC2VPNConnection.js'),
		VPNConnectionRoute: require('./gen/resources/EC2VPNConnectionRoute.js'),
		VPNGateway: require('./gen/resources/EC2VPNGateway.js'),
		VPNGatewayRoutePropagation: require('./gen/resources/EC2VPNGatewayRoutePropagation.js')
	},
	ECR: {
		Repository: require('./gen/resources/ECRRepository.js')
	},
	ECS: {
		Cluster: require('./gen/resources/ECSCluster.js'),
		Service: require('./gen/resources/ECSService.js'),
		TaskDefinition: require('./gen/resources/ECSTaskDefinition.js')
	},
	EFS: {
		FileSystem: require('./gen/resources/EFSFileSystem.js'),
		MountTarget: require('./gen/resources/EFSMountTarget.js')
	},
	EMR: {
		Cluster: require('./gen/resources/EMRCluster.js'),
		InstanceGroupConfig: require('./gen/resources/EMRInstanceGroupConfig.js'),
		Step: require('./gen/resources/EMRStep.js')
	},
	ElastiCache: {
		CacheCluster: require('./gen/resources/ElastiCacheCacheCluster.js'),
		ParameterGroup: require('./gen/resources/ElastiCacheParameterGroup.js'),
		ReplicationGroup: require('./gen/resources/ElastiCacheReplicationGroup.js'),
		SecurityGroup: require('./gen/resources/ElastiCacheSecurityGroup.js'),
		SecurityGroupIngress: require('./gen/resources/ElastiCacheSecurityGroupIngress.js'),
		SubnetGroup: require('./gen/resources/ElastiCacheSubnetGroup.js')
	},
	ElasticBeanstalk: {
		Application: require('./gen/resources/ElasticBeanstalkApplication.js'),
		ApplicationVersion: require('./gen/resources/ElasticBeanstalkApplicationVersion.js'),
		ConfigurationTemplate: require('./gen/resources/ElasticBeanstalkConfigurationTemplate.js'),
		Environment: require('./gen/resources/ElasticBeanstalkEnvironment.js')
	},
	ElasticLoadBalancing: {
		LoadBalancer: require('./gen/resources/ElasticLoadBalancingLoadBalancer.js')
	},
	Elasticsearch: {
		Domain: require('./gen/resources/ElasticsearchDomain.js')
	},
	Events: {
		Rule: require('./gen/resources/EventsRule.js')
	},
	GameLift: {
		Alias: require('./gen/resources/GameLiftAlias.js'),
		Build: require('./gen/resources/GameLiftBuild.js'),
		Fleet: require('./gen/resources/GameLiftFleet.js')
	},
	IAM: {
		AccessKey: require('./gen/resources/IAMAccessKey.js'),
		Group: require('./gen/resources/IAMGroup.js'),
		InstanceProfile: require('./gen/resources/IAMInstanceProfile.js'),
		ManagedPolicy: require('./gen/resources/IAMManagedPolicy.js'),
		Policy: require('./gen/resources/IAMPolicy.js'),
		Role: require('./gen/resources/IAMRole.js'),
		User: require('./gen/resources/IAMUser.js'),
		UserToGroupAddition: require('./gen/resources/IAMUserToGroupAddition.js')
	},
	KMS: {
		Key: require('./gen/resources/KMSKey.js')
	},
	Kinesis: {
		Stream: require('./gen/resources/KinesisStream.js')
	},
	Lambda: {
		Alias: require('./gen/resources/LambdaAlias.js'),
		EventSourceMapping: require('./gen/resources/LambdaEventSourceMapping.js'),
		Function: require('./gen/resources/LambdaFunction.js'),
		Permission: require('./gen/resources/LambdaPermission.js'),
		Version: require('./gen/resources/LambdaVersion.js')
	},
	Logs: {
		Destination: require('./gen/resources/LogsDestination.js'),
		LogGroup: require('./gen/resources/LogsLogGroup.js'),
		LogStream: require('./gen/resources/LogsLogStream.js'),
		MetricFilter: require('./gen/resources/LogsMetricFilter.js'),
		SubscriptionFilter: require('./gen/resources/LogsSubscriptionFilter.js')
	},
	OpsWorks: {
		App: require('./gen/resources/OpsWorksApp.js'),
		ElasticLoadBalancerAttachment: require('./gen/resources/OpsWorksElasticLoadBalancerAttachment.js'),
		Instance: require('./gen/resources/OpsWorksInstance.js'),
		Layer: require('./gen/resources/OpsWorksLayer.js'),
		Stack: require('./gen/resources/OpsWorksStack.js')
	},
	RDS: {
		DBCluster: require('./gen/resources/RDSDBCluster.js'),
		DBClusterParameterGroup: require('./gen/resources/RDSDBClusterParameterGroup.js'),
		DBInstance: require('./gen/resources/RDSDBInstance.js'),
		DBParameterGroup: require('./gen/resources/RDSDBParameterGroup.js'),
		DBSecurityGroup: require('./gen/resources/RDSDBSecurityGroup.js'),
		DBSecurityGroupIngress: require('./gen/resources/RDSDBSecurityGroupIngress.js'),
		DBSubnetGroup: require('./gen/resources/RDSDBSubnetGroup.js'),
		EventSubscription: require('./gen/resources/RDSEventSubscription.js'),
		OptionGroup: require('./gen/resources/RDSOptionGroup.js')
	},
	Redshift: {
		Cluster: require('./gen/resources/RedshiftCluster.js'),
		ClusterParameterGroup: require('./gen/resources/RedshiftClusterParameterGroup.js'),
		ClusterSecurityGroup: require('./gen/resources/RedshiftClusterSecurityGroup.js'),
		ClusterSecurityGroupIngress: require('./gen/resources/RedshiftClusterSecurityGroupIngress.js'),
		ClusterSubnetGroup: require('./gen/resources/RedshiftClusterSubnetGroup.js')
	},
	Route53: {
		HealthCheck: require('./gen/resources/Route53HealthCheck.js'),
		HostedZone: require('./gen/resources/Route53HostedZone.js'),
		RecordSet: require('./gen/resources/Route53RecordSet.js'),
		RecordSetGroup: require('./gen/resources/Route53RecordSetGroup.js')
	},
	S3: {
		Bucket: require('./gen/resources/S3Bucket.js'),
		BucketPolicy: require('./gen/resources/S3BucketPolicy.js')
	},
	SDB: {
		Domain: require('./gen/resources/SDBDomain.js')
	},
	SNS: {
		Topic: require('./gen/resources/SNSTopic.js'),
		TopicPolicy: require('./gen/resources/SNSTopicPolicy.js')
	},
	SQS: {
		Queue: require('./gen/resources/SQSQueue.js'),
		QueuePolicy: require('./gen/resources/SQSQueuePolicy.js')
	},
	SSM: {
		Document: require('./gen/resources/SSMDocument.js')
	},
	WAF: {
		ByteMatchSet: require('./gen/resources/WAFByteMatchSet.js'),
		IPSet: require('./gen/resources/WAFIPSet.js'),
		Rule: require('./gen/resources/WAFRule.js'),
		SizeConstraintSet: require('./gen/resources/WAFSizeConstraintSet.js'),
		SqlInjectionMatchSet: require('./gen/resources/WAFSqlInjectionMatchSet.js'),
		WebACL: require('./gen/resources/WAFWebACL.js'),
		XssMatchSet: require('./gen/resources/WAFXssMatchSet.js')
	},
	WorkSpaces: {
		Workspace: require('./gen/resources/WorkSpacesWorkspace.js')
	}
};
