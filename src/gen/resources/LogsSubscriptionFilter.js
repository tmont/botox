var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Logs::SubscriptionFilter - The AWS::Logs::SubscriptionFilter resource creates an Amazon CloudWatch Logs (CloudWatch Logs) subscription filter that defines which log events are delivered to your Amazon Kinesis stream or AWS Lambda (Lambda) function and where to send them.
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsSubscriptionFilter(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

LogsSubscriptionFilter.prototype = {
	
	/**
	 * The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Lambda function that you want to use as the subscription feed destination.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LogsSubscriptionFilter}
	 */
	destinationArn: function(value) {
		return this.set('DestinationArn', value);
	},

	/**
	 * The filtering expressions that restrict what gets delivered to the destination AWS resource. For more information about the filter pattern syntax, see Filter and Pattern Syntax in the Amazon CloudWatch Developer Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LogsSubscriptionFilter}
	 */
	filterPattern: function(value) {
		return this.set('FilterPattern', value);
	},

	/**
	 * The log group to associate with the subscription filter. All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LogsSubscriptionFilter}
	 */
	logGroupName: function(value) {
		return this.set('LogGroupName', value);
	},

	/**
	 * An IAM role that grants CloudWatch Logs permission to put data into the specified Amazon Kinesis stream. For Lambda and CloudWatch Logs destinations, don't specify this property because CloudWatch Logs gets the necessary permissions from the destination resource.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LogsSubscriptionFilter}
	 */
	roleArn: function(value) {
		return this.set('RoleArn', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Logs::SubscriptionFilter has no attributes');
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

module.exports = LogsSubscriptionFilter;
