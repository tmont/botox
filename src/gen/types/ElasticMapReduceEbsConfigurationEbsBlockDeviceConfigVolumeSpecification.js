var PropertyType = require('../../property-type');

/**
 * VolumeSpecification is a property of the Amazon Elastic MapReduce EbsConfiguration property that configures the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig-volumespecification.html}
 * @constructor
 */
function ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification, PropertyType);

ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification.prototype = {
	
	/**
	 * The number of I/O operations per second (IOPS) that the volume supports. For more information, see Iops for the EbsBlockDevice action in the Amazon EC2 API Reference.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification}
	 */
	iops: function(value) {
		return this.set('Iops', value);
	},

	/**
	 * The volume size, in Gibibytes (GiB). For more information about specifying the volume size, see VolumeSize for the EbsBlockDevice action in the Amazon EC2 API Reference.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification}
	 */
	sizeInGB: function(value) {
		return this.set('SizeInGB', value);
	},

	/**
	 * The volume type, such as standard or io1. For more information about specifying the volume type, see VolumeType for the EbsBlockDevice action in the Amazon EC2 API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification}
	 */
	volumeType: function(value) {
		return this.set('VolumeType', value);
	}
};

module.exports = ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification;
