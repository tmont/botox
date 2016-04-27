var PropertyType = require('../../property-type');

/**
 * LambdaConfigurations is a property of the Amazon S3 NotificationConfiguration property that describes the AWS Lambda (Lambda) functions to invoke and the events for which to invoke them.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-lambdaconfig.html}
 * @constructor
 */
function SimpleStorageServiceNotificationConfigurationLambdaConfigurations() {
	PropertyType.call(this);
}

SimpleStorageServiceNotificationConfigurationLambdaConfigurations.prototype = Object.create(PropertyType.prototype);

/**
 * The S3 bucket event for which to invoke the Lambda function. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @return {SimpleStorageServiceNotificationConfigurationLambdaConfigurations}
 */
SimpleStorageServiceNotificationConfigurationLambdaConfigurations.prototype.event = function(value) {
	return this.set('Event', value);
};

/**
 * The filtering rules that determine which objects invoke the Lambda function. For example, you can create a filter so that only image files with a .jpg extension invoke the function when they are added to the S3 bucket.
 *
 * Required: false
 *
 * @param {S3NotificationConfigurationConfigFilter} value
 * @return {SimpleStorageServiceNotificationConfigurationLambdaConfigurations}
 */
SimpleStorageServiceNotificationConfigurationLambdaConfigurations.prototype.filter = function(value) {
	return this.set('Filter', value);
};

/**
 * The Amazon Resource Name (ARN) of the Lambda function that Amazon S3 invokes when the specified event type occurs.
 *
 * Required: true
 *
 * @param {String} value
 * @return {SimpleStorageServiceNotificationConfigurationLambdaConfigurations}
 */
SimpleStorageServiceNotificationConfigurationLambdaConfigurations.prototype.function = function(value) {
	return this.set('Function', value);
};

module.exports = SimpleStorageServiceNotificationConfigurationLambdaConfigurations;
