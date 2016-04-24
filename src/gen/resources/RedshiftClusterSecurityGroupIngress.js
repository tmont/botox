var Resource = require('../../resource');

/**
 * AWS::Redshift::ClusterSecurityGroupIngress - Specifies inbound (ingress) rules for an Amazon Redshift security group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftClusterSecurityGroupIngress(name) {
	Resource.call(this, name, 'AWS::Redshift::ClusterSecurityGroupIngress');
}

RedshiftClusterSecurityGroupIngress.prototype = Object.create(Resource.prototype);


/**
 * The name of the Amazon Redshift security group that will be associated with the ingress rule.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftClusterSecurityGroupIngress}
 */
RedshiftClusterSecurityGroupIngress.prototype.clusterSecurityGroupName = function(value) {
	return this.set('ClusterSecurityGroupName', value);
};

/**
 * The IP address range that has inbound access to the Amazon Redshift security group.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftClusterSecurityGroupIngress}
 */
RedshiftClusterSecurityGroupIngress.prototype.cidrip = function(value) {
	return this.set('CIDRIP', value);
};

/**
 * The Amazon EC2 security group that will be added the Amazon Redshift security group.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftClusterSecurityGroupIngress}
 */
RedshiftClusterSecurityGroupIngress.prototype.eC2SecurityGroupName = function(value) {
	return this.set('EC2SecurityGroupName', value);
};

/**
 * The 12-digit AWS account number of the owner of the Amazon EC2 security group that is specified by the EC2SecurityGroupName parameter.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftClusterSecurityGroupIngress}
 */
RedshiftClusterSecurityGroupIngress.prototype.eC2SecurityGroupOwnerId = function(value) {
	return this.set('EC2SecurityGroupOwnerId', value);
};

module.exports = RedshiftClusterSecurityGroupIngress;
