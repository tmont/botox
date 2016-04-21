/**
 * Label is a property of the ParameterGroup and ParameterLabel properties that defines name for a parameter group or parameter.
 * @constructor
 */
function AWSCloudFormationInterfaceLabel(initialData) {
	this.data = initialData || {};
}

AWSCloudFormationInterfaceLabel.prototype = {
	
	/**
	 * The default label that the AWS CloudFormation console uses to name a parameter group or parameter.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCloudFormationInterfaceLabel}
	 */
	default: function(value) {
		return this.set('default', value);
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

module.exports = AWSCloudFormationInterfaceLabel;
