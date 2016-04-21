var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Redshift::ClusterParameterGroup - Creates an Amazon Redshift parameter group that you can associate with an Amazon Redshift cluster. The parameters in the group apply to all the databases that you create in the cluster.
 * @constructor
 */
function RedshiftClusterParameterGroup(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

RedshiftClusterParameterGroup.prototype = {
	
	/**
	 * A description of the parameter group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftClusterParameterGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The Amazon Redshift engine version that applies to this cluster parameter group. The cluster engine version determines the set of parameters that you can specify in the Parameters property.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftClusterParameterGroup}
	 */
	parameterGroupFamily: function(value) {
		return this.set('ParameterGroupFamily', value);
	},

	/**
	 * A list of parameter names and values that are allowed by the Amazon Redshift engine version that you specified in the ParameterGroupFamily property. For more information, see Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {RedshiftParameterType} value
	 * @return {RedshiftClusterParameterGroup}
	 */
	parameters: function(value) {
		return this.set('Parameters', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Redshift::ClusterParameterGroup has no attributes');
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

module.exports = RedshiftClusterParameterGroup;
