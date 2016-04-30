var PropertyType = require('../../property-type');

/**
 * The LBCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-LBCookieStickinessPolicy.html}
 * @constructor
 */
function ElasticLoadBalancingLBCookieStickinessPolicyType() {
	PropertyType.call(this);
}

ElasticLoadBalancingLBCookieStickinessPolicyType.prototype = Object.create(PropertyType.prototype);

/**
 * The time period, in seconds, after which the cookie should be considered stale. If this parameter isn't specified, the sticky session will last for the duration of the browser session.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticLoadBalancingLBCookieStickinessPolicyType}
 */
ElasticLoadBalancingLBCookieStickinessPolicyType.prototype.cookieExpirationPeriod = function(value) {
	return this.set('CookieExpirationPeriod', value);
};

/**
 * The name of the policy being created. The name must be unique within the set of policies for this load balancer.
 *
 * Required: false
 *
 * @param {undefined} value
 * @returns {ElasticLoadBalancingLBCookieStickinessPolicyType}
 */
ElasticLoadBalancingLBCookieStickinessPolicyType.prototype.policyName = function(value) {
	return this.set('PolicyName', value);
};

module.exports = ElasticLoadBalancingLBCookieStickinessPolicyType;
