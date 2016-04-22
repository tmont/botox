var Resource = require('../../resource');

/**
 * AWS::Route53::HealthCheck - You can use the AWS::Route53::HealthCheck resource to check the health of your resources before Amazon Route 53 responds to a DNS query. For more information, see How Health Checks Work in Simple Amazon Route 53 Configurations in the Amazon Route 53 Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function Route53HealthCheck(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(Route53HealthCheck, Resource);

Route53HealthCheck.prototype = {
	
	
	/**
	 * An Amazon Route 53 health check.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Route53HealthCheckConfig} value
	 * @return {Route53HealthCheck}
	 */
	healthCheckConfig: function(value) {
		return this.set('HealthCheckConfig', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this health check.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Route53HealthCheckTag[]} value
	 * @return {Route53HealthCheck}
	 */
	healthCheckTags: function(value) {
		return this.set('HealthCheckTags', value);
	}
};

module.exports = Route53HealthCheck;
