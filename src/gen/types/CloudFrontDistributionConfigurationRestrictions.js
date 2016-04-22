/**
 * Restrictions is a property of the CloudFront DistributionConfig property that lets you limit which viewers can access your content.
 * @constructor
 */
function CloudFrontDistributionConfigurationRestrictions() {
	this.data = {};
}

CloudFrontDistributionConfigurationRestrictions.prototype = {
	
	/**
	 * The countries in which viewers are able to access your content.
	 *
	 * Required: true
	 *
	 * @param {CloudFrontDistributionConfigRestrictionsGeoRestriction} value
	 * @return {CloudFrontDistributionConfigurationRestrictions}
	 */
	geoRestriction: function(value) {
		return this.set('GeoRestriction', value);
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

module.exports = CloudFrontDistributionConfigurationRestrictions;
