var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Route53::HealthCheck - You can use the AWS::Route53::HealthCheck resource to check the health of your resources before Amazon Route 53 responds to a DNS query. For more information, see How Health Checks Work in Simple Amazon Route 53 Configurations in the Amazon Route 53 Developer Guide.
 * @constructor
 */
function Route53HealthCheck(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Route53::HealthCheck has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = Route53HealthCheck;
