var PropertyType = require('../../property-type');

/**
 * DistributionConfig is a property of the AWS::CloudFront::Distribution property that describes which Amazon CloudFront origin servers to get your files from when users request the files through your website or application.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig.html}
 * @constructor
 */
function CloudFrontDistributionConfig() {
	PropertyType.call(this);
}

CloudFrontDistributionConfig.prototype = Object.create(PropertyType.prototype);

/**
 * CNAMEs (alternate domain names), if any, for the distribution.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.aliases = function(value) {
	return this.set('Aliases', value);
};

/**
 * A list of CacheBehavior types for the distribution.
 *
 * Required: false
 *
 * @param {CloudFrontDistributionConfigCacheBehavior[]} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.cacheBehaviors = function(value) {
	return this.set('CacheBehaviors', value);
};

/**
 * Any comments that you want to include about the distribution.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.comment = function(value) {
	return this.set('Comment', value);
};

/**
 * Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
 *
 * Required: false
 *
 * @param {undefined} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.customErrorResponses = function(value) {
	return this.set('CustomErrorResponses', value);
};

/**
 * The default cache behavior that is triggered if you do not specify the CacheBehavior property or if files don't match any of the values of PathPattern in the CacheBehavior property.
 *
 * Required: true
 *
 * @param {CloudFrontDefaultCacheBehavior} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.defaultCacheBehavior = function(value) {
	return this.set('DefaultCacheBehavior', value);
};

/**
 * The object (such as index.html) that you want CloudFront to request from your origin when the root URL for your distribution (such as http://example.com/) is requested.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.defaultRootObject = function(value) {
	return this.set('DefaultRootObject', value);
};

/**
 * Controls whether the distribution is enabled to accept end user requests for content.
 *
 * Required: true
 *
 * @param {Boolean} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.enabled = function(value) {
	return this.set('Enabled', value);
};

/**
 * Controls whether access logs are written for the distribution. To turn on access logs, specify this property.
 *
 * Required: false
 *
 * @param {CloudFrontLogging} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.logging = function(value) {
	return this.set('Logging', value);
};

/**
 * A list of origins for this CloudFront distribution. For each origin, you can specify whether it is an Amazon S3 or custom origin.
 *
 * Required: true
 *
 * @param {CloudFrontDistributionConfigOrigin[]} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.origins = function(value) {
	return this.set('Origins', value);
};

/**
 * The price class that corresponds with the maximum price that you want to pay for the CloudFront service. For more information, see Choosing the Price Class in the Amazon CloudFront Developer Guide.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.priceClass = function(value) {
	return this.set('PriceClass', value);
};

/**
 * Specifies restrictions on who or how viewers can access your content.
 *
 * Required: false
 *
 * @param {CloudFrontDistributionConfigurationRestrictions} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.restrictions = function(value) {
	return this.set('Restrictions', value);
};

/**
 * The certificate to use when viewers use HTTPS to request objects.
 *
 * Required: false
 *
 * @param {CloudFrontDistributionConfigurationViewerCertificate} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.viewerCertificate = function(value) {
	return this.set('ViewerCertificate', value);
};

/**
 * The AWS WAF web ACL to associate with this distribution. AWS WAF is a web application firewall that enables you to monitor the HTTP and HTTPS requests that are forwarded to CloudFront and to control who can access your content. CloudFront permits or forbids requests based on conditions that you specify, such as the IP addresses from which requests originate or the values of query strings.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFrontDistributionConfig}
 */
CloudFrontDistributionConfig.prototype.webACLId = function(value) {
	return this.set('WebACLId', value);
};

module.exports = CloudFrontDistributionConfig;
