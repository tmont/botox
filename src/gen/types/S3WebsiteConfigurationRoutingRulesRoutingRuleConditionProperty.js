var PropertyType = require('../../property-type');

/**
 * The RoutingRuleCondition property is an embedded property of the Amazon S3 Website Configuration Routing Rules Property that describes a condition that must be met for a redirect to apply.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules-routingrulecondition.html}
 * @constructor
 */
function S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty() {
	PropertyType.call(this);
}

Object.setPrototypeOf(S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty, PropertyType);

S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty.prototype = {
	
	/**
	 * Applies this redirect if the error code equals this value in the event of an error.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty}
	 */
	httpErrorCodeReturnedEquals: function(value) {
		return this.set('HttpErrorCodeReturnedEquals', value);
	},

	/**
	 * The object key name prefix when the redirect is applied. For example, to redirect requests for ExamplePage.html, set the key prefix to ExamplePage.html. To redirect request for all pages with the prefix docs/, set the key prefix to docs/, which identifies all objects in the docs/ folder.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty}
	 */
	keyPrefixEquals: function(value) {
		return this.set('KeyPrefixEquals', value);
	}
};

module.exports = S3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty;
