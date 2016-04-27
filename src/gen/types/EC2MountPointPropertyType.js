var PropertyType = require('../../property-type');

/**
 * The EC2 MountPoint property is an embedded property of the AWS::EC2::Instance type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-mount-point.html}
 * @constructor
 */
function EC2MountPointPropertyType() {
	PropertyType.call(this);
}

EC2MountPointPropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * How the device is exposed to the instance (such as /dev/sdh, or xvdh).
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2MountPointPropertyType}
 */
EC2MountPointPropertyType.prototype.device = function(value) {
	return this.set('Device', value);
};

/**
 * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone and the instance must be running.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2MountPointPropertyType}
 */
EC2MountPointPropertyType.prototype.volumeId = function(value) {
	return this.set('VolumeId', value);
};

module.exports = EC2MountPointPropertyType;
