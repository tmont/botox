var PropertyType = require('../../property-type');

/**
 * FileSystemTags is a property of the AWS::EFS::FileSystem resource that associates key-value pairs with a file system. You can use any of the following Unicode characters for keys and values: letters, digits, whitespace, _, ., /, =, +, and -.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-filesystemtags.html}
 * @constructor
 */
function ElasticFileSystemFileSystemFileSystemTags() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ElasticFileSystemFileSystemFileSystemTags, PropertyType);

ElasticFileSystemFileSystemFileSystemTags.prototype = {
	
	/**
	 * The key name of the tag. You can specify a value that is from 1 to 128 Unicode characters in length, but you cannot use the prefix aws:.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticFileSystemFileSystemFileSystemTags}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value of the tag key. You can specify a value that is from 0 to 128 Unicode characters in length.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticFileSystemFileSystemFileSystemTags}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = ElasticFileSystemFileSystemFileSystemTags;
