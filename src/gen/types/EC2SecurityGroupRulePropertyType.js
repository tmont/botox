var PropertyType = require('../../property-type');

/**
 * The EC2 Security Group Rule is an embedded property of the AWS::EC2::SecurityGroup type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-rule.html}
 * @constructor
 */
function EC2SecurityGroupRulePropertyType() {
	PropertyType.call(this);
}

EC2SecurityGroupRulePropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * Specifies a CIDR range.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.cidrIp = function(value) {
	return this.set('CidrIp', value);
};

/**
 * Specifies the GroupId of the destination Amazon VPC security group. (SecurityGroupEgress only)
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.destinationSecurityGroupId = function(value) {
	return this.set('DestinationSecurityGroupId', value);
};

/**
 * The start of port range for the TCP and UDP protocols, or an ICMP type number. An ICMP type number of -1 indicates a wildcard (i.e., any ICMP type number).
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.fromPort = function(value) {
	return this.set('FromPort', value);
};

/**
 * An IP protocol name or number. For valid values, go to the IpProtocol parameter in AuthorizeSecurityGroupIngress
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.ipProtocol = function(value) {
	return this.set('IpProtocol', value);
};

/**
 * For VPC security groups only. Specifies the ID of the Amazon EC2 Security Group to allow access. You can use the Ref intrinsic function to refer to the logical ID of a security group defined in the same template. (SecurityGroupIngress only)
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.sourceSecurityGroupId = function(value) {
	return this.set('SourceSecurityGroupId', value);
};

/**
 * For non-VPC security groups only. Specifies the name of the Amazon EC2 Security Group to use for access. You can use the Ref intrinsic function to refer to the logical name of a security group that is defined in the same template. (SecurityGroupIngress only)
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.sourceSecurityGroupName = function(value) {
	return this.set('SourceSecurityGroupName', value);
};

/**
 * Specifies the AWS Account ID of the owner of the Amazon EC2 Security Group that is specified in the SourceSecurityGroupName property. (SecurityGroupIngress only)
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.sourceSecurityGroupOwnerId = function(value) {
	return this.set('SourceSecurityGroupOwnerId', value);
};

/**
 * The end of port range for the TCP and UDP protocols, or an ICMP code. An ICMP code of -1 indicates a wildcard (i.e., any ICMP code).
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {EC2SecurityGroupRulePropertyType}
 */
EC2SecurityGroupRulePropertyType.prototype.toPort = function(value) {
	return this.set('ToPort', value);
};

module.exports = EC2SecurityGroupRulePropertyType;
