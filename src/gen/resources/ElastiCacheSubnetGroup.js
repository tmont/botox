var Resource = require('../../resource');

/**
 * AWS::ElastiCache::SubnetGroup - Creates a cache subnet group. For more information about cache subnet groups, go to Cache Subnet Groups in the Amazon ElastiCache User Guide or go to CreateCacheSubnetGroup in the Amazon ElastiCache API Reference Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheSubnetGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElastiCacheSubnetGroup, Resource);

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
	 * @param {String[]} value
	 * @return {ElastiCacheSubnetGroup}
	 */
	subnetIds: function(value) {
		return this.set('SubnetIds', value);
	}
};

module.exports = ElastiCacheSubnetGroup;
