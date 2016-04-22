var Resource = require('../../resource');

/**
 * AWS::EC2::SecurityGroupEgress - The AWS::EC2::SecurityGroupEgress resource adds an egress rule to an Amazon VPC security group.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SecurityGroupEgress(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2SecurityGroupEgress, Resource);

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
	 * @param {Number} value
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
	 * @param {Number} value
	 * @return {EC2SecurityGroupEgress}
	 */
	toPort: function(value) {
		return this.set('ToPort', value);
	}
};

module.exports = EC2SecurityGroupEgress;
