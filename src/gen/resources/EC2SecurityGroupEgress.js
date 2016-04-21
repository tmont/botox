var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::SecurityGroupEgress - The AWS::EC2::SecurityGroupEgress resource adds an egress rule to an Amazon VPC security group.
 * @constructor
 */
function EC2SecurityGroupEgress(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2SecurityGroupEgress.prototype = {
	
	/**
	 * CIDR range.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SecurityGroupEgress}
	 */
	cidrIp: function(value) {
		return this.set('CidrIp', value);
	},

	/**
	 * Specifies the group ID of the destination Amazon VPC security group.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SecurityGroupEgress}
	 */
	destinationSecurityGroupId: function(value) {
		return this.set('DestinationSecurityGroupId', value);
	},

	/**
	 * Start of port range for the TCP and UDP protocols, or an ICMP type number. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP type number).
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {Integer} value
	 * @return {EC2SecurityGroupEgress}
	 */
	fromPort: function(value) {
		return this.set('FromPort', value);
	},

	/**
	 * ID of the Amazon VPC security group to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource that has a valid VpcId property or the ID of an existing Amazon VPC security group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SecurityGroupEgress}
	 */
	groupId: function(value) {
		return this.set('GroupId', value);
	},

	/**
	 * IP protocol name or number. For valid values, see the IpProtocol parameter in AuthorizeSecurityGroupIngress
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SecurityGroupEgress}
	 */
	ipProtocol: function(value) {
		return this.set('IpProtocol', value);
	},

	/**
	 * End of port range for the TCP and UDP protocols, or an ICMP code. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP code).
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {Integer} value
	 * @return {EC2SecurityGroupEgress}
	 */
	toPort: function(value) {
		return this.set('ToPort', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::SecurityGroupEgress has no attributes');
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

module.exports = EC2SecurityGroupEgress;
