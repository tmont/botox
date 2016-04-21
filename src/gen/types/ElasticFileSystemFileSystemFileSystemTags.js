/**
 * FileSystemTags is a property of the AWS::EFS::FileSystem resource that associates key-value pairs with a file system. You can use any of the following Unicode characters for keys and values: letters, digits, whitespace, _, ., /, =, +, and -.
 * @constructor
 */
function ElasticFileSystemFileSystemFileSystemTags(initialData) {
	this.data = initialData || {};
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = ElasticFileSystemFileSystemFileSystemTags;
