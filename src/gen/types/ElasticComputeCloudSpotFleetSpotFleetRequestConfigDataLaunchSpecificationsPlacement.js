/**
 * Placement is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the placement group for the Spot instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-placement.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement() {
	this.data = {};
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement.prototype = {
	
	/**
	 * The Availability Zone (AZ) of the placement group.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement}
	 */
	availabilityZone: function(value) {
		return this.set('AvailabilityZone', value);
	},

	/**
	 * The name of the placement group (for cluster instances).
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement}
	 */
	groupName: function(value) {
		return this.set('GroupName', value);
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

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement;
