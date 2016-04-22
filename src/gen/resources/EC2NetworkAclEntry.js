var Resource = require('../../resource');

/**
 * AWS::EC2::NetworkAclEntry - Creates an entry (i.e., rule) in a network ACL with a rule number you specify. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2NetworkAclEntry(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2NetworkAclEntry, Resource);

EC2NetworkAclEntry.prototype = {
	
	
	/**
	 * The CIDR range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2NetworkAclEntry}
	 */
	cidrBlock: function(value) {
		return this.set('CidrBlock', value);
	},

	/**
	 * Whether this rule applies to egress traffic from the subnet (true) or ingress traffic to the subnet (false). By default, AWS CloudFormation specifies false.
	 *
	 * Required: false
	 * Update requires: Replacement.
	 *
	 * @param {Boolean} value
	 * @return {EC2NetworkAclEntry}
	 */
	egress: function(value) {
		return this.set('Egress', value);
	},

	/**
	 * The Internet Control Message Protocol (ICMP) code and type.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {EC2ICMPPropertyType} value
	 * @return {EC2NetworkAclEntry}
	 */
	icmp: function(value) {
		return this.set('Icmp', value);
	},

	/**
	 * ID of the ACL where the entry will be created.
	 *
	 * Required: true
	 * Update requires: Replacement.
	 *
	 * @param {String} value
	 * @return {EC2NetworkAclEntry}
	 */
	networkAclId: function(value) {
		return this.set('NetworkAclId', value);
	},

	/**
	 * The range of port numbers for the UDP/TCP protocol.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {EC2PortRangePropertyType} value
	 * @return {EC2NetworkAclEntry}
	 */
	portRange: function(value) {
		return this.set('PortRange', value);
	},

	/**
	 * The IP protocol that the rule applies to. You must specify -1 or a protocol number (go to Protocol Numbers at iana.org). You can specify -1 for all protocols.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {EC2NetworkAclEntry}
	 */
	protocol: function(value) {
		return this.set('Protocol', value);
	},

	/**
	 * Whether to allow or deny traffic that matches the rule; valid values are "allow" or "deny".
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2NetworkAclEntry}
	 */
	ruleAction: function(value) {
		return this.set('RuleAction', value);
	},

	/**
	 * Rule number to assign to the entry (e.g., 100). This must be a positive integer from 1 to 32766.
	 *
	 * Required: true
	 * Update requires: Replacement.
	 *
	 * @param {Number} value
	 * @return {EC2NetworkAclEntry}
	 */
	ruleNumber: function(value) {
		return this.set('RuleNumber', value);
	}
};

module.exports = EC2NetworkAclEntry;
