/**
 * EbsConfiguration is a property of the AWS::EMR::Cluster and AWS::EMR::InstanceGroupConfig resources that defines Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your Amazon Elastic MapReduce (Amazon EMR) instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration.html}
 * @constructor
 */
function ElasticMapReduceEbsConfiguration() {
	this.data = {};
}

ElasticMapReduceEbsConfiguration.prototype = {
	
	/**
	 * Configures the block storage devices that are associated with your EMR instances.
	 *
	 * Required: false
	 *
	 * @param {ElasticMapReduceEbsConfiguration[]} value
	 * @return {ElasticMapReduceEbsConfiguration}
	 */
	ebsBlockDeviceConfig: function(value) {
		return this.set('EbsBlockDeviceConfig', value);
	},

	/**
	 * Indicates whether the instances are optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. For more information about fees and supported instance types, see EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {ElasticMapReduceEbsConfiguration}
	 */
	ebsOptimized: function(value) {
		return this.set('EbsOptimized', value);
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

module.exports = ElasticMapReduceEbsConfiguration;
