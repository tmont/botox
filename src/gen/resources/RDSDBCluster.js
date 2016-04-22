var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::RDS::DBCluster - The AWS::RDS::DBCluster resource creates a cluster, such as an Aurora for Amazon RDS (Amazon Aurora) DB cluster. Amazon Aurora is a fully managed, MySQL-compatible, relational database engine. For more information, see Aurora on Amazon RDS in the Amazon Relational Database Service User Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBCluster(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

RDSDBCluster.prototype = {
	
	/**
	 * A list of Availability Zones (AZs) in which DB instances in the cluster can be created.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	availabilityZones: function(value) {
		return this.set('AvailabilityZones', value);
	},

	/**
	 * The number of days for which automatic backups are retained. For more information, see CreateDBCluster in the Amazon Relational Database Service API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference.
	 *
	 * @param {Number} value
	 * @return {RDSDBCluster}
	 */
	backupRetentionPeriod: function(value) {
		return this.set('BackupRetentionPeriod', value);
	},

	/**
	 * The name of your database. You can specify a name of up to eight alpha-numeric characters. If you do not provide a name, Amazon Relational Database Service (Amazon RDS) won't create a database in this DB cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	databaseName: function(value) {
		return this.set('DatabaseName', value);
	},

	/**
	 * The name of the DB cluster parameter group to associate with this DB cluster. For the default value, see the DBClusterParameterGroupName parameter of the CreateDBCluster action in the Amazon Relational Database Service API Reference.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	dbclusterParameterGroupName: function(value) {
		return this.set('DBClusterParameterGroupName', value);
	},

	/**
	 * A DB subnet group that you want to associate with this DB cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	dbsubnetGroupName: function(value) {
		return this.set('DBSubnetGroupName', value);
	},

	/**
	 * The name of the database engine that you want to use for this DB cluster.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	engine: function(value) {
		return this.set('Engine', value);
	},

	/**
	 * The version number of the database engine that you want to use.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	engineVersion: function(value) {
		return this.set('EngineVersion', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.
	 *
	 * Required: false
	 * Update requires: Replacement.
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	kmsKeyId: function(value) {
		return this.set('KmsKeyId', value);
	},

	/**
	 * The master user name for the DB instance.
	 *
	 * Required: false
	 * Update requires: Replacement.
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	masterUsername: function(value) {
		return this.set('MasterUsername', value);
	},

	/**
	 * The password for the master database user.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	masterUserPassword: function(value) {
		return this.set('MasterUserPassword', value);
	},

	/**
	 * The port number on which the DB instances in the cluster can accept connections.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {RDSDBCluster}
	 */
	port: function(value) {
		return this.set('Port', value);
	},

	/**
	 * if automated backups are enabled (see the BackupRetentionPeriod property), the daily time range in UTC during which you want to create automated backups.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	preferredBackupWindow: function(value) {
		return this.set('PreferredBackupWindow', value);
	},

	/**
	 * The weekly time range (in UTC) during which system maintenance can occur.
	 *
	 * Required: false
	 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference.
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	preferredMaintenanceWindow: function(value) {
		return this.set('PreferredMaintenanceWindow', value);
	},

	/**
	 * The identifier for the DB cluster snapshot from which you want to restore.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBCluster}
	 */
	snapshotIdentifier: function(value) {
		return this.set('SnapshotIdentifier', value);
	},

	/**
	 * Indicates whether the DB instances in the cluster are encrypted.
	 *
	 * Required: false
	 * Update requires: Replacement.
	 *
	 * @param {Boolean} value
	 * @return {RDSDBCluster}
	 */
	storageEncrypted: function(value) {
		return this.set('StorageEncrypted', value);
	},

	/**
	 * The tags that you want to attach to this DB cluster.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {resourcetag[]} value
	 * @return {RDSDBCluster}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * A list of VPC security groups to associate with this DB cluster.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {RDSDBCluster}
	 */
	vpcSecurityGroupIds: function(value) {
		return this.set('VpcSecurityGroupIds', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::RDS::DBCluster has no attributes');
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

module.exports = RDSDBCluster;
