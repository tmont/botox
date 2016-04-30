var PropertyType = require('../../property-type');

/**
 * The HealthCheckTags property describes key-value pairs that are associated with an AWS::Route53::HealthCheck resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktags.html}
 * @constructor
 */
function Route53HealthCheckTags() {
	PropertyType.call(this);
}

Route53HealthCheckTags.prototype = Object.create(PropertyType.prototype);

/**
 * The key name of the tag.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {Route53HealthCheckTags}
 */
Route53HealthCheckTags.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * The value for the tag.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {Route53HealthCheckTags}
 */
Route53HealthCheckTags.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = Route53HealthCheckTags;
