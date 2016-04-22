/**
 * Describes the versioning state of an AWS::S3::Bucket resource. For more information, see PUT Bucket versioning in the Amazon Simple Storage Service API Reference.
 * @constructor
 */
function S3VersioningConfiguration() {
	this.data = {};
}

S3VersioningConfiguration.prototype = {
	
	/**
	 * The versioning state of an Amazon S3 bucket. If you enable versioning, you must suspend versioning to disable it.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3VersioningConfiguration}
	 */
	status: function(value) {
		return this.set('Status', value);
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

module.exports = S3VersioningConfiguration;
