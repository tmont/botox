/**
 * CustomErrorResponse is a property of the CloudFront DistributionConfig resource that defines custom error messages for certain HTTP status codes.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig-customerrorresponse.html}
 * @constructor
 */
function CloudFrontDistributionConfigCustomErrorResponse() {
	this.data = {};
}

CloudFrontDistributionConfigCustomErrorResponse.prototype = {
	
	/**
	 * The minimum amount of time, in seconds, that Amazon CloudFront caches the HTTP status code that you specified in the ErrorCode property. The default value is 300.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {CloudFrontDistributionConfigCustomErrorResponse}
	 */
	errorCachingMinTTL: function(value) {
		return this.set('ErrorCachingMinTTL', value);
	},

	/**
	 * An HTTP status code for which you want to specify a custom error page. You can specify 400, 403, 404, 405, 414, 500, 501, 502, 503, or 504.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {CloudFrontDistributionConfigCustomErrorResponse}
	 */
	errorCode: function(value) {
		return this.set('ErrorCode', value);
	},

	/**
	 * The HTTP status code that CloudFront returns to viewer along with the custom error page. You can specify 200, 400, 403, 404, 405, 414, 500, 501, 502, 503, or 504.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {CloudFrontDistributionConfigCustomErrorResponse}
	 */
	responseCode: function(value) {
		return this.set('ResponseCode', value);
	},

	/**
	 * The path to the custom error page that CloudFront returns to a viewer when your origin returns the HTTP status code that you specified in the ErrorCode property. For example, you can specify /404-errors/403-forbidden.html.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigCustomErrorResponse}
	 */
	responsePagePath: function(value) {
		return this.set('ResponsePagePath', value);
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

module.exports = CloudFrontDistributionConfigCustomErrorResponse;
