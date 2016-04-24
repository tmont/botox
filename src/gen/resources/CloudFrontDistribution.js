var Resource = require('../../resource');

/**
 * AWS::CloudFront::Distribution - Creates an Amazon CloudFront web distribution. For general information about CloudFront distributions, see the Introduction to Amazon CloudFront in the Amazon CloudFront Developer Guide. For specific information about creating CloudFront web distributions, see POST Distribution in the Amazon CloudFront API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFrontDistribution(name) {
	Resource.call(this, name, 'AWS::CloudFront::Distribution');
}

CloudFrontDistribution.prototype = Object.create(Resource.prototype);

/**
 * AWS::CloudFront::Distribution attribute map
 * @typedef {Object} CloudFrontDistributionAttributeMap
 * @property {Attribute} domainName Returns: The domain name of the resource. For example: d2fadu0nynjpfn.cloudfront.net.
 */
Object.defineProperty(CloudFrontDistribution.prototype, 'attr', {
	/**
	 * @return {CloudFrontDistributionAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * Returns: The domain name of the resource. For example: d2fadu0nynjpfn.cloudfront.net.
			 * @return {Attribute}
			 */
			get domainName() {
				return createAttribute('DomainName');
			}
		};
	}
});

/**
 * The distribution's configuration information.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {CloudFrontDistributionConfig|Attribute|Reference} value DistributionConfig type
 * @return {CloudFrontDistribution}
 */
CloudFrontDistribution.prototype.distributionConfig = function(value) {
	return this.set('DistributionConfig', value);
};

module.exports = CloudFrontDistribution;
