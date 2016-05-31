var PropertyType = require('../../property-type');

/**
 * EbsBlockDeviceConfigs is a property of the Amazon Elastic MapReduce EbsConfiguration property that defines the settings for the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig.html}
 * @constructor
 */
function ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs() {
	PropertyType.call(this);
}

ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs.prototype = Object.create(PropertyType.prototype);

/**
 * The settings for the Amazon EBS volumes.
 *
 * Required: true
 *
 * @param {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification} value
 * @returns {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs}
 */
ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs.prototype.volumeSpecification = function(value) {
	return this.set('VolumeSpecification', value);
};

/**
 * The number of Amazon EBS volumes that you want to create for each instance in the EMR cluster or instance group.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs}
 */
ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs.prototype.volumesPerInstance = function(value) {
	return this.set('VolumesPerInstance', value);
};

module.exports = ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigs;
