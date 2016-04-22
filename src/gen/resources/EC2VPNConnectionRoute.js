var Resource = require('../../resource');

/**
 * AWS::EC2::VPNConnectionRoute - A static route that is associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNConnectionRoute(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VPNConnectionRoute, Resource);

EC2VPNConnectionRoute.prototype = {
	
	
	/**
	 * The CIDR block that is associated with the local subnet of the customer network.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPNConnectionRoute}
	 */
	destinationCidrBlock: function(value) {
		return this.set('DestinationCidrBlock', value);
	},

	/**
	 * The ID of the VPN connection.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPNConnectionRoute}
	 */
	vpnConnectionId: function(value) {
		return this.set('VpnConnectionId', value);
	}
};

module.exports = EC2VPNConnectionRoute;
