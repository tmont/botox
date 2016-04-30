module.exports = {
	ApiGateway: {
		Account: require('./ApiGatewayAccount.js'),
		ApiKey: require('./ApiGatewayApiKey.js'),
		Authorizer: require('./ApiGatewayAuthorizer.js'),
		BasePathMapping: require('./ApiGatewayBasePathMapping.js'),
		ClientCertificate: require('./ApiGatewayClientCertificate.js'),
		Deployment: require('./ApiGatewayDeployment.js'),
		Method: require('./ApiGatewayMethod.js'),
		Model: require('./ApiGatewayModel.js'),
		Resource: require('./ApiGatewayResource.js'),
		RestApi: require('./ApiGatewayRestApi.js'),
		Stage: require('./ApiGatewayStage.js')
	},
	AutoScaling: {
		AutoScalingGroup: require('./AutoScalingAutoScalingGroup.js'),
		LaunchConfiguration: require('./AutoScalingLaunchConfiguration.js'),
		LifecycleHook: require('./AutoScalingLifecycleHook.js'),
		ScalingPolicy: require('./AutoScalingScalingPolicy.js'),
		ScheduledAction: require('./AutoScalingScheduledAction.js')
	},
	CloudFormation: {
		Authentication: require('./CloudFormationAuthentication.js'),
		CustomResource: require('./CloudFormationCustomResource.js'),
		Interface: require('./CloudFormationInterface.js'),
		Stack: require('./CloudFormationStack.js'),
		WaitCondition: require('./CloudFormationWaitCondition.js'),
		WaitConditionHandle: require('./CloudFormationWaitConditionHandle.js')
	},
	CloudFront: {
		Distribution: require('./CloudFrontDistribution.js')
	},
	CloudTrail: {
		Trail: require('./CloudTrailTrail.js')
	},
	CloudWatch: {
		Alarm: require('./CloudWatchAlarm.js')
	},
	CodeDeploy: {
		Application: require('./CodeDeployApplication.js'),
		DeploymentConfig: require('./CodeDeployDeploymentConfig.js'),
		DeploymentGroup: require('./CodeDeployDeploymentGroup.js')
	},
	CodePipeline: {
		CustomActionType: require('./CodePipelineCustomActionType.js'),
		Pipeline: require('./CodePipelinePipeline.js')
	},
	Config: {
		ConfigRule: require('./ConfigConfigRule.js'),
		ConfigurationRecorder: require('./ConfigConfigurationRecorder.js'),
		DeliveryChannel: require('./ConfigDeliveryChannel.js')
	},
	DataPipeline: {
		Pipeline: require('./DataPipelinePipeline.js')
	},
	DirectoryService: {
		MicrosoftAD: require('./DirectoryServiceMicrosoftAD.js'),
		SimpleAD: require('./DirectoryServiceSimpleAD.js')
	},
	DynamoDB: {
		Table: require('./DynamoDBTable.js')
	},
	EC2: {
		CustomerGateway: require('./EC2CustomerGateway.js'),
		DHCPOptions: require('./EC2DHCPOptions.js'),
		EIP: require('./EC2EIP.js'),
		EIPAssociation: require('./EC2EIPAssociation.js'),
		Host: require('./EC2Host.js'),
		Instance: require('./EC2Instance.js'),
		InternetGateway: require('./EC2InternetGateway.js'),
		NatGateway: require('./EC2NatGateway.js'),
		NetworkAcl: require('./EC2NetworkAcl.js'),
		NetworkAclEntry: require('./EC2NetworkAclEntry.js'),
		NetworkInterface: require('./EC2NetworkInterface.js'),
		NetworkInterfaceAttachment: require('./EC2NetworkInterfaceAttachment.js'),
		PlacementGroup: require('./EC2PlacementGroup.js'),
		Route: require('./EC2Route.js'),
		RouteTable: require('./EC2RouteTable.js'),
		SecurityGroup: require('./EC2SecurityGroup.js'),
		SecurityGroupEgress: require('./EC2SecurityGroupEgress.js'),
		SecurityGroupIngress: require('./EC2SecurityGroupIngress.js'),
		SpotFleet: require('./EC2SpotFleet.js'),
		Subnet: require('./EC2Subnet.js'),
		SubnetNetworkAclAssociation: require('./EC2SubnetNetworkAclAssociation.js'),
		SubnetRouteTableAssociation: require('./EC2SubnetRouteTableAssociation.js'),
		Volume: require('./EC2Volume.js'),
		VolumeAttachment: require('./EC2VolumeAttachment.js'),
		VPC: require('./EC2VPC.js'),
		VPCDHCPOptionsAssociation: require('./EC2VPCDHCPOptionsAssociation.js'),
		VPCEndpoint: require('./EC2VPCEndpoint.js'),
		VPCGatewayAttachment: require('./EC2VPCGatewayAttachment.js'),
		VPCPeeringConnection: require('./EC2VPCPeeringConnection.js'),
		VPNConnection: require('./EC2VPNConnection.js'),
		VPNConnectionRoute: require('./EC2VPNConnectionRoute.js'),
		VPNGateway: require('./EC2VPNGateway.js'),
		VPNGatewayRoutePropagation: require('./EC2VPNGatewayRoutePropagation.js')
	},
	ECR: {
		Repository: require('./ECRRepository.js')
	},
	ECS: {
		Cluster: require('./ECSCluster.js'),
		Service: require('./ECSService.js'),
		TaskDefinition: require('./ECSTaskDefinition.js')
	},
	EFS: {
		FileSystem: require('./EFSFileSystem.js'),
		MountTarget: require('./EFSMountTarget.js')
	},
	EMR: {
		Cluster: require('./EMRCluster.js'),
		InstanceGroupConfig: require('./EMRInstanceGroupConfig.js'),
		Step: require('./EMRStep.js')
	},
	ElastiCache: {
		CacheCluster: require('./ElastiCacheCacheCluster.js'),
		ParameterGroup: require('./ElastiCacheParameterGroup.js'),
		ReplicationGroup: require('./ElastiCacheReplicationGroup.js'),
		SecurityGroup: require('./ElastiCacheSecurityGroup.js'),
		SecurityGroupIngress: require('./ElastiCacheSecurityGroupIngress.js'),
		SubnetGroup: require('./ElastiCacheSubnetGroup.js')
	},
	ElasticBeanstalk: {
		Application: require('./ElasticBeanstalkApplication.js'),
		ApplicationVersion: require('./ElasticBeanstalkApplicationVersion.js'),
		ConfigurationTemplate: require('./ElasticBeanstalkConfigurationTemplate.js'),
		Environment: require('./ElasticBeanstalkEnvironment.js')
	},
	ElasticLoadBalancing: {
		LoadBalancer: require('./ElasticLoadBalancingLoadBalancer.js')
	},
	Elasticsearch: {
		Domain: require('./ElasticsearchDomain.js')
	},
	Events: {
		Rule: require('./EventsRule.js')
	},
	GameLift: {
		Alias: require('./GameLiftAlias.js'),
		Build: require('./GameLiftBuild.js'),
		Fleet: require('./GameLiftFleet.js')
	},
	IAM: {
		AccessKey: require('./IAMAccessKey.js'),
		Group: require('./IAMGroup.js'),
		InstanceProfile: require('./IAMInstanceProfile.js'),
		ManagedPolicy: require('./IAMManagedPolicy.js'),
		Policy: require('./IAMPolicy.js'),
		Role: require('./IAMRole.js'),
		User: require('./IAMUser.js'),
		UserToGroupAddition: require('./IAMUserToGroupAddition.js')
	},
	KMS: {
		Key: require('./KMSKey.js')
	},
	Kinesis: {
		Stream: require('./KinesisStream.js')
	},
	Lambda: {
		Alias: require('./LambdaAlias.js'),
		EventSourceMapping: require('./LambdaEventSourceMapping.js'),
		Function: require('./LambdaFunction.js'),
		Permission: require('./LambdaPermission.js'),
		Version: require('./LambdaVersion.js')
	},
	Logs: {
		Destination: require('./LogsDestination.js'),
		LogGroup: require('./LogsLogGroup.js'),
		LogStream: require('./LogsLogStream.js'),
		MetricFilter: require('./LogsMetricFilter.js'),
		SubscriptionFilter: require('./LogsSubscriptionFilter.js')
	},
	OpsWorks: {
		App: require('./OpsWorksApp.js'),
		ElasticLoadBalancerAttachment: require('./OpsWorksElasticLoadBalancerAttachment.js'),
		Instance: require('./OpsWorksInstance.js'),
		Layer: require('./OpsWorksLayer.js'),
		Stack: require('./OpsWorksStack.js')
	},
	RDS: {
		DBCluster: require('./RDSDBCluster.js'),
		DBClusterParameterGroup: require('./RDSDBClusterParameterGroup.js'),
		DBInstance: require('./RDSDBInstance.js'),
		DBParameterGroup: require('./RDSDBParameterGroup.js'),
		DBSecurityGroup: require('./RDSDBSecurityGroup.js'),
		DBSecurityGroupIngress: require('./RDSDBSecurityGroupIngress.js'),
		DBSubnetGroup: require('./RDSDBSubnetGroup.js'),
		EventSubscription: require('./RDSEventSubscription.js'),
		OptionGroup: require('./RDSOptionGroup.js')
	},
	Redshift: {
		Cluster: require('./RedshiftCluster.js'),
		ClusterParameterGroup: require('./RedshiftClusterParameterGroup.js'),
		ClusterSecurityGroup: require('./RedshiftClusterSecurityGroup.js'),
		ClusterSecurityGroupIngress: require('./RedshiftClusterSecurityGroupIngress.js'),
		ClusterSubnetGroup: require('./RedshiftClusterSubnetGroup.js')
	},
	Route53: {
		HealthCheck: require('./Route53HealthCheck.js'),
		HostedZone: require('./Route53HostedZone.js'),
		RecordSet: require('./Route53RecordSet.js'),
		RecordSetGroup: require('./Route53RecordSetGroup.js')
	},
	S3: {
		Bucket: require('./S3Bucket.js'),
		BucketPolicy: require('./S3BucketPolicy.js')
	},
	SDB: {
		Domain: require('./SDBDomain.js')
	},
	SNS: {
		Topic: require('./SNSTopic.js'),
		TopicPolicy: require('./SNSTopicPolicy.js')
	},
	SQS: {
		Queue: require('./SQSQueue.js'),
		QueuePolicy: require('./SQSQueuePolicy.js')
	},
	SSM: {
		Document: require('./SSMDocument.js')
	},
	WAF: {
		ByteMatchSet: require('./WAFByteMatchSet.js'),
		IPSet: require('./WAFIPSet.js'),
		Rule: require('./WAFRule.js'),
		SizeConstraintSet: require('./WAFSizeConstraintSet.js'),
		SqlInjectionMatchSet: require('./WAFSqlInjectionMatchSet.js'),
		WebACL: require('./WAFWebACL.js'),
		XssMatchSet: require('./WAFXssMatchSet.js')
	},
	WorkSpaces: {
		Workspace: require('./WorkSpacesWorkspace.js')
	}
};
