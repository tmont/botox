/**
 * The RoutingRules property is an embedded property of the Amazon S3 Website Configuration Property property. This property describes the redirect behavior and when a redirect is applied.
 * @constructor
 */
function S3WebsiteConfigurationRoutingRulesProperty() {
	this.data = {};
}

S3WebsiteConfigurationRoutingRulesProperty.prototype = {
	
	/**
	 * Redirect requests to another host, to another page, or with another protocol.
	 *
	 * Required: true
	 *
	 * @param {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty} value
	 * @return {S3WebsiteConfigurationRoutingRulesProperty}
	 */
	redirectRule: function(value) {
		return this.set('RedirectRule', value);
	},

	/**
	 * Rules that define when a redirect is applied.
	 *
	 * Required: false
	 *
	 * @param {S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty} value
	 * @return {S3WebsiteConfigurationRoutingRulesProperty}
	 */
	routingRuleCondition: function(value) {
		return this.set('RoutingRuleCondition', value);
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

module.exports = S3WebsiteConfigurationRoutingRulesProperty;
