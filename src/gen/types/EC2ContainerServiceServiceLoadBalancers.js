/**
 * LoadBalancers is a property of the AWS::ECS::Service resource that specifies the load balancer to associate with an Amazon EC2 Container Service (Amazon ECS) service.
 * @constructor
 */
function EC2ContainerServiceServiceLoadBalancers(initialData) {
	this.data = initialData || {};
}

EC2ContainerServiceServiceLoadBalancers.prototype = {
	
	/**
	 * The name of a container to use with the load balancer.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceServiceLoadBalancers}
	 */
	containerName: function(value) {
		return this.set('ContainerName', value);
	},

	/**
	 * The port number on the container to direct load balancer traffic to. Your container instances must allow ingress traffic on this port.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {EC2ContainerServiceServiceLoadBalancers}
	 */
	containerPort: function(value) {
		return this.set('ContainerPort', value);
	},

	/**
	 * The name of the load balancer to associated with the Amazon ECS service.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {EC2ContainerServiceServiceLoadBalancers}
	 */
	loadBalancerName: function(value) {
		return this.set('LoadBalancerName', value);
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

module.exports = EC2ContainerServiceServiceLoadBalancers;
