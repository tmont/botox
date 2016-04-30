var PropertyType = require('../../property-type');

/**
 * Restrictions is a property of the CloudFront DistributionConfig property that lets you limit which viewers can access your content.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig-restrictions.html}
 * @constructor
 */
function CloudFrontDistributionConfigurationRestrictions() {
	PropertyType.call(this);
}

CloudFrontDistributionConfigurationRestrictions.prototype = Object.create(PropertyType.prototype);

/**
 * The countries in which viewers are able to access your content.
 *
 * Required: true
 *
 * @param {CloudFrontDistributionConfigRestrictionsGeoRestriction} value
 * @returns {CloudFrontDistributionConfigurationRestrictions}
 */
CloudFrontDistributionConfigurationRestrictions.prototype.geoRestriction = function(value) {
	return this.set('GeoRestriction', value);
};

module.exports = CloudFrontDistributionConfigurationRestrictions;
