var PropertyType = require('../../property-type');

/**
 * The ConnectionDrainingPolicy property describes how deregistered or unhealthy instances handle in-flight requests for the AWS::ElasticLoadBalancing::LoadBalancer resource. Connection draining ensures that the load balancer completes serving all in-flight requests made to a registered instance when the instance is deregistered or becomes unhealthy. Without connection draining, the load balancer closes connections to deregistered or unhealthy instances, and any in-flight requests are not completed.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-connectiondrainingpolicy.html}
 * @constructor
 */
function ElasticLoadBalancingConnectionDrainingPolicy() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ElasticLoadBalancingConnectionDrainingPolicy, PropertyType);

ElasticLoadBalancingConnectionDrainingPolicy.prototype = {
	
	/**
	 * Whether or not connection draining is enabled for the load balancer.
	 *
	 * Required: true
	 *
	 * @param {Boolean} value
	 * @return {ElasticLoadBalancingConnectionDrainingPolicy}
	 */
	enabled: function(value) {
		return this.set('Enabled', value);
	},

	/**
	 * The time in seconds after the load balancer closes all connections to a deregistered or unhealthy instance.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {ElasticLoadBalancingConnectionDrainingPolicy}
	 */
	timeout: function(value) {
		return this.set('Timeout', value);
	}
};

module.exports = ElasticLoadBalancingConnectionDrainingPolicy;
