var Resource = require('../../resource');

/**
 * AWS::EMR::InstanceGroupConfig - The AWS::EMR::InstanceGroupConfig resource configures a task instance group for an Amazon Elastic MapReduce (Amazon EMR) cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EMRInstanceGroupConfig(name) {
	Resource.call(this, name, 'AWS::EMR::InstanceGroupConfig');
}

EMRInstanceGroupConfig.prototype = Object.create(Resource.prototype);

/**
 * The bid price in USD for each EC2 instance in the instance group when launching instances (nodes) as Spot Instances.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.bidPrice = function(value) {
	return this.set('BidPrice', value);
};

/**
 * A list of configurations to apply to this instance group. For more information see, Configuring Applications in the Amazon Elastic MapReduce Release Guide.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceClusterConfiguration[]|Attribute|Reference} value List of Amazon Elastic MapReduce Cluster Configuration
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.configurations = function(value) {
	return this.set('Configurations', value);
};

/**
 * Configures Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your instances.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {ElasticMapReduceEbsConfiguration|Attribute|Reference} value Amazon Elastic MapReduce EbsConfiguration
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.ebsConfiguration = function(value) {
	return this.set('EbsConfiguration', value);
};

/**
 * The number of instances to launch in the instance group.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.instanceCount = function(value) {
	return this.set('InstanceCount', value);
};

/**
 * The role of the servers in the Amazon EMR cluster, such as TASK. For more information, see Instance Groups in the Amazon Elastic MapReduce Management Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.instanceRole = function(value) {
	return this.set('InstanceRole', value);
};

/**
 * The EC2 instance type for all instances in the instance group. For more information, see Instance Configurations in the Amazon Elastic MapReduce Management Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.instanceType = function(value) {
	return this.set('InstanceType', value);
};

/**
 * The ID of an Amazon EMR cluster that you want to associate this instance group with.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.jobFlowId = function(value) {
	return this.set('JobFlowId', value);
};

/**
 * The type of marketplace from which your instances are provisioned into this group, either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing Options.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.market = function(value) {
	return this.set('Market', value);
};

/**
 * A name for the instance group.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EMRInstanceGroupConfig}
 */
EMRInstanceGroupConfig.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = EMRInstanceGroupConfig;
