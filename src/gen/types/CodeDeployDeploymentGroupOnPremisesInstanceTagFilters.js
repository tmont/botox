var PropertyType = require('../../property-type');

/**
 * OnPremisesInstanceTagFilters is a property of the AWS::CodeDeploy::DeploymentGroup resource that specifies which on-premises instances to associate with the deployment group. To register on-premise instances with AWS CodeDeploy, see Configure Existing On-Premises Instances by Using AWS CodeDeploy in the AWS CodeDeploy User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisesinstancetagfilters.html}
 * @constructor
 */
function CodeDeployDeploymentGroupOnPremisesInstanceTagFilters() {
	PropertyType.call(this);
}

CodeDeployDeploymentGroupOnPremisesInstanceTagFilters.prototype = Object.create(PropertyType.prototype);

/**
 * Filter on-premises instances with this key.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CodeDeployDeploymentGroupOnPremisesInstanceTagFilters}
 */
CodeDeployDeploymentGroupOnPremisesInstanceTagFilters.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * The filter type. For example, you can filter on-premises instances by the key, tag value, or both. For valid values, see EC2TagFilter in the AWS CodeDeploy API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CodeDeployDeploymentGroupOnPremisesInstanceTagFilters}
 */
CodeDeployDeploymentGroupOnPremisesInstanceTagFilters.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * Filter on-premises instances with this tag value.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CodeDeployDeploymentGroupOnPremisesInstanceTagFilters}
 */
CodeDeployDeploymentGroupOnPremisesInstanceTagFilters.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = CodeDeployDeploymentGroupOnPremisesInstanceTagFilters;
