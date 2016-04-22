var Resource = require('../../resource');

/**
 * AWS::CloudTrail::Trail - The AWS::CloudTrail::Trail resource creates a trail and specifies where logs are published. An AWS CloudTrail (CloudTrail) trail can capture AWS API calls made by your AWS account and publishes the logs to an Amazon S3 bucket. For more information, see What is AWS CloudTrail? in the AWS CloudTrail User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudTrailTrail(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(CloudTrailTrail, Resource);

CloudTrailTrail.prototype = {
	
	
	/**
	 * The Amazon Resource Name (ARN) of a log group to which CloudTrail logs will be delivered.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudTrailTrail}
	 */
	cloudWatchLogsLogGroupArn: function(value) {
		return this.set('CloudWatchLogsLogGroupArn', value);
	},

	/**
	 * The role ARN that Amazon CloudWatch Logs (CloudWatch Logs) assumes to write logs to a log group. For more information, see Role Policy Document for CloudTrail to Use CloudWatch Logs for Monitoring in the AWS CloudTrail User Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudTrailTrail}
	 */
	cloudWatchLogsRoleArn: function(value) {
		return this.set('CloudWatchLogsRoleArn', value);
	},

	/**
	 * Indicates whether CloudTrail validates the integrity of log files. By default, AWS CloudFormation sets this value to false. When you disable log file integrity validation, CloudTrail stops creating digest files. For more information, see CreateTrail in the AWS CloudTrail API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {CloudTrailTrail}
	 */
	enableLogFileValidation: function(value) {
		return this.set('EnableLogFileValidation', value);
	}
};

module.exports = CloudTrailTrail;
