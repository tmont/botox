var Resource = require('../../resource');

/**
 * AWS::Redshift::ClusterSecurityGroupIngress - Specifies inbound (ingress) rules for an Amazon Redshift security group.
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftClusterSecurityGroupIngress(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(RedshiftClusterSecurityGroupIngress, Resource);

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
	}
};

module.exports = RedshiftClusterSecurityGroupIngress;
