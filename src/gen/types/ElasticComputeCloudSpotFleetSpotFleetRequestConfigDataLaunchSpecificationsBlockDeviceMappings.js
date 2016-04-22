/**
 * BlockDeviceMappings is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the block devices that are mapped to an instance.
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings() {
	this.data = {};
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings.prototype = {
	
	/**
	 * The name of the device within the EC2 instance, such as /dev/dsh or xvdh.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
	 */
	deviceName: function(value) {
		return this.set('DeviceName', value);
	},

	/**
	 * The Amazon Elastic Block Store (Amazon EBS) volume information.
	 *
	 * Required: false
	 *
	 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
	 */
	ebs: function(value) {
		return this.set('Ebs', value);
	},

	/**
	 * Suppresses the specified device that is included in the block device mapping of the Amazon Machine Image (AMI).
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
	 */
	noDevice: function(value) {
		return this.set('NoDevice', value);
	},

	/**
	 * The name of the virtual device. The name must be in the form ephemeralX where X is a number equal to or greater than zero (0), for example, ephemeral0.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings}
	 */
	virtualName: function(value) {
		return this.set('VirtualName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings;
