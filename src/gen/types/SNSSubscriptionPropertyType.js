/**
 * Subscription is an embedded property of the AWS::SNS::Topic resource that describes the subscription endpoints for a topic.
 * @constructor
 */
function SNSSubscriptionPropertyType(initialData) {
	this.data = initialData || {};
}

SNSSubscriptionPropertyType.prototype = {
	
	/**
	 * The subscription's endpoint (format depends on the protocol). For more information, see the Subscribe Endpoint parameter in the Amazon Simple Notification Service API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {SNSSubscriptionPropertyType}
	 */
	endpoint: function(value) {
		return this.set('Endpoint', value);
	},

	/**
	 * The subscription's protocol. For more information, see the Subscribe Protocol parameter in the Amazon Simple Notification Service API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {SNSSubscriptionPropertyType}
	 */
	protocol: function(value) {
		return this.set('Protocol', value);
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

module.exports = SNSSubscriptionPropertyType;
