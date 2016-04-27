var PropertyType = require('../../property-type');

/**
 * DefaultCacheBehavior is a property of the DistributionConfig property that describes the default cache behavior for an Amazon CloudFront distribution.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-defaultcachebehavior.html}
 * @constructor
 */
function CloudFrontDefaultCacheBehavior() {
	PropertyType.call(this);
}

CloudFrontDefaultCacheBehavior.prototype = Object.create(PropertyType.prototype);

/**
 * HTTP methods that CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. In AWS CloudFormation templates, you can specify ["HEAD", "GET"], ["GET", "HEAD", "OPTIONS"], or ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]. If you don't specify a value, AWS CloudFormation specifies ["HEAD", "GET"].
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.allowedMethods = function(value) {
	return this.set('AllowedMethods', value);
};

/**
 * HTTP methods for which CloudFront caches responses. In AWS CloudFormation templates, you can specify ["HEAD", "GET"] or ["GET", "HEAD", "OPTIONS"]. If you don't specify a value, AWS CloudFormation specifies ["HEAD", "GET"].
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.cachedMethods = function(value) {
	return this.set('CachedMethods', value);
};

/**
 * Indicates whether CloudFront automatically compresses certain files for this cache behavior. For more information, see Serving Compressed Files in the Amazon CloudFront Developer Guide.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.compress = function(value) {
	return this.set('Compress', value);
};

/**
 * The default time in seconds that objects stay in CloudFront caches before CloudFront forwards another request to your custom origin to determine whether the object has been updated. This value applies only when your custom origin does not add HTTP headers, such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.defaultTTL = function(value) {
	return this.set('DefaultTTL', value);
};

/**
 * Specifies how CloudFront handles query strings or cookies.
 *
 * Required: true
 *
 * @param {CloudFrontForwardedValues} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.forwardedValues = function(value) {
	return this.set('ForwardedValues', value);
};

/**
 * The maximum time in seconds that objects stay in CloudFront caches before CloudFront forwards another request to your custom origin to determine whether the object has been updated. This value applies only when your custom origin does not add HTTP headers, such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.maxTTL = function(value) {
	return this.set('MaxTTL', value);
};

/**
 * The minimum amount of time that you want objects to stay in the cache before CloudFront queries your origin to see whether the object has been updated.
 *
 * Required: false
 *
 * @param {String} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.minTTL = function(value) {
	return this.set('MinTTL', value);
};

/**
 * Indicates whether to use the origin that is associated with this cache behavior to distribute media files in the Microsoft Smooth Streaming format.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.smoothStreaming = function(value) {
	return this.set('SmoothStreaming', value);
};

/**
 * The value of ID for the origin that CloudFront routes requests to when the default cache behavior is applied to a request.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.targetOriginId = function(value) {
	return this.set('TargetOriginId', value);
};

/**
 * A list of AWS accounts that can create signed URLs in order to access private content.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.trustedSigners = function(value) {
	return this.set('TrustedSigners', value);
};

/**
 * The protocol that users can use to access the files in the origin that you specified in the TargetOriginId property when the default cache behavior is applied to a request. For valid values, see the ViewerProtocolPolicy element of the DistributionConfig Complex Type in the Amazon CloudFront API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CloudFrontDefaultCacheBehavior}
 */
CloudFrontDefaultCacheBehavior.prototype.viewerProtocolPolicy = function(value) {
	return this.set('ViewerProtocolPolicy', value);
};

module.exports = CloudFrontDefaultCacheBehavior;
