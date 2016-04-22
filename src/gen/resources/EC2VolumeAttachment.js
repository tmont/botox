var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VolumeAttachment - Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VolumeAttachment(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EC2VolumeAttachment.prototype = {
	
	/**
	 * How the device is exposed to the instance (e.g., /dev/sdh, or xvdh).
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2VolumeAttachment}
	 */
	device: function(value) {
		return this.set('Device', value);
	},

	/**
	 * The ID of the instance to which the volume attaches. This value can be a reference to an AWS::EC2::Instance resource, or it can be the physical ID of an existing EC2 instance.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2VolumeAttachment}
	 */
	instanceId: function(value) {
		return this.set('InstanceId', value);
	},

	/**
	 * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an AWS::EC2::Volume resource, or it can be the volume ID of an existing Amazon EBS volume.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2VolumeAttachment}
	 */
	volumeId: function(value) {
		return this.set('VolumeId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VolumeAttachment has no attributes');
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

module.exports = EC2VolumeAttachment;
