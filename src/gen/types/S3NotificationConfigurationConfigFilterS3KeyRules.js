var PropertyType = require('../../property-type');

/**
 * Rules is a property of the Amazon S3 NotificationConfiguration Config Filter S3Key property that describes the Amazon Simple Storage Service (Amazon S3) object key name to filter on and whether to filter on the suffix or prefix of the key name.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key-rules.html}
 * @constructor
 */
function S3NotificationConfigurationConfigFilterS3KeyRules() {
	PropertyType.call(this);
}

S3NotificationConfigurationConfigFilterS3KeyRules.prototype = Object.create(PropertyType.prototype);

/**
 * Whether the filter matches the prefix or suffix of object key names. For valid values, see the Name request element of the PUT Bucket notification action in the Amazon Simple Storage Service API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {S3NotificationConfigurationConfigFilterS3KeyRules}
 */
S3NotificationConfigurationConfigFilterS3KeyRules.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The value that the filter searches for in object key names.
 *
 * Required: true
 *
 * @param {String} value
 * @return {S3NotificationConfigurationConfigFilterS3KeyRules}
 */
S3NotificationConfigurationConfigFilterS3KeyRules.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = S3NotificationConfigurationConfigFilterS3KeyRules;
