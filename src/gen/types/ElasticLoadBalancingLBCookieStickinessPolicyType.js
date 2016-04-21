/**
 * The LBCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
 * @constructor
 */
function ElasticLoadBalancingLBCookieStickinessPolicyType(initialData) {
	this.data = initialData || {};
}

ElasticLoadBalancingLBCookieStickinessPolicyType.prototype = {
	
	/**
	 * The time period, in seconds, after which the cookie should be considered stale. If this parameter isn't specified, the sticky session will last for the duration of the browser session.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingLBCookieStickinessPolicyType}
	 */
	cookieExpirationPeriod: function(value) {
		return this.set('CookieExpirationPeriod', value);
	},

	/**
	 * The name of the policy being created. The name must be unique within the set of policies for this load balancer.
	 *
	 * Required: false
	 *
	 * @param {undefined} value
	 * @return {ElasticLoadBalancingLBCookieStickinessPolicyType}
	 */
	policyName: function(value) {
		return this.set('PolicyName', value);
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

module.exports = ElasticLoadBalancingLBCookieStickinessPolicyType;
