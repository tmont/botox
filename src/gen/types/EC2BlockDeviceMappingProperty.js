var PropertyType = require('../../property-type');

/**
 * The Amazon EC2 block device mapping property is an embedded property of the AWS::EC2::Instance resource. For block device mappings for an Auto Scaling launch configuration, see AutoScaling Block Device Mapping.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-mapping.html}
 * @constructor
 */
function EC2BlockDeviceMappingProperty() {
	PropertyType.call(this);
}

EC2BlockDeviceMappingProperty.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the device within Amazon EC2.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2BlockDeviceMappingProperty}
 */
EC2BlockDeviceMappingProperty.prototype.deviceName = function(value) {
	return this.set('DeviceName', value);
};

/**
 * Required: Conditional You can specify either VirtualName or Ebs, but not both.
 *
 * Required: false
 *
 * @param {ElasticBlockStoreBlockDeviceProperty} value
 * @return {EC2BlockDeviceMappingProperty}
 */
EC2BlockDeviceMappingProperty.prototype.ebs = function(value) {
	return this.set('Ebs', value);
};

/**
 * This property can be used to unmap a defined device.
 *
 * Required: false
 *
 * @param {Object} value
 * @return {EC2BlockDeviceMappingProperty}
 */
EC2BlockDeviceMappingProperty.prototype.noDevice = function(value) {
	return this.set('NoDevice', value);
};

/**
 * The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0); for example, ephemeral0.
 *
 * Required: false
 *
 * @param {String} value
 * @return {EC2BlockDeviceMappingProperty}
 */
EC2BlockDeviceMappingProperty.prototype.virtualName = function(value) {
	return this.set('VirtualName', value);
};

module.exports = EC2BlockDeviceMappingProperty;
