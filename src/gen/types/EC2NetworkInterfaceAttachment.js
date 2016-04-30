var PropertyType = require('../../property-type');

/**
 * Describes a network interface attachment for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Attachment property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-attachment.html}
 * @constructor
 */
function EC2NetworkInterfaceAttachment() {
	PropertyType.call(this);
}

EC2NetworkInterfaceAttachment.prototype = Object.create(PropertyType.prototype);

/**
 * The ID of the network interface attachment.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceAttachment}
 */
EC2NetworkInterfaceAttachment.prototype.attachmentID = function(value) {
	return this.set('AttachmentID', value);
};

/**
 * The ID of the instance attached to the network interface.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceAttachment}
 */
EC2NetworkInterfaceAttachment.prototype.instanceID = function(value) {
	return this.set('InstanceID', value);
};

module.exports = EC2NetworkInterfaceAttachment;
