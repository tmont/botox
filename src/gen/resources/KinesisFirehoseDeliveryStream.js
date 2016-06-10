var Resource = require('../../resource');

/**
 * AWS::KinesisFirehose::DeliveryStream - The AWS::KinesisFirehose::DeliveryStream resource creates an Amazon Kinesis Firehose (Firehose) delivery stream that delivers real-time streaming data to an Amazon Simple Storage Service (Amazon S3), Amazon Redshift, or Amazon Elasticsearch Service (Amazon ES) destination. For more information, see Creating an Amazon Kinesis Firehose Delivery Stream in the Amazon Kinesis Firehose Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function KinesisFirehoseDeliveryStream(name) {
	Resource.call(this, name, 'AWS::KinesisFirehose::DeliveryStream');
}

KinesisFirehoseDeliveryStream.prototype = Object.create(Resource.prototype);

/**
 * A name for the delivery stream.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {KinesisFirehoseDeliveryStream}
 */
KinesisFirehoseDeliveryStream.prototype.deliveryStreamName = function(value) {
	return this.set('DeliveryStreamName', value);
};

/**
 * An Amazon ES destination for the delivery stream.
 *
 * Required: false
 * Update requires: No interruption. If you change the delivery stream destination from an Amazon ES destination to an Amazon S3 or Amazon Redshift destination, update requires some interruptions.
 *
 * @param {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration|Attribute|Reference} value Amazon Kinesis Firehose DeliveryStream ElasticsearchDestinationConfiguration
 * @returns {KinesisFirehoseDeliveryStream}
 */
KinesisFirehoseDeliveryStream.prototype.elasticsearchDestinationConfiguration = function(value) {
	return this.set('ElasticsearchDestinationConfiguration', value);
};

/**
 * An Amazon Redshift destination for the delivery stream.
 *
 * Required: false
 * Update requires: No interruption. If you change the delivery stream destination from an Amazon Redshift destination to an Amazon ES destination, update requires some interruptions.
 *
 * @param {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration|Attribute|Reference} value Amazon Kinesis Firehose DeliveryStream RedshiftDestinationConfiguration
 * @returns {KinesisFirehoseDeliveryStream}
 */
KinesisFirehoseDeliveryStream.prototype.redshiftDestinationConfiguration = function(value) {
	return this.set('RedshiftDestinationConfiguration', value);
};

/**
 * An Amazon S3 destination for the delivery stream.
 *
 * Required: false
 * Update requires: No interruption. If you change the delivery stream destination from an Amazon S3 destination to an Amazon ES destination, update requires some interruptions.
 *
 * @param {KinesisFirehoseDeliveryStreamS3DestinationConfiguration|Attribute|Reference} value Amazon Kinesis Firehose DeliveryStream S3DestinationConfiguration
 * @returns {KinesisFirehoseDeliveryStream}
 */
KinesisFirehoseDeliveryStream.prototype.s3DestinationConfiguration = function(value) {
	return this.set('S3DestinationConfiguration', value);
};

module.exports = KinesisFirehoseDeliveryStream;
