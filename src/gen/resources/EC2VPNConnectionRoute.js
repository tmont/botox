var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPNConnectionRoute - A static route that is associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
 * @constructor
 */
function EC2VPNConnectionRoute(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VPNConnectionRoute has no attributes');
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

module.exports = EC2VPNConnectionRoute;
