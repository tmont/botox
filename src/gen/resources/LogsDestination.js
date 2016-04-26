var Resource = require('../../resource');

/**
 * AWS::Logs::Destination - The AWS::Logs::Destination resource creates an Amazon CloudWatch Logs (CloudWatch Logs) destination, which enables you to specify a physical resource (such as an Amazon Kinesis stream) that subscribes to CloudWatch Logs log events from another AWS account. For more information, see Cross-Account Log Data Sharing with Subscriptions in the Amazon CloudWatch Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsDestination(name) {
	Resource.call(this, name, 'AWS::Logs::Destination');
}

LogsDestination.prototype = Object.create(Resource.prototype);

/**
 * The name of the CloudWatch Logs destination.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LogsDestination}
 */
LogsDestination.prototype.destinationName = function(value) {
	return this.set('DestinationName', value);
};

/**
 * An AWS Identity and Access Management (IAM) policy that specifies who can write to your destination.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LogsDestination}
 */
LogsDestination.prototype.destinationPolicy = function(value) {
	return this.set('DestinationPolicy', value);
};

/**
 * The Amazon Resource Name (ARN) of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource (TargetArn).
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LogsDestination}
 */
LogsDestination.prototype.roleArn = function(value) {
	return this.set('RoleArn', value);
};

/**
 * The ARN of the AWS resource that receives log events. Currently, you can specify only an Amazon Kinesis stream.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LogsDestination}
 */
LogsDestination.prototype.targetArn = function(value) {
	return this.set('TargetArn', value);
};

module.exports = LogsDestination;
