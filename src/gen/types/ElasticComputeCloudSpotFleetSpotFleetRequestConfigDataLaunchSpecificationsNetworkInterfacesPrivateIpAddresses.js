/**
 * PrivateIpAddresses is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications NetworkInterfaces property that specifies the private IP address that you want to assign to the network interface.
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses(initialData) {
	this.data = initialData || {};
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses.prototype = {
	
	/**
	 * Indicates whether the private IP address is the primary private IP address. You can designate only one IP address as primary.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses}
	 */
	primary: function(value) {
		return this.set('Primary', value);
	},

	/**
	 * The private IP address.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses}
	 */
	privateIpAddress: function(value) {
		return this.set('PrivateIpAddress', value);
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

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses;
