var PropertyType = require('../../property-type');

/**
 * Rules is a property of the AWS::WAF::WebACL resource that specifies the rule to associate with an AWS WAF web access control list (ACL) and the rule's settings.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-rules.html}
 * @constructor
 */
function WAFWebACLRules() {
	PropertyType.call(this);
}

WAFWebACLRules.prototype = Object.create(PropertyType.prototype);

/**
 * The action that Amazon CloudFront (CloudFront) or AWS WAF takes when a web request matches all conditions in the rule, such as allow, block, or count the request.
 *
 * Required: true
 *
 * @param {WAFWebACLAction} value
 * @return {WAFWebACLRules}
 */
WAFWebACLRules.prototype.action = function(value) {
	return this.set('Action', value);
};

/**
 * The order in which AWS WAF evaluates the rules in a web ACL. AWS WAF evaluates rules with a lower value before rules with a higher value. The value must be a unique integer. If you have multiple rules in a web ACL, the priority numbers do not need to be consecutive.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {WAFWebACLRules}
 */
WAFWebACLRules.prototype.priority = function(value) {
	return this.set('Priority', value);
};

/**
 * The ID of an AWS WAF rule to associate with a web ACL.
 *
 * Required: true
 *
 * @param {String} value
 * @return {WAFWebACLRules}
 */
WAFWebACLRules.prototype.ruleId = function(value) {
	return this.set('RuleId', value);
};

module.exports = WAFWebACLRules;
