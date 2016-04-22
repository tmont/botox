var Resource = require('../../resource');

/**
 * AWS::SNS::TopicPolicy - The AWS::SNS::TopicPolicy resource associates Amazon SNS topics with a policy.
 * @constructor
 * @param {String} name Name of the resource
 */
function SNSTopicPolicy(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(SNSTopicPolicy, Resource);

SNSTopicPolicy.prototype = {
	
	
	/**
	 * A policy document that contains permissions to add to the specified SNS topics.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {SNSTopicPolicy}
	 */
	policyDocument: function(value) {
		return this.set('PolicyDocument', value);
	},

	/**
	 * The Amazon Resource Names (ARN) of the topics to which you want to add the policy. You can use the Ref function to specify an AWS::SNS::Topic resource.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {SNStopicsARN[]} value
	 * @return {SNSTopicPolicy}
	 */
	topics: function(value) {
		return this.set('Topics', value);
	}
};

module.exports = SNSTopicPolicy;
