var PropertyType = require('../../property-type');

/**
 * The Amazon Elastic Block Store block device type is an embedded property of the Amazon EC2 Block Device Mapping Property property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-template.html}
 * @constructor
 */
function ElasticBlockStoreBlockDeviceProperty() {
	PropertyType.call(this);
}

ElasticBlockStoreBlockDeviceProperty.prototype = Object.create(PropertyType.prototype);

/**
 * Determines whether to delete the volume on instance termination. The default value is true.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticBlockStoreBlockDeviceProperty}
 */
ElasticBlockStoreBlockDeviceProperty.prototype.deleteOnTermination = function(value) {
	return this.set('DeleteOnTermination', value);
};

/**
 * Indicates whether the volume is encrypted. Encrypted Amazon EBS volumes can only be attached to instance types that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or vice versa. If your AMI uses encrypted volumes, you can only launch the AMI on supported instance types. For more information, see Amazon EBS encryption in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticBlockStoreBlockDeviceProperty}
 */
ElasticBlockStoreBlockDeviceProperty.prototype.encrypted = function(value) {
	return this.set('Encrypted', value);
};

/**
 * The number of I/O operations per second (IOPS) that the volume supports. This can be an integer from 100 – 2000.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {ElasticBlockStoreBlockDeviceProperty}
 */
ElasticBlockStoreBlockDeviceProperty.prototype.iops = function(value) {
	return this.set('Iops', value);
};

/**
 * The snapshot ID of the volume to use to create a block device.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticBlockStoreBlockDeviceProperty}
 */
ElasticBlockStoreBlockDeviceProperty.prototype.snapshotId = function(value) {
	return this.set('SnapshotId', value);
};

/**
 * The volume size, in gibibytes (GiB). This can be a number from 1 – 1024. If the volume type is io1, the minimum value is 10.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticBlockStoreBlockDeviceProperty}
 */
ElasticBlockStoreBlockDeviceProperty.prototype.volumeSize = function(value) {
	return this.set('VolumeSize', value);
};

/**
 * The volume type. You can specify standard, io1, or gp2. If you set the type to io1, you must also set the Iops property. For more information about these values and the default value, see CreateVolume in the Amazon EC2 API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticBlockStoreBlockDeviceProperty}
 */
ElasticBlockStoreBlockDeviceProperty.prototype.volumeType = function(value) {
	return this.set('VolumeType', value);
};

module.exports = ElasticBlockStoreBlockDeviceProperty;
