var Resource = require('../../resource');

/**
 * AWS::ElastiCache::CacheCluster - The AWS::ElastiCache::CacheCluster type creates an Amazon ElastiCache cache cluster.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheCacheCluster(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElastiCacheCacheCluster, Resource);

ElastiCacheCacheCluster.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * The DNS address of the configuration endpoint for the Memcached cache cluster.
			 * @return {Attribute}
			 */
			configurationEndpointAddress: function() {
				return createAttribute('ConfigurationEndpoint.Address');
			},

			/**
			 * The port number of the configuration endpoint for the Memcached cache cluster.
			 * @return {Attribute}
			 */
			configurationEndpointPort: function() {
				return createAttribute('ConfigurationEndpoint.Port');
			}
		};
	},

	
	/**
	 * Indicates that minor engine upgrades will be applied automatically to the cache cluster during the maintenance window.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {ElastiCacheCacheCluster}
	 */
	autoMinorVersionUpgrade: function(value) {
		return this.set('AutoMinorVersionUpgrade', value);
	},

	/**
	 * For Memcached cache clusters, indicates whether the nodes are created in a single Availability Zone or across multiple Availability Zones in the cluster's region. For valid values, see CreateCacheCluster in the Amazon ElastiCache API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	azmode: function(value) {
		return this.set('AZMode', value);
	},

	/**
	 * The compute and memory capacity of nodes in a cache cluster.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	cacheNodeType: function(value) {
		return this.set('CacheNodeType', value);
	},

	/**
	 * The name of the cache parameter group that is associated with this cache cluster.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	cacheParameterGroupName: function(value) {
		return this.set('CacheParameterGroupName', value);
	},

	/**
	 * A list of cache security group names that are associated with this cache cluster. If your cache cluster is in a VPC, specify the VpcSecurityGroupIds property instead.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheCacheCluster}
	 */
	cacheSecurityGroupNames: function(value) {
		return this.set('CacheSecurityGroupNames', value);
	},

	/**
	 * The cache subnet group that you associate with a cache cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	cacheSubnetGroupName: function(value) {
		return this.set('CacheSubnetGroupName', value);
	},

	/**
	 * A name for the cache cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the cache cluster. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	clusterName: function(value) {
		return this.set('ClusterName', value);
	},

	/**
	 * The name of the cache engine to be used for this cache cluster, such as memcached or redis.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	engine: function(value) {
		return this.set('Engine', value);
	},

	/**
	 * The version of the cache engine to be used for this cluster.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	engineVersion: function(value) {
		return this.set('EngineVersion', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications will be sent.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	notificationTopicArn: function(value) {
		return this.set('NotificationTopicArn', value);
	},

	/**
	 * The number of cache nodes that the cache cluster should have.
	 *
	 * Required: true
	 * Update requires: No interruption. However, if the PreferredAvailabilityZone and PreferredAvailabilityZones properties were not previously specified and you don't specify any new values, an update requires replacement.
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	numCacheNodes: function(value) {
		return this.set('NumCacheNodes', value);
	},

	/**
	 * The port number on which each of the cache nodes will accept connections.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Number} value
	 * @return {ElastiCacheCacheCluster}
	 */
	port: function(value) {
		return this.set('Port', value);
	},

	/**
	 * The Amazon EC2 Availability Zone in which the cache cluster is created.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	preferredAvailabilityZone: function(value) {
		return this.set('PreferredAvailabilityZone', value);
	},

	/**
	 * For Memcached cache clusters, the list of Availability Zones in which cache nodes are created. The number of Availability Zones listed must equal the number of cache nodes. For example, if you want to create three nodes in two different Availability Zones, you can specify ["us-east-1a", "us-east-1a", "us-east-1b"], which would create two nodes in us-east-1a and one node in us-east-1b.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheCacheCluster}
	 */
	preferredAvailabilityZones: function(value) {
		return this.set('PreferredAvailabilityZones', value);
	},

	/**
	 * The weekly time range (in UTC) during which system maintenance can occur.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	preferredMaintenanceWindow: function(value) {
		return this.set('PreferredMaintenanceWindow', value);
	},

	/**
	 * The ARN of the snapshot file that you want to use to seed a new Redis cache cluster. If you manage a Redis instance outside of Amazon ElastiCache, you can create a new cache cluster in ElastiCache by using a snapshot file that is stored in an Amazon S3 bucket.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheCacheCluster}
	 */
	snapshotArns: function(value) {
		return this.set('SnapshotArns', value);
	},

	/**
	 * The name of a snapshot from which to restore data into a new Redis cache cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	snapshotName: function(value) {
		return this.set('SnapshotName', value);
	},

	/**
	 * For Redis cache clusters, the number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set the value to 5, a snapshot that was taken today will be retained for 5 days before being deleted.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {ElastiCacheCacheCluster}
	 */
	snapshotRetentionLimit: function(value) {
		return this.set('SnapshotRetentionLimit', value);
	},

	/**
	 * For Redis cache clusters, the daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your node group. For example, you can specify 05:00-09:00.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheCacheCluster}
	 */
	snapshotWindow: function(value) {
		return this.set('SnapshotWindow', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this cache cluster.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {ElastiCacheCacheCluster}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * A list of VPC security group IDs. If your cache cluster isn't in a VPC, specify the CacheSecurityGroupNames property instead.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheCacheCluster}
	 */
	vpcSecurityGroupIds: function(value) {
		return this.set('VpcSecurityGroupIds', value);
	}
};

module.exports = ElastiCacheCacheCluster;
