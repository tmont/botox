var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::RDS::DBSecurityGroup - The AWS::RDS::DBSecurityGroup type is used to create or update an Amazon RDS DB Security Group. For more information about DB Security Groups, see Working with DB Security Groups in the Amazon Relational Database Service Developer Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBSecurityGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

RDSDBSecurityGroup.prototype = {
	
	/**
	 * The Id of VPC. Indicates which VPC this DB Security Group should belong to.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBSecurityGroup}
	 */
	ec2VpcId: function(value) {
		return this.set('EC2VpcId', value);
	},

	/**
	 * Network ingress authorization for an Amazon EC2 security group or an IP address range.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {RDSSecurityGroupRule[]} value
	 * @return {RDSDBSecurityGroup}
	 */
	dbsecurityGroupIngress: function(value) {
		return this.set('DBSecurityGroupIngress', value);
	},

	/**
	 * Description of the security group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBSecurityGroup}
	 */
	groupDescription: function(value) {
		return this.set('GroupDescription', value);
	},

	/**
	 * The tags that you want to attach to the Amazon RDS DB security group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {resourcetag[]} value
	 * @return {RDSDBSecurityGroup}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::RDS::DBSecurityGroup has no attributes');
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

module.exports = RDSDBSecurityGroup;
