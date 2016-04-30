var Resource = require('../../resource');

/**
 * AWS::ElastiCache::ReplicationGroup - The AWS::ElastiCache::ReplicationGroup resource creates an Amazon ElastiCache replication group. A replication group is a collection of cache clusters, where one of the clusters is a primary read-write cluster and the others are read-only replicas.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElastiCacheReplicationGroup(name) {
	Resource.call(this, name, 'AWS::ElastiCache::ReplicationGroup');
}

ElastiCacheReplicationGroup.prototype = Object.create(Resource.prototype);

/**
 * AWS::ElastiCache::ReplicationGroup attribute map
 * @typedef {Object} ElastiCacheReplicationGroupAttributeMap
 * @property {Attribute} primaryEndPointAddress The DNS address of the primary read-write cache node.
 * @property {Attribute} primaryEndPointPort The number of the port that the primary read-write cache engine is listening on.
 * @property {Attribute} readEndPointAddresses A string with a list of endpoints for the read-only replicas. The order of the addresses map to the order of the ports from the ReadEndPoint.Ports attribute.
 * @property {Attribute} readEndPointAddressesList A list of endpoints for the read-only replicas. The order of the addresses map to the order of the ports from the ReadEndPoint.Ports.List attribute.
 * @property {Attribute} readEndPointPorts A string with a list of ports for the read-only replicas. The order of the ports map to the order of the addresses from the ReadEndPoint.Addresses attribute.
 * @property {Attribute} readEndPointPortsList A list of ports for the read-only replicas. The order of the ports map to the order of the addresses from the ReadEndPoint.Addresses.List attribute.
 */
Object.defineProperty(ElastiCacheReplicationGroup.prototype, 'attr', {
	/**
	 * @returns {ElastiCacheReplicationGroupAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {

			/**
			 * The DNS address of the primary read-write cache node.
			 * @returns {Attribute}
			 */
			get primaryEndPointAddress() {
				return createAttribute('PrimaryEndPoint.Address');
			},

			/**
			 * The number of the port that the primary read-write cache engine is listening on.
			 * @returns {Attribute}
			 */
			get primaryEndPointPort() {
				return createAttribute('PrimaryEndPoint.Port');
			},

			/**
			 * A string with a list of endpoints for the read-only replicas. The order of the addresses map to the order of the ports from the ReadEndPoint.Ports attribute.
			 * @returns {Attribute}
			 */
			get readEndPointAddresses() {
				return createAttribute('ReadEndPoint.Addresses');
			},

			/**
			 * A list of endpoints for the read-only replicas. The order of the addresses map to the order of the ports from the ReadEndPoint.Ports.List attribute.
			 * @returns {Attribute}
			 */
			get readEndPointAddressesList() {
				return createAttribute('ReadEndPoint.Addresses.List');
			},

			/**
			 * A string with a list of ports for the read-only replicas. The order of the ports map to the order of the addresses from the ReadEndPoint.Addresses attribute.
			 * @returns {Attribute}
			 */
			get readEndPointPorts() {
				return createAttribute('ReadEndPoint.Ports');
			},

			/**
			 * A list of ports for the read-only replicas. The order of the ports map to the order of the addresses from the ReadEndPoint.Addresses.List attribute.
			 * @returns {Attribute}
			 */
			get readEndPointPortsList() {
				return createAttribute('ReadEndPoint.Ports.List');
			}
		};
	}
});

/**
 * Indicates whether Multi-AZ is enabled. When Multi-AZ is enabled, a read-only replica is automatically promoted to a read-write primary cluster if the existing primary cluster fails. If you specify true, you must specify a value greater than 1 for the NumCacheNodes property. By default, AWS CloudFormation sets the value to true.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.automaticFailoverEnabled = function(value) {
	return this.set('AutomaticFailoverEnabled', value);
};

/**
 * Currently, this property isn't used by ElastiCache.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.autoMinorVersionUpgrade = function(value) {
	return this.set('AutoMinorVersionUpgrade', value);
};

/**
 * The compute and memory capacity of nodes in the node group. To see valid values, see CreateReplicationGroup in the Amazon ElastiCache API Reference Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.cacheNodeType = function(value) {
	return this.set('CacheNodeType', value);
};

/**
 * The name of the parameter group to associate with this replication group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.cacheParameterGroupName = function(value) {
	return this.set('CacheParameterGroupName', value);
};

/**
 * A list of cache security group names to associate with this replication group. If you specify the SecurityGroupIds property, do not specify this property; you can specify only one.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.cacheSecurityGroupNames = function(value) {
	return this.set('CacheSecurityGroupNames', value);
};

/**
 * The name of a cache subnet group to use for this replication group.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.cacheSubnetGroupName = function(value) {
	return this.set('CacheSubnetGroupName', value);
};

/**
 * The name of the cache engine to use for the cache clusters in this replication group. Currently, you can specify only redis.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.engine = function(value) {
	return this.set('Engine', value);
};

/**
 * The version number of the cache engine to use for the cache clusters in this replication group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.engineVersion = function(value) {
	return this.set('EngineVersion', value);
};

/**
 * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic to which notifications are sent.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.notificationTopicArn = function(value) {
	return this.set('NotificationTopicArn', value);
};

/**
 * The number of cache clusters for this replication group. If automatic failover is enabled, you must specify a value greater than 1.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.numCacheClusters = function(value) {
	return this.set('NumCacheClusters', value);
};

/**
 * The port number on which each member of the replication group accepts connections.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.port = function(value) {
	return this.set('Port', value);
};

/**
 * A list of Availability Zones (AZs) in which the cache clusters in this replication group are created.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.preferredCacheClusterAZs = function(value) {
	return this.set('PreferredCacheClusterAZs', value);
};

/**
 * The weekly time range during which system maintenance can occur. Use the following format to specify a time range: ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). For example, you can specify sun:22:00-sun:23:30 for Sunday from 10 PM to 11:30 PM.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.preferredMaintenanceWindow = function(value) {
	return this.set('PreferredMaintenanceWindow', value);
};

/**
 * The description of the replication group.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.replicationGroupDescription = function(value) {
	return this.set('ReplicationGroupDescription', value);
};

/**
 * A list of Amazon Virtual Private Cloud (Amazon VPC) security groups to associate with this replication group. Use this property only when you are creating a replication group in a VPC. If you specify the CacheSecurityGroupNames property, do not specify this property; you can specify only one.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.securityGroupIds = function(value) {
	return this.set('SecurityGroupIds', value);
};

/**
 * A single-element string list that specifies an ARN of a Redis .rdb snapshot file that is stored in Amazon Simple Storage Service (Amazon S3). The snapshot file populates the node group. The Amazon S3 object name in the ARN cannot contain commas. For example, you can specify arn:aws:s3:::my_bucket/snapshot1.rdb.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.snapshotArns = function(value) {
	return this.set('SnapshotArns', value);
};

/**
 * The number of days that ElastiCache retains automatic snapshots before deleting them.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.snapshotRetentionLimit = function(value) {
	return this.set('SnapshotRetentionLimit', value);
};

/**
 * The time range (in UTC) when ElastiCache takes a daily snapshot of your node group. For example, you can specify 05:00-09:00.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElastiCacheReplicationGroup}
 */
ElastiCacheReplicationGroup.prototype.snapshotWindow = function(value) {
	return this.set('SnapshotWindow', value);
};

module.exports = ElastiCacheReplicationGroup;
