var Resource = require('../../resource');

/**
 * AWS::ElastiCache::SecurityGroupIngress - The AWS::ElastiCache::SecurityGroupIngress type authorizes ingress to a cache security group from hosts in specified Amazon EC2 security groups. For more information about ElastiCache security group ingress, go to AuthorizeCacheSecurityGroupIngress in the Amazon ElastiCache API Reference Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheSecurityGroupIngress(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElastiCacheSecurityGroupIngress, Resource);

ElastiCacheSecurityGroupIngress.prototype = {
	
	
	/**
	 * The name of the Cache Security Group to authorize.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {ElastiCacheSecurityGroupIngress}
	 */
	cacheSecurityGroupName: function(value) {
		return this.set('CacheSecurityGroupName', value);
	},

	/**
	 * Name of the EC2 Security Group to include in the authorization.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {ElastiCacheSecurityGroupIngress}
	 */
	ec2SecurityGroupName: function(value) {
		return this.set('EC2SecurityGroupName', value);
	},

	/**
	 * Specifies the AWS Account ID of the owner of the EC2 security group specified in the EC2SecurityGroupName property. The AWS access key ID is not an acceptable value.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {ElastiCacheSecurityGroupIngress}
	 */
	ec2SecurityGroupOwnerId: function(value) {
		return this.set('EC2SecurityGroupOwnerId', value);
	}
};

module.exports = ElastiCacheSecurityGroupIngress;
