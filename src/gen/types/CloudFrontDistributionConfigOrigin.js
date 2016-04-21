/**
 * Origin is a property of the DistributionConfig property that describes an Amazon CloudFront distribution origin.
 * @constructor
 */
function CloudFrontDistributionConfigOrigin(initialData) {
	this.data = initialData || {};
}

CloudFrontDistributionConfigOrigin.prototype = {
	
	/**
	 * Origin information to specify a custom origin.
	 *
	 * Required: false
	 *
	 * @param {CustomOrigintype} value
	 * @return {CloudFrontDistributionConfigOrigin}
	 */
	customOriginConfig: function(value) {
		return this.set('CustomOriginConfig', value);
	},

	/**
	 * The DNS name of the Amazon Simple Storage Service (S3) bucket or the HTTP server from which you want CloudFront to get objects for this origin.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigOrigin}
	 */
	domainName: function(value) {
		return this.set('DomainName', value);
	},

	/**
	 * An identifier for the origin. The value of Id must be unique within the distribution.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigOrigin}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * The path that CloudFront uses to request content from an S3 bucket or custom origin. The combination of the DomainName and OriginPath properties must resolve to a valid path. The value must start with a slash mark (/) and cannot end with a slash mark.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudFrontDistributionConfigOrigin}
	 */
	originPath: function(value) {
		return this.set('OriginPath', value);
	},

	/**
	 * Origin information to specify an S3 origin.
	 *
	 * Required: false
	 *
	 * @param {S3Origintype} value
	 * @return {CloudFrontDistributionConfigOrigin}
	 */
	s3OriginConfig: function(value) {
		return this.set('S3OriginConfig', value);
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

module.exports = CloudFrontDistributionConfigOrigin;
