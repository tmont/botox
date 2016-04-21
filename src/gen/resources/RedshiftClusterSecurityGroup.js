var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Redshift::ClusterSecurityGroup - Creates an Amazon Redshift security group. You use security groups to control access to Amazon Redshift clusters that are not in a VPC.
 * @constructor
 */
function RedshiftClusterSecurityGroup(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Redshift::ClusterSecurityGroup has no attributes');
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

module.exports = RedshiftClusterSecurityGroup;
