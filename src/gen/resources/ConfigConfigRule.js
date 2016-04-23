var Resource = require('../../resource');

/**
 * AWS::Config::ConfigRule - The AWS::Config::ConfigRule resource uses an AWS Lambda (Lambda) function that evaluates configuration items to assess whether your AWS resources comply with your specified configurations. This function can run when AWS Config detects a configuration change or delivers a configuration snapshot. The resources this function evaluates must be in the recording group. For more information, see Evaluating AWS Resource Configurations with AWS Config in the AWS Config Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ConfigConfigRule(name) {
	Resource.call(this, name, 'AWS::Config::ConfigRule');
}

ConfigConfigRule.prototype = Object.create(Resource.prototype);

/**
 * AWS::Config::ConfigRule attribute map
 * @typedef {Object} ConfigConfigRuleAttributeMap
 * @property {Attribute} Arn The Amazon Resource Name (ARN) of the AWS Config rule, such as arn:aws:config:us-east-1:123456789012:config-rule/config-rule-a1bzhi.
 * @property {Attribute} Compliance.Type The compliance status of an AWS Config rule, such as COMPLIANT or NON_COMPLIANT.
 * @property {Attribute} ConfigRuleId The ID of the AWS Config rule, such as config-rule-a1bzhi.
 */
Object.defineProperty(ConfigConfigRule.prototype, 'attr', {
	/**
	 * @return {ConfigConfigRuleAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The Amazon Resource Name (ARN) of the AWS Config rule, such as arn:aws:config:us-east-1:123456789012:config-rule/config-rule-a1bzhi.
			 * @return {Attribute}
			 */
			get arn() {
				return createAttribute('Arn');
			},

			/**
			 * The compliance status of an AWS Config rule, such as COMPLIANT or NON_COMPLIANT.
			 * @return {Attribute}
			 */
			get complianceType() {
				return createAttribute('Compliance.Type');
			},

			/**
			 * The ID of the AWS Config rule, such as config-rule-a1bzhi.
			 * @return {Attribute}
			 */
			get configRuleId() {
				return createAttribute('ConfigRuleId');
			}
		};
	}
});

/**
 * A name for the AWS Config rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigConfigRule}
 */
ConfigConfigRule.prototype.configRuleName = function(value) {
	return this.set('ConfigRuleName', value);
};

/**
 * A description about this AWS Config rule.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigConfigRule}
 */
ConfigConfigRule.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * Input parameter values that are passed to the AWS Config rule (Lambda function).
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @return {ConfigConfigRule}
 */
ConfigConfigRule.prototype.inputParameters = function(value) {
	return this.set('InputParameters', value);
};

/**
 * The maximum frequency at which the AWS Config rule runs evaluations. For valid values, see the ConfigRule data type in the AWS Config API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigConfigRule}
 */
ConfigConfigRule.prototype.maximumExecutionFrequency = function(value) {
	return this.set('MaximumExecutionFrequency', value);
};

/**
 * Defines which AWS resources will trigger an evaluation when their configurations change. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain the resources that are evaluated. If you don't specify a scope, the rule evaluates all resources in the recording group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {AWSConfigConfigRuleScope|Attribute|Reference} value
 * @return {ConfigConfigRule}
 */
ConfigConfigRule.prototype.scope = function(value) {
	return this.set('Scope', value);
};

/**
 * Specifies the rule owner, the rule identifier, and the events that cause the function to evaluate your AWS resources.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {AWSConfigConfigRuleSource|Attribute|Reference} value
 * @return {ConfigConfigRule}
 */
ConfigConfigRule.prototype.source = function(value) {
	return this.set('Source', value);
};

module.exports = ConfigConfigRule;
