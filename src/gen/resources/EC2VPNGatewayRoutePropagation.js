var Resource = require('../../resource');

/**
 * AWS::EC2::VPNGatewayRoutePropagation - Enables a virtual private gateway (VGW) to propagate routes to the routing tables of a VPC.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNGatewayRoutePropagation(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VPNGatewayRoutePropagation, Resource);

EC2VPNGatewayRoutePropagation.prototype = {
	
	
	/**
	 * A list of routing table IDs that are associated with a VPC. The routing tables must be associated with the same VPC that the virtual private gateway is attached to.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {routetableID[]} value
	 * @return {EC2VPNGatewayRoutePropagation}
	 */
	routeTableIds: function(value) {
		return this.set('RouteTableIds', value);
	},

	/**
	 * The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPNGatewayRoutePropagation}
	 */
	vpnGatewayId: function(value) {
		return this.set('VpnGatewayId', value);
	}
};

module.exports = EC2VPNGatewayRoutePropagation;
