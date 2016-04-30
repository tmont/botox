var Resource = require('../../resource');

/**
 * AWS::CodeDeploy::DeploymentConfig - The AWS::CodeDeploy::DeploymentConfig resource creates a set of deployment rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy uses during a deployment.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CodeDeployDeploymentConfig(name) {
	Resource.call(this, name, 'AWS::CodeDeploy::DeploymentConfig');
}

CodeDeployDeploymentConfig.prototype = Object.create(Resource.prototype);

/**
 * A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {CodeDeployDeploymentConfig}
 */
CodeDeployDeploymentConfig.prototype.deploymentConfigName = function(value) {
	return this.set('DeploymentConfigName', value);
};

/**
 * The minimum number of healthy instances that must be available at any time during an AWS CodeDeploy deployment. For example, for a fleet of nine instances, if you specify a minimum of six healthy instances, AWS CodeDeploy deploys your application up to three instances at a time so that you always have six healthy instances. The deployment succeeds if your application successfully deploys to six or more instances; otherwise, the deployment fails.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {CodeDeployDeploymentConfigMinimumHealthyHosts|Attribute|Reference} value AWS CodeDeploy DeploymentConfig MinimumHealthyHosts
 * @returns {CodeDeployDeploymentConfig}
 */
CodeDeployDeploymentConfig.prototype.minimumHealthyHosts = function(value) {
	return this.set('MinimumHealthyHosts', value);
};

module.exports = CodeDeployDeploymentConfig;
