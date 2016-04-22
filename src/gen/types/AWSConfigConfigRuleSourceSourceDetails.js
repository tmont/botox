/**
 * SourceDetails is a property of the AWS Config ConfigRule Source property that specifies the source and type of event that triggers AWS Config to evaluate your AWS resources.
 * @constructor
 */
function AWSConfigConfigRuleSourceSourceDetails() {
	this.data = {};
}

AWSConfigConfigRuleSourceSourceDetails.prototype = {
	
	/**
	 * The source, such as an AWS service, that generate events, triggering AWS Config to evaluate your AWS resources. For valid values, see the SourceDetail data type in the AWS Config API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSConfigConfigRuleSourceSourceDetails}
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
	 * @return {AWSConfigConfigRuleSourceSourceDetails}
	 */
	messageType: function(value) {
		return this.set('MessageType', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = AWSConfigConfigRuleSourceSourceDetails;
