/**
 * The Amazon RDS security group rule is an embedded property of the AWS::RDS::DBSecurityGroup type.
 * @constructor
 */
function RDSSecurityGroupRule(initialData) {
	this.data = initialData || {};
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = RDSSecurityGroupRule;
