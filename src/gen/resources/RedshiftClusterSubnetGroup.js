var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Redshift::ClusterSubnetGroup - Creates an Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon VPC when creating an Amazon Redshift subnet group.
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftClusterSubnetGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Redshift::ClusterSubnetGroup has no attributes');
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

module.exports = RedshiftClusterSubnetGroup;
