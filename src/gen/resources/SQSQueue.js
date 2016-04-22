var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::SQS::Queue - The AWS::SQS::Queue type creates an Amazon SQS queue.
 * @constructor
 * @param {String} name Name of the resource
 */
function SQSQueue(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

SQSQueue.prototype = {
	
	/**
	 * The time in seconds that the delivery of all messages in the queue will be delayed. You can specify an integer value of 0 to 900 (15 minutes). The default value is 0.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {SQSQueue}
	 */
	delaySeconds: function(value) {
		return this.set('DelaySeconds', value);
	},

	/**
	 * The limit of how many bytes a message can contain before Amazon SQS rejects it. You can specify an integer value from 1024 bytes (1 KiB) to 262144 bytes (256 KiB). The default value is 262144 (256 KiB).
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {SQSQueue}
	 */
	maximumMessageSize: function(value) {
		return this.set('MaximumMessageSize', value);
	},

	/**
	 * The number of seconds Amazon SQS retains a message. You can specify an integer value from 60 seconds (1 minute) to 1209600 seconds (14 days). The default value is 345600 seconds (4 days).
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {SQSQueue}
	 */
	messageRetentionPeriod: function(value) {
		return this.set('MessageRetentionPeriod', value);
	},

	/**
	 * A name for the queue. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the queue name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {SQSQueue}
	 */
	queueName: function(value) {
		return this.set('QueueName', value);
	},

	/**
	 * Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, as opposed to returning an empty response if a message is not yet available. You can specify an integer from 1 to 20. The short polling is used as the default or when you specify 0 for this property. For more information, see Amazon SQS Long Poll.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {SQSQueue}
	 */
	receiveMessageWaitTimeSeconds: function(value) {
		return this.set('ReceiveMessageWaitTimeSeconds', value);
	},

	/**
	 * Specifies an existing dead letter queue to receive messages after the source queue (this queue) fails to process a message a specified number of times.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {SQSRedrivePolicy} value
	 * @return {SQSQueue}
	 */
	redrivePolicy: function(value) {
		return this.set('RedrivePolicy', value);
	},

	/**
	 * The length of time during which the queue will be unavailable once a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {SQSQueue}
	 */
	visibilityTimeout: function(value) {
		return this.set('VisibilityTimeout', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * Returns the Amazon Resource Name (ARN) of the queue. For example: arn:aws:sqs:us-east-1:123456789012:mystack-myqueue-15PG5C2FC1CW8
			 */
			arn: function() {
				return new Attribute(resourceName, 'Arn');
			},

			/**
			 * Returns the queue name. For example:mystack-myqueue-1VF9BKQH5BJVI
			 */
			queueName: function() {
				return new Attribute(resourceName, 'QueueName');
			}
		};
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

module.exports = SQSQueue;
