var PropertyType = require('../../property-type');

/**
 * The RedirectRule property is an embedded property of the Amazon S3 Website Configuration Routing Rules Property that describes how requests are redirected. In the event of an error, you can specify a different error code to return.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules-redirectrule.html}
 * @constructor
 */
function S3WebsiteConfigurationRoutingRulesRedirectRuleProperty() {
	PropertyType.call(this);
}

S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.prototype = Object.create(PropertyType.prototype);

/**
 * Name of the host where requests are redirected.
 *
 * Required: false
 *
 * @param {String} value
 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
 */
S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.prototype.hostName = function(value) {
	return this.set('HostName', value);
};

/**
 * The HTTP redirect code to use on the response.
 *
 * Required: false
 *
 * @param {String} value
 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
 */
S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.prototype.httpRedirectCode = function(value) {
	return this.set('HttpRedirectCode', value);
};

/**
 * The protocol to use in the redirect request.
 *
 * Required: false
 *
 * @param {String} value
 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
 */
S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.prototype.protocol = function(value) {
	return this.set('Protocol', value);
};

/**
 * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with the prefix docs/ (objects in the docs/ folder) to the documents/ prefix, you can set the KeyPrefixEquals property in routing condition property to docs/, and set the ReplaceKeyPrefixWith property to documents/.
 *
 * Required: false
 *
 * @param {String} value
 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
 */
S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.prototype.replaceKeyPrefixWith = function(value) {
	return this.set('ReplaceKeyPrefixWith', value);
};

/**
 * The specific object key to use in the redirect request. For example, redirect request to error.html.
 *
 * Required: false
 *
 * @param {String} value
 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
 */
S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.prototype.replaceKeyWith = function(value) {
	return this.set('ReplaceKeyWith', value);
};

module.exports = S3WebsiteConfigurationRoutingRulesRedirectRuleProperty;
