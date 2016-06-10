var PropertyType = require('../../property-type');

/**
 * EncryptionConfiguration is a property of the Amazon Kinesis Firehose DeliveryStream S3DestinationConfiguration property that specifies the encryption settings that Amazon Kinesis Firehose (Firehose) uses when delivering data to Amazon Simple Storage Service (Amazon S3).
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-encryptionconfiguration.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The AWS Key Management Service (AWS KMS) encryption key that Amazon S3 uses to encrypt your data.
 *
 * Required: false
 *
 * @param {KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration.prototype.kmsEncryptionConfig = function(value) {
	return this.set('KMSEncryptionConfig', value);
};

/**
 * Disables encryption. For valid values, see the NoEncryptionConfig content for the EncryptionConfiguration data type in the Amazon Kinesis Firehose API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration.prototype.noEncryptionConfig = function(value) {
	return this.set('NoEncryptionConfig', value);
};

module.exports = KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration;
