/**
 * AliasTarget is a property of the AWS::Route53::RecordSet resource.
 * @constructor
 */
function Route53AliasTargetProperty(initialData) {
	this.data = initialData || {};
}

Route53AliasTargetProperty.prototype = {
	
	/**
	 * The DNS name of the load balancer, the domain name of the CloudFront distribution, the website endpoint of the Amazon S3 bucket, or another record set in the same hosted zone that is the target of the alias.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {Route53AliasTargetProperty}
	 */
	dnsname: function(value) {
		return this.set('DNSName', value);
	},

	/**
	 * Whether Amazon Route 53 checks the health of the resource record sets in the alias target when responding to DNS queries. For more information about using this property, see EvaluateTargetHealth in the Amazon Route 53 API Reference.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {Route53AliasTargetProperty}
	 */
	evaluateTargetHealth: function(value) {
		return this.set('EvaluateTargetHealth', value);
	},

	/**
	 * The hosted zone ID. For load balancers, use the canonical hosted zone ID of the load balancer. For Amazon S3, use the hosted zone ID for your bucket's website endpoint. For CloudFront, use Z2FDTNDATAQYW2. For examples, see Example: Creating Alias Resource Record Sets in the Amazon Route 53 API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {Route53AliasTargetProperty}
	 */
	hostedZoneId: function(value) {
		return this.set('HostedZoneId', value);
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

module.exports = Route53AliasTargetProperty;
