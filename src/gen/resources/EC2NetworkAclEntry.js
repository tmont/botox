var Resource = require('../../resource');

/**
 * AWS::EC2::NetworkAclEntry - Creates an entry (i.e., rule) in a network ACL with a rule number you specify. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-acl-entry.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2NetworkAclEntry(name) {
	Resource.call(this, name, 'AWS::EC2::NetworkAclEntry');
}

EC2NetworkAclEntry.prototype = Object.create(Resource.prototype);

/**
 * The CIDR range to allow or deny, in CIDR notation (e.g., 172.16.0.0/24).
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.cidrBlock = function(value) {
	return this.set('CidrBlock', value);
};

/**
 * Whether this rule applies to egress traffic from the subnet (true) or ingress traffic to the subnet (false). By default, AWS CloudFormation specifies false.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.egress = function(value) {
	return this.set('Egress', value);
};

/**
 * The Internet Control Message Protocol (ICMP) code and type.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {EC2ICMPPropertyType|Attribute|Reference} value EC2 ICMP Property Type
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.icmp = function(value) {
	return this.set('Icmp', value);
};

/**
 * ID of the ACL where the entry will be created.
 *
 * Required: true
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.networkAclId = function(value) {
	return this.set('NetworkAclId', value);
};

/**
 * The range of port numbers for the UDP/TCP protocol.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {EC2PortRangePropertyType|Attribute|Reference} value EC2 PortRange Property Type
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.portRange = function(value) {
	return this.set('PortRange', value);
};

/**
 * The IP protocol that the rule applies to. You must specify -1 or a protocol number (go to Protocol Numbers at iana.org). You can specify -1 for all protocols.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.protocol = function(value) {
	return this.set('Protocol', value);
};

/**
 * Whether to allow or deny traffic that matches the rule; valid values are "allow" or "deny".
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.ruleAction = function(value) {
	return this.set('RuleAction', value);
};

/**
 * Rule number to assign to the entry (e.g., 100). This must be a positive integer from 1 to 32766.
 *
 * Required: true
 * Update requires: Replacement.
 *
 * @param {Number|Attribute|Reference} value
 * @returns {EC2NetworkAclEntry}
 */
EC2NetworkAclEntry.prototype.ruleNumber = function(value) {
	return this.set('RuleNumber', value);
};

module.exports = EC2NetworkAclEntry;
