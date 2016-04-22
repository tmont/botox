/**
 * S3Origin is a property of the Origin property that describes the Amazon Simple Storage Service (S3) origin to associate with an Amazon CloudFront origin.
 * @constructor
 */
function CloudFrontDistributionConfigOriginS3Origin() {
	this.data = {};
}

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

module.exports = CloudFrontDistributionConfigOriginS3Origin;
