var Resource = require('../../resource');

/**
 * AWS::CloudFormation::Interface - AWS::CloudFormation::Interface is a metadata key that defines how parameters are grouped and sorted in the AWS CloudFormation console. When you create or update stacks in the console, the console lists input parameters in alphabetical order by their logical IDs. By using this key, you can define your own parameter grouping and ordering so that users can efficiently specify parameter values. For example, you could group all EC2-related parameters in one group and all VPC-related parameters in another group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-interface.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationInterface(name) {
	Resource.call(this, name, 'AWS::CloudFormation::Interface');
}

CloudFormationInterface.prototype = Object.create(Resource.prototype);


/**
 * A list of parameter group types, where you specify group names, the parameters in each group, and the order in which the parameters are shown.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationInterfaceParameterGroup|Attribute|Reference} value AWS CloudFormation Interface ParameterGroup
 * @return {CloudFormationInterface}
 */
CloudFormationInterface.prototype.parameterGroups = function(value) {
	return this.set('ParameterGroups', value);
};

/**
 * A list of parameters and their friendly names that the AWS CloudFormation console shows when a stack is created or updated.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationInterfaceParameterLabel|Attribute|Reference} value AWS CloudFormation Interface ParameterLabel
 * @return {CloudFormationInterface}
 */
CloudFormationInterface.prototype.parameterLabels = function(value) {
	return this.set('ParameterLabels', value);
};

module.exports = CloudFormationInterface;
