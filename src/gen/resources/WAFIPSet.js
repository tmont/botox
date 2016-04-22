var Resource = require('../../resource');

/**
 * AWS::WAF::IPSet - The AWS::WAF::IPSet resource creates an AWS WAF IPSet that specifies which web requests to permit or block based on the IP addresses from which the requests originate. For more information, see CreateIPSet in the AWS WAF API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFIPSet(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(WAFIPSet, Resource);

WAFIPSet.prototype = {
	
	
	/**
	 * The IP address type and IP address range (in CIDR notation) from which web requests originate. If you associate the IPSet with a web ACL that is associated with a Amazon CloudFront (CloudFront) distribution, this descriptor is the value of one of the following fields in the CloudFront access logs:
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFIPSetIPSetDescriptor[]} value
	 * @return {WAFIPSet}
	 */
	ipsetDescriptors: function(value) {
		return this.set('IPSetDescriptors', value);
	},

	/**
	 * If the viewer did not use an HTTP proxy or a load balancer to send the request
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {undefined} value
	 * @return {WAFIPSet}
	 */
	c-ip: function(value) {
		return this.set('c-ip', value);
	},

	/**
	 * If the viewer did use an HTTP proxy or a load balancer to send the request
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {undefined} value
	 * @return {WAFIPSet}
	 */
	x-forwarded-for: function(value) {
		return this.set('x-forwarded-for', value);
	},

	/**
	 * A friendly name or description of the IPSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFIPSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	}
};

module.exports = WAFIPSet;
