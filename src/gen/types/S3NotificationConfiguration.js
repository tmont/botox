/**
 * Describes the notification configuration for an AWS::S3::Bucket resource.
 * @constructor
 */
function S3NotificationConfiguration(initialData) {
	this.data = initialData || {};
}

S3NotificationConfiguration.prototype = {
	
	/**
	 * The AWS Lambda functions to invoke and the events for which to invoke the functions.
	 *
	 * Required: false
	 *
	 * @param {SimpleStorageServiceNotificationConfigurationLambdaConfigurations} value
	 * @return {S3NotificationConfiguration}
	 */
	lambdaConfigurations: function(value) {
		return this.set('LambdaConfigurations', value);
	},

	/**
	 * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
	 *
	 * Required: false
	 *
	 * @param {SimpleStorageServiceNotificationConfigurationQueueConfigurations} value
	 * @return {S3NotificationConfiguration}
	 */
	queueConfigurations: function(value) {
		return this.set('QueueConfigurations', value);
	},

	/**
	 * The topic to which notifications are sent and the events for which notification are generated.
	 *
	 * Required: false
	 *
	 * @param {S3NotificationConfigurationTopicConfigurations} value
	 * @return {S3NotificationConfiguration}
	 */
	topicConfigurations: function(value) {
		return this.set('TopicConfigurations', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = S3NotificationConfiguration;
