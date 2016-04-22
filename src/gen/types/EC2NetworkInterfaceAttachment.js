/**
 * Describes a network interface attachment for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Attachment property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-attachment.html}
 * @constructor
 */
function EC2NetworkInterfaceAttachment() {
	this.data = {};
}

EC2NetworkInterfaceAttachment.prototype = {
	
	/**
	 * The ID of the network interface attachment.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAttachment}
	 */
	attachmentID: function(value) {
		return this.set('AttachmentID', value);
	},

	/**
	 * The ID of the instance attached to the network interface.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAttachment}
	 */
	instanceID: function(value) {
		return this.set('InstanceID', value);
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

module.exports = EC2NetworkInterfaceAttachment;
