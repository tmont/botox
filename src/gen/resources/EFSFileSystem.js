var Resource = require('../../resource');

/**
 * AWS::EFS::FileSystem - The AWS::EFS::FileSystem resource creates a new, empty file system in Amazon Elastic File System (Amazon EFS). You must create a mount target (AWS::EFS::MountTarget) to mount your Amazon EFS file system on an Amazon Elastic Compute Cloud (Amazon EC2) instance. For more information, see the CreateFileSystem API in the Amazon Elastic File System User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EFSFileSystem(name) {
	Resource.call(this, name, 'AWS::EFS::FileSystem');
}

EFSFileSystem.prototype = Object.create(Resource.prototype);

/**
 * Tags to associate with the file system.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ElasticFileSystemFileSystemFileSystemTags|Attribute|Reference} value Amazon Elastic File System FileSystem FileSystemTags
 * @returns {EFSFileSystem}
 */
EFSFileSystem.prototype.fileSystemTags = function(value) {
	return this.set('FileSystemTags', value);
};

module.exports = EFSFileSystem;
