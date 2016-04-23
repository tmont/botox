var PropertyType = require('../../property-type');

/**
 * S3Origin is a property of the Origin property that describes the Amazon Simple Storage Service (S3) origin to associate with an Amazon CloudFront origin.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-s3origin.html}
 * @constructor
 */
function CloudFrontDistributionConfigOriginS3Origin() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFrontDistributionConfigOriginS3Origin, PropertyType);

CloudFrontDistributionConfigOriginS3Origin.prototype = {
	
	/**
	 * The CloudFront origin access identity to associate with the origin. This is used to configure the origin so that end users can access objects in an Amazon S3 bucket through CloudFront only.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigOriginS3Origin}
	 */
	originAccessIdentity: function(value) {
		return this.set('OriginAccessIdentity', value);
	}
};

module.exports = CloudFrontDistributionConfigOriginS3Origin;
