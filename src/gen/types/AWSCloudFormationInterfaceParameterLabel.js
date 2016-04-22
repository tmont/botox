/**
 * ParameterLabel is a property of the AWS::CloudFormation::Interface resource that specifies a friendly name or description for a parameter that the AWS CloudFormation console shows instead of the parameter's logical ID.
 * @constructor
 */
function AWSCloudFormationInterfaceParameterLabel() {
	this.data = {};
}

AWSCloudFormationInterfaceParameterLabel.prototype = {
	
	/**
	 * A label for a parameter. The label defines a friendly name or description that the AWS CloudFormation console shows on the Specify Parameters page when a stack is created or updated. The ParameterLogicalID key must be the case-sensitive logical ID of a valid parameter that has been declared in the Parameters section of the template.
	 *
	 * Required: false
	 *
	 * @param {AWSCloudFormationInterfaceLabel} value
	 * @return {AWSCloudFormationInterfaceParameterLabel}
	 */
	parameterLogicalID: function(value) {
		return this.set('ParameterLogicalID', value);
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

module.exports = AWSCloudFormationInterfaceParameterLabel;
