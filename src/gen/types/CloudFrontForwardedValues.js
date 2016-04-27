var PropertyType = require('../../property-type');

/**
 * ForwardedValues is a property of the DefaultCacheBehavior and CacheBehavior properties that indicates whether Amazon CloudFront forwards query strings or cookies.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-forwardedvalues.html}
 * @constructor
 */
function CloudFrontForwardedValues() {
	PropertyType.call(this);
}

CloudFrontForwardedValues.prototype = Object.create(PropertyType.prototype);

/**
 * Forwards specified cookies to the origin of the cache behavior.
 *
 * Required: false
 *
 * @param {CloudFrontForwardedValuesCookies} value
 * @return {CloudFrontForwardedValues}
 */
CloudFrontForwardedValues.prototype.cookies = function(value) {
	return this.set('Cookies', value);
};

/**
 * Specifies the headers that you want Amazon CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, Amazon CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {CloudFrontForwardedValues}
 */
CloudFrontForwardedValues.prototype.headers = function(value) {
	return this.set('Headers', value);
};

/**
 * Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior. If so, specify true; if not, specify false.
 *
 * Required: true
 *
 * @param {Boolean} value
 * @return {CloudFrontForwardedValues}
 */
CloudFrontForwardedValues.prototype.queryString = function(value) {
	return this.set('QueryString', value);
};

module.exports = CloudFrontForwardedValues;
