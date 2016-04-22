/**
 * MinimumHealthyHosts is a property of the AWS::CodeDeploy::DeploymentConfig resource that defines how many instances must be healthy during an AWS CodeDeploy deployment.
 * @constructor
 */
function AWSCodeDeployDeploymentConfigMinimumHealthyHosts() {
	this.data = {};
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = AWSCodeDeployDeploymentConfigMinimumHealthyHosts;
