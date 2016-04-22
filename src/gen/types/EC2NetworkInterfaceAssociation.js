/**
 * Describes a network interface association for an Elastic Network Interface (ENI). AWS::EC2::NetworkInterface takes an object of this type in its Association property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-association.html}
 * @constructor
 */
function EC2NetworkInterfaceAssociation() {
	this.data = {};
}

EC2NetworkInterfaceAssociation.prototype = {
	
	/**
	 * The ID of the network interface attachment.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAssociation}
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
	 * @return {EC2NetworkInterfaceAssociation}
	 */
	instanceID: function(value) {
		return this.set('InstanceID', value);
	},

	/**
	 * The address of the Elastic IP address bound to the network interface.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAssociation}
	 */
	publicIp: function(value) {
		return this.set('PublicIp', value);
	},

	/**
	 * The ID of the Elastic IP address owner.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAssociation}
	 */
	ipOwnerId: function(value) {
		return this.set('IpOwnerId', value);
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

module.exports = EC2NetworkInterfaceAssociation;
