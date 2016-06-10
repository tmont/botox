var PropertyType = require('../../property-type');

/**
 * CloudWatchLoggingOptions is a property of the Amazon Kinesis Firehose DeliveryStream ElasticsearchDestinationConfiguration, Amazon Kinesis Firehose DeliveryStream RedshiftDestinationConfiguration, and Amazon Kinesis Firehose DeliveryStream S3DestinationConfiguration properties that specifies Amazon CloudWatch Logs (CloudWatch Logs) logging options that Amazon Kinesis Firehose (Firehose) uses for the delivery stream.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-destination-cloudwatchloggingoptions.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether CloudWatch Logs logging is enabled.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions}
 */
KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions.prototype.enabled = function(value) {
	return this.set('Enabled', value);
};

/**
 * The name of the CloudWatch Logs log group that contains the log stream that Firehose will use.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions}
 */
KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions.prototype.logGroupName = function(value) {
	return this.set('LogGroupName', value);
};

/**
 * The name of the CloudWatch Logs log stream that Firehose uses to send logs about data delivery.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions}
 */
KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions.prototype.logStreamName = function(value) {
	return this.set('LogStreamName', value);
};

module.exports = KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions;
