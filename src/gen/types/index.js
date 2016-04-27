module.exports = {
	
	/**
	 * The SourceBundle property is an embedded property of the AWS::ElasticBeanstalk::ApplicationVersion resource.
	 */
	ElasticBeanstalkSourceBundlePropertyType: require('./ElasticBeanstalkSourceBundlePropertyType.js'),
	
	/**
	 * StageKey is a property of the AWS::ApiGateway::ApiKey resource that specifies the Amazon API Gateway (API Gateway) stage to associate with the API key. This association allows only clients with the key to make requests to methods in that stage.
	 */
	APIGatewayApiKeyStageKey: require('./APIGatewayApiKeyStageKey.js'),
	
	/**
	 * MethodSetting is a property of the Amazon API Gateway Deployment StageDescription property that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
	 */
	APIGatewayDeploymentStageDescriptionMethodSetting: require('./APIGatewayDeploymentStageDescriptionMethodSetting.js'),
	
	/**
	 * Integration is a property of the AWS::ApiGateway::Method resource that specifies information about the target back end that an Amazon API Gateway (API Gateway) method calls.
	 */
	APIGatewayMethodIntegration: require('./APIGatewayMethodIntegration.js'),
	
	/**
	 * IntegrationResponse is a property of the Amazon API Gateway Method Integration property that specifies the response that Amazon API Gateway (API Gateway) sends after a method's back end finishes processing a request.
	 */
	APIGatewayMethodIntegrationIntegrationResponse: require('./APIGatewayMethodIntegrationIntegrationResponse.js'),
	
	/**
	 * MethodResponse is a property of the AWS::ApiGateway::Method resource that defines the responses that can be sent to the client who calls an Amazon API Gateway (API Gateway) method.
	 */
	APIGatewayMethodMethodResponse: require('./APIGatewayMethodMethodResponse.js'),
	
	/**
	 * S3Location is a property of the AWS::ApiGateway::RestApi resource that specifies the Amazon Simple Storage Service (Amazon S3) location of a Swagger file that defines a set of RESTful APIs in JSON or YAML for an Amazon API Gateway (API Gateway) RestApi.
	 */
	APIGatewayRestApiS3Location: require('./APIGatewayRestApiS3Location.js'),
	
	/**
	 * MethodSetting is a property of the AWS::ApiGateway::Stage resource that configures settings for all methods in an Amazon API Gateway (API Gateway) stage.
	 */
	APIGatewayStageMethodSetting: require('./APIGatewayStageMethodSetting.js'),
	
	/**
	 * The MetricsCollection is a property of the AWS::AutoScaling::AutoScalingGroup resource that describes the group metrics that an Auto Scaling group sends to CloudWatch. These metrics describe the group rather than any of its instances. For more information, see EnableMetricsCollection in the Auto Scaling API Reference.
	 */
	AutoScalingMetricsCollection: require('./AutoScalingMetricsCollection.js'),
	
	/**
	 * The NotificationConfigurations property is an embedded property of the AWS::AutoScaling::AutoScalingGroup resource that specifies the events for which the Auto Scaling group sends notifications.
	 */
	AutoScalingNotificationConfigurations: require('./AutoScalingNotificationConfigurations.js'),
	
	/**
	 * StepAdjustments is a property of the AWS::AutoScaling::ScalingPolicy resource that describes a scaling adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. For more information, see StepAdjustment in the Auto Scaling API Reference.
	 */
	AutoScalingScalingPolicyStepAdjustments: require('./AutoScalingScalingPolicyStepAdjustments.js'),
	
	/**
	 * The Auto Scaling Tags property is an embedded property of the AWS::AutoScaling::AutoScalingGroup type. For more information about tags, go to Tagging Auto Scaling Groups and Amazon EC2 Instances in the Auto Scaling Developer Guide.
	 */
	AutoScalingTagsPropertyType: require('./AutoScalingTagsPropertyType.js'),
	
	/**
	 * The AutoScaling Block Device Mapping type is an embedded property of the AWS::AutoScaling::LaunchConfiguration type.
	 */
	CloudFormationAutoScalingBlockDeviceMappingPropertyType: require('./CloudFormationAutoScalingBlockDeviceMappingPropertyType.js'),
	
	/**
	 * The AutoScaling EBS Block Device type is an embedded property of the AutoScaling Block Device Mapping type.
	 */
	CloudFormationAutoScalingEBSBlockDevicePropertyType: require('./CloudFormationAutoScalingEBSBlockDevicePropertyType.js'),
	
	/**
	 * Label is a property of the ParameterGroup and ParameterLabel properties that defines name for a parameter group or parameter.
	 */
	CloudFormationInterfaceLabel: require('./CloudFormationInterfaceLabel.js'),
	
	/**
	 * ParameterGroup is a property of the AWS::CloudFormation::Interface resource that defines a parameter group and the parameters to include in the group.
	 */
	CloudFormationInterfaceParameterGroup: require('./CloudFormationInterfaceParameterGroup.js'),
	
	/**
	 * ParameterLabel is a property of the AWS::CloudFormation::Interface resource that specifies a friendly name or description for a parameter that the AWS CloudFormation console shows instead of the parameter's logical ID.
	 */
	CloudFormationInterfaceParameterLabel: require('./CloudFormationInterfaceParameterLabel.js'),
	
	/**
	 * You can use the AWS CloudFormation Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with AWS CloudFormation, see the individual resources in AWS Resource Types Reference.
	 */
	CloudFormationResourceTagsType: require('./CloudFormationResourceTagsType.js'),
	
	/**
	 * The Parameters type is an embedded property of the AWS::CloudFormation::Stack type.
	 */
	CloudFormationStackParametersPropertyType: require('./CloudFormationStackParametersPropertyType.js'),
	
	/**
	 * DefaultCacheBehavior is a property of the DistributionConfig property that describes the default cache behavior for an Amazon CloudFront distribution.
	 */
	CloudFrontDefaultCacheBehavior: require('./CloudFrontDefaultCacheBehavior.js'),
	
	/**
	 * DistributionConfig is a property of the AWS::CloudFront::Distribution property that describes which Amazon CloudFront origin servers to get your files from when users request the files through your website or application.
	 */
	CloudFrontDistributionConfig: require('./CloudFrontDistributionConfig.js'),
	
	/**
	 * CacheBehavior is a property of the DistributionConfig property that describes the Amazon CloudFront (CloudFront) cache behavior when the requested URL matches a pattern.
	 */
	CloudFrontDistributionConfigCacheBehavior: require('./CloudFrontDistributionConfigCacheBehavior.js'),
	
	/**
	 * CustomErrorResponse is a property of the CloudFront DistributionConfig resource that defines custom error messages for certain HTTP status codes.
	 */
	CloudFrontDistributionConfigCustomErrorResponse: require('./CloudFrontDistributionConfigCustomErrorResponse.js'),
	
	/**
	 * Origin is a property of the DistributionConfig property that describes an Amazon CloudFront distribution origin.
	 */
	CloudFrontDistributionConfigOrigin: require('./CloudFrontDistributionConfigOrigin.js'),
	
	/**
	 * CustomOrigin is a property of the Amazon CloudFront Origin property that describes an HTTP server.
	 */
	CloudFrontDistributionConfigOriginCustomOrigin: require('./CloudFrontDistributionConfigOriginCustomOrigin.js'),
	
	/**
	 * S3Origin is a property of the Origin property that describes the Amazon Simple Storage Service (S3) origin to associate with an Amazon CloudFront origin.
	 */
	CloudFrontDistributionConfigOriginS3Origin: require('./CloudFrontDistributionConfigOriginS3Origin.js'),
	
	/**
	 * GeoRestriction is a property of the CloudFront DistributionConfiguration Restrictions property that describes the countries in which Amazon CloudFront allows viewers to access your content.
	 */
	CloudFrontDistributionConfigRestrictionsGeoRestriction: require('./CloudFrontDistributionConfigRestrictionsGeoRestriction.js'),
	
	/**
	 * Restrictions is a property of the CloudFront DistributionConfig property that lets you limit which viewers can access your content.
	 */
	CloudFrontDistributionConfigurationRestrictions: require('./CloudFrontDistributionConfigurationRestrictions.js'),
	
	/**
	 * ViewerCertificate is a property of the CloudFront DistributionConfig property that specifies which certificate to use when viewers use HTTPS to request objects.
	 */
	CloudFrontDistributionConfigurationViewerCertificate: require('./CloudFrontDistributionConfigurationViewerCertificate.js'),
	
	/**
	 * ForwardedValues is a property of the DefaultCacheBehavior and CacheBehavior properties that indicates whether Amazon CloudFront forwards query strings or cookies.
	 */
	CloudFrontForwardedValues: require('./CloudFrontForwardedValues.js'),
	
	/**
	 * Cookies is a property of the CloudFront ForwardedValues that describes which cookies are forwarded to the Amazon CloudFront origin.
	 */
	CloudFrontForwardedValuesCookies: require('./CloudFrontForwardedValuesCookies.js'),
	
	/**
	 * Logging is a property of the DistributionConfig property that enables Amazon CloudFront to deliver access logs for each distribution to an Amazon Simple Storage Service (S3) bucket.
	 */
	CloudFrontLogging: require('./CloudFrontLogging.js'),
	
	/**
	 * Target is a property of the AWS::Events::Rule resource that specifies the targets that CloudWatch Events invokes when a rule is triggered, such as AWS Lambda (Lambda) functions or Amazon Kinesis streams.
	 */
	CloudWatchEventsRuleTarget: require('./CloudWatchEventsRuleTarget.js'),
	
	/**
	 * MetricTransformation is a property of the AWS::Logs::MetricFilter resource that describes how to transform log streams into a CloudWatch metric.
	 */
	CloudWatchLogsMetricFilterMetricTransformationProperty: require('./CloudWatchLogsMetricFilterMetricTransformationProperty.js'),
	
	/**
	 * The Metric Dimension is an embedded property of the AWS::CloudWatch::Alarm type. Dimensions are arbitrary name/value pairs that can be associated with a CloudWatch metric. You can specify a maximum of 10 dimensions for a given metric.
	 */
	CloudWatchMetricDimensionPropertyType: require('./CloudWatchMetricDimensionPropertyType.js'),
	
	/**
	 * MinimumHealthyHosts is a property of the AWS::CodeDeploy::DeploymentConfig resource that defines how many instances must be healthy during an AWS CodeDeploy deployment.
	 */
	CodeDeployDeploymentConfigMinimumHealthyHosts: require('./CodeDeployDeploymentConfigMinimumHealthyHosts.js'),
	
	/**
	 * Deployment is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies the AWS CodeDeploy application revision that will be deployed to the deployment group.
	 */
	CodeDeployDeploymentGroupDeployment: require('./CodeDeployDeploymentGroupDeployment.js'),
	
	/**
	 * Revision is a property of the AWS::CodeDeploy::DeploymentGroup property that defines the location of the AWS CodeDeploy application revision to deploy.
	 */
	CodeDeployDeploymentGroupDeploymentRevision: require('./CodeDeployDeploymentGroupDeploymentRevision.js'),
	
	/**
	 * GitHubLocation is a property of the AWS CodeDeploy DeploymentGroup Deployment Revision property that specifies the location of an application revision that is stored in GitHub.
	 */
	CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation: require('./CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation.js'),
	
	/**
	 * S3Location is a property of the AWS CodeDeploy DeploymentGroup Deployment Revision property that specifies the location of an application revision that is stored in Amazon Simple Storage Service (Amazon S3).
	 */
	CodeDeployDeploymentGroupDeploymentRevisionS3Location: require('./CodeDeployDeploymentGroupDeploymentRevisionS3Location.js'),
	
	/**
	 * Ec2TagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which EC2 instances to associate with the deployment group.
	 */
	CodeDeployDeploymentGroupEc2TagFilters: require('./CodeDeployDeploymentGroupEc2TagFilters.js'),
	
	/**
	 * OnPremisesInstanceTagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which on-premises instances to associate with the deployment group. To register on-premise instances with AWS CodeDeploy, see Configure Existing On-Premises Instances by Using AWS CodeDeploy in the AWS CodeDeploy User Guide.
	 */
	CodeDeployDeploymentGroupOnPremisesInstanceTagFilters: require('./CodeDeployDeploymentGroupOnPremisesInstanceTagFilters.js'),
	
	/**
	 * ArtifactDetails is a property of the AWS::CodePipeline::CustomActionType resource that specifies the details of an artifact for an AWS CodePipeline custom action. For valid values, see ArtifactDetails in the AWS CodePipeline API Reference.
	 */
	CodePipelineCustomActionTypeArtifactDetails: require('./CodePipelineCustomActionTypeArtifactDetails.js'),
	
	/**
	 * ConfigurationProperties is a property of the AWS::CodePipeline::CustomActionType resource that defines a configuration for an AWS CodePipeline custom action.
	 */
	CodePipelineCustomActionTypeConfigurationProperties: require('./CodePipelineCustomActionTypeConfigurationProperties.js'),
	
	/**
	 * Settings is a property of the AWS::CodePipeline::CustomActionType resource that provides URLs that users can access to view information about the AWS CodePipeline custom action.
	 */
	CodePipelineCustomActionTypeSettings: require('./CodePipelineCustomActionTypeSettings.js'),
	
	/**
	 * ArtifactStore is a property of the AWS::CodePipeline::Pipeline resource that defines the S3 location where AWS CodePipeline stores pipeline artifacts.
	 */
	CodePipelinePipelineArtifactStore: require('./CodePipelinePipelineArtifactStore.js'),
	
	/**
	 * EncryptionKey is a property of the AWS CodePipeline Pipeline ArtifactStore property that specifies which key AWS CodePipeline uses to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
	 */
	CodePipelinePipelineArtifactStoreEncryptionKey: require('./CodePipelinePipelineArtifactStoreEncryptionKey.js'),
	
	/**
	 * DisableInboundStageTransitions is a property of the AWS::CodePipeline::Pipeline resource that specifies which AWS CodePipeline stage to disable transitions to.
	 */
	CodePipelinePipelineDisableInboundStageTransitions: require('./CodePipelinePipelineDisableInboundStageTransitions.js'),
	
	/**
	 * Stages is a property of the AWS::CodePipeline::Pipeline resource that specifies a sequence of tasks for AWS CodePipeline to complete on an artifact.
	 */
	CodePipelinePipelineStages: require('./CodePipelinePipelineStages.js'),
	
	/**
	 * Actions is a property of the AWS CodePipeline Pipeline Stages property that specifies an action for an AWS CodePipeline stage.
	 */
	CodePipelinePipelineStagesActions: require('./CodePipelinePipelineStagesActions.js'),
	
	/**
	 * ActionTypeId is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies the action type and provider for an AWS CodePipeline action.
	 */
	CodePipelinePipelineStagesActionsActionTypeId: require('./CodePipelinePipelineStagesActionsActionTypeId.js'),
	
	/**
	 * InputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that the AWS CodePipeline action works on, such as a test or build artifact.
	 */
	CodePipelinePipelineStagesActionsInputArtifacts: require('./CodePipelinePipelineStagesActionsInputArtifacts.js'),
	
	/**
	 * OutputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that is the result of an AWS CodePipeline action, such as a test or build artifact.
	 */
	CodePipelinePipelineStagesActionsOutputArtifacts: require('./CodePipelinePipelineStagesActionsOutputArtifacts.js'),
	
	/**
	 * Blockers is a property of the AWS CodePipeline Pipeline Stages property that specifies an AWS CodePipeline gate declaration.
	 */
	CodePipelinePipelineStagesBlockers: require('./CodePipelinePipelineStagesBlockers.js'),
	
	/**
	 * Scope is a property of the AWS::Config::ConfigRule resource that specifies which AWS resources will trigger AWS Config to run an evaluation when their configurations change. The scope can include one or more resource types, a tag key and value, or one resource type and one resource ID. You cannot specify a tag-key value and a resource ID or type.
	 */
	ConfigConfigRuleScope: require('./ConfigConfigRuleScope.js'),
	
	/**
	 * Source is a property of the AWS::Config::ConfigRule resource that specifies the rule owner, the rule identifier, and the events that trigger an AWS Config evaluation of your AWS resources.
	 */
	ConfigConfigRuleSource: require('./ConfigConfigRuleSource.js'),
	
	/**
	 * SourceDetails is a property of the AWS Config ConfigRule Source property that specifies the source and type of event that triggers AWS Config to evaluate your AWS resources.
	 */
	ConfigConfigRuleSourceSourceDetails: require('./ConfigConfigRuleSourceSourceDetails.js'),
	
	/**
	 * RecordingGroup is property of the AWS::Config::ConfigurationRecorder resource that defines which AWS resource types to include in a recording group.
	 */
	ConfigConfigurationRecorderRecordingGroup: require('./ConfigConfigurationRecorderRecordingGroup.js'),
	
	/**
	 * ConfigSnapshotDeliveryProperties is a property of the AWS::Config::DeliveryChannel resource that specifies how AWS Config delivers configuration snapshots to the S3 bucket in your delivery channel.
	 */
	ConfigDeliveryChannelConfigSnapshotDeliveryProperties: require('./ConfigDeliveryChannelConfigSnapshotDeliveryProperties.js'),
	
	/**
	 * Key-value pairs that describe the properties of a data pipeline object.
	 */
	DataPipelineDataPipelineObjectFields: require('./DataPipelineDataPipelineObjectFields.js'),
	
	/**
	 * Attribute is a property of the AWS Data Pipeline Pipeline ParameterObjects property that defines the attributes of a parameter object as key-value pairs.
	 */
	DataPipelineParameterObjectsAttributes: require('./DataPipelineParameterObjectsAttributes.js'),
	
	/**
	 * PipelineObjects is a property of the AWS::DataPipeline::Pipeline resource that describes a data pipeline object.
	 */
	DataPipelinePipelineObjects: require('./DataPipelinePipelineObjects.js'),
	
	/**
	 * ParameterObjects is a property of the AWS::DataPipeline::Pipeline resource that describes parameters that are used in a pipeline definition.
	 */
	DataPipelinePipelineParameterObjects: require('./DataPipelinePipelineParameterObjects.js'),
	
	/**
	 * ParameterValues is a property of the AWS::DataPipeline::Pipeline resource that sets values for parameters that are used in a pipeline definition.
	 */
	DataPipelinePipelineParameterValues: require('./DataPipelinePipelineParameterValues.js'),
	
	/**
	 * PipelineTags is a property of the AWS::DataPipeline::Pipeline resource that defines arbitrary key-value pairs for a pipeline.
	 */
	DataPipelinePipelinePipelineTags: require('./DataPipelinePipelinePipelineTags.js'),
	
	/**
	 * VpcSettings is a property of the AWS::DirectoryService::MicrosoftAD resource that specifies the VPC settings for a Microsoft directory server.
	 */
	DirectoryServiceMicrosoftADVpcSettings: require('./DirectoryServiceMicrosoftADVpcSettings.js'),
	
	/**
	 * VpcSettings is a property of the AWS::DirectoryService::SimpleAD resource that specifies the VPC settings for a directory server.
	 */
	DirectoryServiceSimpleADVpcSettings: require('./DirectoryServiceSimpleADVpcSettings.js'),
	
	/**
	 * A list of attribute definitions for the AWS::DynamoDB::Table resource. Each element is composed of an AttributeName and AttributeType.
	 */
	DynamoDBAttributeDefinitions: require('./DynamoDBAttributeDefinitions.js'),
	
	/**
	 * Describes global secondary indexes for the AWS::DynamoDB::Table resource.
	 */
	DynamoDBGlobalSecondaryIndexes: require('./DynamoDBGlobalSecondaryIndexes.js'),
	
	/**
	 * Describes a primary key for the AWS::DynamoDB::Table resource or a key schema for an index. Each element is composed of an AttributeName and KeyType.
	 */
	DynamoDBKeySchema: require('./DynamoDBKeySchema.js'),
	
	/**
	 * Describes local secondary indexes for the AWS::DynamoDB::Table resource. Each index is scoped to a given hash key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB.
	 */
	DynamoDBLocalSecondaryIndexes: require('./DynamoDBLocalSecondaryIndexes.js'),
	
	/**
	 * Attributes that are copied (projected) from the source table into the index. These attributes are additions to the primary key attributes and index key attributes, which are automatically projected.
	 */
	DynamoDBProjectionObject: require('./DynamoDBProjectionObject.js'),
	
	/**
	 * Describes a set of provisioned throughput values for an AWS::DynamoDB::Table resource. DynamoDB uses these capacity units to allocate sufficient resources to provide the requested throughput.
	 */
	DynamoDBProvisionedThroughput: require('./DynamoDBProvisionedThroughput.js'),
	
	/**
	 * StreamSpecification is a property of the AWS::DynamoDB::Table resource that defines the settings of a DynamoDB table's stream.
	 */
	DynamoDBTableStreamSpecification: require('./DynamoDBTableStreamSpecification.js'),
	
	/**
	 * The Amazon EC2 block device mapping property is an embedded property of the AWS::EC2::Instance resource. For block device mappings for an Auto Scaling launch configuration, see AutoScaling Block Device Mapping.
	 */
	EC2BlockDeviceMappingProperty: require('./EC2BlockDeviceMappingProperty.js'),
	
	/**
	 * DeploymentConfiguration is a property of the AWS::ECS::Service resource that configures how many tasks run when you update a running Amazon EC2 Container Service (Amazon ECS) service.
	 */
	EC2ContainerServiceServiceDeploymentConfiguration: require('./EC2ContainerServiceServiceDeploymentConfiguration.js'),
	
	/**
	 * LoadBalancers is a property of the AWS::ECS::Service resource that specifies the load balancer to associate with an Amazon EC2 Container Service (Amazon ECS) service.
	 */
	EC2ContainerServiceServiceLoadBalancers: require('./EC2ContainerServiceServiceLoadBalancers.js'),
	
	/**
	 * ContainerDefinitions is a property of the AWS::ECS::TaskDefinition resource that describes the configuration of an Amazon EC2 Container Service (Amazon ECS) container. The container definitions are passed to the Docker daemon.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitions: require('./EC2ContainerServiceTaskDefinitionContainerDefinitions.js'),
	
	/**
	 * Environment is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies environment variables for a container.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment: require('./EC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment.js'),
	
	/**
	 * HostEntry is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies the hostnames and IP address entries to add to the Amazon EC2 Container Service (Amazon ECS) container's /etc/hosts file.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry: require('./EC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry.js'),
	
	/**
	 * LogConfiguration is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that configures a custom log driver for an Amazon EC2 Container Service (Amazon ECS) container.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration: require('./EC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration.js'),
	
	/**
	 * MountPoints is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies the mount points for data volumes in a container.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints: require('./EC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints.js'),
	
	/**
	 * PortMappings is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that maps a container port to a host port.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings: require('./EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings.js'),
	
	/**
	 * Ulimit is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that specifies resource limits for an Amazon EC2 Container Service (Amazon ECS) container.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit: require('./EC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit.js'),
	
	/**
	 * VolumesFrom is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that mounts data volumes from other containers.
	 */
	EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom: require('./EC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom.js'),
	
	/**
	 * Volumes is a property of the AWS::ECS::TaskDefinition resource that specifies a list of data volumes, which your containers can then access.
	 */
	EC2ContainerServiceTaskDefinitionVolumes: require('./EC2ContainerServiceTaskDefinitionVolumes.js'),
	
	/**
	 * Host is a property of the Amazon EC2 Container Service TaskDefinition Volumes property that specifies the data volume path on the host container instance.
	 */
	EC2ContainerServiceTaskDefinitionVolumesHost: require('./EC2ContainerServiceTaskDefinitionVolumesHost.js'),
	
	/**
	 * The EC2 ICMP property is an embedded property of the AWS::EC2::NetworkAclEntry type.
	 */
	EC2ICMPPropertyType: require('./EC2ICMPPropertyType.js'),
	
	/**
	 * SsmAssociations is a property of the AWS::EC2::Instance resource that specifies the Amazon EC2 Simple Systems Manager (SSM) document and parameter values to associate with an instance.
	 */
	EC2InstanceSsmAssociations: require('./EC2InstanceSsmAssociations.js'),
	
	/**
	 * AssociationParameters is a property of the Amazon EC2 Instance SsmAssociations property that specifies input parameter values for an Amazon EC2 Simple Systems Manager (SSM) document.
	 */
	EC2InstanceSsmAssociationsAssociationParameters: require('./EC2InstanceSsmAssociationsAssociationParameters.js'),
	
	/**
	 * The EC2 MountPoint property is an embedded property of the AWS::EC2::Instance type.
	 */
	EC2MountPointPropertyType: require('./EC2MountPointPropertyType.js'),
	
	/**
	 * Describes a network interface association for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Association property.
	 */
	EC2NetworkInterfaceAssociation: require('./EC2NetworkInterfaceAssociation.js'),
	
	/**
	 * Describes a network interface attachment for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Attachment property.
	 */
	EC2NetworkInterfaceAttachment: require('./EC2NetworkInterfaceAttachment.js'),
	
	/**
	 * The EC2 Network Interface type is an embedded property of the AWS::EC2::Instance type. It specifies a network interface that is to be attached.
	 */
	EC2NetworkInterfaceEmbeddedPropertyType: require('./EC2NetworkInterfaceEmbeddedPropertyType.js'),
	
	/**
	 * Refers to an individual Amazon EC2 security group by ID or name in a group set. AWS::EC2::NetworkInterface takes a list of objects of this type in its GroupSet property.
	 */
	EC2NetworkInterfaceGroupItem: require('./EC2NetworkInterfaceGroupItem.js'),
	
	/**
	 * The PrivateIpAddressSpecification type is an embedded property of the AWS::EC2::NetworkInterface type.
	 */
	EC2NetworkInterfacePrivateIPSpecification: require('./EC2NetworkInterfacePrivateIPSpecification.js'),
	
	/**
	 * The EC2 PortRange property is an embedded property of the AWS::EC2::NetworkAclEntry type.
	 */
	EC2PortRangePropertyType: require('./EC2PortRangePropertyType.js'),
	
	/**
	 * The EC2 Security Group Rule is an embedded property of the AWS::EC2::SecurityGroup type.
	 */
	EC2SecurityGroupRulePropertyType: require('./EC2SecurityGroupRulePropertyType.js'),
	
	/**
	 * SpotFleetRequestConfigData is a property of the AWS::EC2::SpotFleet resource that defines the configuration of a Spot fleet request.
	 */
	EC2SpotFleetSpotFleetRequestConfigData: require('./EC2SpotFleetSpotFleetRequestConfigData.js'),
	
	/**
	 * Monitoring is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that enables instance monitoring.
	 */
	EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring: require('./EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring.js'),
	
	/**
	 * Describes the environment tier for an AWS::ElasticBeanstalk::Environment resource. For more information, see Environment Tiers in the AWS Elastic Beanstalk Developer Guide.
	 */
	ElasticBeanstalkEnvironmentTierPropertyType: require('./ElasticBeanstalkEnvironmentTierPropertyType.js'),
	
	/**
	 * OptionSettings is an embedded property of the AWS::ElasticBeanstalk::Environment and AWS::ElasticBeanstalk::ConfigurationTemplate resources. You use the OptionSettings property to specify an array of options for the Elastic Beanstalk environment.
	 */
	ElasticBeanstalkOptionSettingsPropertyType: require('./ElasticBeanstalkOptionSettingsPropertyType.js'),
	
	/**
	 * StageKey is a property of the AWS::ApiGateway::Deployment resource that configures an Amazon API Gateway (API Gateway) deployment stage.
	 */
	APIGatewayDeploymentStageDescription: require('./APIGatewayDeploymentStageDescription.js'),
	
	/**
	 * Use settings from another Elastic Beanstalk configuration template for the AWS::ElasticBeanstalk::ConfigurationTemplate resource type.
	 */
	ElasticBeanstalkSourceConfigurationPropertyType: require('./ElasticBeanstalkSourceConfigurationPropertyType.js'),
	
	/**
	 * The Amazon Elastic Block Store block device type is an embedded property of the Amazon EC2 Block Device Mapping Property property.
	 */
	ElasticBlockStoreBlockDeviceProperty: require('./ElasticBlockStoreBlockDeviceProperty.js'),
	
	/**
	 * LaunchSpecifications is a property of the Amazon EC2 SpotFleet SpotFleetRequestConfigData property that defines the launch specifications for the Spot fleet request.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.js'),
	
	/**
	 * BlockDeviceMappings is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the block devices that are mapped to an instance.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings.js'),
	
	/**
	 * Ebs is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications BlockDeviceMappings property that defines a block device for an Amazon Elastic Block Store (Amazon EBS) volume.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.js'),
	
	/**
	 * IamInstanceProfile is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that specifies the IAM instance profile to associate with the instances.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile.js'),
	
	/**
	 * NetworkInterfaces is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the network interface of the instances.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.js'),
	
	/**
	 * PrivateIpAddresses is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications NetworkInterfaces property that specifies the private IP address that you want to assign to the network interface.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses.js'),
	
	/**
	 * Placement is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the placement group for the Spot instances.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement.js'),
	
	/**
	 * SecurityGroups is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that specifies a security group to associate with the instances.
	 */
	ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups: require('./ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups.js'),
	
	/**
	 * FileSystemTags is a property of the AWS::EFS::FileSystem resource that associates key-value pairs with a file system. You can use any of the following Unicode characters for keys and values: letters, digits, whitespace, _, ., /, =, +, and -.
	 */
	ElasticFileSystemFileSystemFileSystemTags: require('./ElasticFileSystemFileSystemFileSystemTags.js'),
	
	/**
	 * The AccessLoggingPolicy property describes where and how access logs are stored for the AWS::ElasticLoadBalancing::LoadBalancer resource.
	 */
	ElasticLoadBalancingAccessLoggingPolicy: require('./ElasticLoadBalancingAccessLoggingPolicy.js'),
	
	/**
	 * The AppCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 */
	ElasticLoadBalancingAppCookieStickinessPolicyType: require('./ElasticLoadBalancingAppCookieStickinessPolicyType.js'),
	
	/**
	 * The ConnectionDrainingPolicy property describes how deregistered or unhealthy instances handle in-flight requests for the AWS::ElasticLoadBalancing::LoadBalancer resource. Connection draining ensures that the load balancer completes serving all in-flight requests made to a registered instance when the instance is deregistered or becomes unhealthy. Without connection draining, the load balancer closes connections to deregistered or unhealthy instances, and any in-flight requests are not completed.
	 */
	ElasticLoadBalancingConnectionDrainingPolicy: require('./ElasticLoadBalancingConnectionDrainingPolicy.js'),
	
	/**
	 * ConnectionSettings is a property of the AWS::ElasticLoadBalancing::LoadBalancer resource that describes how long the front-end and back-end connections of your load balancer can remain idle. For more information, see Configure Idle Connection Timeout in the Elastic Load Balancing Developer Guide.
	 */
	ElasticLoadBalancingConnectionSettings: require('./ElasticLoadBalancingConnectionSettings.js'),
	
	/**
	 * The ElasticLoadBalancing HealthCheck is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 */
	ElasticLoadBalancingHealthCheckType: require('./ElasticLoadBalancingHealthCheckType.js'),
	
	/**
	 * The LBCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 */
	ElasticLoadBalancingLBCookieStickinessPolicyType: require('./ElasticLoadBalancingLBCookieStickinessPolicyType.js'),
	
	/**
	 * The Listener property is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
	 */
	ElasticLoadBalancingListenerPropertyType: require('./ElasticLoadBalancingListenerPropertyType.js'),
	
	/**
	 * The ElasticLoadBalancing policy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer resource. You associate policies with a listener by referencing a policy's name in the listener's PolicyNames property.
	 */
	ElasticLoadBalancingPolicyType: require('./ElasticLoadBalancingPolicyType.js'),
	
	/**
	 * Application is a property of the AWS::EMR::Cluster resource that adds an Amazon Elastic MapReduce (Amazon EMR) application bundle or third-party software to an Amazon EMR cluster.
	 */
	ElasticMapReduceClusterApplication: require('./ElasticMapReduceClusterApplication.js'),
	
	/**
	 * BootstrapActionConfig is a property of the AWS::EMR::Cluster resource that specifies bootstrap actions that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
	 */
	ElasticMapReduceClusterBootstrapActionConfig: require('./ElasticMapReduceClusterBootstrapActionConfig.js'),
	
	/**
	 * ScriptBootstrapActionConfig is a property of the Amazon Elastic MapReduce Cluster BootstrapActionConfig property that specifies the arguments and location of the bootstrap script that Amazon Elastic MapReduce (Amazon EMR) runs before it installs applications on the cluster nodes.
	 */
	ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig: require('./ElasticMapReduceClusterBootstrapActionConfigScriptBootstrapActionConfig.js'),
	
	/**
	 * Configuration is a property of the AWS::EMR::Cluster resource that specifies the software configuration of an Amazon Elastic MapReduce (Amazon EMR) cluster. For example configurations, see Amazon EMR Configurations in the Amazon Elastic MapReduce API Reference.
	 */
	ElasticMapReduceClusterConfiguration: require('./ElasticMapReduceClusterConfiguration.js'),
	
	/**
	 * JobFlowInstancesConfig is a property of the AWS::EMR::Cluster resource that configures the EC2 instances (nodes) that will run jobs in an Amazon Elastic MapReduce (Amazon EMR) cluster.
	 */
	ElasticMapReduceClusterJobFlowInstancesConfig: require('./ElasticMapReduceClusterJobFlowInstancesConfig.js'),
	
	/**
	 * InstanceGroupConfig is a property of the CoreInstanceGroup and MasterInstanceGroup properties of the job flow instances configuration. The InstanceGroupConfig property specifies the settings for instances (nodes) in the core and master instance groups of an Amazon Elastic MapReduce (Amazon EMR) cluster.
	 */
	ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig: require('./ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.js'),
	
	/**
	 * PlacementType is a property of the Amazon Elastic MapReduce Cluster JobFlowInstancesConfig property that specifies the Availability Zone (AZ) in which the job flow runs.
	 */
	ElasticMapReduceClusterJobFlowInstancesConfigPlacementType: require('./ElasticMapReduceClusterJobFlowInstancesConfigPlacementType.js'),
	
	/**
	 * EbsConfiguration is a property of the AWS::EMR::Cluster and AWS::EMR::InstanceGroupConfig resources that defines Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your Amazon Elastic MapReduce (Amazon EMR) instances.
	 */
	ElasticMapReduceEbsConfiguration: require('./ElasticMapReduceEbsConfiguration.js'),
	
	/**
	 * EbsBlockDeviceConfig is a property of the Amazon Elastic MapReduce EbsConfiguration property that defines the settings for the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
	 */
	ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig: require('./ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig.js'),
	
	/**
	 * VolumeSpecification is a property of the Amazon Elastic MapReduce EbsConfiguration property that configures the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
	 */
	ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification: require('./ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification.js'),
	
	/**
	 * HadoopJarStepConfig is a property of the AWS::EMR::Step resource that specifies a JAR file and runtime settings that Amazon Elastic MapReduce (Amazon EMR) executes.
	 */
	ElasticMapReduceStepHadoopJarStepConfig: require('./ElasticMapReduceStepHadoopJarStepConfig.js'),
	
	/**
	 * KeyValue is a property of the Amazon Elastic MapReduce Step HadoopJarStepConfig property that specifies key-value pairs, which are passed to a JAR file that Amazon Elastic MapReduce (Amazon EMR) executes.
	 */
	ElasticMapReduceStepHadoopJarStepConfigKeyValue: require('./ElasticMapReduceStepHadoopJarStepConfigKeyValue.js'),
	
	/**
	 * EBSOptions is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the Amazon Elasticsearch Service (Amazon ES) domain.
	 */
	ElasticsearchServiceDomainEBSOptions: require('./ElasticsearchServiceDomainEBSOptions.js'),
	
	/**
	 * ElasticsearchClusterConfig is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the cluster of an Amazon Elasticsearch Service (Amazon ES) domain.
	 */
	ElasticsearchServiceDomainElasticsearchClusterConfig: require('./ElasticsearchServiceDomainElasticsearchClusterConfig.js'),
	
	/**
	 * SnapshotOptions is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the automated snapshot of Amazon Elasticsearch Service (Amazon ES) domain indices.
	 */
	ElasticsearchServiceDomainSnapshotOptions: require('./ElasticsearchServiceDomainSnapshotOptions.js'),
	
	/**
	 * RoutingStrategy is a property of the AWS::GameLift::Alias resource that configures the routing strategy for an Amazon GameLift (GameLift) alias. For more information, see the RoutingStrategy data type in the Amazon GameLift API Reference.
	 */
	GameLiftAliasRoutingStrategy: require('./GameLiftAliasRoutingStrategy.js'),
	
	/**
	 * StorageLocation is a property of the AWS::GameLift::Build resource that specifies the location of an Amazon GameLift (GameLift) build package files, such as the game server binaries. For more information, see Uploading a Build to Amazon GameLift in the Amazon GameLift Developer Guide.
	 */
	GameLiftBuildStorageLocation: require('./GameLiftBuildStorageLocation.js'),
	
	/**
	 * EC2InboundPermission is a property of the AWS::GameLift::Fleet resource that specifies the traffic that is permitted to access your game servers in an Amazon GameLift (GameLift) fleet.
	 */
	GameLiftFleetEC2InboundPermission: require('./GameLiftFleetEC2InboundPermission.js'),
	
	/**
	 * Policies is a property of the AWS::IAM::Role, AWS::IAM::Group, and AWS::IAM::User resources. The Policies property describes what actions are allowed on what resources. For more information about IAM policies, see Overview of Policies in IAM User Guide.
	 */
	IAMPolicies: require('./IAMPolicies.js'),
	
	/**
	 * LoginProfile is a property of the AWS::IAM::User resource that creates a login profile for users so that they can access the AWS Management Console.
	 */
	IAMUserLoginProfile: require('./IAMUserLoginProfile.js'),
	
	/**
	 * Code is a property of the AWS::Lambda::Function resource that enables you to specify the source code of an AWS Lambda (Lambda) function. Source code can be located a file in an S3 bucket or, for Node.js and Python 2.7 runtime environments only, you can provide it in inline text.
	 */
	LambdaFunctionCode: require('./LambdaFunctionCode.js'),
	
	/**
	 * VpcConfig is a property of the AWS::Lambda::Function resource that enables to your AWS Lambda (Lambda) function to access resources in a VPC. For more information, see Configuring a Lambda Function to Access Resources in an Amazon VPC in the AWS Lambda Developer Guide.
	 */
	LambdaFunctionVPCConfig: require('./LambdaFunctionVPCConfig.js'),
	
	/**
	 * For some resources, you can specify a custom name. By default, AWS CloudFormation generates a unique physical ID to name a resource. For example, AWS CloudFormation might name an Amazon S3 bucket with the following physical ID stack123123123123-s3bucket-abcdefghijk1. With custom names, you can specify a name that's easier to read and identify, such as production-app-logs or business-metrics.
	 */
	NameType: require('./NameType.js'),
	
	/**
	 * Environment is a property of the AWS::OpsWorks::App resource that specifies the environment variable to associate with the AWS OpsWorks app.
	 */
	OpsWorksAppEnvironment: require('./OpsWorksAppEnvironment.js'),
	
	/**
	 * Describes the scaling thresholds for the AWS OpsWorks LoadBasedAutoScaling Type property. For more information, see AutoScalingThresholds in the AWS OpsWorks API Reference.
	 */
	OpsWorksAutoScalingThresholdsType: require('./OpsWorksAutoScalingThresholdsType.js'),
	
	/**
	 * Describes the Chef configuration for the AWS::OpsWorks::Stack resource type. For more information, see ChefConfiguration in the AWS OpsWorks API Reference.
	 */
	OpsWorksChefConfigurationType: require('./OpsWorksChefConfigurationType.js'),
	
	/**
	 * LifeCycleConfiguration is property of the AWS::OpsWorks::Layer resource that specifies the lifecycle event configuration for the layer.
	 */
	OpsWorksLayerLifeCycleConfiguration: require('./OpsWorksLayerLifeCycleConfiguration.js'),
	
	/**
	 * ShutdownEventConfiguration is a property of the AWS OpsWorks Layer LifeCycleConfiguration property that specifies the shutdown event configuration for a lifecycle event.
	 */
	OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration: require('./OpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration.js'),
	
	/**
	 * Describes the load-based automatic scaling configuration for an AWS::OpsWorks::Layer resource type. For more information, see SetLoadBasedAutoScaling in the AWS OpsWorks API Reference.
	 */
	OpsWorksLoadBasedAutoScalingType: require('./OpsWorksLoadBasedAutoScalingType.js'),
	
	/**
	 * Describes custom event recipes for the AWS::OpsWorks::Layer resource type that AWS OpsWorks runs after the standard event recipes. For more information, see AWS OpsWorks Lifecycle Events in the AWS OpsWorks User Guide.
	 */
	OpsWorksRecipesType: require('./OpsWorksRecipesType.js'),
	
	/**
	 * Describes the information required to retrieve a cookbook or app from a repository for the AWS::OpsWorks::Stack or AWS::OpsWorks::App resource types. For more information, see Source in the AWS OpsWorks API Reference.
	 */
	OpsWorksSourceType: require('./OpsWorksSourceType.js'),
	
	/**
	 * Describes an SSL configuration for the AWS::OpsWorks::App resource type.
	 */
	OpsWorksSslConfigurationType: require('./OpsWorksSslConfigurationType.js'),
	
	/**
	 * Describes the stack configuration manager for the AWS::OpsWorks::Stack resource type. For more information, see StackConfigurationManager in the AWS OpsWorks API Reference.
	 */
	OpsWorksStackConfigurationManagerType: require('./OpsWorksStackConfigurationManagerType.js'),
	
	/**
	 * Describes the automatic time-based scaling configuration for an AWS::OpsWorks::Instance resource type. For more information, see SetTimeBasedAutoScaling in the AWS OpsWorks API Reference.
	 */
	OpsWorksTimeBasedAutoScalingType: require('./OpsWorksTimeBasedAutoScalingType.js'),
	
	/**
	 * Describes the Amazon EBS volumes for the AWS::OpsWorks::Layer resource type.
	 */
	OpsWorksVolumeConfigurationType: require('./OpsWorksVolumeConfigurationType.js'),
	
	/**
	 * Use the OptionConfigurations property to configure an option and its settings for an AWS::RDS::OptionGroup resource.
	 */
	RDSOptionGroupOptionConfigurations: require('./RDSOptionGroupOptionConfigurations.js'),
	
	/**
	 * Use the OptionSettings property to specify settings for an option in the OptionConfigurations property.
	 */
	RDSOptionGroupOptionConfigurationsOptionSettings: require('./RDSOptionGroupOptionConfigurationsOptionSettings.js'),
	
	/**
	 * The Amazon RDS security group rule is an embedded property of the AWS::RDS::DBSecurityGroup type.
	 */
	RDSSecurityGroupRule: require('./RDSSecurityGroupRule.js'),
	
	/**
	 * Describes parameters for the AWS::Redshift::ClusterParameterGroup resource type.
	 */
	RedshiftParameterType: require('./RedshiftParameterType.js'),
	
	/**
	 * AliasTarget is a property of the AWS::Route53::RecordSet resource.
	 */
	Route53AliasTargetProperty: require('./Route53AliasTargetProperty.js'),
	
	/**
	 * The HealthCheckConfig property is part of the AWS::Route53::HealthCheck resource that describes a health check that Amazon Route 53 uses before responding to a DNS query.
	 */
	Route53HealthCheckConfig: require('./Route53HealthCheckConfig.js'),
	
	/**
	 * The HealthCheckTags property describes key-value pairs that are associated with an AWS::Route53::HealthCheck resource.
	 */
	Route53HealthCheckTags: require('./Route53HealthCheckTags.js'),
	
	/**
	 * The HostedZoneConfig property is part of the AWS::Route53::HostedZone resource that can contain a comment about the hosted zone.
	 */
	Route53HostedZoneConfigProperty: require('./Route53HostedZoneConfigProperty.js'),
	
	/**
	 * The HostedZoneTags property describes key-value pairs that are associated with an AWS::Route53::HostedZone resource.
	 */
	Route53HostedZoneTags: require('./Route53HostedZoneTags.js'),
	
	/**
	 * The HostedZoneVPCs property is part of the AWS::Route53::HostedZone resource that specifies the VPCs to associate with the hosted zone.
	 */
	Route53HostedZoneVPCs: require('./Route53HostedZoneVPCs.js'),
	
	/**
	 * The GeoLocation property is part of the AWS::Route53::RecordSet resource that describes how Amazon Route 53 responds to DNS queries based on the geographic location of the query.
	 */
	Route53RecordSetGeoLocationProperty: require('./Route53RecordSetGeoLocationProperty.js'),
	
	/**
	 * Describes the cross-origin access configuration for objects in an AWS::S3::Bucket resource.
	 */
	S3CorsConfiguration: require('./S3CorsConfiguration.js'),
	
	/**
	 * Describes cross-origin access rules for the Amazon S3 Cors Configuration property.
	 */
	S3CorsConfigurationRule: require('./S3CorsConfigurationRule.js'),
	
	/**
	 * Describes the lifecycle configuration for objects in an AWS::S3::Bucket resource.
	 */
	S3LifecycleConfiguration: require('./S3LifecycleConfiguration.js'),
	
	/**
	 * Describes lifecycle rules for the Amazon S3 Lifecycle Configuration property.
	 */
	S3LifecycleRule: require('./S3LifecycleRule.js'),
	
	/**
	 * NoncurrentVersionTransition is a property of the Amazon S3 Lifecycle Rule property that describes when noncurrent objects transition to a specified storage class.
	 */
	S3LifecycleRuleNoncurrentVersionTransition: require('./S3LifecycleRuleNoncurrentVersionTransition.js'),
	
	/**
	 * Describes when an object transitions to a specified storage class for the Amazon S3 Lifecycle Rule property.
	 */
	S3LifecycleRuleTransition: require('./S3LifecycleRuleTransition.js'),
	
	/**
	 * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for an AWS::S3::Bucket resource. These logs track requests to an Amazon S3 bucket. For more information, see PUT Bucket logging in the Amazon Simple Storage Service API Reference.
	 */
	S3LoggingConfiguration: require('./S3LoggingConfiguration.js'),
	
	/**
	 * Describes the notification configuration for an AWS::S3::Bucket resource.
	 */
	S3NotificationConfiguration: require('./S3NotificationConfiguration.js'),
	
	/**
	 * Filter is a property of the LambdaConfigurations, QueueConfigurations, and TopicConfigurations properties that describes the filtering rules that determine the Amazon Simple Storage Service (Amazon S3) objects for which to send notifications.
	 */
	S3NotificationConfigurationConfigFilter: require('./S3NotificationConfigurationConfigFilter.js'),
	
	/**
	 * S3Key is a property of the Amazon S3 NotificationConfiguration Config Filter property that specifies the key names of Amazon Simple Storage Service (Amazon S3) objects for which to send notifications.
	 */
	S3NotificationConfigurationConfigFilterS3Key: require('./S3NotificationConfigurationConfigFilterS3Key.js'),
	
	/**
	 * Rules is a property of the Amazon S3 NotificationConfiguration Config Filter S3Key property that describes the Amazon Simple Storage Service (Amazon S3) object key name to filter on and whether to filter on the suffix or prefix of the key name.
	 */
	S3NotificationConfigurationConfigFilterS3KeyRules: require('./S3NotificationConfigurationConfigFilterS3KeyRules.js'),
	
	/**
	 * Describes the topic and events for the Amazon S3 NotificationConfiguration property.
	 */
	S3NotificationConfigurationTopicConfigurations: require('./S3NotificationConfigurationTopicConfigurations.js'),
	
	/**
	 * ReplicationConfiguration is a property of the AWS::S3::Bucket resource that specifies replication rules and the AWS Identity and Access Management (IAM) role Amazon Simple Storage Service (Amazon S3) uses to replicate objects.
	 */
	S3ReplicationConfiguration: require('./S3ReplicationConfiguration.js'),
	
	/**
	 * Rules is a property of the Amazon S3 ReplicationConfiguration property that specifies which Amazon Simple Storage Service (Amazon S3) objects to replicate and where to store them.
	 */
	S3ReplicationConfigurationRules: require('./S3ReplicationConfigurationRules.js'),
	
	/**
	 * Destination is a property of the Amazon S3 ReplicationConfiguration Rules property that specifies which Amazon Simple Storage Service (Amazon S3) bucket to store replicated objects and their storage class.
	 */
	S3ReplicationConfigurationRulesDestination: require('./S3ReplicationConfigurationRulesDestination.js'),
	
	/**
	 * Describes the versioning state of an AWS::S3::Bucket resource. For more information, see PUT Bucket versioning in the Amazon Simple Storage Service API Reference.
	 */
	S3VersioningConfiguration: require('./S3VersioningConfiguration.js'),
	
	/**
	 * WebsiteConfiguration is an embedded property of the AWS::S3::Bucket resource.
	 */
	S3WebsiteConfigurationProperty: require('./S3WebsiteConfigurationProperty.js'),
	
	/**
	 * The RedirectAllRequestsTo code is an embedded property of the Amazon S3 Website Configuration Property property that describes the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
	 */
	S3WebsiteConfigurationRedirectAllRequestsToProperty: require('./S3WebsiteConfigurationRedirectAllRequestsToProperty.js'),
	
	/**
	 * The RoutingRules property is an embedded property of the Amazon S3 Website Configuration Property property. This property describes the redirect behavior and when a redirect is applied.
	 */
	S3WebsiteConfigurationRoutingRulesProperty: require('./S3WebsiteConfigurationRoutingRulesProperty.js'),
	
	/**
	 * The RedirectRule property is an embedded property of the Amazon S3 Website Configuration Routing Rules Property that describes how requests are redirected. In the event of an error, you can specify a different error code to return.
	 */
	S3WebsiteConfigurationRoutingRulesRedirectRuleProperty: require('./S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.js'),
	
	/**
	 * The RoutingRuleCondition property is an embedded property of the Amazon S3 Website Configuration Routing Rules Property that describes a condition that must be met for a redirect to apply.
	 */
	S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty: require('./S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty.js'),
	
	/**
	 * Subscription is an embedded property of the AWS::SNS::Topic resource that describes the subscription endpoints for a topic.
	 */
	SNSSubscriptionPropertyType: require('./SNSSubscriptionPropertyType.js'),
	
	/**
	 * The RedrivePolicy type is a property of the AWS::SQS::Queue resource.
	 */
	SQSRedrivePolicy: require('./SQSRedrivePolicy.js'),
	
	/**
	 * LambdaConfigurations is a property of the Amazon S3 NotificationConfiguration property that describes the AWS Lambda (Lambda) functions to invoke and the events for which to invoke them.
	 */
	SimpleStorageServiceNotificationConfigurationLambdaConfigurations: require('./SimpleStorageServiceNotificationConfigurationLambdaConfigurations.js'),
	
	/**
	 * QueueConfigurations is a property of the Amazon S3 NotificationConfiguration property that describes the S3 bucket events about which you want to send messages to Amazon SQS and the queues to which you want to send them.
	 */
	SimpleStorageServiceNotificationConfigurationQueueConfigurations: require('./SimpleStorageServiceNotificationConfigurationQueueConfigurations.js'),
	
	/**
	 * ByteMatchTuples is a property of the AWS::WAF::ByteMatchSet resource that specifies settings for an AWS WAF ByteMatchSet resource, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests.
	 */
	WAFByteMatchSetByteMatchTuples: require('./WAFByteMatchSetByteMatchTuples.js'),
	
	/**
	 * FieldToMatch is a property of the AWS WAF ByteMatchSet ByteMatchTuples property that specifies the part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 */
	WAFByteMatchSetByteMatchTuplesFieldToMatch: require('./WAFByteMatchSetByteMatchTuplesFieldToMatch.js'),
	
	/**
	 * IPSetDescriptors is a property of the AWS::WAF::IPSet resource that specifies the IP address type and IP address range (in CIDR notation) from which web requests originate.
	 */
	WAFIPSetIPSetDescriptors: require('./WAFIPSetIPSetDescriptors.js'),
	
	/**
	 * Predicates is a property of the AWS::WAF::Rule resource that specifies the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in an AWS WAF rule. If you add more than one predicate to a rule, an incoming request must match all of the specifications in the predicates to be allowed or blocked.
	 */
	WAFRulePredicates: require('./WAFRulePredicates.js'),
	
	/**
	 * SizeConstraint is a property of the AWS::WAF::SizeConstraintSet resource that specifies a size constraint and which part of a web request that you want AWS WAF to constrain.
	 */
	WAFSizeConstraintSetSizeConstraint: require('./WAFSizeConstraintSetSizeConstraint.js'),
	
	/**
	 * FieldToMatch is a property of the AWS WAF SizeConstraintSet SizeConstraint property that specifies the part of a web request that you want AWS WAF to check for a size constraint, such as a specific header or a query string.
	 */
	WAFSizeConstraintSetSizeConstraintFieldToMatch: require('./WAFSizeConstraintSetSizeConstraintFieldToMatch.js'),
	
	/**
	 * SqlInjectionMatchTuples is a property of the AWS::WAF::SqlInjectionMatchSet resource that specifies the parts of web requests that AWS WAF inspects for SQL code.
	 */
	WAFSqlInjectionMatchSetSqlInjectionMatchTuples: require('./WAFSqlInjectionMatchSetSqlInjectionMatchTuples.js'),
	
	/**
	 * FieldToMatch is a property of the AWS WAF ByteMatchSet ByteMatchTuples property that specifies the part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 */
	WAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch: require('./WAFSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.js'),
	
	/**
	 * Action is a property of the AWS::WAF::WebACL resource and the AWS WAF WebACL Rules property that specifies the action AWS WAF takes when a web request matches or doesn't match all rule conditions.
	 */
	WAFWebACLAction: require('./WAFWebACLAction.js'),
	
	/**
	 * Rules is a property of the AWS::WAF::WebACL resource that specifies the rule to associate with an AWS WAF web access control list (ACL) and the rule's settings.
	 */
	WAFWebACLRules: require('./WAFWebACLRules.js'),
	
	/**
	 * XssMatchTuple is a property of the AWS::WAF::XssMatchSet resource that specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks.
	 */
	WAFXssMatchSetXssMatchTuple: require('./WAFXssMatchSetXssMatchTuple.js'),
	
	/**
	 * FieldToMatch is a property of the AWS WAF XssMatchSet XssMatchTuple property that specifies the part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 */
	WAFXssMatchSetXssMatchTupleFieldToMatch: require('./WAFXssMatchSetXssMatchTupleFieldToMatch.js')
};