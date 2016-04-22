var Resource = require('../../resource');

/**
 * AWS::EC2::VolumeAttachment - Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VolumeAttachment(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VolumeAttachment, Resource);

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
	}
};

module.exports = EC2VolumeAttachment;
