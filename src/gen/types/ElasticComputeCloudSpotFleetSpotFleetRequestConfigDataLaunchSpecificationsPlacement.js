var PropertyType = require('../../property-type');

/**
 * Placement is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the placement group for the Spot instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-placement.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement() {
	PropertyType.call(this);
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement.prototype = Object.create(PropertyType.prototype);

/**
 * The Availability Zone (AZ) of the placement group.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

/**
 * The name of the placement group (for cluster instances).
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement.prototype.groupName = function(value) {
	return this.set('GroupName', value);
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement;
