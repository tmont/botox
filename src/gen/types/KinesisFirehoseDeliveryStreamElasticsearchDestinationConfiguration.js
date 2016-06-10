var PropertyType = require('../../property-type');

/**
 * ElasticsearchDestinationConfiguration is a property of the AWS::KinesisFirehose::DeliveryStream resource that specifies an Amazon Elasticsearch Service (Amazon ES) domain that Amazon Kinesis Firehose (Firehose) delivers data to.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-elasticsearchdestinationconfiguration.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * Configures how Firehose buffers incoming data while delivering it to the Amazon ES domain.
 *
 * Required: true
 *
 * @param {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.bufferingHints = function(value) {
	return this.set('BufferingHints', value);
};

/**
 * The Amazon CloudWatch Logs logging options for the delivery stream.
 *
 * Required: false
 *
 * @param {KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.cloudWatchLoggingOptions = function(value) {
	return this.set('CloudWatchLoggingOptions', value);
};

/**
 * The Amazon Resource Name (ARN) of the Amazon ES domain that Firehose delivers data to.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.domainARN = function(value) {
	return this.set('DomainARN', value);
};

/**
 * The name of the Elasticsearch index to which Firehose adds data for indexing.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.indexName = function(value) {
	return this.set('IndexName', value);
};

/**
 * The frequency of Elasticsearch index rotation. If you enable index rotation, Firehose appends a portion of the UTC arrival timestamp to the specified index name, and rotates the appended timestamp accordingly. For more information, see Index Rotation for the Amazon ES Destination in the Amazon Kinesis Firehose Developer Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.indexRotationPeriod = function(value) {
	return this.set('IndexRotationPeriod', value);
};

/**
 * The retry behavior when Firehose is unable to deliver data to Amazon ES.
 *
 * Required: false
 *
 * @param {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.retryOptions = function(value) {
	return this.set('RetryOptions', value);
};

/**
 * The ARN of the AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket, AWS KMS (if you enable data encryption), and Amazon CloudWatch Logs (if you enable logging).
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.roleARN = function(value) {
	return this.set('RoleARN', value);
};

/**
 * The condition under which Firehose delivers data to Amazon Simple Storage Service (Amazon S3). You can send Amazon S3 all documents (all data) or only the documents that Firehose could not deliver to the Amazon ES destination. For more information and valid values, see the S3BackupMode content for the ElasticsearchDestinationConfiguration data type in the Amazon Kinesis Firehose API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.s3BackupMode = function(value) {
	return this.set('S3BackupMode', value);
};

/**
 * The S3 bucket where Firehose backs up incoming data.
 *
 * Required: false
 *
 * @param {KinesisFirehoseDeliveryStreamS3DestinationConfiguration} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.s3Configuration = function(value) {
	return this.set('S3Configuration', value);
};

/**
 * The Elasticsearch type name that Amazon ES adds to documents when indexing data.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration.prototype.typeName = function(value) {
	return this.set('TypeName', value);
};

module.exports = KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration;
