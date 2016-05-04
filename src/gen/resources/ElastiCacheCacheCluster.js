var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::ElastiCache::CacheCluster - The AWS::ElastiCache::CacheCluster type creates an Amazon ElastiCache cache cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheCacheCluster(name) {
	Resource.call(this, name, 'AWS::ElastiCache::CacheCluster');
}

ElastiCacheCacheCluster.prototype = Object.create(Resource.prototype);

/**
 * Indicates that minor engine upgrades will be applied automatically to the cache cluster during the maintenance window.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.autoMinorVersionUpgrade = function(value) {
	return this.set('AutoMinorVersionUpgrade', value);
};

/**
 * For Memcached cache clusters, indicates whether the nodes are created in a single Availability Zone or across multiple Availability Zones in the cluster's region. For valid values, see CreateCacheCluster in the Amazon ElastiCache API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.azMode = function(value) {
	return this.set('AZMode', value);
};

/**
 * The compute and memory capacity of nodes in a cache cluster.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.cacheNodeType = function(value) {
	return this.set('CacheNodeType', value);
};

/**
 * The name of the cache parameter group that is associated with this cache cluster.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.cacheParameterGroupName = function(value) {
	return this.set('CacheParameterGroupName', value);
};

/**
 * A list of cache security group names that are associated with this cache cluster. If your cache cluster is in a VPC, specify the VpcSecurityGroupIds property instead.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.cacheSecurityGroupNames = function(value) {
	return this.set('CacheSecurityGroupNames', value);
};

/**
 * The cache subnet group that you associate with a cache cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.cacheSubnetGroupName = function(value) {
	return this.set('CacheSubnetGroupName', value);
};

/**
 * A name for the cache cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the cache cluster. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.clusterName = function(value) {
	return this.set('ClusterName', value);
};

/**
 * The name of the cache engine to be used for this cache cluster, such as memcached or redis.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.engine = function(value) {
	return this.set('Engine', value);
};

/**
 * The version of the cache engine to be used for this cluster.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.engineVersion = function(value) {
	return this.set('EngineVersion', value);
};

/**
 * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications will be sent.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.notificationTopicArn = function(value) {
	return this.set('NotificationTopicArn', value);
};

/**
 * The number of cache nodes that the cache cluster should have.
 *
 * Required: true
 * Update requires: No interruption. However, if the PreferredAvailabilityZone and PreferredAvailabilityZones properties were not previously specified and you don't specify any new values, an update requires replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.numCacheNodes = function(value) {
	return this.set('NumCacheNodes', value);
};

/**
 * The port number on which each of the cache nodes will accept connections.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.port = function(value) {
	return this.set('Port', value);
};

/**
 * The Amazon EC2 Availability Zone in which the cache cluster is created.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.preferredAvailabilityZone = function(value) {
	return this.set('PreferredAvailabilityZone', value);
};

/**
 * For Memcached cache clusters, the list of Availability Zones in which cache nodes are created. The number of Availability Zones listed must equal the number of cache nodes. For example, if you want to create three nodes in two different Availability Zones, you can specify ["us-east-1a", "us-east-1a", "us-east-1b"], which would create two nodes in us-east-1a and one node in us-east-1b.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.preferredAvailabilityZones = function(value) {
	return this.set('PreferredAvailabilityZones', value);
};

/**
 * The weekly time range (in UTC) during which system maintenance can occur.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.preferredMaintenanceWindow = function(value) {
	return this.set('PreferredMaintenanceWindow', value);
};

/**
 * The ARN of the snapshot file that you want to use to seed a new Redis cache cluster. If you manage a Redis instance outside of Amazon ElastiCache, you can create a new cache cluster in ElastiCache by using a snapshot file that is stored in an Amazon S3 bucket.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.snapshotArns = function(value) {
	return this.set('SnapshotArns', value);
};

/**
 * The name of a snapshot from which to restore data into a new Redis cache cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.snapshotName = function(value) {
	return this.set('SnapshotName', value);
};

/**
 * For Redis cache clusters, the number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set the value to 5, a snapshot that was taken today will be retained for 5 days before being deleted.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.snapshotRetentionLimit = function(value) {
	return this.set('SnapshotRetentionLimit', value);
};

/**
 * For Redis cache clusters, the daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your node group. For example, you can specify 05:00-09:00.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.snapshotWindow = function(value) {
	return this.set('SnapshotWindow', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this cache cluster.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * A list of VPC security group IDs. If your cache cluster isn't in a VPC, specify the CacheSecurityGroupNames property instead.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheCacheCluster}
 */
ElastiCacheCacheCluster.prototype.vpcSecurityGroupIds = function(value) {
	return this.set('VpcSecurityGroupIds', value);
};

/**
 * AWS::ElastiCache::CacheCluster attributes
 * @constructor
 * @param {Resource} resource
 */
function ElastiCacheCacheClusterAttributes(resource) {
	this.resource = resource;
}
ElastiCacheCacheClusterAttributes.prototype = {
	/**
	 * The DNS address of the configuration endpoint for the Memcached cache cluster.
	 * @type {Attribute}
	 */
	get configurationEndpointAddress() {
		return new Attribute(this.resource, 'ConfigurationEndpoint.Address');
	},

	/**
	 * The port number of the configuration endpoint for the Memcached cache cluster.
	 * @type {Attribute}
	 */
	get configurationEndpointPort() {
		return new Attribute(this.resource, 'ConfigurationEndpoint.Port');
	},

	/**
	 * The DNS address of the configuration endpoint for the Redis cache cluster.
	 * @type {Attribute}
	 */
	get redisEndpointAddress() {
		return new Attribute(this.resource, 'RedisEndpoint.Address');
	},

	/**
	 * The port number of the configuration endpoint for the Redis cache cluster.
	 * @type {Attribute}
	 */
	get redisEndpointPort() {
		return new Attribute(this.resource, 'RedisEndpoint.Port');
	}
};

/**
 * Gets attribute map for AWS::ElastiCache::CacheCluster
 * @returns {ElastiCacheCacheClusterAttributes}
 */
ElastiCacheCacheCluster.prototype.attr = function() {
	return new ElastiCacheCacheClusterAttributes(this);
};

module.exports = ElastiCacheCacheCluster;
