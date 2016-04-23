var PropertyType = require('../../property-type');

/**
 * MinimumHealthyHosts is a property of the AWS::CodeDeploy::DeploymentConfig resource that defines how many instances must be healthy during an AWS CodeDeploy deployment.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html}
 * @constructor
 */
function AWSCodeDeployDeploymentConfigMinimumHealthyHosts() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSCodeDeployDeploymentConfigMinimumHealthyHosts, PropertyType);

AWSCodeDeployDeploymentConfigMinimumHealthyHosts.prototype = {
	
	/**
	 * The type of count to use, such as an absolute value or a percentage of the total number of instances in the deployment. For valid values, see MinimumHealthyHosts in the AWS CodeDeploy API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentConfigMinimumHealthyHosts}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * The minimum number of healthy instances.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSCodeDeployDeploymentConfigMinimumHealthyHosts}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = AWSCodeDeployDeploymentConfigMinimumHealthyHosts;
