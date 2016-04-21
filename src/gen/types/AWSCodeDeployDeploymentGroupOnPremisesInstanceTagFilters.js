/**
 * OnPremisesInstanceTagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which on-premises instances to associate with the deployment group. To register on-premise instances with AWS CodeDeploy, see Configure Existing On-Premises Instances by Using AWS CodeDeploy in the AWS CodeDeploy User Guide.
 * @constructor
 */
function AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters(initialData) {
	this.data = initialData || {};
}

AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters.prototype = {
	
	/**
	 * Filter on-premises instances with this key.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The filter type. For example, you can filter on-premises instances by the key, tag value, or both. For valid values, see EC2TagFilter in the AWS CodeDeploy API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * Filter on-premises instances with this tag value.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters}
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

module.exports = AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters;
