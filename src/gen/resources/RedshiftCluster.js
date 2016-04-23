var Resource = require('../../resource');

/**
 * AWS::Redshift::Cluster - Creates an Amazon Redshift cluster. A cluster is a fully managed data warehouse that consists of set of compute nodes. For more information about default values and valid values, see CreateCluster in the Amazon Redshift API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftCluster(name) {
	Resource.call(this, name, 'AWS::Redshift::Cluster');
}

RedshiftCluster.prototype = Object.create(Resource.prototype);


/**
 * When a new version of the Amazon Redshift is released, indicates whether upgrades can be applied to the engine that is running on the cluster. The upgrades are applied during the maintenance window.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.allowVersionUpgrade = function(value) {
	return this.set('AllowVersionUpgrade', value);
};

/**
 * The number of days that automated snapshots are retained. If you set the value to 0, automated snapshots are disabled.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.automatedSnapshotRetentionPeriod = function(value) {
	return this.set('AutomatedSnapshotRetentionPeriod', value);
};

/**
 * The Amazon EC2 Availability Zone in which you want to provision your Amazon Redshift cluster. For example, if you have several Amazon EC2 instances running in a specific Availability Zone, you might want the cluster to be provisioned in the same zone in order to decrease network latency.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

/**
 * The name of the parameter group that you want to associate with this cluster.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.clusterParameterGroupName = function(value) {
	return this.set('ClusterParameterGroupName', value);
};

/**
 * A list of security groups that you want to associate with this cluster.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.clusterSecurityGroups = function(value) {
	return this.set('ClusterSecurityGroups', value);
};

/**
 * The name of a cluster subnet group that you want to associate with this cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.clusterSubnetGroupName = function(value) {
	return this.set('ClusterSubnetGroupName', value);
};

/**
 * The type of cluster. You can specify single-node or multi-node.
 *
 * Required: true
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.clusterType = function(value) {
	return this.set('ClusterType', value);
};

/**
 * The Amazon Redshift engine version that you want to deploy on the cluster.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.clusterVersion = function(value) {
	return this.set('ClusterVersion', value);
};

/**
 * The name of the first database that is created when the cluster is created.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.dbname = function(value) {
	return this.set('DBName', value);
};

/**
 * The Elastic IP (EIP) address for the cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.elasticIp = function(value) {
	return this.set('ElasticIp', value);
};

/**
 * Indicates whether the data in the cluster is encrypted at rest.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.encrypted = function(value) {
	return this.set('Encrypted', value);
};

/**
 * Specifies the name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.hsmClientCertificateIdentifier = function(value) {
	return this.set('HsmClientCertificateIdentifier', value);
};

/**
 * Specifies the name of the HSM configuration that contains the information that the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.hsmConfigurationIdentifier = function(value) {
	return this.set('HsmConfigurationIdentifier', value);
};

/**
 * The AWS Key Management Service (AWS KMS) key ID that you want to use to encrypt data in the cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.kmsKeyId = function(value) {
	return this.set('KmsKeyId', value);
};

/**
 * The user name that is associated with the master user account for this cluster.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.masterUsername = function(value) {
	return this.set('MasterUsername', value);
};

/**
 * The password associated with the master user account for this cluster.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.masterUserPassword = function(value) {
	return this.set('MasterUserPassword', value);
};

/**
 * The node type that is provisioned for this cluster.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.nodeType = function(value) {
	return this.set('NodeType', value);
};

/**
 * The number of compute nodes in the cluster. If you specify multi-node for the ClusterType parameter, you must specify a number greater than 1.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.numberOfNodes = function(value) {
	return this.set('NumberOfNodes', value);
};

/**
 * When you restore from a snapshot from another AWS account, the 12-digit AWS account ID that contains that snapshot.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.ownerAccount = function(value) {
	return this.set('OwnerAccount', value);
};

/**
 * The port number on which the cluster accepts incoming connections.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.port = function(value) {
	return this.set('Port', value);
};

/**
 * The weekly time range (in UTC) during which automated cluster maintenance can occur. The format of the time range is ddd:hh24:mi-ddd:hh24:mi.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.preferredMaintenanceWindow = function(value) {
	return this.set('PreferredMaintenanceWindow', value);
};

/**
 * Indicates whether the cluster can be accessed from a public network.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.publiclyAccessible = function(value) {
	return this.set('PubliclyAccessible', value);
};

/**
 * The name of the cluster the source snapshot was created from.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.snapshotClusterIdentifier = function(value) {
	return this.set('SnapshotClusterIdentifier', value);
};

/**
 * The name of the snapshot from which to create a new cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.snapshotIdentifier = function(value) {
	return this.set('SnapshotIdentifier', value);
};

/**
 * A list of VPC security groups that are associated with this cluster.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {RedshiftCluster}
 */
RedshiftCluster.prototype.vpcSecurityGroupIds = function(value) {
	return this.set('VpcSecurityGroupIds', value);
};

module.exports = RedshiftCluster;
