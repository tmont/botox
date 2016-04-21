/**
 * Monitoring is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that enables instance monitoring.
 * @constructor
 */
function EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring(initialData) {
	this.data = initialData || {};
}

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

module.exports = EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring;
