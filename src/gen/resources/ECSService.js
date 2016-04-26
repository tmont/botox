var Resource = require('../../resource');

/**
 * AWS::ECS::Service - The AWS::ECS::Service resource creates an Amazon EC2 Container Service (Amazon ECS) service that runs and maintains the desired number of tasks and associated load balancers.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ECSService(name) {
	Resource.call(this, name, 'AWS::ECS::Service');
}

ECSService.prototype = Object.create(Resource.prototype);

/**
 * The name or Amazon Resource Name (ARN) of the cluster that you want to run your service on. If you do not specify a cluster, Amazon ECS uses the default cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ECSService}
 */
ECSService.prototype.cluster = function(value) {
	return this.set('Cluster', value);
};

/**
 * Configures how many tasks run during a deployment.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {EC2ContainerServiceServiceDeploymentConfiguration|Attribute|Reference} value Amazon EC2 Container Service Service DeploymentConfiguration
 * @return {ECSService}
 */
ECSService.prototype.deploymentConfiguration = function(value) {
	return this.set('DeploymentConfiguration', value);
};

/**
 * The number of simultaneous tasks, which you specify by using the TaskDefinition property, that you want to run on the cluster.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ECSService}
 */
ECSService.prototype.desiredCount = function(value) {
	return this.set('DesiredCount', value);
};

/**
 * A list of load balancer objects to associate with the cluster.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {EC2ContainerServiceServiceLoadBalancers[]|Attribute|Reference} value List of Amazon EC2 Container Service Service LoadBalancers
 * @return {ECSService}
 */
ECSService.prototype.loadBalancers = function(value) {
	return this.set('LoadBalancers', value);
};

/**
 * The name or ARN of an AWS Identity and Access Management (IAM) role that allows your Amazon ECS container agent to make calls to your load balancer.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ECSService}
 */
ECSService.prototype.role = function(value) {
	return this.set('Role', value);
};

/**
 * The ARN of the task definition that you want to run on the cluster.
 *
 * Required: true
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ECSService}
 */
ECSService.prototype.taskDefinition = function(value) {
	return this.set('TaskDefinition', value);
};

module.exports = ECSService;
