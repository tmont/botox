/**
 * S3Key is a property of the Amazon S3 NotificationConfiguration Config Filter property that specifies the key names of Amazon Simple Storage Service (Amazon S3) objects for which to send notifications.
 * @constructor
 */
function S3NotificationConfigurationConfigFilterS3Key(initialData) {
	this.data = initialData || {};
}

S3NotificationConfigurationConfigFilterS3Key.prototype = {
	
	/**
	 * The object key name to filter on and whether to filter on the suffix or prefix of the key name.
	 *
	 * Required: true
	 *
	 * @param {S3NotificationConfigurationConfigFilterS3KeyRule[]} value
	 * @return {S3NotificationConfigurationConfigFilterS3Key}
	 */
	rules: function(value) {
		return this.set('Rules', value);
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

module.exports = S3NotificationConfigurationConfigFilterS3Key;
