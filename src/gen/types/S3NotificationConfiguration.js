var PropertyType = require('../../property-type');

/**
 * Describes the notification configuration for an AWS::S3::Bucket resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig.html}
 * @constructor
 */
function S3NotificationConfiguration() {
	PropertyType.call(this);
}

S3NotificationConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The AWS Lambda functions to invoke and the events for which to invoke the functions.
 *
 * Required: false
 *
 * @param {SimpleStorageServiceNotificationConfigurationLambdaConfigurations} value
 * @return {S3NotificationConfiguration}
 */
S3NotificationConfiguration.prototype.lambdaConfigurations = function(value) {
	return this.set('LambdaConfigurations', value);
};

/**
 * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
 *
 * Required: false
 *
 * @param {SimpleStorageServiceNotificationConfigurationQueueConfigurations} value
 * @return {S3NotificationConfiguration}
 */
S3NotificationConfiguration.prototype.queueConfigurations = function(value) {
	return this.set('QueueConfigurations', value);
};

/**
 * The topic to which notifications are sent and the events for which notification are generated.
 *
 * Required: false
 *
 * @param {S3NotificationConfigurationTopicConfigurations} value
 * @return {S3NotificationConfiguration}
 */
S3NotificationConfiguration.prototype.topicConfigurations = function(value) {
	return this.set('TopicConfigurations', value);
};

module.exports = S3NotificationConfiguration;
