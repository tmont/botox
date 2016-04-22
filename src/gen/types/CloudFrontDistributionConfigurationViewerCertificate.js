/**
 * ViewerCertificate is a property of the CloudFront DistributionConfig property that specifies which certificate to use when viewers use HTTPS to request objects.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig-viewercertificate.html}
 * @constructor
 */
function CloudFrontDistributionConfigurationViewerCertificate() {
	this.data = {};
}

CloudFrontDistributionConfigurationViewerCertificate.prototype = {
	
	/**
	 * Indicates whether to use the default certificate for your CloudFront domain name when viewers use HTTPS to request your content.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {CloudFrontDistributionConfigurationViewerCertificate}
	 */
	cloudFrontDefaultCertificate: function(value) {
		return this.set('CloudFrontDefaultCertificate', value);
	},

	/**
	 * The IAM certificate ID to use if you're using an alternate domain name.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigurationViewerCertificate}
	 */
	iamCertificateId: function(value) {
		return this.set('IamCertificateId', value);
	},

	/**
	 * The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections. CloudFront serves your objects only to browsers or devices that support at least the SSL version that you specify.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigurationViewerCertificate}
	 */
	minimumProtocolVersion: function(value) {
		return this.set('MinimumProtocolVersion', value);
	},

	/**
	 * Specifies how CloudFront serves HTTPS requests.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigurationViewerCertificate}
	 */
	sslSupportMethod: function(value) {
		return this.set('SslSupportMethod', value);
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

module.exports = CloudFrontDistributionConfigurationViewerCertificate;
