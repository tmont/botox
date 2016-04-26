var Resource = require('../../resource');

/**
 * AWS::ElastiCache::ParameterGroup - The AWS::ElastiCache::ParameterGroup type creates a new cache parameter group. Cache parameter groups control the parameters for a cache cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-parameter-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheParameterGroup(name) {
	Resource.call(this, name, 'AWS::ElastiCache::ParameterGroup');
}

ElastiCacheParameterGroup.prototype = Object.create(Resource.prototype);

/**
 * The name of the cache parameter group family that the cache parameter group can be used with.
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ElastiCacheParameterGroup}
 */
ElastiCacheParameterGroup.prototype.cacheParameterGroupFamily = function(value) {
	return this.set('CacheParameterGroupFamily', value);
};

/**
 * The description for the Cache Parameter Group.
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ElastiCacheParameterGroup}
 */
ElastiCacheParameterGroup.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * A comma-delimited list of parameter name/value pairs. For more information, go to ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {Object|Attribute|Reference} value
 * @return {ElastiCacheParameterGroup}
 */
ElastiCacheParameterGroup.prototype.properties = function(value) {
	return this.set('Properties', value);
};

module.exports = ElastiCacheParameterGroup;
