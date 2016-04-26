var Resource = require('../../resource');

/**
 * AWS::WAF::IPSet - The AWS::WAF::IPSet resource creates an AWS WAF IPSet that specifies which web requests to permit or block based on the IP addresses from which the requests originate. For more information, see CreateIPSet in the AWS WAF API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFIPSet(name) {
	Resource.call(this, name, 'AWS::WAF::IPSet');
}

WAFIPSet.prototype = Object.create(Resource.prototype);

/**
 * The IP address type and IP address range (in CIDR notation) from which web requests originate. If you associate the IPSet with a web ACL that is associated with a Amazon CloudFront (CloudFront) distribution, this descriptor is the value of one of the following fields in the CloudFront access logs:
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {WAFIPSetIPSetDescriptors[]|Attribute|Reference} value List of AWS WAF IPSet IPSetDescriptors
 * @return {WAFIPSet}
 */
WAFIPSet.prototype.ipSetDescriptors = function(value) {
	return this.set('IPSetDescriptors', value);
};

/**
 * A friendly name or description of the IPSet.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {WAFIPSet}
 */
WAFIPSet.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = WAFIPSet;
