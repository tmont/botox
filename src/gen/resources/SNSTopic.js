var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::SNS::Topic - The AWS::SNS::Topic type creates an Amazon SNS topic.
 * @constructor
 * @param {String} name Name of the resource
 */
function SNSTopic(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

SNSTopic.prototype = {
	
	/**
	 * A developer-defined string that can be used to identify this SNS topic.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {SNSTopic}
	 */
	displayName: function(value) {
		return this.set('DisplayName', value);
	},

	/**
	 * The SNS subscriptions (endpoints) for this topic.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {SNSSubscription[]} value
	 * @return {SNSTopic}
	 */
	subscription: function(value) {
		return this.set('Subscription', value);
	},

	/**
	 * A name for the topic. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {SNSTopic}
	 */
	topicName: function(value) {
		return this.set('TopicName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * Returns the name for an Amazon SNS topic.
			 */
			topicName: function() {
				return new Attribute(resourceName, 'TopicName');
			}
		};
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

module.exports = SNSTopic;
