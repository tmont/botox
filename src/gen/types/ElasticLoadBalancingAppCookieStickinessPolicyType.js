/**
 * The AppCookieStickinessPolicy type is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
 * @constructor
 */
function ElasticLoadBalancingAppCookieStickinessPolicyType() {
	this.data = {};
}

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

module.exports = ElasticLoadBalancingAppCookieStickinessPolicyType;
