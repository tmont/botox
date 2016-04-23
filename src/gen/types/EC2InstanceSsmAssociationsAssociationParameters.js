var PropertyType = require('../../property-type');

/**
 * AssociationParameters is a property of the Amazon EC2 Instance SsmAssociations property that specifies input parameter values for an Amazon EC2 Simple Systems Manager (SSM) document.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociations-associationparameters.html}
 * @constructor
 */
function EC2InstanceSsmAssociationsAssociationParameters() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2InstanceSsmAssociationsAssociationParameters, PropertyType);

EC2InstanceSsmAssociationsAssociationParameters.prototype = {
	
	/**
	 * The name of an input parameter that is in the associated SSM document.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2InstanceSsmAssociationsAssociationParameters}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value of an input parameter.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {EC2InstanceSsmAssociationsAssociationParameters}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = EC2InstanceSsmAssociationsAssociationParameters;
