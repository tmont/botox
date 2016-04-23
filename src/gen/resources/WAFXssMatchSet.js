var Resource = require('../../resource');

/**
 * AWS::WAF::XssMatchSet - The AWS::WAF::XssMatchSet resource specifies the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and the name of the header to inspect. For more information, see XssMatchSet in the AWS WAF API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFXssMatchSet(name) {
	Resource.call(this, name, 'AWS::WAF::XssMatchSet');
}

WAFXssMatchSet.prototype = Object.create(Resource.prototype);


/**
 * A friendly name or description for the XssMatchSet.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {WAFXssMatchSet}
 */
WAFXssMatchSet.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The parts of web requests that you want to inspect for cross-site scripting attacks.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {AWSWAFXssMatchSetXssMatchTuple[]|Attribute|Reference} value
 * @return {WAFXssMatchSet}
 */
WAFXssMatchSet.prototype.xssMatchTuples = function(value) {
	return this.set('XssMatchTuples', value);
};

module.exports = WAFXssMatchSet;
