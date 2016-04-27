var PropertyType = require('../../property-type');

/**
 * Predicates is a property of the AWS::WAF::Rule resource that specifies the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects to include in an AWS WAF rule. If you add more than one predicate to a rule, an incoming request must match all of the specifications in the predicates to be allowed or blocked.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-rule-predicates.html}
 * @constructor
 */
function WAFRulePredicates() {
	PropertyType.call(this);
}

WAFRulePredicates.prototype = Object.create(PropertyType.prototype);

/**
 * The unique identifier of a predicate, such as the ID of a ByteMatchSet or IPSet.
 *
 * Required: true
 *
 * @param {String} value
 * @return {WAFRulePredicates}
 */
WAFRulePredicates.prototype.dataId = function(value) {
	return this.set('DataId', value);
};

/**
 * Whether to use the settings or the negated settings that you specified in the ByteMatchSet, IPSet, SizeConstraintSet, SqlInjectionMatchSet, or XssMatchSet objects.
 *
 * Required: true
 *
 * @param {Boolean} value
 * @return {WAFRulePredicates}
 */
WAFRulePredicates.prototype.negated = function(value) {
	return this.set('Negated', value);
};

/**
 * The type of predicate in a rule, such as an IPSet (IPMatch). For valid values, see the Type contents of the Predicate data type in the AWS WAF API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {WAFRulePredicates}
 */
WAFRulePredicates.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = WAFRulePredicates;
