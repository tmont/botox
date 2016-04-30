var PropertyType = require('../../property-type');

/**
 * Source is a property of the AWS::Config::ConfigRule resource that specifies the rule owner, the rule identifier, and the events that trigger an AWS Config evaluation of your AWS resources.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html}
 * @constructor
 */
function ConfigConfigRuleSource() {
	PropertyType.call(this);
}

ConfigConfigRuleSource.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates who owns and manages the AWS Config rule. For valid values, see the Source data type in the AWS Config API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ConfigConfigRuleSource}
 */
ConfigConfigRuleSource.prototype.owner = function(value) {
	return this.set('Owner', value);
};

/**
 * Provides the source and type of event that triggers AWS Config to evaluate your AWS resources.
 *
 * Required: false
 *
 * @param {ConfigConfigRuleSourceSourceDetails[]} value
 * @returns {ConfigConfigRuleSource}
 */
ConfigConfigRuleSource.prototype.sourceDetails = function(value) {
	return this.set('SourceDetails', value);
};

/**
 * For AWS managed rules, the identifier of the rule. For a list of identifiers, see AWS Managed Rules in the AWS Config Developer Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ConfigConfigRuleSource}
 */
ConfigConfigRuleSource.prototype.sourceIdentifier = function(value) {
	return this.set('SourceIdentifier', value);
};

module.exports = ConfigConfigRuleSource;
