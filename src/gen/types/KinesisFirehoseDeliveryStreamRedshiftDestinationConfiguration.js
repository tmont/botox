var PropertyType = require('../../property-type');

/**
 * RedshiftDestinationConfiguration is a property of the AWS::KinesisFirehose::DeliveryStream resource that specifies an Amazon Redshift cluster to which Amazon Kinesis Firehose (Firehose) delivers data.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-redshiftdestinationconfiguration.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon CloudWatch Logs logging options for the delivery stream.
 *
 * Required: false
 *
 * @param {KinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype.cloudWatchLoggingOptions = function(value) {
	return this.set('CloudWatchLoggingOptions', value);
};

/**
 * The connection string that Firehose uses to connect to the Amazon Redshift cluster.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype.clusterJDBCURL = function(value) {
	return this.set('ClusterJDBCURL', value);
};

/**
 * Configures the Amazon Redshift COPY command that Firehose uses to load data into the cluster from the S3 bucket.
 *
 * Required: true
 *
 * @param {KinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype.copyCommand = function(value) {
	return this.set('CopyCommand', value);
};

/**
 * The password for the Amazon Redshift user that you specified in the Username property.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype.password = function(value) {
	return this.set('Password', value);
};

/**
 * The ARN of the AWS Identity and Access Management (IAM) role that grants Firehose access to your S3 bucket and AWS KMS (if you enable data encryption).
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype.roleARN = function(value) {
	return this.set('RoleARN', value);
};

/**
 * The S3 bucket where Firehose first delivers data. After the data is in the bucket, Firehose uses the COPY command to load the data into the Amazon Redshift cluster. For the S3 bucket's compression format, don't specify SNAPPY or ZIP because the Amazon Redshift COPY command doesn't support them.
 *
 * Required: true
 *
 * @param {KinesisFirehoseDeliveryStreamS3DestinationConfiguration} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype.s3Configuration = function(value) {
	return this.set('S3Configuration', value);
};

/**
 * The Amazon Redshift user that has permission to access the Amazon Redshift cluster. This user must have INSERT privileges for copying data from the S3 bucket to the cluster.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration}
 */
KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration.prototype.username = function(value) {
	return this.set('Username', value);
};

module.exports = KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration;
