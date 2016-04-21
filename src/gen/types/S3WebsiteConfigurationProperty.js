/**
 * WebsiteConfiguration is an embedded property of the AWS::S3::Bucket resource.
 * @constructor
 */
function S3WebsiteConfigurationProperty(initialData) {
	this.data = initialData || {};
}

S3WebsiteConfigurationProperty.prototype = {
	
	/**
	 * The name of the error document for the website.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationProperty}
	 */
	errorDocument: function(value) {
		return this.set('ErrorDocument', value);
	},

	/**
	 * The name of the index document for the website.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationProperty}
	 */
	indexDocument: function(value) {
		return this.set('IndexDocument', value);
	},

	/**
	 * The redirect behavior for every request to this bucket's website endpoint.
	 *
	 * Required: false
	 *
	 * @param {S3WebsiteConfigurationRedirectAllRequestsToProperty} value
	 * @return {S3WebsiteConfigurationProperty}
	 */
	redirectAllRequestsTo: function(value) {
		return this.set('RedirectAllRequestsTo', value);
	},

	/**
	 * Rules that define when a redirect is applied and the redirect behavior.
	 *
	 * Required: false
	 *
	 * @param {S3WebsiteConfigurationRoutingRulesProperty[]} value
	 * @return {S3WebsiteConfigurationProperty}
	 */
	routingRules: function(value) {
		return this.set('RoutingRules', value);
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

module.exports = S3WebsiteConfigurationProperty;
