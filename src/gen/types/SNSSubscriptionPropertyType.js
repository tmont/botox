var PropertyType = require('../../property-type');

/**
 * Subscription is an embedded property of the AWS::SNS::Topic resource that describes the subscription endpoints for a topic.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-subscription.html}
 * @constructor
 */
function SNSSubscriptionPropertyType() {
	PropertyType.call(this);
}

SNSSubscriptionPropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * The subscription's endpoint (format depends on the protocol). For more information, see the Subscribe Endpoint parameter in the Amazon Simple Notification Service API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {SNSSubscriptionPropertyType}
 */
SNSSubscriptionPropertyType.prototype.endpoint = function(value) {
	return this.set('Endpoint', value);
};

/**
 * The subscription's protocol. For more information, see the Subscribe Protocol parameter in the Amazon Simple Notification Service API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {SNSSubscriptionPropertyType}
 */
SNSSubscriptionPropertyType.prototype.protocol = function(value) {
	return this.set('Protocol', value);
};

module.exports = SNSSubscriptionPropertyType;
