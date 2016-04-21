var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Redshift::ClusterSecurityGroupIngress - Specifies inbound (ingress) rules for an Amazon Redshift security group.
 * @constructor
 */
function RedshiftClusterSecurityGroupIngress(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

RedshiftClusterSecurityGroupIngress.prototype = {
	
	/**
	 * The name of the Amazon Redshift security group that will be associated with the ingress rule.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftClusterSecurityGroupIngress}
	 */
	clusterSecurityGroupName: function(value) {
		return this.set('ClusterSecurityGroupName', value);
	},

	/**
	 * The IP address range that has inbound access to the Amazon Redshift security group.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftClusterSecurityGroupIngress}
	 */
	cidrip: function(value) {
		return this.set('CIDRIP', value);
	},

	/**
	 * The Amazon EC2 security group that will be added the Amazon Redshift security group.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftClusterSecurityGroupIngress}
	 */
	ec2SecurityGroupName: function(value) {
		return this.set('EC2SecurityGroupName', value);
	},

	/**
	 * The 12-digit AWS account number of the owner of the Amazon EC2 security group that is specified by the EC2SecurityGroupName parameter.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftClusterSecurityGroupIngress}
	 */
	ec2SecurityGroupOwnerId: function(value) {
		return this.set('EC2SecurityGroupOwnerId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Redshift::ClusterSecurityGroupIngress has no attributes');
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

module.exports = RedshiftClusterSecurityGroupIngress;
