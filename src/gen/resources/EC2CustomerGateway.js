var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::CustomerGateway - Provides information to AWS about your VPN customer gateway device.
 * @constructor
 */
function EC2CustomerGateway(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2CustomerGateway.prototype = {
	
	/**
	 * The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {NumberBgpAsnisalwaysanintegervalue} value
	 * @return {EC2CustomerGateway}
	 */
	bgpAsn: function(value) {
		return this.set('BgpAsn', value);
	},

	/**
	 * The internet-routable IP address for the customer gateway's outside interface. The address must be static.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2CustomerGateway}
	 */
	ipAddress: function(value) {
		return this.set('IpAddress', value);
	},

	/**
	 * The tags that you want to attach to the resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTags} value
	 * @return {EC2CustomerGateway}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The type of VPN connection that this customer gateway supports.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2CustomerGateway}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::CustomerGateway has no attributes');
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

module.exports = EC2CustomerGateway;
