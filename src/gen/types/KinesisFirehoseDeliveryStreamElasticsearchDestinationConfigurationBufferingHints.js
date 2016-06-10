var PropertyType = require('../../property-type');

/**
 * BufferingHints is a property of the Amazon Kinesis Firehose DeliveryStream ElasticsearchDestinationConfiguration property that specifies how Amazon Kinesis Firehose (Firehose) buffers incoming data while delivering it to the destination. The first buffer condition that is satisfied triggers Firehose to deliver the data.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-elasticsearchdestinationconfiguration-bufferinghints.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints.prototype = Object.create(PropertyType.prototype);

/**
 * The length of time, in seconds, that Firehose buffers incoming data before delivering it to the destination. For valid values, see the IntervalInSeconds content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints.prototype.intervalInSeconds = function(value) {
	return this.set('IntervalInSeconds', value);
};

/**
 * The size of the buffer, in MBs, that Firehose uses for incoming data before delivering it to the destination. For valid values, see the SizeInMBs content for the BufferingHints data type in the Amazon Kinesis Firehose API Reference.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints.prototype.sizeInMBs = function(value) {
	return this.set('SizeInMBs', value);
};

module.exports = KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints;
