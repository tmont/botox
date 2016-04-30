var Resource = require('../../resource');

/**
 * AWS::SQS::Queue - The AWS::SQS::Queue type creates an Amazon SQS queue.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-queues.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function SQSQueue(name) {
	Resource.call(this, name, 'AWS::SQS::Queue');
}

SQSQueue.prototype = Object.create(Resource.prototype);

/**
 * AWS::SQS::Queue attribute map
 * @typedef {Object} SQSQueueAttributeMap
 * @property {Attribute} arn Returns the Amazon Resource Name (ARN) of the queue. For example: arn:aws:sqs:us-east-1:123456789012:mystack-myqueue-15PG5C2FC1CW8
 * @property {Attribute} queueName Returns the queue name. For example:mystack-myqueue-1VF9BKQH5BJVI
 */
Object.defineProperty(SQSQueue.prototype, 'attr', {
	/**
	 * @returns {SQSQueueAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {

			/**
			 * Returns the Amazon Resource Name (ARN) of the queue. For example: arn:aws:sqs:us-east-1:123456789012:mystack-myqueue-15PG5C2FC1CW8
			 * @returns {Attribute}
			 */
			get arn() {
				return createAttribute('Arn');
			},

			/**
			 * Returns the queue name. For example:mystack-myqueue-1VF9BKQH5BJVI
			 * @returns {Attribute}
			 */
			get queueName() {
				return createAttribute('QueueName');
			}
		};
	}
});

/**
 * The time in seconds that the delivery of all messages in the queue will be delayed. You can specify an integer value of 0 to 900 (15 minutes). The default value is 0.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {SQSQueue}
 */
SQSQueue.prototype.delaySeconds = function(value) {
	return this.set('DelaySeconds', value);
};

/**
 * The limit of how many bytes a message can contain before Amazon SQS rejects it. You can specify an integer value from 1024 bytes (1 KiB) to 262144 bytes (256 KiB). The default value is 262144 (256 KiB).
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {SQSQueue}
 */
SQSQueue.prototype.maximumMessageSize = function(value) {
	return this.set('MaximumMessageSize', value);
};

/**
 * The number of seconds Amazon SQS retains a message. You can specify an integer value from 60 seconds (1 minute) to 1209600 seconds (14 days). The default value is 345600 seconds (4 days).
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {SQSQueue}
 */
SQSQueue.prototype.messageRetentionPeriod = function(value) {
	return this.set('MessageRetentionPeriod', value);
};

/**
 * A name for the queue. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the queue name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {SQSQueue}
 */
SQSQueue.prototype.queueName = function(value) {
	return this.set('QueueName', value);
};

/**
 * Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, as opposed to returning an empty response if a message is not yet available. You can specify an integer from 1 to 20. The short polling is used as the default or when you specify 0 for this property. For more information, see Amazon SQS Long Poll.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {SQSQueue}
 */
SQSQueue.prototype.receiveMessageWaitTimeSeconds = function(value) {
	return this.set('ReceiveMessageWaitTimeSeconds', value);
};

/**
 * Specifies an existing dead letter queue to receive messages after the source queue (this queue) fails to process a message a specified number of times.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {SQSRedrivePolicy|Attribute|Reference} value Amazon SQS RedrivePolicy
 * @returns {SQSQueue}
 */
SQSQueue.prototype.redrivePolicy = function(value) {
	return this.set('RedrivePolicy', value);
};

/**
 * The length of time during which the queue will be unavailable once a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {SQSQueue}
 */
SQSQueue.prototype.visibilityTimeout = function(value) {
	return this.set('VisibilityTimeout', value);
};

module.exports = SQSQueue;
