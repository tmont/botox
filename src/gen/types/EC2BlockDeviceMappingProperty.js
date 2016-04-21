/**
 * The Amazon EC2 block device mapping property is an embedded property of the AWS::EC2::Instance resource. For block device mappings for an Auto Scaling launch configuration, see AutoScaling Block Device Mapping.
 * @constructor
 */
function EC2BlockDeviceMappingProperty(initialData) {
	this.data = initialData || {};
}

EC2BlockDeviceMappingProperty.prototype = {
	
	/**
	 * The name of the device within Amazon EC2.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2BlockDeviceMappingProperty}
	 */
	deviceName: function(value) {
		return this.set('DeviceName', value);
	},

	/**
	 * Required: Conditional You can specify either VirtualName or Ebs, but not both.
	 *
	 * Required: false
	 *
	 * @param {ElasticBlockStoreBlockDeviceProperty} value
	 * @return {EC2BlockDeviceMappingProperty}
	 */
	ebs: function(value) {
		return this.set('Ebs', value);
	},

	/**
	 * This property can be used to unmap a defined device.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {EC2BlockDeviceMappingProperty}
	 */
	noDevice: function(value) {
		return this.set('NoDevice', value);
	},

	/**
	 * The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0); for example, ephemeral0.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {EC2BlockDeviceMappingProperty}
	 */
	virtualName: function(value) {
		return this.set('VirtualName', value);
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

module.exports = EC2BlockDeviceMappingProperty;
