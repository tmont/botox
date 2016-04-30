var PropertyType = require('../../property-type');

/**
 * The RedirectAllRequestsTo code is an embedded property of the Amazon S3 Website Configuration Property property that describes the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-redirectallrequeststo.html}
 * @constructor
 */
function S3WebsiteConfigurationRedirectAllRequestsToProperty() {
	PropertyType.call(this);
}

S3WebsiteConfigurationRedirectAllRequestsToProperty.prototype = Object.create(PropertyType.prototype);

/**
 * Name of the host where requests are redirected.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {S3WebsiteConfigurationRedirectAllRequestsToProperty}
 */
S3WebsiteConfigurationRedirectAllRequestsToProperty.prototype.hostName = function(value) {
	return this.set('HostName', value);
};

/**
 * Protocol to use (http or https) when redirecting requests. The default is the protocol that is used in the original request.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {S3WebsiteConfigurationRedirectAllRequestsToProperty}
 */
S3WebsiteConfigurationRedirectAllRequestsToProperty.prototype.protocol = function(value) {
	return this.set('Protocol', value);
};

module.exports = S3WebsiteConfigurationRedirectAllRequestsToProperty;
