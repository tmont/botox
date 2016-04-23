var PropertyType = require('../../property-type');

/**
 * EbsBlockDeviceConfig is a property of the Amazon Elastic MapReduce EbsConfiguration property that defines the settings for the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig.html}
 * @constructor
 */
function ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig, PropertyType);

ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig.prototype = {
	
	/**
	 * The settings for the Amazon EBS volumes.
	 *
	 * Required: true
	 *
	 * @param {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification} value
	 * @return {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig}
	 */
	volumeSpecification: function(value) {
		return this.set('VolumeSpecification', value);
	},

	/**
	 * The number of Amazon EBS volumes that you want to create for each instance in the EMR cluster or instance group.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig}
	 */
	volumesPerInstance: function(value) {
		return this.set('VolumesPerInstance', value);
	}
};

module.exports = ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig;
