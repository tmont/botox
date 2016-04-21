var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPNGateway - Creates a virtual private gateway. A virtual private gateway is the VPC-side endpoint for your VPN connection.
 * @constructor
 */
function EC2VPNGateway(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2VPNGateway.prototype = {
	
	/**
	 * The type of VPN connection this virtual private gateway supports. The only valid value is "ipsec.1".
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPNGateway}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2VPNGateway}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VPNGateway has no attributes');
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

module.exports = EC2VPNGateway;
