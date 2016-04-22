/**
 * The RedirectAllRequestsTo code is an embedded property of the Amazon S3 Website Configuration Property property that describes the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-redirectallrequeststo.html}
 * @constructor
 */
function S3WebsiteConfigurationRedirectAllRequestsToProperty() {
	this.data = {};
}

S3WebsiteConfigurationRedirectAllRequestsToProperty.prototype = {
	
	/**
	 * Name of the host where requests are redirected.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRedirectAllRequestsToProperty}
	 */
	hostName: function(value) {
		return this.set('HostName', value);
	},

	/**
	 * Protocol to use (http or https) when redirecting requests. The default is the protocol that is used in the original request.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3WebsiteConfigurationRedirectAllRequestsToProperty}
	 */
	protocol: function(value) {
		return this.set('Protocol', value);
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

module.exports = S3WebsiteConfigurationRedirectAllRequestsToProperty;
