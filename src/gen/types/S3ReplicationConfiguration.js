var PropertyType = require('../../property-type');

/**
 * ReplicationConfiguration is a property of the AWS::S3::Bucket resource that specifies replication rules and the AWS Identity and Access Management (IAM) role Amazon Simple Storage Service (Amazon S3) uses to replicate objects.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html}
 * @constructor
 */
function S3ReplicationConfiguration() {
	PropertyType.call(this);
}

S3ReplicationConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see How to Set Up Cross-Region Replication in the Amazon Simple Storage Service Developer Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {S3ReplicationConfiguration}
 */
S3ReplicationConfiguration.prototype.role = function(value) {
	return this.set('Role', value);
};

/**
 * A replication rule that specifies which objects to replicate and where they are stored.
 *
 * Required: true
 *
 * @param {S3ReplicationConfigurationRules[]} value
 * @returns {S3ReplicationConfiguration}
 */
S3ReplicationConfiguration.prototype.rules = function(value) {
	return this.set('Rules', value);
};

module.exports = S3ReplicationConfiguration;
