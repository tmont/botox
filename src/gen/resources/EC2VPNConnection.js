var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPNConnection - Creates a new VPN connection between an existing virtual private gateway and a VPN customer gateway.
 * @constructor
 */
function EC2VPNConnection(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2VPNConnection.prototype = {
	
	/**
	 * The type of VPN connection this virtual private gateway supports.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPNConnection}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * The ID of the customer gateway. This can either be an embedded JSON object or a reference to a Gateway ID.
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {EC2VPNConnection}
	 */
	customerGatewayId: function(value) {
		return this.set('CustomerGatewayId', value);
	},

	/**
	 * Indicates whether the VPN connection requires static routes.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {EC2VPNConnection}
	 */
	staticRoutesOnly: function(value) {
		return this.set('StaticRoutesOnly', value);
	},

	/**
	 * The tags that you want to attach to the resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTags} value
	 * @return {EC2VPNConnection}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The ID of the virtual private gateway. This can either be an embedded JSON object or a reference to a Gateway ID.
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {EC2VPNConnection}
	 */
	vpnGatewayId: function(value) {
		return this.set('VpnGatewayId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VPNConnection has no attributes');
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

module.exports = EC2VPNConnection;
