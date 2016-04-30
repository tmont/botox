var Resource = require('../../resource');

/**
 * AWS::Redshift::ClusterParameterGroup - Creates an Amazon Redshift parameter group that you can associate with an Amazon Redshift cluster. The parameters in the group apply to all the databases that you create in the cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftClusterParameterGroup(name) {
	Resource.call(this, name, 'AWS::Redshift::ClusterParameterGroup');
}

RedshiftClusterParameterGroup.prototype = Object.create(Resource.prototype);

/**
 * A description of the parameter group.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RedshiftClusterParameterGroup}
 */
RedshiftClusterParameterGroup.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The Amazon Redshift engine version that applies to this cluster parameter group. The cluster engine version determines the set of parameters that you can specify in the Parameters property.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RedshiftClusterParameterGroup}
 */
RedshiftClusterParameterGroup.prototype.parameterGroupFamily = function(value) {
	return this.set('ParameterGroupFamily', value);
};

/**
 * A list of parameter names and values that are allowed by the Amazon Redshift engine version that you specified in the ParameterGroupFamily property. For more information, see Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {RedshiftParameterType|Attribute|Reference} value Amazon Redshift Parameter Type
 * @returns {RedshiftClusterParameterGroup}
 */
RedshiftClusterParameterGroup.prototype.parameters = function(value) {
	return this.set('Parameters', value);
};

module.exports = RedshiftClusterParameterGroup;
