var PropertyType = require('../../property-type');

/**
 * Cookies is a property of the CloudFront ForwardedValues that describes which cookies are forwarded to the Amazon CloudFront origin.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-forwardedvalues-cookies.html}
 * @constructor
 */
function CloudFrontForwardedValuesCookies() {
	PropertyType.call(this);
}

CloudFrontForwardedValuesCookies.prototype = Object.create(PropertyType.prototype);

/**
 * The cookies to forward to the origin of the cache behavior. You can specify none, all, or whitelist.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CloudFrontForwardedValuesCookies}
 */
CloudFrontForwardedValuesCookies.prototype.forward = function(value) {
	return this.set('Forward', value);
};

/**
 * The names of cookies to forward to the origin for the cache behavior.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {CloudFrontForwardedValuesCookies}
 */
CloudFrontForwardedValuesCookies.prototype.whitelistedNames = function(value) {
	return this.set('WhitelistedNames', value);
};

module.exports = CloudFrontForwardedValuesCookies;
