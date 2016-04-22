/**
 * ReplicationConfiguration is a property of the AWS::S3::Bucket resource that specifies replication rules and the AWS Identity and Access Management (IAM) role Amazon Simple Storage Service (Amazon S3) uses to replicate objects.
 * @constructor
 */
function S3ReplicationConfiguration() {
	this.data = {};
}

S3ReplicationConfiguration.prototype = {
	
	/**
	 * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see How to Set Up Cross-Region Replication in the Amazon Simple Storage Service Developer Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3ReplicationConfiguration}
	 */
	role: function(value) {
		return this.set('Role', value);
	},

	/**
	 * A replication rule that specifies which objects to replicate and where they are stored.
	 *
	 * Required: true
	 *
	 * @param {S3ReplicationConfigurationRule[]} value
	 * @return {S3ReplicationConfiguration}
	 */
	rules: function(value) {
		return this.set('Rules', value);
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

module.exports = S3ReplicationConfiguration;
