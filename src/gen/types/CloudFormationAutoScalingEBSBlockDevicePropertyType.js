var PropertyType = require('../../property-type');

/**
 * The AutoScaling EBS Block Device type is an embedded property of the AutoScaling Block Device Mapping type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig-blockdev-template.html}
 * @constructor
 */
function CloudFormationAutoScalingEBSBlockDevicePropertyType() {
	PropertyType.call(this);
}

CloudFormationAutoScalingEBSBlockDevicePropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether to delete the volume when the instance is terminated. By default, Auto Scaling uses true.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {CloudFormationAutoScalingEBSBlockDevicePropertyType}
 */
CloudFormationAutoScalingEBSBlockDevicePropertyType.prototype.deleteOnTermination = function(value) {
	return this.set('DeleteOnTermination', value);
};

/**
 * Indicates whether the volume is encrypted. Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. Volumes that you create from encrypted snapshots are automatically encrypted. You cannot create an encrypted volume from an unencrypted snapshot or an unencrypted volume from an encrypted snapshot.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {CloudFormationAutoScalingEBSBlockDevicePropertyType}
 */
CloudFormationAutoScalingEBSBlockDevicePropertyType.prototype.encrypted = function(value) {
	return this.set('Encrypted', value);
};

/**
 * The number of I/O operations per second (IOPS) that the volume supports. The maximum ratio of IOPS to volume size is 30.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {CloudFormationAutoScalingEBSBlockDevicePropertyType}
 */
CloudFormationAutoScalingEBSBlockDevicePropertyType.prototype.iops = function(value) {
	return this.set('Iops', value);
};

/**
 * The snapshot ID of the volume to use.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFormationAutoScalingEBSBlockDevicePropertyType}
 */
CloudFormationAutoScalingEBSBlockDevicePropertyType.prototype.snapshotId = function(value) {
	return this.set('SnapshotId', value);
};

/**
 * The volume size, in Gibibytes (GiB). This can be a number from 1 – 1024. If the volume type is EBS optimized, the minimum value is 10. For more information about specifying the volume type, see EbsOptimized in AWS::AutoScaling::LaunchConfiguration.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {CloudFormationAutoScalingEBSBlockDevicePropertyType}
 */
CloudFormationAutoScalingEBSBlockDevicePropertyType.prototype.volumeSize = function(value) {
	return this.set('VolumeSize', value);
};

/**
 * The volume type. By default, Auto Scaling uses the standard volume type. For more information, see Ebs in the Auto Scaling API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFormationAutoScalingEBSBlockDevicePropertyType}
 */
CloudFormationAutoScalingEBSBlockDevicePropertyType.prototype.volumeType = function(value) {
	return this.set('VolumeType', value);
};

module.exports = CloudFormationAutoScalingEBSBlockDevicePropertyType;
