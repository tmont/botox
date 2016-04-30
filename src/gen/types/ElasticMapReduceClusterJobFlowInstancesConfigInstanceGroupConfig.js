var PropertyType = require('../../property-type');

/**
 * InstanceGroupConfig is a property of the CoreInstanceGroup and MasterInstanceGroup properties of the job flow instances configuration. The InstanceGroupConfig property specifies the settings for instances (nodes) in the core and master instance groups of an Amazon Elastic MapReduce (Amazon EMR) cluster.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig.html}
 * @constructor
 */
function ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig() {
	PropertyType.call(this);
}

ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype = Object.create(PropertyType.prototype);

/**
 * When launching instances as Spot Instances, the bid price in USD for each EC2 instance in the instance group.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype.bidPrice = function(value) {
	return this.set('BidPrice', value);
};

/**
 * A list of configurations to apply to this instance group. For more information see, Configuring Applications in the Amazon EMR Release Guide.
 *
 * Required: false
 *
 * @param {ElasticMapReduceClusterConfiguration[]} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype.configurations = function(value) {
	return this.set('Configurations', value);
};

/**
 * The number of instances to launch in the instance group.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype.instanceCount = function(value) {
	return this.set('InstanceCount', value);
};

/**
 * The EC2 instance type for all instances in the instance group. For more information, see Instance Configurations in the Amazon EMR Management Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype.instanceType = function(value) {
	return this.set('InstanceType', value);
};

/**
 * The type of marketplace from which your instances are provisioned into this group, either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing Options.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype.market = function(value) {
	return this.set('Market', value);
};

/**
 * A name for the instance group.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
 */
ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig;
