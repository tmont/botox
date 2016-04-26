var Resource = require('../../resource');

/**
 * AWS::CodeDeploy::DeploymentGroup - The AWS::CodeDeploy::DeploymentGroup resource creates an AWS CodeDeploy deployment group that details which application revision to use and which instances your application revisions are deployed to.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CodeDeployDeploymentGroup(name) {
	Resource.call(this, name, 'AWS::CodeDeploy::DeploymentGroup');
}

CodeDeployDeploymentGroup.prototype = Object.create(Resource.prototype);

/**
 * The name of an AWS CodeDeploy application for this deployment group.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.applicationName = function(value) {
	return this.set('ApplicationName', value);
};

/**
 * A list of associated Auto Scaling groups that AWS CodeDeploy automatically deploys revisions to when new instances are created.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.autoScalingGroups = function(value) {
	return this.set('AutoScalingGroups', value);
};

/**
 * The application revision that will be deployed to this deployment group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CodeDeployDeploymentGroupDeployment|Attribute|Reference} value AWS CodeDeploy DeploymentGroup Deployment
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.deployment = function(value) {
	return this.set('Deployment', value);
};

/**
 * A deployment configuration name or a predefined configuration name. With predefined configurations, you can deploy application revisions to one instance at a time, half of the instances at a time, or all the instances at once. For more information and valid values, see the DeploymentConfigName parameter for the CreateDeploymentGroup action in the AWS CodeDeploy API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.deploymentConfigName = function(value) {
	return this.set('DeploymentConfigName', value);
};

/**
 * A name for the deployment group. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.deploymentGroupName = function(value) {
	return this.set('DeploymentGroupName', value);
};

/**
 * The Amazon EC2 tags to filter on. AWS CodeDeploy includes all instances that match the tag filter with this deployment group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CodeDeployDeploymentGroupEc2TagFilters|Attribute|Reference} value AWS CodeDeploy DeploymentGroup Ec2TagFilters
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.ec2TagFilters = function(value) {
	return this.set('Ec2TagFilters', value);
};

/**
 * The on-premises instance tags to filter on. AWS CodeDeploy includes all on-premises instances that match the tag filter with this deployment group. To register on-premises instances with AWS CodeDeploy, see Configure Existing On-Premises Instances by Using AWS CodeDeploy in the AWS CodeDeploy User Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CodeDeployDeploymentGroupOnPremisesInstanceTagFilters|Attribute|Reference} value AWS CodeDeploy DeploymentGroup OnPremisesInstanceTagFilters
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.onPremisesInstanceTagFilters = function(value) {
	return this.set('OnPremisesInstanceTagFilters', value);
};

/**
 * A service role Amazon Resource Name (ARN) that grants AWS CodeDeploy permission to make calls to AWS services on your behalf. For more information, see Create a Service Role for AWS CodeDeploy in the AWS CodeDeploy User Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodeDeployDeploymentGroup}
 */
CodeDeployDeploymentGroup.prototype.serviceRoleArn = function(value) {
	return this.set('ServiceRoleArn', value);
};

module.exports = CodeDeployDeploymentGroup;
