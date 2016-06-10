var PropertyType = require('../../property-type');

/**
 * S3DestinationConfiguration is a property of the AWS::KinesisFirehose::DeliveryStream resource and the Amazon Kinesis Firehose DeliveryStream ElasticsearchDestinationConfiguration and Amazon Kinesis Firehose DeliveryStream RedshiftDestinationConfiguration properties that specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Firehose (Firehose) delivers data.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamS3DestinationConfiguration() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon Resource Name (ARN) of the S3 bucket to send data to.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype.bucketARN = function(value) {
	return this.set('BucketARN', value);
};

/**
 * Configures how Firehose buffers incoming data while delivering it to the S3 bucket.
 *
 * Required: true
 *
 * @param {KinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype.bufferingHints = function(value) {
	return this.set('BufferingHints', value);
};

/**
 * The Amazon CloudWatch Logs logging options for the delivery stream.
 *
 * Required: false
 *
 * @param {KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype.cloudWatchLoggingOptions = function(value) {
	return this.set('CloudWatchLoggingOptions', value);
};

/**
 * The type of compression that Firehose uses to compress the data that it delivers to the S3 bucket. For valid values, see the CompressionFormat content for the S3DestinationConfiguration data type in the Amazon Kinesis Firehose API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype.compressionFormat = function(value) {
	return this.set('CompressionFormat', value);
};

/**
 * Configures Amazon Simple Storage Service (Amazon S3) server-side encryption. Firehose uses AWS Key Management Service (AWS KMS) to encrypt the data that it delivers to your S3 bucket.
 *
 * Required: false
 *
 * @param {KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype.encryptionConfiguration = function(value) {
	return this.set('EncryptionConfiguration', value);
};

/**
 * A prefix that Firehose adds to the files that it delivers to the S3 bucket. The prefix helps you identify the files that Firehose delivered.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype.prefix = function(value) {
	return this.set('Prefix', value);
};

/**
 * The ARN of an AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket and AWS KMS (if you enable data encryption).
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfiguration.prototype.roleARN = function(value) {
	return this.set('RoleARN', value);
};

module.exports = KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
