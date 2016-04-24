var Resource = require('../../resource');

/**
 * AWS::SNS::Topic - The AWS::SNS::Topic type creates an Amazon SNS topic.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function SNSTopic(name) {
	Resource.call(this, name, 'AWS::SNS::Topic');
}

SNSTopic.prototype = Object.create(Resource.prototype);

/**
 * AWS::SNS::Topic attribute map
 * @typedef {Object} SNSTopicAttributeMap
 * @property {Attribute} topicName Returns the name for an Amazon SNS topic.
 */
Object.defineProperty(SNSTopic.prototype, 'attr', {
	/**
	 * @return {SNSTopicAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * Returns the name for an Amazon SNS topic.
			 * @return {Attribute}
			 */
			get topicName() {
				return createAttribute('TopicName');
			}
		};
	}
});

/**
 * A developer-defined string that can be used to identify this SNS topic.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {SNSTopic}
 */
SNSTopic.prototype.displayName = function(value) {
	return this.set('DisplayName', value);
};

/**
 * The SNS subscriptions (endpoints) for this topic.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {SNSSubscriptionPropertyType[]|Attribute|Reference} value List of SNS Subscriptions
 * @return {SNSTopic}
 */
SNSTopic.prototype.subscription = function(value) {
	return this.set('Subscription', value);
};

/**
 * A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {SNSTopic}
 */
SNSTopic.prototype.topicName = function(value) {
	return this.set('TopicName', value);
};

module.exports = SNSTopic;
