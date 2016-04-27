var PropertyType = require('../../property-type');

/**
 * Describes the topic and events for the Amazon S3 NotificationConfiguration property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-topicconfig.html}
 * @constructor
 */
function S3NotificationConfigurationTopicConfigurations() {
	PropertyType.call(this);
}

S3NotificationConfigurationTopicConfigurations.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon Simple Storage Service (Amazon S3) bucket event about which to send notifications. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @return {S3NotificationConfigurationTopicConfigurations}
 */
S3NotificationConfigurationTopicConfigurations.prototype.event = function(value) {
	return this.set('Event', value);
};

/**
 * The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon Simple Storage Service (Amazon S3) sends notifications only when image files with a .jpg extension are added to the bucket.
 *
 * Required: false
 *
 * @param {S3NotificationConfigurationConfigFilter} value
 * @return {S3NotificationConfigurationTopicConfigurations}
 */
S3NotificationConfigurationTopicConfigurations.prototype.filter = function(value) {
	return this.set('Filter', value);
};

/**
 * The Amazon SNS topic Amazon Resource Name (ARN) to which Amazon S3 reports the specified events.
 *
 * Required: true
 *
 * @param {String} value
 * @return {S3NotificationConfigurationTopicConfigurations}
 */
S3NotificationConfigurationTopicConfigurations.prototype.topic = function(value) {
	return this.set('Topic', value);
};

module.exports = S3NotificationConfigurationTopicConfigurations;
