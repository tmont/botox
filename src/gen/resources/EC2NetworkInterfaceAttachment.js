var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::NetworkInterfaceAttachment - Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instances without interruption.
 * @constructor
 */
function EC2NetworkInterfaceAttachment(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::NetworkInterfaceAttachment has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EC2NetworkInterfaceAttachment;
