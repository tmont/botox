var Resource = require('../../resource');

/**
 * AWS::WAF::Rule - The AWS::WAF::Rule resource creates an AWS WAF rule that specifies a combination of IPSet, ByteMatchSet, and SqlInjectionMatchSet objects that identify the web requests to allow, block, or count. To implement rules, you must associate them with a web ACL.
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFRule(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(WAFRule, Resource);

WAFRule.prototype = {
	
	
	/**
	 * A friendly name or description for the metrics of the rule.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFRule}
	 */
	metricName: function(value) {
		return this.set('MetricName', value);
	},

	/**
	 * A friendly name or description of the rule.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFRule}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in a rule. If you add more than one predicate to a rule, a request must match all conditions in order to be allowed or blocked.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFRulePredicate[]} value
	 * @return {WAFRule}
	 */
	predicates: function(value) {
		return this.set('Predicates', value);
	}
};

module.exports = WAFRule;
