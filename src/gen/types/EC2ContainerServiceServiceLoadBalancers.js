var PropertyType = require('../../property-type');

/**
 * LoadBalancers is a property of the AWS::ECS::Service resource that specifies the load balancer to associate with an Amazon EC2 Container Service (Amazon ECS) service.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancers.html}
 * @constructor
 */
function EC2ContainerServiceServiceLoadBalancers() {
	PropertyType.call(this);
}

EC2ContainerServiceServiceLoadBalancers.prototype = Object.create(PropertyType.prototype);

/**
 * The name of a container to use with the load balancer.
 *
 * Required: false
 *
 * @param {String} value
 * @return {EC2ContainerServiceServiceLoadBalancers}
 */
EC2ContainerServiceServiceLoadBalancers.prototype.containerName = function(value) {
	return this.set('ContainerName', value);
};

/**
 * The port number on the container to direct load balancer traffic to. Your container instances must allow ingress traffic on this port.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {EC2ContainerServiceServiceLoadBalancers}
 */
EC2ContainerServiceServiceLoadBalancers.prototype.containerPort = function(value) {
	return this.set('ContainerPort', value);
};

/**
 * The name of the load balancer to associated with the Amazon ECS service.
 *
 * Required: false
 *
 * @param {String} value
 * @return {EC2ContainerServiceServiceLoadBalancers}
 */
EC2ContainerServiceServiceLoadBalancers.prototype.loadBalancerName = function(value) {
	return this.set('LoadBalancerName', value);
};

module.exports = EC2ContainerServiceServiceLoadBalancers;
