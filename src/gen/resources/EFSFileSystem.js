var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EFS::FileSystem - The AWS::EFS::FileSystem resource creates a new, empty file system in Amazon Elastic File System (Amazon EFS). You must create a mount target (AWS::EFS::MountTarget) to mount your Amazon EFS file system on an Amazon Elastic Compute Cloud (Amazon EC2) instance. For more information, see the CreateFileSystem API in the Amazon Elastic File System User Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function EFSFileSystem(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EFSFileSystem.prototype = {
	
	/**
	 * Tags to associate with the file system.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {ElasticFileSystemFileSystemFileSystemTags} value
	 * @return {EFSFileSystem}
	 */
	fileSystemTags: function(value) {
		return this.set('FileSystemTags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EFS::FileSystem has no attributes');
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

module.exports = EFSFileSystem;
