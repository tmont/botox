/**
 * The RedirectRule property is an embedded property of the Amazon S3 Website Configuration Routing Rules Property that describes how requests are redirected. In the event of an error, you can specify a different error code to return.
 * @constructor
 */
function S3WebsiteConfigurationRoutingRulesRedirectRuleProperty(initialData) {
	this.data = initialData || {};
}

S3WebsiteConfigurationRoutingRulesRedirectRuleProperty.prototype = {
	
	/**
	 * Name of the host where requests are redirected.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
	 */
	hostName: function(value) {
		return this.set('HostName', value);
	},

	/**
	 * The HTTP redirect code to use on the response.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
	 */
	httpRedirectCode: function(value) {
		return this.set('HttpRedirectCode', value);
	},

	/**
	 * The protocol to use in the redirect request.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
	 */
	protocol: function(value) {
		return this.set('Protocol', value);
	},

	/**
	 * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with the prefix docs/ (objects in the docs/ folder) to the documents/ prefix, you can set the KeyPrefixEquals property in routing condition property to docs/, and set the ReplaceKeyPrefixWith property to documents/.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
	 */
	replaceKeyPrefixWith: function(value) {
		return this.set('ReplaceKeyPrefixWith', value);
	},

	/**
	 * The specific object key to use in the redirect request. For example, redirect request to error.html.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRoutingRulesRedirectRuleProperty}
	 */
	replaceKeyWith: function(value) {
		return this.set('ReplaceKeyWith', value);
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

module.exports = S3WebsiteConfigurationRoutingRulesRedirectRuleProperty;
