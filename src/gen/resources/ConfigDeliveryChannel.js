var Resource = require('../../resource');

/**
 * AWS::Config::DeliveryChannel - The AWS::Config::DeliveryChannel resource describes where AWS Config stores configuration changes to an AWS resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ConfigDeliveryChannel(name) {
	Resource.call(this, name, 'AWS::Config::DeliveryChannel');
}

ConfigDeliveryChannel.prototype = Object.create(Resource.prototype);


/**
 * Provides options for how AWS Config delivers configuration snapshots to the S3 bucket in your delivery channel.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ConfigDeliveryChannelConfigSnapshotDeliveryProperties|Attribute|Reference} value AWS Config DeliveryChannel ConfigSnapshotDeliveryProperties
 * @return {ConfigDeliveryChannel}
 */
ConfigDeliveryChannel.prototype.configSnapshotDeliveryProperties = function(value) {
	return this.set('ConfigSnapshotDeliveryProperties', value);
};

/**
 * A name for the delivery channel. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the delivery channel name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Updates are not supported.. To change the name, you must run two separate updates. Delete this resource in the first update and then recreate it with a new name in the second update.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigDeliveryChannel}
 */
ConfigDeliveryChannel.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The name of an S3 bucket where you want to store configuration history for the delivery channel.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigDeliveryChannel}
 */
ConfigDeliveryChannel.prototype.s3BucketName = function(value) {
	return this.set('S3BucketName', value);
};

/**
 * A key prefix (folder) for the specified S3 bucket.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigDeliveryChannel}
 */
ConfigDeliveryChannel.prototype.s3KeyPrefix = function(value) {
	return this.set('S3KeyPrefix', value);
};

/**
 * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic that AWS Config delivers notifications to.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigDeliveryChannel}
 */
ConfigDeliveryChannel.prototype.snsTopicARN = function(value) {
	return this.set('SnsTopicARN', value);
};

module.exports = ConfigDeliveryChannel;
