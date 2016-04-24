var Resource = require('../../resource');

/**
 * AWS::SNS::TopicPolicy - The AWS::SNS::TopicPolicy resource associates Amazon SNS topics with a policy.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-policy.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function SNSTopicPolicy(name) {
	Resource.call(this, name, 'AWS::SNS::TopicPolicy');
}

SNSTopicPolicy.prototype = Object.create(Resource.prototype);


/**
 * A policy document that contains permissions to add to the specified SNS topics.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @return {SNSTopicPolicy}
 */
SNSTopicPolicy.prototype.policyDocument = function(value) {
	return this.set('PolicyDocument', value);
};

/**
 * The Amazon Resource Names (ARN) of the topics to which you want to add the policy. You can use the Ref function to specify an AWS::SNS::Topic resource.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value A list of Amazon SNS topics ARNs
 * @return {SNSTopicPolicy}
 */
SNSTopicPolicy.prototype.topics = function(value) {
	return this.set('Topics', value);
};

module.exports = SNSTopicPolicy;
