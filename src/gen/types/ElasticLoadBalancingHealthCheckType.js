var PropertyType = require('../../property-type');

/**
 * The ElasticLoadBalancing HealthCheck is an embedded property of the AWS::ElasticLoadBalancing::LoadBalancer type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-health-check.html}
 * @constructor
 */
function ElasticLoadBalancingHealthCheckType() {
	PropertyType.call(this);
}

ElasticLoadBalancingHealthCheckType.prototype = Object.create(PropertyType.prototype);

/**
 * Specifies the number of consecutive health probe successes required before moving the instance to the Healthy state.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticLoadBalancingHealthCheckType}
 */
ElasticLoadBalancingHealthCheckType.prototype.healthyThreshold = function(value) {
	return this.set('HealthyThreshold', value);
};

/**
 * Specifies the approximate interval, in seconds, between health checks of an individual instance.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticLoadBalancingHealthCheckType}
 */
ElasticLoadBalancingHealthCheckType.prototype.interval = function(value) {
	return this.set('Interval', value);
};

/**
 * Specifies the instance's protocol and port to check. The protocol can be TCP, HTTP, HTTPS, or SSL. The range of valid ports is 1 through 65535.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticLoadBalancingHealthCheckType}
 */
ElasticLoadBalancingHealthCheckType.prototype.target = function(value) {
	return this.set('Target', value);
};

/**
 * Specifies the amount of time, in seconds, during which no response means a failed health probe. This value must be less than the value for Interval.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticLoadBalancingHealthCheckType}
 */
ElasticLoadBalancingHealthCheckType.prototype.timeout = function(value) {
	return this.set('Timeout', value);
};

/**
 * Specifies the number of consecutive health probe failures required before moving the instance to the Unhealthy state.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticLoadBalancingHealthCheckType}
 */
ElasticLoadBalancingHealthCheckType.prototype.unhealthyThreshold = function(value) {
	return this.set('UnhealthyThreshold', value);
};

module.exports = ElasticLoadBalancingHealthCheckType;
