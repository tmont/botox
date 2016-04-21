/**
 * Describes the topic and events for the Amazon S3 NotificationConfiguration property.
 * @constructor
 */
function S3NotificationConfigurationTopicConfigurations(initialData) {
	this.data = initialData || {};
}

S3NotificationConfigurationTopicConfigurations.prototype = {
	
	/**
	 * The Amazon Simple Storage Service (Amazon S3) bucket event about which to send notifications. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3NotificationConfigurationTopicConfigurations}
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
	 * @return {S3NotificationConfigurationTopicConfigurations}
	 */
	filter: function(value) {
		return this.set('Filter', value);
	},

	/**
	 * The Amazon SNS topic Amazon Resource Name (ARN) to which Amazon S3 reports the specified events.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3NotificationConfigurationTopicConfigurations}
	 */
	topic: function(value) {
		return this.set('Topic', value);
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

module.exports = S3NotificationConfigurationTopicConfigurations;