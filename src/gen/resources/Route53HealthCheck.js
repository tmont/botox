var Resource = require('../../resource');

/**
 * AWS::Route53::HealthCheck - You can use the AWS::Route53::HealthCheck resource to check the health of your resources before Amazon Route 53 responds to a DNS query. For more information, see How Health Checks Work in Simple Amazon Route 53 Configurations in the Amazon Route 53 Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function Route53HealthCheck(name) {
	Resource.call(this, name, 'AWS::Route53::HealthCheck');
}

Route53HealthCheck.prototype = Object.create(Resource.prototype);

/**
 * An Amazon Route 53 health check.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Route53HealthCheckConfig|Attribute|Reference} value Amazon Route 53 HealthCheckConfig
 * @return {Route53HealthCheck}
 */
Route53HealthCheck.prototype.healthCheckConfig = function(value) {
	return this.set('HealthCheckConfig', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this health check.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Route53HealthCheckTags[]|Attribute|Reference} value List of Amazon Route 53 HealthCheckTags
 * @return {Route53HealthCheck}
 */
Route53HealthCheck.prototype.healthCheckTags = function(value) {
	return this.set('HealthCheckTags', value);
};

module.exports = Route53HealthCheck;
