var PropertyType = require('../../property-type');

/**
 * ViewerCertificate is a property of the CloudFront DistributionConfig property that specifies which certificate to use when viewers use HTTPS to request objects.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig-viewercertificate.html}
 * @constructor
 */
function CloudFrontDistributionConfigurationViewerCertificate() {
	PropertyType.call(this);
}

CloudFrontDistributionConfigurationViewerCertificate.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether to use the default certificate for your CloudFront domain name when viewers use HTTPS to request your content.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {CloudFrontDistributionConfigurationViewerCertificate}
 */
CloudFrontDistributionConfigurationViewerCertificate.prototype.cloudFrontDefaultCertificate = function(value) {
	return this.set('CloudFrontDefaultCertificate', value);
};

/**
 * If you're using an alternate domain name, the ID of a server certificate. This ID is the ServerCertificateId value, which AWS Identity and Access Management (IAM) returns when you add the certificate to the IAM certificate store, such as ASCACKCEVSQ6CEXAMPLE1.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFrontDistributionConfigurationViewerCertificate}
 */
CloudFrontDistributionConfigurationViewerCertificate.prototype.iamCertificateId = function(value) {
	return this.set('IamCertificateId', value);
};

/**
 * The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections. CloudFront serves your objects only to browsers or devices that support at least the SSL version that you specify.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFrontDistributionConfigurationViewerCertificate}
 */
CloudFrontDistributionConfigurationViewerCertificate.prototype.minimumProtocolVersion = function(value) {
	return this.set('MinimumProtocolVersion', value);
};

/**
 * Specifies how CloudFront serves HTTPS requests.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudFrontDistributionConfigurationViewerCertificate}
 */
CloudFrontDistributionConfigurationViewerCertificate.prototype.sslSupportMethod = function(value) {
	return this.set('SslSupportMethod', value);
};

module.exports = CloudFrontDistributionConfigurationViewerCertificate;
