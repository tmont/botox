var Resource = require('../../resource');

/**
 * AWS::Redshift::ClusterSubnetGroup - Creates an Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon VPC when creating an Amazon Redshift subnet group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftClusterSubnetGroup(name) {
	Resource.call(this, name, 'AWS::Redshift::ClusterSubnetGroup');
}

RedshiftClusterSubnetGroup.prototype = Object.create(Resource.prototype);

/**
 * A description of the subnet group.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RedshiftClusterSubnetGroup}
 */
RedshiftClusterSubnetGroup.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * A list of VPC subnet IDs. You can modify a maximum of 20 subnets.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {RedshiftClusterSubnetGroup}
 */
RedshiftClusterSubnetGroup.prototype.subnetIds = function(value) {
	return this.set('SubnetIds', value);
};

module.exports = RedshiftClusterSubnetGroup;
