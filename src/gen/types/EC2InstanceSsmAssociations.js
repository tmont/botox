var PropertyType = require('../../property-type');

/**
 * SsmAssociations is a property of the AWS::EC2::Instance resource that specifies the Amazon EC2 Simple Systems Manager (SSM) document and parameter values to associate with an instance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociations.html}
 * @constructor
 */
function EC2InstanceSsmAssociations() {
	PropertyType.call(this);
}

EC2InstanceSsmAssociations.prototype = Object.create(PropertyType.prototype);

/**
 * The input parameter values to use with the associated SSM document.
 *
 * Required: false
 *
 * @param {EC2InstanceSsmAssociationsAssociationParameters[]} value
 * @return {EC2InstanceSsmAssociations}
 */
EC2InstanceSsmAssociations.prototype.associationParameters = function(value) {
	return this.set('AssociationParameters', value);
};

/**
 * The name of an SSM document to associate with the instance.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2InstanceSsmAssociations}
 */
EC2InstanceSsmAssociations.prototype.documentName = function(value) {
	return this.set('DocumentName', value);
};

module.exports = EC2InstanceSsmAssociations;
