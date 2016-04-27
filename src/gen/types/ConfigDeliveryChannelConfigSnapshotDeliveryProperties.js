var PropertyType = require('../../property-type');

/**
 * ConfigSnapshotDeliveryProperties is a property of the AWS::Config::DeliveryChannel resource that specifies how AWS Config delivers configuration snapshots to the S3 bucket in your delivery channel.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html}
 * @constructor
 */
function ConfigDeliveryChannelConfigSnapshotDeliveryProperties() {
	PropertyType.call(this);
}

ConfigDeliveryChannelConfigSnapshotDeliveryProperties.prototype = Object.create(PropertyType.prototype);

/**
 * The frequency with which AWS Config delivers configuration snapshots. For valid values, see ConfigSnapshotDeliveryProperties in the AWS Config API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @return {ConfigDeliveryChannelConfigSnapshotDeliveryProperties}
 */
ConfigDeliveryChannelConfigSnapshotDeliveryProperties.prototype.deliveryFrequency = function(value) {
	return this.set('DeliveryFrequency', value);
};

module.exports = ConfigDeliveryChannelConfigSnapshotDeliveryProperties;
