var PropertyType = require('../../property-type');

/**
 * The AppCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-AppCookieStickinessPolicy.html}
 * @constructor
 */
function ElasticLoadBalancingAppCookieStickinessPolicyType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ElasticLoadBalancingAppCookieStickinessPolicyType, PropertyType);

ElasticLoadBalancingAppCookieStickinessPolicyType.prototype = {
	
	/**
	 * Name of the application cookie used for stickiness.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingAppCookieStickinessPolicyType}
	 */
	cookieName: function(value) {
		return this.set('CookieName', value);
	},

	/**
	 * The name of the policy being created. The name must be unique within the set of policies for this Load Balancer.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingAppCookieStickinessPolicyType}
	 */
	policyName: function(value) {
		return this.set('PolicyName', value);
	}
};

module.exports = ElasticLoadBalancingAppCookieStickinessPolicyType;
