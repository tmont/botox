var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ElastiCache::ReplicationGroup - The AWS::ElastiCache::ReplicationGroup resource creates an Amazon ElastiCache replication group. A replication group is a collection of cache clusters, where one of the clusters is a primary read-write cluster and the others are read-only replicas.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheReplicationGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

ElastiCacheReplicationGroup.prototype = {
	
	/**
	 * Indicates whether Multi-AZ is enabled. When Multi-AZ is enabled, a read-only replica is automatically promoted to a read-write primary cluster if the existing primary cluster fails. If you specify true, you must specify a value greater than 1 for the NumCacheNodes property. By default, AWS CloudFormation sets the value to true.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	automaticFailoverEnabled: function(value) {
		return this.set('AutomaticFailoverEnabled', value);
	},

	/**
	 * Currently, this property isn't used by ElastiCache.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	autoMinorVersionUpgrade: function(value) {
		return this.set('AutoMinorVersionUpgrade', value);
	},

	/**
	 * The compute and memory capacity of nodes in the node group. To see valid values, see CreateReplicationGroup in the Amazon ElastiCache API Reference Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	cacheNodeType: function(value) {
		return this.set('CacheNodeType', value);
	},

	/**
	 * The name of the parameter group to associate with this replication group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	cacheParameterGroupName: function(value) {
		return this.set('CacheParameterGroupName', value);
	},

	/**
	 * A list of cache security group names to associate with this replication group. If you specify the SecurityGroupIds property, do not specify this property; you can specify only one.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	cacheSecurityGroupNames: function(value) {
		return this.set('CacheSecurityGroupNames', value);
	},

	/**
	 * The name of a cache subnet group to use for this replication group.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	cacheSubnetGroupName: function(value) {
		return this.set('CacheSubnetGroupName', value);
	},

	/**
	 * The name of the cache engine to use for the cache clusters in this replication group. Currently, you can specify only redis.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	engine: function(value) {
		return this.set('Engine', value);
	},

	/**
	 * The version number of the cache engine to use for the cache clusters in this replication group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	engineVersion: function(value) {
		return this.set('EngineVersion', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic to which notifications are sent.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	notificationTopicArn: function(value) {
		return this.set('NotificationTopicArn', value);
	},

	/**
	 * The number of cache clusters for this replication group. If automatic failover is enabled, you must specify a value greater than 1.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {Number} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	numCacheClusters: function(value) {
		return this.set('NumCacheClusters', value);
	},

	/**
	 * The port number on which each member of the replication group accepts connections.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Number} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	port: function(value) {
		return this.set('Port', value);
	},

	/**
	 * A list of Availability Zones (AZs) in which the cache clusters in this replication group are created.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	preferredCacheClusterAZs: function(value) {
		return this.set('PreferredCacheClusterAZs', value);
	},

	/**
	 * The weekly time range during which system maintenance can occur. Use the following format to specify a time range: ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). For example, you can specify sun:22:00-sun:23:30 for Sunday from 10 PM to 11:30 PM.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	preferredMaintenanceWindow: function(value) {
		return this.set('PreferredMaintenanceWindow', value);
	},

	/**
	 * The description of the replication group.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	replicationGroupDescription: function(value) {
		return this.set('ReplicationGroupDescription', value);
	},

	/**
	 * A list of Amazon Virtual Private Cloud (Amazon VPC) security groups to associate with this replication group. Use this property only when you are creating a replication group in a VPC. If you specify the CacheSecurityGroupNames property, do not specify this property; you can specify only one.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	securityGroupIds: function(value) {
		return this.set('SecurityGroupIds', value);
	},

	/**
	 * A single-element string list that specifies an ARN of a Redis .rdb snapshot file that is stored in Amazon Simple Storage Service (Amazon S3). The snapshot file populates the node group. The Amazon S3 object name in the ARN cannot contain commas. For example, you can specify arn:aws:s3:::my_bucket/snapshot1.rdb.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	snapshotArns: function(value) {
		return this.set('SnapshotArns', value);
	},

	/**
	 * The number of days that ElastiCache retains automatic snapshots before deleting them.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	snapshotRetentionLimit: function(value) {
		return this.set('SnapshotRetentionLimit', value);
	},

	/**
	 * The time range (in UTC) when ElastiCache takes a daily snapshot of your node group. For example, you can specify 05:00-09:00.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElastiCacheReplicationGroup}
	 */
	snapshotWindow: function(value) {
		return this.set('SnapshotWindow', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * The DNS address of the primary read-write cache node.
			 */
			primaryEndPointAddress: function() {
				return new Attribute(self, 'PrimaryEndPoint.Address');
			},

			/**
			 * The number of the port that the primary read-write cache engine is listening on.
			 */
			primaryEndPointPort: function() {
				return new Attribute(self, 'PrimaryEndPoint.Port');
			},

			/**
			 * A string with a list of endpoints for the read-only replicas. The order of the addresses map to the order of the ports from the ReadEndPoint.Ports attribute.
			 */
			readEndPointAddresses: function() {
				return new Attribute(self, 'ReadEndPoint.Addresses');
			},

			/**
			 * A string with a list of ports for the read-only replicas. The order of the ports map to the order of the addresses from the ReadEndPoint.Addresses attribute.
			 */
			readEndPointPorts: function() {
				return new Attribute(self, 'ReadEndPoint.Ports');
			},

			/**
			 * A list of endpoints for the read-only replicas. The order of the addresses map to the order of the ports from the ReadEndPoint.Ports.List attribute.
			 */
			readEndPointAddressesList: function() {
				return new Attribute(self, 'ReadEndPoint.Addresses.List');
			},

			/**
			 * A list of ports for the read-only replicas. The order of the ports map to the order of the addresses from the ReadEndPoint.Addresses.List attribute.
			 */
			readEndPointPortsList: function() {
				return new Attribute(self, 'ReadEndPoint.Ports.List');
			}
		};
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

module.exports = ElastiCacheReplicationGroup;
