var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ElastiCache::ParameterGroup - The AWS::ElastiCache::ParameterGroup type creates a new cache parameter group. Cache parameter groups control the parameters for a cache cluster.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheParameterGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

ElastiCacheParameterGroup.prototype = {
	
	/**
	 * The name of the cache parameter group family that the cache parameter group can be used with.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {ElastiCacheParameterGroup}
	 */
	cacheParameterGroupFamily: function(value) {
		return this.set('CacheParameterGroupFamily', value);
	},

	/**
	 * The description for the Cache Parameter Group.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {ElastiCacheParameterGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * A comma-delimited list of parameter name/value pairs. For more information, go to ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {JSONobject} value
	 * @return {ElastiCacheParameterGroup}
	 */
	properties: function(value) {
		return this.set('Properties', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ElastiCache::ParameterGroup has no attributes');
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

module.exports = ElastiCacheParameterGroup;
