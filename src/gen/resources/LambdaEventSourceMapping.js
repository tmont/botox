var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Lambda::EventSourceMapping - The AWS::Lambda::EventSourceMapping resource specifies a stream as an event source for an AWS Lambda (Lambda) function. The stream can be an Amazon Kinesis stream or an Amazon DynamoDB (DynamoDB) stream. Lambda invokes the associated function when records are posted to the stream. For more information, see CreateEventSourceMapping in the AWS Lambda Developer Guide.
 * @constructor
 */
function LambdaEventSourceMapping(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

LambdaEventSourceMapping.prototype = {
	
	/**
	 * The largest number of records that Lambda retrieves from your event source when invoking your function. Your function receives an event with all the retrieved records. For the default and valid values, see CreateEventSourceMapping in the AWS Lambda Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {LambdaEventSourceMapping}
	 */
	batchSize: function(value) {
		return this.set('BatchSize', value);
	},

	/**
	 * Indicates whether Lambda begins polling the event source.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {LambdaEventSourceMapping}
	 */
	enabled: function(value) {
		return this.set('Enabled', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the Amazon Kinesis or DynamoDB stream that is the source of events. Any record added to this stream can invoke the Lambda function. For more information, see CreateEventSourceMapping in the AWS Lambda Developer Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LambdaEventSourceMapping}
	 */
	eventSourceArn: function(value) {
		return this.set('EventSourceArn', value);
	},

	/**
	 * The name or ARN of a Lambda function to invoke when Lambda detects an event on the stream.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {LambdaEventSourceMapping}
	 */
	functionName: function(value) {
		return this.set('FunctionName', value);
	},

	/**
	 * The position in the stream where Lambda starts reading. For valid values, see CreateEventSourceMapping in the AWS Lambda Developer Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LambdaEventSourceMapping}
	 */
	startingPosition: function(value) {
		return this.set('StartingPosition', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Lambda::EventSourceMapping has no attributes');
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

module.exports = LambdaEventSourceMapping;
