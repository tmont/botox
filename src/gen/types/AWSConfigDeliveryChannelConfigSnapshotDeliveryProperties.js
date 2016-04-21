/**
 * ConfigSnapshotDeliveryProperties is a property of the AWS::Config::DeliveryChannel resource that specifies how AWS Config delivers configuration snapshots to the S3 bucket in your delivery channel.
 * @constructor
 */
function AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties(initialData) {
	this.data = initialData || {};
}

AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties.prototype = {
	
	/**
	 * The frequency with which AWS Config delivers configuration snapshots. For valid values, see ConfigSnapshotDeliveryProperties in the AWS Config API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties}
	 */
	deliveryFrequency: function(value) {
		return this.set('DeliveryFrequency', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties;
