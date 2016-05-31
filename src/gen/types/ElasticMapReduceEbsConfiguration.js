var PropertyType = require('../../property-type');

/**
 * EbsConfiguration is a property of the Amazon Elastic MapReduce Cluster JobFlowInstancesConfig InstanceGroupConfig property and the AWS::EMR::InstanceGroupConfig resource that defines Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your Amazon Elastic MapReduce (Amazon EMR) instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration.html}
 * @constructor
 */
function ElasticMapReduceEbsConfiguration() {
	PropertyType.call(this);
}

ElasticMapReduceEbsConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * Configures the block storage devices that are associated with your EMR instances.
 *
 * Required: false
 *
 * @param {ElasticMapReduceEbsConfiguration[]} value
 * @returns {ElasticMapReduceEbsConfiguration}
 */
ElasticMapReduceEbsConfiguration.prototype.ebsBlockDeviceConfigs = function(value) {
	return this.set('EbsBlockDeviceConfigs', value);
};

/**
 * Indicates whether the instances are optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. For more information about fees and supported instance types, see EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticMapReduceEbsConfiguration}
 */
ElasticMapReduceEbsConfiguration.prototype.ebsOptimized = function(value) {
	return this.set('EbsOptimized', value);
};

module.exports = ElasticMapReduceEbsConfiguration;
