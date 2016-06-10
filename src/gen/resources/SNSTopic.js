var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::SNS::Topic - The AWS::SNS::Topic type creates an Amazon Simple Notification Service (Amazon SNS) topic.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function SNSTopic(name) {
	Resource.call(this, name, 'AWS::SNS::Topic');
}

SNSTopic.prototype = Object.create(Resource.prototype);

/**
 * A developer-defined string that can be used to identify this SNS topic.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {SNSTopic}
 */
SNSTopic.prototype.displayName = function(value) {
	return this.set('DisplayName', value);
};

/**
 * The SNS subscriptions (endpoints) for this topic.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {SNSSubscriptionPropertyType[]|Attribute|Reference} value List of SNS Subscriptions
 * @returns {SNSTopic}
 */
SNSTopic.prototype.subscription = function(value) {
	return this.set('Subscription', value);
};

/**
 * A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {SNSTopic}
 */
SNSTopic.prototype.topicName = function(value) {
	return this.set('TopicName', value);
};

/**
 * AWS::SNS::Topic attributes
 * @constructor
 * @param {Resource} resource
 */
function SNSTopicAttributes(resource) {
	this.resource = resource;
}
SNSTopicAttributes.prototype = {
	/**
	 * Returns the name for an Amazon SNS topic.
	 * @type {Attribute}
	 */
	get topicName() {
		return new Attribute(this.resource, 'TopicName');
	}
};

/**
 * Gets attribute map for AWS::SNS::Topic
 * @returns {SNSTopicAttributes}
 */
SNSTopic.prototype.attr = function() {
	return new SNSTopicAttributes(this);
};

module.exports = SNSTopic;
