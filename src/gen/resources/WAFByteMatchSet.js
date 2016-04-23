var Resource = require('../../resource');

/**
 * AWS::WAF::ByteMatchSet - The AWS::WAF::ByteMatchSet resource creates an AWS WAF ByteMatchSet that identifies a part of a web request that you want to inspect. For more information, see CreateByteMatchSet in the AWS WAF API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFByteMatchSet(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(WAFByteMatchSet, Resource);

WAFByteMatchSet.prototype = {
	
	
	/**
	 * Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFByteMatchSetByteMatchTuples[]} value
	 * @return {WAFByteMatchSet}
	 */
	byteMatchTuples: function(value) {
		return this.set('ByteMatchTuples', value);
	},

	/**
	 * A friendly name or description of the ByteMatchSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFByteMatchSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	}
};

module.exports = WAFByteMatchSet;
