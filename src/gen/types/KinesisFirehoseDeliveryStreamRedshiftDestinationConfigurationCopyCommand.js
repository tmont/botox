var PropertyType = require('../../property-type');

/**
 * CopyCommand is a property of the Amazon Kinesis Firehose DeliveryStream RedshiftDestinationConfiguration property that configures the Amazon RedshiftCOPY command that Amazon Kinesis Firehose (Firehose) uses to load data into an Amazon Redshift cluster from an S3 bucket.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-redshiftdestinationconfiguration-copycommand.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand.prototype = Object.create(PropertyType.prototype);

/**
 * Parameters to use with the Amazon Redshift COPY command. For examples, see the CopyOptions content for the CopyCommand data type in the Amazon Kinesis Firehose API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand.prototype.copyOptions = function(value) {
	return this.set('CopyOptions', value);
};

/**
 * A comma-separated list of the column names in the table that Firehose copies data to.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand.prototype.dataTableColumns = function(value) {
	return this.set('DataTableColumns', value);
};

/**
 * The name of the table where Firehose adds the copied data.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand.prototype.dataTableName = function(value) {
	return this.set('DataTableName', value);
};

module.exports = KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand;
