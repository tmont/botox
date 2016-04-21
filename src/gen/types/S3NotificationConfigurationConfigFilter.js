/**
 * Filter is a property of the LambdaConfigurations, QueueConfigurations, and TopicConfigurations properties that describes the filtering rules that determine the Amazon Simple Storage Service (Amazon S3) objects for which to send notifications.
 * @constructor
 */
function S3NotificationConfigurationConfigFilter(initialData) {
	this.data = initialData || {};
}

S3NotificationConfigurationConfigFilter.prototype = {
	
	/**
	 * Amazon S3 filtering rules that describe for which object key names to send notifications.
	 *
	 * Required: true
	 *
	 * @param {S3NotificationConfigurationConfigFilterS3Key} value
	 * @return {S3NotificationConfigurationConfigFilter}
	 */
	s3Key: function(value) {
		return this.set('S3Key', value);
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

module.exports = S3NotificationConfigurationConfigFilter;
