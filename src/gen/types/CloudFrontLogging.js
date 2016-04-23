var PropertyType = require('../../property-type');

/**
 * Logging is a property of the DistributionConfig property that enables Amazon CloudFront to deliver access logs for each distribution to an Amazon Simple Storage Service (S3) bucket.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-logging.html}
 * @constructor
 */
function CloudFrontLogging() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFrontLogging, PropertyType);

CloudFrontLogging.prototype = {
	
	/**
	 * The Amazon S3 bucket address where access logs are stored, for example, mybucket.s3.amazonaws.com.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontLogging}
	 */
	bucket: function(value) {
		return this.set('Bucket', value);
	},

	/**
	 * Indicates whether CloudFront includes cookies in access logs.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {CloudFrontLogging}
	 */
	includeCookies: function(value) {
		return this.set('IncludeCookies', value);
	},

	/**
	 * A prefix for the access log file names for this distribution.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontLogging}
	 */
	prefix: function(value) {
		return this.set('Prefix', value);
	}
};

module.exports = CloudFrontLogging;
