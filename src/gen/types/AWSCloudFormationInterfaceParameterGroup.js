/**
 * ParameterGroup is a property of the AWS::CloudFormation::Interface resource that defines a parameter group and the parameters to include in the group.
 * @constructor
 */
function AWSCloudFormationInterfaceParameterGroup(initialData) {
	this.data = initialData || {};
}

AWSCloudFormationInterfaceParameterGroup.prototype = {
	
	/**
	 * A name for the parameter group.
	 *
	 * Required: false
	 *
	 * @param {AWSCloudFormationInterfaceLabel} value
	 * @return {AWSCloudFormationInterfaceParameterGroup}
	 */
	label: function(value) {
		return this.set('Label', value);
	},

	/**
	 * A list of case-sensitive parameter logical IDs to include in the group. Parameters must already be defined in the Parameters section of the template. A parameter can be included in only one parameter group.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {AWSCloudFormationInterfaceParameterGroup}
	 */
	parameters: function(value) {
		return this.set('Parameters', value);
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

module.exports = AWSCloudFormationInterfaceParameterGroup;
