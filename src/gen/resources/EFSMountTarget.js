var Resource = require('../../resource');

/**
 * AWS::EFS::MountTarget - The AWS::EFS::MountTarget resource creates a mount target for an Amazon Elastic File System (Amazon EFS) file system (AWS::EFS::FileSystem). Use the mount target to mount file systems on Amazon Elastic Compute Cloud (Amazon EC2) instances. For more information, see the CreateMountTarget API in the Amazon Elastic File System User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EFSMountTarget(name) {
	Resource.call(this, name, 'AWS::EFS::MountTarget');
}

EFSMountTarget.prototype = Object.create(Resource.prototype);

/**
 * The ID of the file system for which you want to create the mount target.
 *
 * Required: true
 * Update requires: Replacement. Before updating this property, stop EC2 instances that are using this mount target, and then restart them after the update is complete. This allows the instances to unmount the file system before the mount target is replaced. If you don't stop and restart them, instances or applications that are using those mounts might be disrupted when the mount target is deleted (uncommitted writes might be lost).
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EFSMountTarget}
 */
EFSMountTarget.prototype.fileSystemId = function(value) {
	return this.set('FileSystemId', value);
};

/**
 * An IPv4 address that is within the address range of the subnet that is specified in the SubnetId property. If you don't specify an IP address, Amazon EFS automatically assigns an address that is within the range of the subnet.
 *
 * Required: false
 * Update requires: Replacement. Before updating this property, stop EC2 instances that are using this mount target, and then restart them after the update is complete. This allows the instances to unmount the file system before the mount target is replaced. If you don't stop and restart them, instances or applications that are using those mounts might be disrupted when the mount target is deleted (uncommitted writes might be lost).
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EFSMountTarget}
 */
EFSMountTarget.prototype.ipAddress = function(value) {
	return this.set('IpAddress', value);
};

/**
 * A maximum of five VPC security group IDs that are in the same VPC as the subnet that is specified in the SubnetId property. For more information about security groups and mount targets, see Security in the Amazon Elastic File System User Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {EFSMountTarget}
 */
EFSMountTarget.prototype.securityGroups = function(value) {
	return this.set('SecurityGroups', value);
};

/**
 * The ID of the subnet in which you want to add the mount target.
 *
 * Required: true
 * Update requires: Replacement. Before updating this property, stop EC2 instances that are using this mount target and then restart them after the update is complete. That way the instances can unmount the file system before the mount target is replaced. If you don't stop and restart them, instances or applications that are using those mounts might be disrupted when the mount target is deleted (uncommitted writes might be lost).
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EFSMountTarget}
 */
EFSMountTarget.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

module.exports = EFSMountTarget;
