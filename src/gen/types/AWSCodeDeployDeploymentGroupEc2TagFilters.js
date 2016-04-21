/**
 * Ec2TagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which EC2 instances to associate with the deployment group.
 * @constructor
 */
function AWSCodeDeployDeploymentGroupEc2TagFilters(initialData) {
	this.data = initialData || {};
}

AWSCodeDeployDeploymentGroupEc2TagFilters.prototype = {
	
	/**
	 * Filter instances with this key.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupEc2TagFilters}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The filter type. For example, you can filter instances by the key, tag value, or both. For valid values, see EC2TagFilter in the AWS CodeDeploy API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupEc2TagFilters}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * Filter instances with this tag value.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupEc2TagFilters}
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

module.exports = AWSCodeDeployDeploymentGroupEc2TagFilters;
