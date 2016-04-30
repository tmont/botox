var PropertyType = require('../../property-type');

/**
 * BlockDeviceMappings is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the block devices that are mapped to an instance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings() {
	PropertyType.call(this);
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the device within the EC2 instance, such as /dev/dsh or xvdh.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings.prototype.deviceName = function(value) {
	return this.set('DeviceName', value);
};

/**
 * The Amazon Elastic Block Store (Amazon EBS) volume information.
 *
 * Required: false
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings.prototype.ebs = function(value) {
	return this.set('Ebs', value);
};

/**
 * Suppresses the specified device that is included in the block device mapping of the Amazon Machine Image (AMI).
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings.prototype.noDevice = function(value) {
	return this.set('NoDevice', value);
};

/**
 * The name of the virtual device. The name must be in the form ephemeralX where X is a number equal to or greater than zero (0), for example, ephemeral0.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings.prototype.virtualName = function(value) {
	return this.set('VirtualName', value);
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings;
