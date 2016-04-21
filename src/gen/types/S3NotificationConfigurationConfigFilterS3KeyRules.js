/**
 * Rules is a property of the Amazon S3 NotificationConfiguration Config Filter S3Key property that describes the Amazon Simple Storage Service (Amazon S3) object key name to filter on and whether to filter on the suffix or prefix of the key name.
 * @constructor
 */
function S3NotificationConfigurationConfigFilterS3KeyRules(initialData) {
	this.data = initialData || {};
}

S3NotificationConfigurationConfigFilterS3KeyRules.prototype = {
	
	/**
	 * Whether the filter matches the prefix or suffix of object key names. For valid values, see the Name request element of the PUT Bucket notification action in the Amazon Simple Storage Service API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3NotificationConfigurationConfigFilterS3KeyRules}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The value that the filter searches for in object key names.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3NotificationConfigurationConfigFilterS3KeyRules}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = S3NotificationConfigurationConfigFilterS3KeyRules;