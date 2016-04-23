var PropertyType = require('../../property-type');

/**
 * CustomOrigin is a property of the Amazon CloudFront Origin property that describes an HTTP server.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-customorigin.html}
 * @constructor
 */
function CloudFrontDistributionConfigOriginCustomOrigin() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFrontDistributionConfigOriginCustomOrigin, PropertyType);

CloudFrontDistributionConfigOriginCustomOrigin.prototype = {
	
	/**
	 * The HTTP port the custom origin listens on.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigOriginCustomOrigin}
	 */
	httpport: function(value) {
		return this.set('HTTPPort', value);
	},

	/**
	 * The HTTPS port the custom origin listens on.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigOriginCustomOrigin}
	 */
	httpsport: function(value) {
		return this.set('HTTPSPort', value);
	},

	/**
	 * The origin protocol policy to apply to your origin.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigOriginCustomOrigin}
	 */
	originProtocolPolicy: function(value) {
		return this.set('OriginProtocolPolicy', value);
	}
};

module.exports = CloudFrontDistributionConfigOriginCustomOrigin;
