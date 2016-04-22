/**
 * NetworkInterfaces is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the network interface of the instances.
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces(initialData) {
	this.data = initialData || {};
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype = {
	
	/**
	 * Indicates whether monitoring is enabled for the instances.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	associatePublicIpAddress: function(value) {
		return this.set('AssociatePublicIpAddress', value);
	},

	/**
	 * Indicates whether to delete the network interface when the instance terminates.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	deleteOnTermination: function(value) {
		return this.set('DeleteOnTermination', value);
	},

	/**
	 * The description of this network interface.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The network interface's position in the attachment order.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	deviceIndex: function(value) {
		return this.set('DeviceIndex', value);
	},

	/**
	 * A list of security group IDs to associate with this network interface.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	groups: function(value) {
		return this.set('Groups', value);
	},

	/**
	 * A network interface ID.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	networkInterfaceId: function(value) {
		return this.set('NetworkInterfaceId', value);
	},

	/**
	 * One or more private IP addresses to assign to the network interface. You can designate only one private IP address as primary.
	 *
	 * Required: false
	 *
	 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddress[]} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	privateIpAddresses: function(value) {
		return this.set('PrivateIpAddresses', value);
	},

	/**
	 * The number of secondary private IP addresses that Amazon Elastic Compute Cloud (Amazon EC2) automatically assigns to the network interface.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	secondaryPrivateIpAddressCount: function(value) {
		return this.set('SecondaryPrivateIpAddressCount', value);
	},

	/**
	 * The ID of the subnet to associate with the network interface.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
	 */
	subnetId: function(value) {
		return this.set('SubnetId', value);
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

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces;
