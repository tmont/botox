var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ElastiCache::SecurityGroupIngress - The AWS::ElastiCache::SecurityGroupIngress type authorizes ingress to a cache security group from hosts in specified Amazon EC2 security groups. For more information about ElastiCache security group ingress, go to AuthorizeCacheSecurityGroupIngress in the Amazon ElastiCache API Reference Guide.
 * @constructor
 */
function ElastiCacheSecurityGroupIngress(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ElastiCache::SecurityGroupIngress has no attributes');
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

module.exports = ElastiCacheSecurityGroupIngress;
