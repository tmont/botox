var Resource = require('../../resource');

/**
 * AWS::RDS::DBInstance - The AWS::RDS::DBInstance type creates an Amazon RDS database instance. For detailed information about configuring RDS DB instances, see CreateDBInstance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBInstance(name) {
	Resource.call(this, name, 'AWS::RDS::DBInstance');
}

RDSDBInstance.prototype = Object.create(Resource.prototype);

/**
 * The allocated storage size specified in gigabytes (GB).
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.allocatedStorage = function(value) {
	return this.set('AllocatedStorage', value);
};

/**
 * Indicates whether major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is applied asynchronously as soon as possible.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.allowMajorVersionUpgrade = function(value) {
	return this.set('AllowMajorVersionUpgrade', value);
};

/**
 * Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. The default value is true.
 *
 * Required: false
 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference.
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.autoMinorVersionUpgrade = function(value) {
	return this.set('AutoMinorVersionUpgrade', value);
};

/**
 * The name of the Availability Zone where the DB instance is located. You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

/**
 * The number of days for which automatic DB snapshots are retained.
 *
 * Required: false
 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.backupRetentionPeriod = function(value) {
	return this.set('BackupRetentionPeriod', value);
};

/**
 * For supported engines, specifies the character set to associate with the database instance. For more information, see Appendix: Oracle Character Sets Supported in Amazon RDS in the Amazon Relational Database Service User Guide.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.characterSetName = function(value) {
	return this.set('CharacterSetName', value);
};

/**
 * The identifier of an existing DB cluster that this instance will be associated with. If you specify this property, specify aurora for the Engine property and do not specify any of the following properties: AllocatedStorage, CharacterSetName, DBSecurityGroups, SourceDBInstanceIdentifier, and StorageType.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbClusterIdentifier = function(value) {
	return this.set('DBClusterIdentifier', value);
};

/**
 * The name of the compute and memory capacity class of the DB instance.
 *
 * Required: true
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbInstanceClass = function(value) {
	return this.set('DBInstanceClass', value);
};

/**
 * A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lower case. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbInstanceIdentifier = function(value) {
	return this.set('DBInstanceIdentifier', value);
};

/**
 * The name of the initial database of this instance that was provided at create time, if one was specified. This same name is returned for the life of the DB instance.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbName = function(value) {
	return this.set('DBName', value);
};

/**
 * The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup resource created in the template.
 *
 * Required: false
 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference. Also, if any of the data members of the referenced parameter group are changed during an update, the database instance may need to be restarted, causing some interruption.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbParameterGroupName = function(value) {
	return this.set('DBParameterGroupName', value);
};

/**
 * A list of the DB security groups to assign to the Amazon RDS instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbSecurityGroups = function(value) {
	return this.set('DBSecurityGroups', value);
};

/**
 * The identifier for the DB snapshot to restore from.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbSnapshotIdentifier = function(value) {
	return this.set('DBSnapshotIdentifier', value);
};

/**
 * A DB subnet group to associate with the DB instance.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.dbSubnetGroupName = function(value) {
	return this.set('DBSubnetGroupName', value);
};

/**
 * The name of the database engine that the DB instance uses. This property is optional when you specify the DBSnapshotIdentifier property to create DB instances.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.engine = function(value) {
	return this.set('Engine', value);
};

/**
 * The version number of the database engine to use.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.engineVersion = function(value) {
	return this.set('EngineVersion', value);
};

/**
 * The number of I/O operations per second (IOPS) that the database provisions. The value must be equal to or greater than 1000.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.iops = function(value) {
	return this.set('Iops', value);
};

/**
 * The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instance, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.kmsKeyId = function(value) {
	return this.set('KmsKeyId', value);
};

/**
 * The license model information for the DB instance.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.licenseModel = function(value) {
	return this.set('LicenseModel', value);
};

/**
 * The master user name for the database instance. This property is optional when you specify the DBSnapshotIdentifier or the DBClusterIdentifier property to create DB instances.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.masterUsername = function(value) {
	return this.set('MasterUsername', value);
};

/**
 * The master password for the database instance. This property is optional when you specify the DBSnapshotIdentifier or the DBClusterIdentifier property to create DB instances.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.masterUserPassword = function(value) {
	return this.set('MasterUserPassword', value);
};

/**
 * Specifies if the database instance is a multiple Availability Zone deployment. You cannot set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.multiAZ = function(value) {
	return this.set('MultiAZ', value);
};

/**
 * An option group that this database instance is associated with.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.optionGroupName = function(value) {
	return this.set('OptionGroupName', value);
};

/**
 * The port for the instance.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.port = function(value) {
	return this.set('Port', value);
};

/**
 * The daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.preferredBackupWindow = function(value) {
	return this.set('PreferredBackupWindow', value);
};

/**
 * The weekly time range (in UTC) during which system maintenance can occur.
 *
 * Required: false
 * Update requires: No interruption or some interruptions. For more information, see ModifyDBInstance in the Amazon Relational Database Service API Reference.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.preferredMaintenanceWindow = function(value) {
	return this.set('PreferredMaintenanceWindow', value);
};

/**
 * Indicates whether the database instance is an Internet-facing instance. If you specify true, an instance is created with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, an internal instance is created with a DNS name that resolves to a private IP address.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.publiclyAccessible = function(value) {
	return this.set('PubliclyAccessible', value);
};

/**
 * If you want to create a read replica DB instance, specify the ID of the source database instance. Each database instance can have a certain number of read replicas. For more information, see Working with Read Replicas in the Amazon Relational Database Service Developer Guide.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.sourceDBInstanceIdentifier = function(value) {
	return this.set('SourceDBInstanceIdentifier', value);
};

/**
 * Indicates whether the database instance is encrypted.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.storageEncrypted = function(value) {
	return this.set('StorageEncrypted', value);
};

/**
 * The storage type associated with this database instance.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.storageType = function(value) {
	return this.set('StorageType', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this database instance.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * A list of the VPC security groups to assign to the Amazon RDS instance. The list can include both the physical IDs of existing VPC security groups or references to AWS::EC2::SecurityGroup resources created in the template.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {RDSDBInstance}
 */
RDSDBInstance.prototype.vpcSecurityGroups = function(value) {
	return this.set('VPCSecurityGroups', value);
};

module.exports = RDSDBInstance;
