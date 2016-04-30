var PropertyType = require('../../property-type');

/**
 * Describes a network interface association for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Association property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-association.html}
 * @constructor
 */
function EC2NetworkInterfaceAssociation() {
	PropertyType.call(this);
}

EC2NetworkInterfaceAssociation.prototype = Object.create(PropertyType.prototype);

/**
 * The ID of the network interface attachment.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceAssociation}
 */
EC2NetworkInterfaceAssociation.prototype.attachmentID = function(value) {
	return this.set('AttachmentID', value);
};

/**
 * The ID of the instance attached to the network interface.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceAssociation}
 */
EC2NetworkInterfaceAssociation.prototype.instanceID = function(value) {
	return this.set('InstanceID', value);
};

/**
 * The address of the Elastic IP address bound to the network interface.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceAssociation}
 */
EC2NetworkInterfaceAssociation.prototype.publicIp = function(value) {
	return this.set('PublicIp', value);
};

/**
 * The ID of the Elastic IP address owner.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceAssociation}
 */
EC2NetworkInterfaceAssociation.prototype.ipOwnerId = function(value) {
	return this.set('IpOwnerId', value);
};

module.exports = EC2NetworkInterfaceAssociation;
