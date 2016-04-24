var PropertyType = require('../../property-type');

/**
 * SourceDetails is a property of the AWS Config ConfigRule Source property that specifies the source and type of event that triggers AWS Config to evaluate your AWS resources.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source-sourcedetails.html}
 * @constructor
 */
function ConfigConfigRuleSourceSourceDetails() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ConfigConfigRuleSourceSourceDetails, PropertyType);

ConfigConfigRuleSourceSourceDetails.prototype = {
	
	/**
	 * The source, such as an AWS service, that generate events, triggering AWS Config to evaluate your AWS resources. For valid values, see the SourceDetail data type in the AWS Config API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ConfigConfigRuleSourceSourceDetails}
	 */
	eventSource: function(value) {
		return this.set('EventSource', value);
	},

	/**
	 * The type of Amazon Simple Notification Service (Amazon SNS) message that triggers AWS Config to run an evaluation.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ConfigConfigRuleSourceSourceDetails}
	 */
	messageType: function(value) {
		return this.set('MessageType', value);
	}
};

module.exports = ConfigConfigRuleSourceSourceDetails;
