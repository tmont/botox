var PropertyType = require('../../property-type');

/**
 * Describes the Amazon EBS volumes for the AWS::OpsWorks::Layer resource type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfig.html}
 * @constructor
 */
function OpsWorksVolumeConfigurationType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(OpsWorksVolumeConfigurationType, PropertyType);

OpsWorksVolumeConfigurationType.prototype = {
	
	/**
	 * The number of I/O operations per second (IOPS) to provision for the volume.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {OpsWorksVolumeConfigurationType}
	 */
	iops: function(value) {
		return this.set('Iops', value);
	},

	/**
	 * The volume mount point, such as /dev/sdh.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {OpsWorksVolumeConfigurationType}
	 */
	mountPoint: function(value) {
		return this.set('MountPoint', value);
	},

	/**
	 * The number of disks in the volume.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {OpsWorksVolumeConfigurationType}
	 */
	numberOfDisks: function(value) {
		return this.set('NumberOfDisks', value);
	},

	/**
	 * The volume RAID level.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {OpsWorksVolumeConfigurationType}
	 */
	raidLevel: function(value) {
		return this.set('RaidLevel', value);
	},

	/**
	 * The volume size.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {OpsWorksVolumeConfigurationType}
	 */
	size: function(value) {
		return this.set('Size', value);
	},

	/**
	 * The type of volume, such as magnetic or SSD. For valid values, see VolumeConfiguration in the AWS OpsWorks API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {OpsWorksVolumeConfigurationType}
	 */
	volumeType: function(value) {
		return this.set('VolumeType', value);
	}
};

module.exports = OpsWorksVolumeConfigurationType;
