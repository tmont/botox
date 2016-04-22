var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Config::ConfigRule - The AWS::Config::ConfigRule resource uses an AWS Lambda (Lambda) function that evaluates configuration items to assess whether your AWS resources comply with your specified configurations. This function can run when AWS Config detects a configuration change or delivers a configuration snapshot. The resources this function evaluates must be in the recording group. For more information, see Evaluating AWS Resource Configurations with AWS Config in the AWS Config Developer Guide.
 * @constructor
 */
function ConfigConfigRule(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ConfigConfigRule.prototype = {
	
	/**
	 * A name for the AWS Config rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ConfigConfigRule}
	 */
	configRuleName: function(value) {
		return this.set('ConfigRuleName', value);
	},

	/**
	 * A description about this AWS Config rule.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ConfigConfigRule}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * Input parameter values that are passed to the AWS Config rule (Lambda function).
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {ConfigConfigRule}
	 */
	inputParameters: function(value) {
		return this.set('InputParameters', value);
	},

	/**
	 * The maximum frequency at which the AWS Config rule runs evaluations. For valid values, see the ConfigRule data type in the AWS Config API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ConfigConfigRule}
	 */
	maximumExecutionFrequency: function(value) {
		return this.set('MaximumExecutionFrequency', value);
	},

	/**
	 * Defines which AWS resources will trigger an evaluation when their configurations change. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain the resources that are evaluated. If you don't specify a scope, the rule evaluates all resources in the recording group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSConfigConfigRuleScope} value
	 * @return {ConfigConfigRule}
	 */
	scope: function(value) {
		return this.set('Scope', value);
	},

	/**
	 * Specifies the rule owner, the rule identifier, and the events that cause the function to evaluate your AWS resources.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {AWSConfigConfigRuleSource} value
	 * @return {ConfigConfigRule}
	 */
	source: function(value) {
		return this.set('Source', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * The Amazon Resource Name (ARN) of the AWS Config rule, such as arn:aws:config:us-east-1:123456789012:config-rule/config-rule-a1bzhi.
			 */
			arn: function() {
				return new Attribute(resourceName, 'Arn');
			},

			/**
			 * The ID of the AWS Config rule, such as config-rule-a1bzhi.
			 */
			configRuleId: function() {
				return new Attribute(resourceName, 'ConfigRuleId');
			},

			/**
			 * The compliance status of an AWS Config rule, such as COMPLIANT or NON_COMPLIANT.
			 */
			complianceType: function() {
				return new Attribute(resourceName, 'Compliance.Type');
			}
		};
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

module.exports = ConfigConfigRule;
