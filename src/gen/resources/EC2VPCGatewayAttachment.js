var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPCGatewayAttachment - Attaches a gateway to a VPC.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCGatewayAttachment(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EC2VPCGatewayAttachment.prototype = {
	
	/**
	 * The ID of the Internet gateway.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPCGatewayAttachment}
	 */
	internetGatewayId: function(value) {
		return this.set('InternetGatewayId', value);
	},

	/**
	 * The ID of the VPC to associate with this gateway.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPCGatewayAttachment}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	},

	/**
	 * The ID of the virtual private network (VPN) gateway to attach to the VPC.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPCGatewayAttachment}
	 */
	vpnGatewayId: function(value) {
		return this.set('VpnGatewayId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VPCGatewayAttachment has no attributes');
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

module.exports = EC2VPCGatewayAttachment;
