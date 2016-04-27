var PropertyType = require('../../property-type');

/**
 * Ebs is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications BlockDeviceMappings property that defines a block device for an Amazon Elastic Block Store (Amazon EBS) volume.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings-ebs.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs() {
	PropertyType.call(this);
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether to delete the volume when the instance is terminated.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.prototype.deleteOnTermination = function(value) {
	return this.set('DeleteOnTermination', value);
};

/**
 * Indicates whether the EBS volume is encrypted. Encrypted Amazon EBS volumes can be attached only to instances that support Amazon EBS encryption.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.prototype.encrypted = function(value) {
	return this.set('Encrypted', value);
};

/**
 * The number of I/O operations per second (IOPS) that the volume supports. For more information, see Iops for the EbsBlockDevice action in the Amazon EC2 API Reference.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.prototype.iops = function(value) {
	return this.set('Iops', value);
};

/**
 * The snapshot ID of the volume that you want to use.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.prototype.snapshotId = function(value) {
	return this.set('SnapshotId', value);
};

/**
 * The volume size, in Gibibytes (GiB). For more information about specifying the volume size, see VolumeSize for the EbsBlockDevice action in the Amazon EC2 API Reference.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.prototype.volumeSize = function(value) {
	return this.set('VolumeSize', value);
};

/**
 * The volume type. For more information about specifying the volume type, see VolumeType for the EbsBlockDevice action in the Amazon EC2 API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs.prototype.volumeType = function(value) {
	return this.set('VolumeType', value);
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs;
