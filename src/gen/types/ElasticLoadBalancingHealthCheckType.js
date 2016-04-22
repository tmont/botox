/**
 * The ElasticLoadBalancing HealthCheck is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
 * @constructor
 */
function ElasticLoadBalancingHealthCheckType() {
	this.data = {};
}

ElasticLoadBalancingHealthCheckType.prototype = {
	
	/**
	 * Specifies the number of consecutive health probe successes required before moving the instance to the Healthy state.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingHealthCheckType}
	 */
	healthyThreshold: function(value) {
		return this.set('HealthyThreshold', value);
	},

	/**
	 * Specifies the approximate interval, in seconds, between health checks of an individual instance.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingHealthCheckType}
	 */
	interval: function(value) {
		return this.set('Interval', value);
	},

	/**
	 * Specifies the instance's protocol and port to check. The protocol can be TCP, HTTP, HTTPS, or SSL. The range of valid ports is 1 through 65535.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingHealthCheckType}
	 */
	target: function(value) {
		return this.set('Target', value);
	},

	/**
	 * Specifies the amount of time, in seconds, during which no response means a failed health probe. This value must be less than the value for Interval.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingHealthCheckType}
	 */
	timeout: function(value) {
		return this.set('Timeout', value);
	},

	/**
	 * Specifies the number of consecutive health probe failures required before moving the instance to the Unhealthy state.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticLoadBalancingHealthCheckType}
	 */
	unhealthyThreshold: function(value) {
		return this.set('UnhealthyThreshold', value);
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

module.exports = ElasticLoadBalancingHealthCheckType;
