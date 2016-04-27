var PropertyType = require('../../property-type');

/**
 * GeoRestriction is a property of the CloudFront DistributionConfiguration Restrictions property that describes the countries in which Amazon CloudFront allows viewers to access your content.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig-restrictions-georestriction.html}
 * @constructor
 */
function CloudFrontDistributionConfigRestrictionsGeoRestriction() {
	PropertyType.call(this);
}

CloudFrontDistributionConfigRestrictionsGeoRestriction.prototype = Object.create(PropertyType.prototype);

/**
 * The two-letter, uppercase country code for a country that you want to include in your blacklist or whitelist.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {CloudFrontDistributionConfigRestrictionsGeoRestriction}
 */
CloudFrontDistributionConfigRestrictionsGeoRestriction.prototype.locations = function(value) {
	return this.set('Locations', value);
};

/**
 * The method to restrict distribution of your content:
 *
 * Required: true
 *
 * @param {String} value
 * @return {CloudFrontDistributionConfigRestrictionsGeoRestriction}
 */
CloudFrontDistributionConfigRestrictionsGeoRestriction.prototype.restrictionType = function(value) {
	return this.set('RestrictionType', value);
};

module.exports = CloudFrontDistributionConfigRestrictionsGeoRestriction;
