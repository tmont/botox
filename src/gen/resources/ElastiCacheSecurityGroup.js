var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ElastiCache::SecurityGroup - The AWS::ElastiCache::SecurityGroup resource creates a cache security group. For more information about cache security groups, go to Cache Security Groups in the Amazon ElastiCache User Guide or go to CreateCacheSecurityGroup in the Amazon ElastiCache API Reference Guide.
 * @constructor
 */
function ElastiCacheSecurityGroup(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ElastiCacheSecurityGroup.prototype = {
	
	/**
	 * A description for the cache security group.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {ElastiCacheSecurityGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ElastiCache::SecurityGroup has no attributes');
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

module.exports = ElastiCacheSecurityGroup;
