var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPCEndpoint - The AWS::EC2::VPCEndpoint resource creates a VPC endpoint that you can use to establish a private connection between your VPC and another AWS service without requiring access over the Internet, a VPN connection, or AWS Direct Connect.
 * @constructor
 */
function EC2VPCEndpoint(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2VPCEndpoint.prototype = {
	
	/**
	 * A policy to attach to the endpoint that controls access to the service. The policy must be valid JSON. The default policy allows full access to the AWS service. For more information, see Controlling Access to Services in the Amazon VPC User Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {EC2VPCEndpoint}
	 */
	policyDocument: function(value) {
		return this.set('PolicyDocument', value);
	},

	/**
	 * One or more route table IDs that are used by the VPC to reach the endpoint.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {EC2VPCEndpoint}
	 */
	routeTableIds: function(value) {
		return this.set('RouteTableIds', value);
	},

	/**
	 * The AWS service to which you want to establish a connection. Specify the service name in the form of com.amazonaws.region.service.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPCEndpoint}
	 */
	serviceName: function(value) {
		return this.set('ServiceName', value);
	},

	/**
	 * The ID of the VPC in which the endpoint is used.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPCEndpoint}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VPCEndpoint has no attributes');
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

module.exports = EC2VPCEndpoint;
