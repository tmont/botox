var PropertyType = require('../../property-type');

/**
 * QueueConfigurations is a property of the Amazon S3 NotificationConfiguration property that describes the S3 bucket events about which you want to send messages to Amazon SQS and the queues to which you want to send them.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-queueconfig.html}
 * @constructor
 */
function SimpleStorageServiceNotificationConfigurationQueueConfigurations() {
	PropertyType.call(this);
}

Object.setPrototypeOf(SimpleStorageServiceNotificationConfigurationQueueConfigurations, PropertyType);

SimpleStorageServiceNotificationConfigurationQueueConfigurations.prototype = {
	
	/**
	 * The S3 bucket event about which you want to publish messages to Amazon Simple Queue Service ( Amazon SQS). For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {SimpleStorageServiceNotificationConfigurationQueueConfigurations}
	 */
	event: function(value) {
		return this.set('Event', value);
	},

	/**
	 * The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon Simple Storage Service (Amazon S3) sends notifications only when image files with a .jpg extension are added to the bucket.
	 *
	 * Required: false
	 *
	 * @param {S3NotificationConfigurationConfigFilter} value
	 * @return {SimpleStorageServiceNotificationConfigurationQueueConfigurations}
	 */
	filter: function(value) {
		return this.set('Filter', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the Amazon SQS queue that Amazon S3 publishes messages to when the specified event type occurs.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {SimpleStorageServiceNotificationConfigurationQueueConfigurations}
	 */
	queue: function(value) {
		return this.set('Queue', value);
	}
};

module.exports = SimpleStorageServiceNotificationConfigurationQueueConfigurations;
