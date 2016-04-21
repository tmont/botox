var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::SNS::TopicPolicy - The AWS::SNS::TopicPolicy resource associates Amazon SNS topics with a policy.
 * @constructor
 */
function SNSTopicPolicy(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::SNS::TopicPolicy has no attributes');
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

module.exports = SNSTopicPolicy;
