var PropertyType = require('../../property-type');

/**
 * NetworkInterfaces is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications property that defines the network interface of the instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces() {
	PropertyType.call(this);
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether monitoring is enabled for the instances.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.associatePublicIpAddress = function(value) {
	return this.set('AssociatePublicIpAddress', value);
};

/**
 * Indicates whether to delete the network interface when the instance terminates.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.deleteOnTermination = function(value) {
	return this.set('DeleteOnTermination', value);
};

/**
 * The description of this network interface.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The network interface's position in the attachment order.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.deviceIndex = function(value) {
	return this.set('DeviceIndex', value);
};

/**
 * A list of security group IDs to associate with this network interface.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.groups = function(value) {
	return this.set('Groups', value);
};

/**
 * A network interface ID.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.networkInterfaceId = function(value) {
	return this.set('NetworkInterfaceId', value);
};

/**
 * One or more private IP addresses to assign to the network interface. You can designate only one private IP address as primary.
 *
 * Required: false
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses[]} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.privateIpAddresses = function(value) {
	return this.set('PrivateIpAddresses', value);
};

/**
 * The number of secondary private IP addresses that Amazon Elastic Compute Cloud (Amazon EC2) automatically assigns to the network interface.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.secondaryPrivateIpAddressCount = function(value) {
	return this.set('SecondaryPrivateIpAddressCount', value);
};

/**
 * The ID of the subnet to associate with the network interface.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces;
