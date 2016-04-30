var Resource = require('../../resource');

/**
 * AWS::EC2::VPNConnectionRoute - A static route that is associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection-route.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNConnectionRoute(name) {
	Resource.call(this, name, 'AWS::EC2::VPNConnectionRoute');
}

EC2VPNConnectionRoute.prototype = Object.create(Resource.prototype);

/**
 * The CIDR block that is associated with the local subnet of the customer network.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VPNConnectionRoute}
 */
EC2VPNConnectionRoute.prototype.destinationCidrBlock = function(value) {
	return this.set('DestinationCidrBlock', value);
};

/**
 * The ID of the VPN connection.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VPNConnectionRoute}
 */
EC2VPNConnectionRoute.prototype.vpnConnectionId = function(value) {
	return this.set('VpnConnectionId', value);
};

module.exports = EC2VPNConnectionRoute;
