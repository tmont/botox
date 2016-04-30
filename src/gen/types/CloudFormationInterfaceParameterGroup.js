var PropertyType = require('../../property-type');

/**
 * ParameterGroup is a property of the AWS::CloudFormation::Interface resource that defines a parameter group and the parameters to include in the group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-interface-parametergroup.html}
 * @constructor
 */
function CloudFormationInterfaceParameterGroup() {
	PropertyType.call(this);
}

CloudFormationInterfaceParameterGroup.prototype = Object.create(PropertyType.prototype);

/**
 * A name for the parameter group.
 *
 * Required: false
 *
 * @param {CloudFormationInterfaceLabel} value
 * @returns {CloudFormationInterfaceParameterGroup}
 */
CloudFormationInterfaceParameterGroup.prototype.label = function(value) {
	return this.set('Label', value);
};

/**
 * A list of case-sensitive parameter logical IDs to include in the group. Parameters must already be defined in the Parameters section of the template. A parameter can be included in only one parameter group.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {CloudFormationInterfaceParameterGroup}
 */
CloudFormationInterfaceParameterGroup.prototype.parameters = function(value) {
	return this.set('Parameters', value);
};

module.exports = CloudFormationInterfaceParameterGroup;
