/**
 * InstanceGroupConfig is a property of the CoreInstanceGroup and MasterInstanceGroup properties of the job flow instances configuration. The InstanceGroupConfig property specifies the settings for instances (nodes) in the core and master instance groups of an Amazon Elastic MapReduce (Amazon EMR) cluster.
 * @constructor
 */
function ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig(initialData) {
	this.data = initialData || {};
}

ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig.prototype = {
	
	/**
	 * When launching instances as Spot Instances, the bid price in USD for each EC2 instance in the instance group.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
	 */
	bidPrice: function(value) {
		return this.set('BidPrice', value);
	},

	/**
	 * A list of configurations to apply to this instance group. For more information see, Configuring Applications in the Amazon EMR Release Guide.
	 *
	 * Required: false
	 *
	 * @param {ElasticMapReduceClusterConfiguration[]} value
	 * @return {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
	 */
	configurations: function(value) {
		return this.set('Configurations', value);
	},

	/**
	 * The number of instances to launch in the instance group.
	 *
	 * Required: true
	 *
	 * @param {Integer} value
	 * @return {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
	 */
	instanceCount: function(value) {
		return this.set('InstanceCount', value);
	},

	/**
	 * The EC2 instance type for all instances in the instance group. For more information, see Instance Configurations in the Amazon EMR Management Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
	 */
	instanceType: function(value) {
		return this.set('InstanceType', value);
	},

	/**
	 * The type of marketplace from which your instances are provisioned into this group, either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing Options.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
	 */
	market: function(value) {
		return this.set('Market', value);
	},

	/**
	 * A name for the instance group.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig}
	 */
	name: function(value) {
		return this.set('Name', value);
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

module.exports = ElasticMapReduceClusterJobFlowInstancesConfigInstanceGroupConfig;