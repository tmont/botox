var PropertyType = require('../../property-type');

/**
 * The ElasticLoadBalancing policy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer resource. You associate policies with a listener by referencing a policy's name in the listener's PolicyNames property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-policy.html}
 * @constructor
 */
function ElasticLoadBalancingPolicyType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ElasticLoadBalancingPolicyType, PropertyType);

ElasticLoadBalancingPolicyType.prototype = {
	
	/**
	 * A list of arbitrary attributes for this policy. If you don't need to specify any policy attributes, specify an empty list ([]).
	 *
	 * Required: true
	 *
	 * @param {JSONname[]} value
	 * @return {ElasticLoadBalancingPolicyType}
	 */
	attributes: function(value) {
		return this.set('Attributes', value);
	},

	/**
	 * A list of instance ports for the policy. These are the ports associated with the back-end server.
	 *
	 * Required: false
	 *
	 * @param {String[]} value
	 * @return {ElasticLoadBalancingPolicyType}
	 */
	instancePorts: function(value) {
		return this.set('InstancePorts', value);
	},

	/**
	 * A list of external load balancer ports for the policy.
	 *
	 * Required: false
	 *
	 * @param {String[]} value
	 * @return {ElasticLoadBalancingPolicyType}
	 */
	loadBalancerPorts: function(value) {
		return this.set('LoadBalancerPorts', value);
	},

	/**
	 * A name for this policy that is unique to the load balancer.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingPolicyType}
	 */
	policyName: function(value) {
		return this.set('PolicyName', value);
	},

	/**
	 * The name of the policy type for this policy. This must be one of the types reported by the Elastic Load Balancing DescribeLoadBalancerPolicyTypes action.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingPolicyType}
	 */
	policyType: function(value) {
		return this.set('PolicyType', value);
	}
};

module.exports = ElasticLoadBalancingPolicyType;
