var PropertyType = require('../../property-type');

/**
 * MinimumHealthyHosts is a property of the AWS::CodeDeploy::DeploymentConfig resource that defines how many instances must be healthy during an AWS CodeDeploy deployment.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html}
 * @constructor
 */
function CodeDeployDeploymentConfigMinimumHealthyHosts() {
	PropertyType.call(this);
}

CodeDeployDeploymentConfigMinimumHealthyHosts.prototype = Object.create(PropertyType.prototype);

/**
 * The type of count to use, such as an absolute value or a percentage of the total number of instances in the deployment. For valid values, see MinimumHealthyHosts in the AWS CodeDeploy API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CodeDeployDeploymentConfigMinimumHealthyHosts}
 */
CodeDeployDeploymentConfigMinimumHealthyHosts.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * The minimum number of healthy instances.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {CodeDeployDeploymentConfigMinimumHealthyHosts}
 */
CodeDeployDeploymentConfigMinimumHealthyHosts.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = CodeDeployDeploymentConfigMinimumHealthyHosts;
