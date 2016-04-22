var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CloudFront::Distribution - Creates an Amazon CloudFront web distribution. For general information about CloudFront distributions, see the Introduction to Amazon CloudFront in the Amazon CloudFront Developer Guide. For specific information about creating CloudFront web distributions, see POST Distribution in the Amazon CloudFront API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFrontDistribution(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

CloudFrontDistribution.prototype = {
	
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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * Returns: The domain name of the resource. For example: d2fadu0nynjpfn.cloudfront.net.
			 */
			domainName: function() {
				return new Attribute(self, 'DomainName');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = CloudFrontDistribution;
