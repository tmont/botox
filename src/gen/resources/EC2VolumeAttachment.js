var Resource = require('../../resource');

/**
 * AWS::EC2::VolumeAttachment - Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VolumeAttachment(name) {
	Resource.call(this, name, 'AWS::EC2::VolumeAttachment');
}

EC2VolumeAttachment.prototype = Object.create(Resource.prototype);

/**
 * How the device is exposed to the instance (e.g., /dev/sdh, or xvdh).
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VolumeAttachment}
 */
EC2VolumeAttachment.prototype.device = function(value) {
	return this.set('Device', value);
};

/**
 * The ID of the instance to which the volume attaches. This value can be a reference to an AWS::EC2::Instance resource, or it can be the physical ID of an existing EC2 instance.
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VolumeAttachment}
 */
EC2VolumeAttachment.prototype.instanceId = function(value) {
	return this.set('InstanceId', value);
};

/**
 * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an AWS::EC2::Volume resource, or it can be the volume ID of an existing Amazon EBS volume.
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VolumeAttachment}
 */
EC2VolumeAttachment.prototype.volumeId = function(value) {
	return this.set('VolumeId', value);
};

module.exports = EC2VolumeAttachment;
