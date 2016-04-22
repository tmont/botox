var Resource = require('../../resource');

/**
 * AWS::Redshift::ClusterSecurityGroup - Creates an Amazon Redshift security group. You use security groups to control access to Amazon Redshift clusters that are not in a VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftClusterSecurityGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(RedshiftClusterSecurityGroup, Resource);

RedshiftClusterSecurityGroup.prototype = {
	
	
	/**
	 * A description of the security group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftClusterSecurityGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	}
};

module.exports = RedshiftClusterSecurityGroup;
