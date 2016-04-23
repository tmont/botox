var PropertyType = require('../../property-type');

/**
 * The Amazon RDS security group rule is an embedded property of the AWS::RDS::DBSecurityGroup type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-security-group-rule.html}
 * @constructor
 */
function RDSSecurityGroupRule() {
	PropertyType.call(this);
}

Object.setPrototypeOf(RDSSecurityGroupRule, PropertyType);

RDSSecurityGroupRule.prototype = {
	
	/**
	 * The IP range to authorize.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {RDSSecurityGroupRule}
	 */
	cidrip: function(value) {
		return this.set('CIDRIP', value);
	},

	/**
	 * Id of the VPC or EC2 Security Group to authorize.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {RDSSecurityGroupRule}
	 */
	ec2SecurityGroupId: function(value) {
		return this.set('EC2SecurityGroupId', value);
	},

	/**
	 * Name of the EC2 Security Group to authorize.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {RDSSecurityGroupRule}
	 */
	ec2SecurityGroupName: function(value) {
		return this.set('EC2SecurityGroupName', value);
	},

	/**
	 * AWS Account Number of the owner of the EC2 Security Group specified in the EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable value.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {RDSSecurityGroupRule}
	 */
	ec2SecurityGroupOwnerId: function(value) {
		return this.set('EC2SecurityGroupOwnerId', value);
	}
};

module.exports = RDSSecurityGroupRule;
