var Resource = require('../../resource');

/**
 * AWS::S3::Bucket - The AWS::S3::Bucket type creates an Amazon S3 bucket.
 * @constructor
 * @param {String} name Name of the resource
 */
function S3Bucket(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(S3Bucket, Resource);

S3Bucket.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * Returns the DNS name of the specified bucket.Example: mystack-mybucket-kdwwxmddtr2g.s3.amazonaws.com
			 * @return {Attribute}
			 */
			domainName: function() {
				return createAttribute('DomainName');
			},

			/**
			 * Amazon S3 website endpoint for the specified bucket.Example: http://mystack-mybucket-kdwwxmddtr2g.s3-website-us-east-1.amazonaws.com/
			 * @return {Attribute}
			 */
			websiteURL: function() {
				return createAttribute('WebsiteURL');
			}
		};
	},

	
	/**
	 * A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see Canned ACLs in the Amazon S3 documentation.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {S3Bucket}
	 */
	accessControl: function(value) {
		return this.set('AccessControl', value);
	},

	/**
	 * A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name. For more information, see Name Type. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-).
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {S3Bucket}
	 */
	bucketName: function(value) {
		return this.set('BucketName', value);
	},

	/**
	 * Rules that define cross-origin resource sharing of objects in this bucket. For more information, see Enabling Cross-Origin Resource Sharing in the Amazon Simple Storage Service Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {S3CorsConfiguration} value
	 * @return {S3Bucket}
	 */
	corsConfiguration: function(value) {
		return this.set('CorsConfiguration', value);
	},

	/**
	 * Rules that define how Amazon S3 manages objects during their lifetime. For more information, see Object Lifecycle Management in the Amazon Simple Storage Service Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {S3LifecycleConfiguration} value
	 * @return {S3Bucket}
	 */
	lifecycleConfiguration: function(value) {
		return this.set('LifecycleConfiguration', value);
	},

	/**
	 * Settings that defines where logs are stored.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {S3LoggingConfiguration} value
	 * @return {S3Bucket}
	 */
	loggingConfiguration: function(value) {
		return this.set('LoggingConfiguration', value);
	},

	/**
	 * Configuration that defines which Amazon SNS topic to send messages to and what events to report.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {S3NotificationConfiguration} value
	 * @return {S3Bucket}
	 */
	notificationConfiguration: function(value) {
		return this.set('NotificationConfiguration', value);
	},

	/**
	 * Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the VersioningConfiguration property.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {S3ReplicationConfiguration} value
	 * @return {S3Bucket}
	 */
	replicationConfiguration: function(value) {
		return this.set('ReplicationConfiguration', value);
	},

	/**
	 * An arbitrary set of tags (key-value pairs) for this Amazon S3 bucket.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {S3Bucket}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * Enables multiple variants of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {S3VersioningConfiguration} value
	 * @return {S3Bucket}
	 */
	versioningConfiguration: function(value) {
		return this.set('VersioningConfiguration', value);
	},

	/**
	 * Information used to configure the bucket as a static website. For more information, see Hosting Websites on Amazon S3.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {WebsiteConfigurationType} value
	 * @return {S3Bucket}
	 */
	websiteConfiguration: function(value) {
		return this.set('WebsiteConfiguration', value);
	}
};

module.exports = S3Bucket;
