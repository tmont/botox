var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ECS::Service - The AWS::ECS::Service resource creates an Amazon EC2 Container Service (Amazon ECS) service that runs and maintains the desired number of tasks and associated load balancers.
 * @constructor
 */
function ECSService(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ECSService.prototype = {
	
	/**
	 * The name or Amazon Resource Name (ARN) of the cluster that you want to run your service on. If you do not specify a cluster, Amazon ECS uses the default cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ECSService}
	 */
	cluster: function(value) {
		return this.set('Cluster', value);
	},

	/**
	 * The number of simultaneous tasks, which you specify by using the TaskDefinition property, that you want to run on the cluster.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ECSService}
	 */
	desiredCount: function(value) {
		return this.set('DesiredCount', value);
	},

	/**
	 * A list of load balancer objects to associate with the cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {EC2ContainerServiceServiceLoadBalancer[]} value
	 * @return {ECSService}
	 */
	loadBalancers: function(value) {
		return this.set('LoadBalancers', value);
	},

	/**
	 * The name or ARN of an AWS Identity and Access Management (IAM) role that allows your Amazon ECS container agent to make calls to your load balancer.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ECSService}
	 */
	role: function(value) {
		return this.set('Role', value);
	},

	/**
	 * The ARN of the task definition that you want to run on the cluster.
	 *
	 * Required: true
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {ECSService}
	 */
	taskDefinition: function(value) {
		return this.set('TaskDefinition', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ECS::Service has no attributes');
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

module.exports = ECSService;
