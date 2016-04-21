var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ElastiCache::SubnetGroup - Creates a cache subnet group. For more information about cache subnet groups, go to Cache Subnet Groups in the Amazon ElastiCache User Guide or go to CreateCacheSubnetGroup in the Amazon ElastiCache API Reference Guide.
 * @constructor
 */
function ElastiCacheSubnetGroup(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ElastiCacheSubnetGroup.prototype = {
	
	/**
	 * The description for the cache subnet group.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheSubnetGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The Amazon EC2 subnet IDs for the cache subnet group.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Stringlist} value
	 * @return {ElastiCacheSubnetGroup}
	 */
	subnetIds: function(value) {
		return this.set('SubnetIds', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ElastiCache::SubnetGroup has no attributes');
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

module.exports = ElastiCacheSubnetGroup;
