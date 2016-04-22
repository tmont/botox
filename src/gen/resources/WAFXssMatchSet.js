var Resource = require('../../resource');

/**
 * AWS::WAF::XssMatchSet - The AWS::WAF::XssMatchSet resource specifies the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and the name of the header to inspect. For more information, see XssMatchSet in the AWS WAF API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFXssMatchSet(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(WAFXssMatchSet, Resource);

WAFXssMatchSet.prototype = {
	
	
	/**
	 * A friendly name or description for the XssMatchSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFXssMatchSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The parts of web requests that you want to inspect for cross-site scripting attacks.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFXssMatchSetXssMatchTuple[]} value
	 * @return {WAFXssMatchSet}
	 */
	xssMatchTuples: function(value) {
		return this.set('XssMatchTuples', value);
	}
};

module.exports = WAFXssMatchSet;
