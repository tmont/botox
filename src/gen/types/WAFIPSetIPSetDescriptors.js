var PropertyType = require('../../property-type');

/**
 * IPSetDescriptors is a property of the AWS::WAF::IPSet resource that specifies the IP address type and IP address range (in CIDR notation) from which web requests originate.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptors.html}
 * @constructor
 */
function WAFIPSetIPSetDescriptors() {
	PropertyType.call(this);
}

WAFIPSetIPSetDescriptors.prototype = Object.create(PropertyType.prototype);

/**
 * The IP address type, such as IPV4. For valid values, see the Type contents of the IPSetDescriptor data type in the AWS WAF API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {WAFIPSetIPSetDescriptors}
 */
WAFIPSetIPSetDescriptors.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * An IP address (in CIDR notation) that AWS WAF permits, blocks, or counts. For example, to specify a single IP address such as 192.0.2.44, specify 192.0.2.44/32. To specify a range of IP addresses such as 192.0.2.0 to 192.0.2.255, specify 192.0.2.0/24.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {WAFIPSetIPSetDescriptors}
 */
WAFIPSetIPSetDescriptors.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = WAFIPSetIPSetDescriptors;
