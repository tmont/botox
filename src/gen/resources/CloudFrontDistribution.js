var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

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
 * The distribution's configuration information.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {CloudFrontDistributionConfig|Attribute|Reference} value DistributionConfig type
 * @returns {CloudFrontDistribution}
 */
CloudFrontDistribution.prototype.distributionConfig = function(value) {
	return this.set('DistributionConfig', value);
};

/**
 * AWS::CloudFront::Distribution attributes
 * @constructor
 * @param {Resource} resource
 */
function CloudFrontDistributionAttributes(resource) {
	this.resource = resource;
}
CloudFrontDistributionAttributes.prototype = {
	/**
	 * Returns: The domain name of the resource. For example: d2fadu0nynjpfn.cloudfront.net.
	 * @type {Attribute}
	 */
	get domainName() {
		return new Attribute(this.resource, 'DomainName');
	}
};

/**
 * Gets attribute map for AWS::CloudFront::Distribution
 * @returns {CloudFrontDistributionAttributes}
 */
CloudFrontDistribution.prototype.attr = function() {
	return new CloudFrontDistributionAttributes(this);
};

module.exports = CloudFrontDistribution;
