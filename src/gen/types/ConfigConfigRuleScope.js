var PropertyType = require('../../property-type');

/**
 * Scope is a property of the AWS::Config::ConfigRule resource that specifies which AWS resources will trigger AWS Config to run an evaluation when their configurations change. The scope can include one or more resource types, a tag key and value, or one resource type and one resource ID. You cannot specify a tag-key value and a resource ID or type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html}
 * @constructor
 */
function ConfigConfigRuleScope() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ConfigConfigRuleScope, PropertyType);

ConfigConfigRuleScope.prototype = {
	
	/**
	 * The ID of an AWS resource that you want AWS Config to evaluate against a rule. If you specify an ID, you must also specify a resource type for the ComplianceResourceTypes property.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ConfigConfigRuleScope}
	 */
	complianceResourceId: function(value) {
		return this.set('ComplianceResourceId', value);
	},

	/**
	 * The types of AWS resources that you want AWS Config to evaluate against the rule. If you specify the ComplianceResourceId property, specify only one resource type.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {ConfigConfigRuleScope}
	 */
	complianceResourceTypes: function(value) {
		return this.set('ComplianceResourceTypes', value);
	},

	/**
	 * The tag key that is applied to the AWS resources that you want AWS Config to evaluate against the rule.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ConfigConfigRuleScope}
	 */
	tagKey: function(value) {
		return this.set('TagKey', value);
	},

	/**
	 * The tag value that is applied to the AWS resources that you want AWS Config to evaluate against the rule.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {ConfigConfigRuleScope}
	 */
	tagValue: function(value) {
		return this.set('TagValue', value);
	}
};

module.exports = ConfigConfigRuleScope;
