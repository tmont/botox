var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPC - Creates a Virtual Private Cloud (VPC) with the CIDR block that you specify.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPC(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EC2VPC.prototype = {
	
	/**
	 * The CIDR block you want the VPC to cover. For example: "10.0.0.0/16".
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPC}
	 */
	cidrBlock: function(value) {
		return this.set('CidrBlock', value);
	},

	/**
	 * Specifies whether DNS resolution is supported for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not. By default the value is set to true.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {EC2VPC}
	 */
	enableDnsSupport: function(value) {
		return this.set('EnableDnsSupport', value);
	},

	/**
	 * Specifies whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not. You can only set EnableDnsHostnames to true if you also set the EnableDnsSupport attribute to true. By default, the value is set to false.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {EC2VPC}
	 */
	enableDnsHostnames: function(value) {
		return this.set('EnableDnsHostnames', value);
	},

	/**
	 * The allowed tenancy of instances launched into the VPC.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPC}
	 */
	instanceTenancy: function(value) {
		return this.set('InstanceTenancy', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this VPC.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2VPC}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * The set of IP addresses for the VPC. For example, 10.0.0.0/16.
			 */
			cidrBlock: function() {
				return new Attribute(self, 'CidrBlock');
			},

			/**
			 * The default network ACL ID that is associated with the VPC. For example, acl-814dafe3.
			 */
			defaultNetworkAcl: function() {
				return new Attribute(self, 'DefaultNetworkAcl');
			},

			/**
			 * The default security group ID that is associated with the VPC. For example, sg-b178e0d3.
			 */
			defaultSecurityGroup: function() {
				return new Attribute(self, 'DefaultSecurityGroup');
			}
		};
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

module.exports = EC2VPC;
