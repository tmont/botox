var PropertyType = require('../../property-type');

/**
 * KMSEncryptionConfig is a property of the Amazon Kinesis Firehose DeliveryStream S3DestinationConfiguration EncryptionConfiguration property that specifies the AWS Key Management Service (AWS KMS) encryption key that Amazon Simple Storage Service (Amazon S3) uses to encrypt data delivered by the Amazon Kinesis Firehose (Firehose) stream.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-encryptionconfiguration-kmsencryptionconfig.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon Resource Name (ARN) of the AWS KMS encryption key that Amazon S3 uses to encrypt data delivered by the Firehose stream. The key must belong to the same region as the destination S3 bucket.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig}
 */
KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig.prototype.kmsKeyARN = function(value) {
	return this.set('KMSKeyARN', value);
};

module.exports = KinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig;
