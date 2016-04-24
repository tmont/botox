var Resource = require('../../resource');

/**
 * AWS::RDS::DBCluster - The AWS::RDS::DBCluster resource creates a cluster, such as an Aurora for Amazon RDS (Amazon Aurora) DB cluster. Amazon Aurora is a fully managed, MySQL-compatible, relational database engine. For more information, see Aurora on Amazon RDS in the Amazon Relational Database Service User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBCluster(name) {
	Resource.call(this, name, 'AWS::RDS::DBCluster');
}

RDSDBCluster.prototype = Object.create(Resource.prototype);


/**
 * A list of Availability Zones (AZs) in which DB instances in the cluster can be created.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.availabilityZones = function(value) {
	return this.set('AvailabilityZones', value);
};

/**
 * The number of days for which automatic backups are retained. For more information, see CreateDBCluster in the Amazon Relational Database Service API Reference.
 *
 * Required: false
 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference.
 *
 * @param {Number|Attribute|Reference} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.backupRetentionPeriod = function(value) {
	return this.set('BackupRetentionPeriod', value);
};

/**
 * The name of your database. You can specify a name of up to eight alpha-numeric characters. If you do not provide a name, Amazon Relational Database Service (Amazon RDS) won't create a database in this DB cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.databaseName = function(value) {
	return this.set('DatabaseName', value);
};

/**
 * The name of the DB cluster parameter group to associate with this DB cluster. For the default value, see the DBClusterParameterGroupName parameter of the CreateDBCluster action in the Amazon Relational Database Service API Reference.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.dbClusterParameterGroupName = function(value) {
	return this.set('DBClusterParameterGroupName', value);
};

/**
 * A DB subnet group that you want to associate with this DB cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.dbSubnetGroupName = function(value) {
	return this.set('DBSubnetGroupName', value);
};

/**
 * The name of the database engine that you want to use for this DB cluster.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.engine = function(value) {
	return this.set('Engine', value);
};

/**
 * The version number of the database engine that you want to use.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.engineVersion = function(value) {
	return this.set('EngineVersion', value);
};

/**
 * The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.kmsKeyId = function(value) {
	return this.set('KmsKeyId', value);
};

/**
 * The master user name for the DB instance.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.masterUsername = function(value) {
	return this.set('MasterUsername', value);
};

/**
 * The password for the master database user.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.masterUserPassword = function(value) {
	return this.set('MasterUserPassword', value);
};

/**
 * The port number on which the DB instances in the cluster can accept connections.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.port = function(value) {
	return this.set('Port', value);
};

/**
 * if automated backups are enabled (see the BackupRetentionPeriod property), the daily time range in UTC during which you want to create automated backups.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.preferredBackupWindow = function(value) {
	return this.set('PreferredBackupWindow', value);
};

/**
 * The weekly time range (in UTC) during which system maintenance can occur.
 *
 * Required: false
 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.preferredMaintenanceWindow = function(value) {
	return this.set('PreferredMaintenanceWindow', value);
};

/**
 * The identifier for the DB cluster snapshot from which you want to restore.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.snapshotIdentifier = function(value) {
	return this.set('SnapshotIdentifier', value);
};

/**
 * Indicates whether the DB instances in the cluster are encrypted.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.storageEncrypted = function(value) {
	return this.set('StorageEncrypted', value);
};

/**
 * The tags that you want to attach to this DB cluster.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value A list of resource tags
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * A list of VPC security groups to associate with this DB cluster.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {RDSDBCluster}
 */
RDSDBCluster.prototype.vpcSecurityGroupIds = function(value) {
	return this.set('VpcSecurityGroupIds', value);
};

module.exports = RDSDBCluster;
