var Resource = require('../../resource');

/**
 * AWS::Redshift::ClusterSubnetGroup - Creates an Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon VPC when creating an Amazon Redshift subnet group.
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftClusterSubnetGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(RedshiftClusterSubnetGroup, Resource);

RedshiftClusterSubnetGroup.prototype = {
	
	
	/**
	 * A description of the subnet group.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RedshiftClusterSubnetGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * A list of VPC subnet IDs. You can modify a maximum of 20 subnets.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {RedshiftClusterSubnetGroup}
	 */
	subnetIds: function(value) {
		return this.set('SubnetIds', value);
	}
};

module.exports = RedshiftClusterSubnetGroup;
