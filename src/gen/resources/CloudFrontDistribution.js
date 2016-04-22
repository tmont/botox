var Resource = require('../../resource');

/**
 * AWS::CloudFront::Distribution - Creates an Amazon CloudFront web distribution. For general information about CloudFront distributions, see the Introduction to Amazon CloudFront in the Amazon CloudFront Developer Guide. For specific information about creating CloudFront web distributions, see POST Distribution in the Amazon CloudFront API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFrontDistribution(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(CloudFrontDistribution, Resource);

CloudFrontDistribution.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * Returns: The domain name of the resource. For example: d2fadu0nynjpfn.cloudfront.net.
			 * @return {Attribute}
			 */
			domainName: function() {
				return createAttribute('DomainName');
			}
		};
	},

	
	/**
	 * The distribution's configuration information.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {DistributionConfigtype} value
	 * @return {CloudFrontDistribution}
	 */
	distributionConfig: function(value) {
		return this.set('DistributionConfig', value);
	}
};

module.exports = CloudFrontDistribution;
