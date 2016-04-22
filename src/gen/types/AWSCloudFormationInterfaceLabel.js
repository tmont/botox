/**
 * Label is a property of the ParameterGroup and ParameterLabel properties that defines name for a parameter group or parameter.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-interface-label.html}
 * @constructor
 */
function AWSCloudFormationInterfaceLabel() {
	this.data = {};
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
