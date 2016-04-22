/**
 * Cookies is a property of the CloudFront ForwardedValues that describes which cookies are forwarded to the Amazon CloudFront origin.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-forwardedvalues-cookies.html}
 * @constructor
 */
function CloudFrontForwardedValuesCookies() {
	this.data = {};
}

CloudFrontForwardedValuesCookies.prototype = {
	
	/**
	 * The cookies to forward to the origin of the cache behavior. You can specify none, all, or whitelist.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontForwardedValuesCookies}
	 */
	forward: function(value) {
		return this.set('Forward', value);
	},

	/**
	 * The names of cookies to forward to the origin for the cache behavior.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {CloudFrontForwardedValuesCookies}
	 */
	whitelistedNames: function(value) {
		return this.set('WhitelistedNames', value);
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

module.exports = CloudFrontForwardedValuesCookies;
