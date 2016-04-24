var PropertyType = require('../../property-type');

/**
 * Ec2TagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which EC2 instances to associate with the deployment group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilters.html}
 * @constructor
 */
function CodeDeployDeploymentGroupEc2TagFilters() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CodeDeployDeploymentGroupEc2TagFilters, PropertyType);

CodeDeployDeploymentGroupEc2TagFilters.prototype = {
	
	/**
	 * Filter instances with this key.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CodeDeployDeploymentGroupEc2TagFilters}
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
	 * @return {CodeDeployDeploymentGroupEc2TagFilters}
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
	 * @return {CodeDeployDeploymentGroupEc2TagFilters}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = CodeDeployDeploymentGroupEc2TagFilters;
