var PropertyType = require('../../property-type');

/**
 * The AutoScaling Block Device Mapping type is an embedded property of the AWS::AutoScaling::LaunchConfiguration type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig-blockdev-mapping.html}
 * @constructor
 */
function CloudFormationAutoScalingBlockDeviceMappingPropertyType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFormationAutoScalingBlockDeviceMappingPropertyType, PropertyType);

CloudFormationAutoScalingBlockDeviceMappingPropertyType.prototype = {
	
	/**
	 * The name of the device within Amazon EC2.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	deviceName: function(value) {
		return this.set('DeviceName', value);
	},

	/**
	 * The Amazon Elastic Block Store volume information.
	 *
	 * Required: false
	 *
	 * @param {CloudFormationAutoScalingEBSBlockDevicePropertyType} value
	 * @return {CloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	ebs: function(value) {
		return this.set('Ebs', value);
	},

	/**
	 * Suppresses the device mapping. If NoDevice is set to true for the root device, the instance might fail the Amazon EC2 health check. Auto Scaling launches a replacement instance if the instance fails the health check.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {CloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	noDevice: function(value) {
		return this.set('NoDevice', value);
	},

	/**
	 * The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0), for example, ephemeral0.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	virtualName: function(value) {
		return this.set('VirtualName', value);
	}
};

module.exports = CloudFormationAutoScalingBlockDeviceMappingPropertyType;