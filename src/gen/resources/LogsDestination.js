var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Logs::Destination - The AWS::Logs::Destination resource creates an Amazon CloudWatch Logs (CloudWatch Logs) destination, which enables you to specify a physical resource (such as an Amazon Kinesis stream) that subscribes to CloudWatch Logs log events from another AWS account. For more information, see Cross-Account Log Data Sharing with Subscriptions in the Amazon CloudWatch Developer Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsDestination(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

LogsDestination.prototype = {
	
	/**
	 * The name of the CloudWatch Logs destination.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LogsDestination}
	 */
	destinationName: function(value) {
		return this.set('DestinationName', value);
	},

	/**
	 * An AWS Identity and Access Management (IAM) policy that specifies who can write to your destination.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {LogsDestination}
	 */
	destinationPolicy: function(value) {
		return this.set('DestinationPolicy', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource (TargetArn).
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {LogsDestination}
	 */
	roleArn: function(value) {
		return this.set('RoleArn', value);
	},

	/**
	 * The ARN of the AWS resource that receives log events. Currently, you can specify only an Amazon Kinesis stream.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {LogsDestination}
	 */
	targetArn: function(value) {
		return this.set('TargetArn', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Logs::Destination has no attributes');
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

module.exports = LogsDestination;
