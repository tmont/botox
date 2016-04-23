var PropertyType = require('../../property-type');

/**
 * GeoRestriction is a property of the CloudFront DistributionConfiguration Restrictions property that describes the countries in which Amazon CloudFront allows viewers to access your content.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig-restrictions-georestriction.html}
 * @constructor
 */
function CloudFrontDistributionConfigRestrictionsGeoRestriction() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CloudFrontDistributionConfigRestrictionsGeoRestriction, PropertyType);

CloudFrontDistributionConfigRestrictionsGeoRestriction.prototype = {
	
	/**
	 * The two-letter, uppercase country code for a country that you want to include in your blacklist or whitelist.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {CloudFrontDistributionConfigRestrictionsGeoRestriction}
	 */
	locations: function(value) {
		return this.set('Locations', value);
	},

	/**
	 * The method to restrict distribution of your content:
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigRestrictionsGeoRestriction}
	 */
	restrictionType: function(value) {
		return this.set('RestrictionType', value);
	}
};

module.exports = CloudFrontDistributionConfigRestrictionsGeoRestriction;
