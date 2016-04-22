var Resource = require('../../resource');

/**
 * AWS::WAF::WebACL - The AWS::WAF::WebACL resource creates an AWS WAF web access control group (ACL) containing the rules that identify the Amazon CloudFront (CloudFront) web requests that you want to allow, block, or count. For more information, see CreateWebACL in the AWS WAF API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFWebACL(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(WAFWebACL, Resource);

WAFWebACL.prototype = {
	
	
	/**
	 * The action that you want AWS WAF to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFWebACLAction} value
	 * @return {WAFWebACL}
	 */
	defaultAction: function(value) {
		return this.set('DefaultAction', value);
	},

	/**
	 * A friendly name or description for the Amazon CloudWatch metric of this web ACL.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFWebACL}
	 */
	metricName: function(value) {
		return this.set('MetricName', value);
	},

	/**
	 * A friendly name or description of the web ACL.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFWebACL}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The rules to associate with the web ACL and the settings for each rule.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFWebACLRule[]} value
	 * @return {WAFWebACL}
	 */
	rules: function(value) {
		return this.set('Rules', value);
	}
};

module.exports = WAFWebACL;
