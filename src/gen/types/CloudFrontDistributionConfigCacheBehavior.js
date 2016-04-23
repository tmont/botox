var PropertyType = require('../../property-type');

/**
 * CacheBehavior is a property of the DistributionConfig property that describes the Amazon CloudFront (CloudFront) cache behavior when the requested URL matches a pattern.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachebehavior.html}
 * @constructor
 */
function CloudFrontDistributionConfigCacheBehavior() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFrontDistributionConfigCacheBehavior, PropertyType);

CloudFrontDistributionConfigCacheBehavior.prototype = {
	
	/**
	 * HTTP methods that CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. You can specify ["HEAD", "GET"], ["GET", "HEAD", "OPTIONS"], or ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]. If you don't specify a value, AWS CloudFormation specifies ["HEAD", "GET"].
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	allowedMethods: function(value) {
		return this.set('AllowedMethods', value);
	},

	/**
	 * HTTP methods for which CloudFront caches responses. You can specify ["HEAD", "GET"] or ["GET", "HEAD", "OPTIONS"]. If you don't specify a value, AWS CloudFormation specifies ["HEAD", "GET"].
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	cachedMethods: function(value) {
		return this.set('CachedMethods', value);
	},

	/**
	 * Indicates whether CloudFront automatically compresses certain files for this cache behavior. For more information, see Serving Compressed Files in the Amazon CloudFront Developer Guide.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	compress: function(value) {
		return this.set('Compress', value);
	},

	/**
	 * The default time in seconds that objects stay in CloudFront caches before CloudFront forwards another request to your custom origin to determine whether the object has been updated. This value applies only when your custom origin does not add HTTP headers, such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	defaultTTL: function(value) {
		return this.set('DefaultTTL', value);
	},

	/**
	 * Specifies how CloudFront handles query strings or cookies.
	 *
	 * Required: true
	 *
	 * @param {ForwardedValuestype} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	forwardedValues: function(value) {
		return this.set('ForwardedValues', value);
	},

	/**
	 * The maximum time in seconds that objects stay in CloudFront caches before CloudFront forwards another request to your custom origin to determine whether the object has been updated. This value applies only when your custom origin does not add HTTP headers, such as Cache-Control max-age, Cache-Control s-maxage, and Expires to objects.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	maxTTL: function(value) {
		return this.set('MaxTTL', value);
	},

	/**
	 * The minimum amount of time that you want objects to stay in the cache before CloudFront queries your origin to see whether the object has been updated.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	minTTL: function(value) {
		return this.set('MinTTL', value);
	},

	/**
	 * The pattern to which this cache behavior applies. For example, you can specify images/*.jpg.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	pathPattern: function(value) {
		return this.set('PathPattern', value);
	},

	/**
	 * Indicates whether to use the origin that is associated with this cache behavior to distribute media files in the Microsoft Smooth Streaming format. If you specify true, you can still use this cache behavior to distribute other content if the content matches the PathPattern value.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	smoothStreaming: function(value) {
		return this.set('SmoothStreaming', value);
	},

	/**
	 * The ID value of the origin to which you want CloudFront to route requests when a request matches the value of the PathPattern property.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	targetOriginId: function(value) {
		return this.set('TargetOriginId', value);
	},

	/**
	 * A list of AWS accounts that can create signed URLs in order to access private content.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	trustedSigners: function(value) {
		return this.set('TrustedSigners', value);
	},

	/**
	 * The protocol that users can use to access the files in the origin that you specified in the TargetOriginId property when a request matches the value of the PathPattern property. For more information about the valid values, see the ViewerProtocolPolicy elements in the DistributionConfig Complex Type topic in the Amazon CloudFront API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigCacheBehavior}
	 */
	viewerProtocolPolicy: function(value) {
		return this.set('ViewerProtocolPolicy', value);
	}
};

module.exports = CloudFrontDistributionConfigCacheBehavior;
