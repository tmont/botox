var Resource = require('../../resource');

/**
 * AWS::EC2::Volume - The AWS::EC2::Volume type creates a new Amazon Elastic Block Store (Amazon EBS) volume.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2Volume(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2Volume, Resource);

EC2Volume.prototype = {
	
	
	/**
	 * Indicates whether the volume is auto-enabled for I/O operations. By default, Amazon EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O. For more information, see Working with the AutoEnableIO Volume Attribute in the Amazon EC2 User Guide for Linux Instances.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {EC2Volume}
	 */
	autoEnableIO: function(value) {
		return this.set('AutoEnableIO', value);
	},

	/**
	 * The Availability Zone in which to create the new volume.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2Volume}
	 */
	availabilityZone: function(value) {
		return this.set('AvailabilityZone', value);
	},

	/**
	 * Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be attached to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses encrypted volumes, you can only launch the AMI on supported instance types. For more information, see Amazon EBS encryption in the Amazon EC2 User Guide for Linux Instances.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {Boolean} value
	 * @return {EC2Volume}
	 */
	encrypted: function(value) {
		return this.set('Encrypted', value);
	},

	/**
	 * The number of I/O operations per second (IOPS) that the volume supports. For more information about the valid sizes for each volume type, see the Iops parameter for the CreateVolume action in the Amazon EC2 API Reference.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {Number} value
	 * @return {EC2Volume}
	 */
	iops: function(value) {
		return this.set('Iops', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to create the encrypted volume, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you create an encrypted volume and don't specify this property, the default master key is used.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2Volume}
	 */
	kmsKeyId: function(value) {
		return this.set('KmsKeyId', value);
	},

	/**
	 * The size of the volume, in gibibytes (GiBs). For more information about the valid sizes for each volume type, see the Size parameter for the CreateVolume action in the Amazon EC2 API Reference.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2Volume}
	 */
	size: function(value) {
		return this.set('Size', value);
	},

	/**
	 * The snapshot from which to create the new volume.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2Volume}
	 */
	snapshotId: function(value) {
		return this.set('SnapshotId', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this volume.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2Volume}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The volume type. You can specify standard, io1, or gp2. If you set the type to io1, you must also set the Iops property. For more information about these values and the default value, see the VolumeType parameter for the CreateVolume action in the Amazon EC2 API Reference.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {EC2Volume}
	 */
	volumeType: function(value) {
		return this.set('VolumeType', value);
	}
};

module.exports = EC2Volume;
