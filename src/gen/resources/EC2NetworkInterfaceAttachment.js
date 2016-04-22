var Resource = require('../../resource');

/**
 * AWS::EC2::NetworkInterfaceAttachment - Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instances without interruption.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2NetworkInterfaceAttachment(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2NetworkInterfaceAttachment, Resource);

EC2NetworkInterfaceAttachment.prototype = {
	
	
	/**
	 * Whether to delete the network interface when the instance terminates. By default, this value is set to True.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {EC2NetworkInterfaceAttachment}
	 */
	deleteOnTermination: function(value) {
		return this.set('DeleteOnTermination', value);
	},

	/**
	 * The network interface's position in the attachment order. For example, the first attached network interface has a DeviceIndex of 0.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAttachment}
	 */
	deviceIndex: function(value) {
		return this.set('DeviceIndex', value);
	},

	/**
	 * The ID of the instance to which you will attach the ENI.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAttachment}
	 */
	instanceId: function(value) {
		return this.set('InstanceId', value);
	},

	/**
	 * The ID of the ENI that you want to attach.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceAttachment}
	 */
	networkInterfaceId: function(value) {
		return this.set('NetworkInterfaceId', value);
	}
};

module.exports = EC2NetworkInterfaceAttachment;
