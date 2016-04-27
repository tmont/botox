var PropertyType = require('../../property-type');

/**
 * WebsiteConfiguration is an embedded property of the AWS::S3::Bucket resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration.html}
 * @constructor
 */
function S3WebsiteConfigurationProperty() {
	PropertyType.call(this);
}

S3WebsiteConfigurationProperty.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the error document for the website.
 *
 * Required: false
 *
 * @param {String} value
 * @return {S3WebsiteConfigurationProperty}
 */
S3WebsiteConfigurationProperty.prototype.errorDocument = function(value) {
	return this.set('ErrorDocument', value);
};

/**
 * The name of the index document for the website.
 *
 * Required: true
 *
 * @param {String} value
 * @return {S3WebsiteConfigurationProperty}
 */
S3WebsiteConfigurationProperty.prototype.indexDocument = function(value) {
	return this.set('IndexDocument', value);
};

/**
 * The redirect behavior for every request to this bucket's website endpoint.
 *
 * Required: false
 *
 * @param {S3WebsiteConfigurationRedirectAllRequestsToProperty} value
 * @return {S3WebsiteConfigurationProperty}
 */
S3WebsiteConfigurationProperty.prototype.redirectAllRequestsTo = function(value) {
	return this.set('RedirectAllRequestsTo', value);
};

/**
 * Rules that define when a redirect is applied and the redirect behavior.
 *
 * Required: false
 *
 * @param {S3WebsiteConfigurationRoutingRulesProperty[]} value
 * @return {S3WebsiteConfigurationProperty}
 */
S3WebsiteConfigurationProperty.prototype.routingRules = function(value) {
	return this.set('RoutingRules', value);
};

module.exports = S3WebsiteConfigurationProperty;
