var PropertyType = require('../../property-type');

/**
 * PrivateIpAddresses is a property of the Amazon Elastic Compute Cloud SpotFleet SpotFleetRequestConfigData LaunchSpecifications NetworkInterfaces property that specifies the private IP address that you want to assign to the network interface.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces-privateipaddresses.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses() {
	PropertyType.call(this);
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether the private IP address is the primary private IP address. You can designate only one IP address as primary.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses.prototype.primary = function(value) {
	return this.set('Primary', value);
};

/**
 * The private IP address.
 *
 * Required: true
 *
 * @param {String} value
 * @return {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses.prototype.privateIpAddress = function(value) {
	return this.set('PrivateIpAddress', value);
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses;
