var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::WAF::Rule - The AWS::WAF::Rule resource creates an AWS WAF rule that specifies a combination of IPSet, ByteMatchSet, and SqlInjectionMatchSet objects that identify the web requests to allow, block, or count. To implement rules, you must associate them with a web ACL.
 * @constructor
 */
function WAFRule(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::WAF::Rule has no attributes');
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

module.exports = WAFRule;
