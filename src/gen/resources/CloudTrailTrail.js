var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CloudTrail::Trail - The AWS::CloudTrail::Trail resource creates a trail and specifies where logs are published. An AWS CloudTrail (CloudTrail) trail can capture AWS API calls made by your AWS account and publishes the logs to an Amazon S3 bucket. For more information, see What is AWS CloudTrail? in the AWS CloudTrail User Guide.
 * @constructor
 */
function CloudTrailTrail(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::CloudTrail::Trail has no attributes');
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

module.exports = CloudTrailTrail;
