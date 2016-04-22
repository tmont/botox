var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Redshift::Cluster - Creates an Amazon Redshift cluster. A cluster is a fully managed data warehouse that consists of set of compute nodes. For more information about default values and valid values, see CreateCluster in the Amazon Redshift API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function RedshiftCluster(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

RedshiftCluster.prototype = {
	
	/**
	 * When a new version of the Amazon Redshift is released, indicates whether upgrades can be applied to the engine that is running on the cluster. The upgrades are applied during the maintenance window.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {RedshiftCluster}
	 */
	allowVersionUpgrade: function(value) {
		return this.set('AllowVersionUpgrade', value);
	},

	/**
	 * The number of days that automated snapshots are retained. If you set the value to 0, automated snapshots are disabled.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {RedshiftCluster}
	 */
	automatedSnapshotRetentionPeriod: function(value) {
		return this.set('AutomatedSnapshotRetentionPeriod', value);
	},

	/**
	 * The Amazon EC2 Availability Zone in which you want to provision your Amazon Redshift cluster. For example, if you have several Amazon EC2 instances running in a specific Availability Zone, you might want the cluster to be provisioned in the same zone in order to decrease network latency.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	availabilityZone: function(value) {
		return this.set('AvailabilityZone', value);
	},

	/**
	 * The name of the parameter group that you want to associate with this cluster.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	clusterParameterGroupName: function(value) {
		return this.set('ClusterParameterGroupName', value);
	},

	/**
	 * A list of security groups that you want to associate with this cluster.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {RedshiftCluster}
	 */
	clusterSecurityGroups: function(value) {
		return this.set('ClusterSecurityGroups', value);
	},

	/**
	 * The name of a cluster subnet group that you want to associate with this cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	clusterSubnetGroupName: function(value) {
		return this.set('ClusterSubnetGroupName', value);
	},

	/**
	 * The type of cluster. You can specify single-node or multi-node.
	 *
	 * Required: true
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	clusterType: function(value) {
		return this.set('ClusterType', value);
	},

	/**
	 * The Amazon Redshift engine version that you want to deploy on the cluster.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	clusterVersion: function(value) {
		return this.set('ClusterVersion', value);
	},

	/**
	 * The name of the first database that is created when the cluster is created.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	dbname: function(value) {
		return this.set('DBName', value);
	},

	/**
	 * The Elastic IP (EIP) address for the cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	elasticIp: function(value) {
		return this.set('ElasticIp', value);
	},

	/**
	 * Indicates whether the data in the cluster is encrypted at rest.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {RedshiftCluster}
	 */
	encrypted: function(value) {
		return this.set('Encrypted', value);
	},

	/**
	 * Specifies the name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	hsmClientCertificateIdentifier: function(value) {
		return this.set('HsmClientCertificateIdentifier', value);
	},

	/**
	 * Specifies the name of the HSM configuration that contains the information that the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	hsmConfigurationIdentifier: function(value) {
		return this.set('HsmConfigurationIdentifier', value);
	},

	/**
	 * The AWS Key Management Service (AWS KMS) key ID that you want to use to encrypt data in the cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	kmsKeyId: function(value) {
		return this.set('KmsKeyId', value);
	},

	/**
	 * The user name that is associated with the master user account for this cluster.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	masterUsername: function(value) {
		return this.set('MasterUsername', value);
	},

	/**
	 * The password associated with the master user account for this cluster.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	masterUserPassword: function(value) {
		return this.set('MasterUserPassword', value);
	},

	/**
	 * The node type that is provisioned for this cluster.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	nodeType: function(value) {
		return this.set('NodeType', value);
	},

	/**
	 * The number of compute nodes in the cluster. If you specify multi-node for the ClusterType parameter, you must specify a number greater than 1.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {RedshiftCluster}
	 */
	numberOfNodes: function(value) {
		return this.set('NumberOfNodes', value);
	},

	/**
	 * When you restore from a snapshot from another AWS account, the 12-digit AWS account ID that contains that snapshot.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	ownerAccount: function(value) {
		return this.set('OwnerAccount', value);
	},

	/**
	 * The port number on which the cluster accepts incoming connections.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Number} value
	 * @return {RedshiftCluster}
	 */
	port: function(value) {
		return this.set('Port', value);
	},

	/**
	 * The weekly time range (in UTC) during which automated cluster maintenance can occur. The format of the time range is ddd:hh24:mi-ddd:hh24:mi.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	preferredMaintenanceWindow: function(value) {
		return this.set('PreferredMaintenanceWindow', value);
	},

	/**
	 * Indicates whether the cluster can be accessed from a public network.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {RedshiftCluster}
	 */
	publiclyAccessible: function(value) {
		return this.set('PubliclyAccessible', value);
	},

	/**
	 * The name of the cluster the source snapshot was created from.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {undefined} value
	 * @return {RedshiftCluster}
	 */
	snapshotClusterIdentifier: function(value) {
		return this.set('SnapshotClusterIdentifier', value);
	},

	/**
	 * The name of the snapshot from which to create a new cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RedshiftCluster}
	 */
	snapshotIdentifier: function(value) {
		return this.set('SnapshotIdentifier', value);
	},

	/**
	 * A list of VPC security groups that are associated with this cluster.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {RedshiftCluster}
	 */
	vpcSecurityGroupIds: function(value) {
		return this.set('VpcSecurityGroupIds', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Redshift::Cluster has no attributes');
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

module.exports = RedshiftCluster;
