var Resource = require('../../resource');

/**
 * AWS::CloudTrail::Trail - The AWS::CloudTrail::Trail resource creates a trail and specifies where logs are published. An AWS CloudTrail (CloudTrail) trail can capture AWS API calls made by your AWS account and publishes the logs to an Amazon S3 bucket. For more information, see What is AWS CloudTrail? in the AWS CloudTrail User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudTrailTrail(name) {
	Resource.call(this, name, 'AWS::CloudTrail::Trail');
}

CloudTrailTrail.prototype = Object.create(Resource.prototype);

/**
 * The Amazon Resource Name (ARN) of a log group to which CloudTrail logs will be delivered.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.cloudWatchLogsLogGroupArn = function(value) {
	return this.set('CloudWatchLogsLogGroupArn', value);
};

/**
 * The role ARN that Amazon CloudWatch Logs (CloudWatch Logs) assumes to write logs to a log group. For more information, see Role Policy Document for CloudTrail to Use CloudWatch Logs for Monitoring in the AWS CloudTrail User Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.cloudWatchLogsRoleArn = function(value) {
	return this.set('CloudWatchLogsRoleArn', value);
};

/**
 * Indicates whether CloudTrail validates the integrity of log files. By default, AWS CloudFormation sets this value to false. When you disable log file integrity validation, CloudTrail stops creating digest files. For more information, see CreateTrail in the AWS CloudTrail API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.enableLogFileValidation = function(value) {
	return this.set('EnableLogFileValidation', value);
};

/**
 * Indicates whether the trail is publishing events from global services, such as IAM, to the log files. By default, AWS CloudFormation sets this value to false.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.includeGlobalServiceEvents = function(value) {
	return this.set('IncludeGlobalServiceEvents', value);
};

/**
 * Indicates whether the CloudTrail trail is currently logging AWS API calls.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.isLogging = function(value) {
	return this.set('IsLogging', value);
};

/**
 * Indicates whether the CloudTrail trail is created in the region in which you create the stack (false) or in all regions (true). By default, AWS CloudFormation sets this value to false. For more information, see How Does CloudTrail Behave Regionally and Globally? in the AWS CloudTrail User Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.isMultiRegionTrail = function(value) {
	return this.set('IsMultiRegionTrail', value);
};

/**
 * The AWS Key Management Service (AWS KMS) key ID that you want to use to encrypt CloudTrail logs. You can specify an alias name (prefixed with alias/), an alias ARN, a key ARN, or a globally unique identifier.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.kmsKeyId = function(value) {
	return this.set('KMSKeyId', value);
};

/**
 * The name of the Amazon S3 bucket where CloudTrail publishes log files.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.s3BucketName = function(value) {
	return this.set('S3BucketName', value);
};

/**
 * An Amazon S3 object key prefix that precedes the name of all log files.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.s3KeyPrefix = function(value) {
	return this.set('S3KeyPrefix', value);
};

/**
 * The name of an Amazon SNS topic that is notified when new log files are published.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.snsTopicName = function(value) {
	return this.set('SnsTopicName', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this trail.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @return {CloudTrailTrail}
 */
CloudTrailTrail.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = CloudTrailTrail;
