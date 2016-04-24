var PropertyType = require('../../property-type');

/**
 * Label is a property of the ParameterGroup and ParameterLabel properties that defines name for a parameter group or parameter.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-interface-label.html}
 * @constructor
 */
function CloudFormationInterfaceLabel() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFormationInterfaceLabel, PropertyType);

CloudFormationInterfaceLabel.prototype = {
	
	/**
	 * The default label that the AWS CloudFormation console uses to name a parameter group or parameter.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFormationInterfaceLabel}
	 */
	default: function(value) {
		return this.set('default', value);
	}
};

module.exports = CloudFormationInterfaceLabel;
