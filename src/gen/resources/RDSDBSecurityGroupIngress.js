var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::RDS::DBSecurityGroupIngress - The AWS::RDS::DBSecurityGroupIngress type enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet. For more information about DB security groups, see Working with DB security groups
 * @constructor
 */
function RDSDBSecurityGroupIngress(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

RDSDBSecurityGroupIngress.prototype = {
	
	/**
	 * The IP range to authorize.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBSecurityGroupIngress}
	 */
	cidrip: function(value) {
		return this.set('CIDRIP', value);
	},

	/**
	 * The name (ARN) of the AWS::RDS::DBSecurityGroup to which this ingress will be added.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBSecurityGroupIngress}
	 */
	dbsecurityGroupName: function(value) {
		return this.set('DBSecurityGroupName', value);
	},

	/**
	 * The ID of the VPC or EC2 security group to authorize.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBSecurityGroupIngress}
	 */
	ec2SecurityGroupId: function(value) {
		return this.set('EC2SecurityGroupId', value);
	},

	/**
	 * The name of the EC2 security group to authorize.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBSecurityGroupIngress}
	 */
	ec2SecurityGroupName: function(value) {
		return this.set('EC2SecurityGroupName', value);
	},

	/**
	 * The AWS Account Number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The AWS Access Key ID is not an acceptable value.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBSecurityGroupIngress}
	 */
	ec2SecurityGroupOwnerId: function(value) {
		return this.set('EC2SecurityGroupOwnerId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::RDS::DBSecurityGroupIngress has no attributes');
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

module.exports = RDSDBSecurityGroupIngress;
