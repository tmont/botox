var PropertyType = require('../../property-type');

/**
 * Monitoring is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that enables instance monitoring.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-monitoring.html}
 * @constructor
 */
function EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring, PropertyType);

EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring.prototype = {
	
	/**
	 * Indicates whether monitoring is enabled for the instances.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring}
	 */
	enabled: function(value) {
		return this.set('Enabled', value);
	}
};

module.exports = EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring;
