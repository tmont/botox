var Resource = require('../../resource');

/**
 * AWS::ElastiCache::SecurityGroup - The AWS::ElastiCache::SecurityGroup resource creates a cache security group. For more information about cache security groups, go to Cache Security Groups in the Amazon ElastiCache User Guide or go to CreateCacheSecurityGroup in the Amazon ElastiCache API Reference Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-security-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheSecurityGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElastiCacheSecurityGroup, Resource);

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
	}
};

module.exports = ElastiCacheSecurityGroup;
