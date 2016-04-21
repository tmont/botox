var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EMR::InstanceGroupConfig - The AWS::EMR::InstanceGroupConfig resource configures a task instance group for an Amazon Elastic MapReduce (Amazon EMR) cluster.
 * @constructor
 */
function EMRInstanceGroupConfig(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EMRInstanceGroupConfig.prototype = {
	
	/**
	 * The bid price in USD for each EC2 instance in the instance group when launching instances (nodes) as Spot Instances.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRInstanceGroupConfig}
	 */
	bidPrice: function(value) {
		return this.set('BidPrice', value);
	},

	/**
	 * A list of configurations to apply to this instance group. For more information see, Configuring Applications in the Amazon Elastic MapReduce Release Guide.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {ElasticMapReduceClusterConfiguration[]} value
	 * @return {EMRInstanceGroupConfig}
	 */
	configurations: function(value) {
		return this.set('Configurations', value);
	},

	/**
	 * Configures Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your instances.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {ElasticMapReduceEbsConfiguration} value
	 * @return {EMRInstanceGroupConfig}
	 */
	ebsConfiguration: function(value) {
		return this.set('EbsConfiguration', value);
	},

	/**
	 * The number of instances to launch in the instance group.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Integer} value
	 * @return {EMRInstanceGroupConfig}
	 */
	instanceCount: function(value) {
		return this.set('InstanceCount', value);
	},

	/**
	 * The role of the servers in the Amazon EMR cluster, such as TASK. For more information, see Instance Groups in the Amazon Elastic MapReduce Management Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRInstanceGroupConfig}
	 */
	instanceRole: function(value) {
		return this.set('InstanceRole', value);
	},

	/**
	 * The EC2 instance type for all instances in the instance group. For more information, see Instance Configurations in the Amazon Elastic MapReduce Management Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRInstanceGroupConfig}
	 */
	instanceType: function(value) {
		return this.set('InstanceType', value);
	},

	/**
	 * The ID of an Amazon EMR cluster that you want to associate this instance group with.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRInstanceGroupConfig}
	 */
	jobFlowId: function(value) {
		return this.set('JobFlowId', value);
	},

	/**
	 * The type of marketplace from which your instances are provisioned into this group, either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing Options.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRInstanceGroupConfig}
	 */
	market: function(value) {
		return this.set('Market', value);
	},

	/**
	 * A name for the instance group.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EMRInstanceGroupConfig}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EMR::InstanceGroupConfig has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EMRInstanceGroupConfig;
