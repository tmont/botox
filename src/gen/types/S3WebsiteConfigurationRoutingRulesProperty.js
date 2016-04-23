var PropertyType = require('../../property-type');

/**
 * The RoutingRules property is an embedded property of the Amazon S3 Website Configuration Property property. This property describes the redirect behavior and when a redirect is applied.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html}
 * @constructor
 */
function S3WebsiteConfigurationRoutingRulesProperty() {
	PropertyType.call(this);
}

Object.setPrototypeOf(S3WebsiteConfigurationRoutingRulesProperty, PropertyType);

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
	}
};

module.exports = S3WebsiteConfigurationRoutingRulesProperty;
