var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPNGatewayRoutePropagation - Enables a virtual private gateway (VGW) to propagate routes to the routing tables of a VPC.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNGatewayRoutePropagation(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VPNGatewayRoutePropagation has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EC2VPNGatewayRoutePropagation;
