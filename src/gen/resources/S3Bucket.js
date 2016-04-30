var Resource = require('../../resource');

/**
 * AWS::S3::Bucket - The AWS::S3::Bucket type creates an Amazon S3 bucket.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function S3Bucket(name) {
	Resource.call(this, name, 'AWS::S3::Bucket');
}

S3Bucket.prototype = Object.create(Resource.prototype);

/**
 * AWS::S3::Bucket attribute map
 * @typedef {Object} S3BucketAttributeMap
 * @property {Attribute} domainName Returns the DNS name of the specified bucket.Example: mystack-mybucket-kdwwxmddtr2g.s3.amazonaws.com
 * @property {Attribute} websiteURL Amazon S3 website endpoint for the specified bucket.Example: http://mystack-mybucket-kdwwxmddtr2g.s3-website-us-east-1.amazonaws.com/
 */
Object.defineProperty(S3Bucket.prototype, 'attr', {
	/**
	 * @returns {S3BucketAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {

			/**
			 * Returns the DNS name of the specified bucket.Example: mystack-mybucket-kdwwxmddtr2g.s3.amazonaws.com
			 * @returns {Attribute}
			 */
			get domainName() {
				return createAttribute('DomainName');
			},

			/**
			 * Amazon S3 website endpoint for the specified bucket.Example: http://mystack-mybucket-kdwwxmddtr2g.s3-website-us-east-1.amazonaws.com/
			 * @returns {Attribute}
			 */
			get websiteURL() {
				return createAttribute('WebsiteURL');
			}
		};
	}
});

/**
 * A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see Canned ACLs in the Amazon S3 documentation.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {S3Bucket}
 */
S3Bucket.prototype.accessControl = function(value) {
	return this.set('AccessControl', value);
};

/**
 * A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name. For more information, see Name Type. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-).
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {S3Bucket}
 */
S3Bucket.prototype.bucketName = function(value) {
	return this.set('BucketName', value);
};

/**
 * Rules that define cross-origin resource sharing of objects in this bucket. For more information, see Enabling Cross-Origin Resource Sharing in the Amazon Simple Storage Service Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {S3CorsConfiguration|Attribute|Reference} value Amazon S3 Cors Configuration
 * @returns {S3Bucket}
 */
S3Bucket.prototype.corsConfiguration = function(value) {
	return this.set('CorsConfiguration', value);
};

/**
 * Rules that define how Amazon S3 manages objects during their lifetime. For more information, see Object Lifecycle Management in the Amazon Simple Storage Service Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {S3LifecycleConfiguration|Attribute|Reference} value Amazon S3 Lifecycle Configuration
 * @returns {S3Bucket}
 */
S3Bucket.prototype.lifecycleConfiguration = function(value) {
	return this.set('LifecycleConfiguration', value);
};

/**
 * Settings that defines where logs are stored.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {S3LoggingConfiguration|Attribute|Reference} value Amazon S3 Logging Configuration
 * @returns {S3Bucket}
 */
S3Bucket.prototype.loggingConfiguration = function(value) {
	return this.set('LoggingConfiguration', value);
};

/**
 * Configuration that defines which Amazon SNS topic to send messages to and what events to report.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {S3NotificationConfiguration|Attribute|Reference} value Amazon S3 NotificationConfiguration
 * @returns {S3Bucket}
 */
S3Bucket.prototype.notificationConfiguration = function(value) {
	return this.set('NotificationConfiguration', value);
};

/**
 * Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the VersioningConfiguration property.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {S3ReplicationConfiguration|Attribute|Reference} value Amazon S3 ReplicationConfiguration
 * @returns {S3Bucket}
 */
S3Bucket.prototype.replicationConfiguration = function(value) {
	return this.set('ReplicationConfiguration', value);
};

/**
 * An arbitrary set of tags (key-value pairs) for this Amazon S3 bucket.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {S3Bucket}
 */
S3Bucket.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * Enables multiple variants of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {S3VersioningConfiguration|Attribute|Reference} value Amazon S3 Versioning Configuration
 * @returns {S3Bucket}
 */
S3Bucket.prototype.versioningConfiguration = function(value) {
	return this.set('VersioningConfiguration', value);
};

/**
 * Information used to configure the bucket as a static website. For more information, see Hosting Websites on Amazon S3.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {S3WebsiteConfigurationProperty|Attribute|Reference} value Website Configuration Type
 * @returns {S3Bucket}
 */
S3Bucket.prototype.websiteConfiguration = function(value) {
	return this.set('WebsiteConfiguration', value);
};

module.exports = S3Bucket;
