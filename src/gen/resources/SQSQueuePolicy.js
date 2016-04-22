var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::SQS::QueuePolicy - The AWS::SQS::QueuePolicy type applies a policy to SQS queues.
 * @constructor
 * @param {String} name Name of the resource
 */
function SQSQueuePolicy(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

SQSQueuePolicy.prototype = {
	
	/**
	 * A policy document containing permissions to add to the specified SQS queues.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {SQSQueuePolicy}
	 */
	policyDocument: function(value) {
		return this.set('PolicyDocument', value);
	},

	/**
	 * The URLs of the queues to which you want to add the policy. You can use the Ref function to specify an AWS::SQS::Queue resource.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {SQSQueuePolicy}
	 */
	queues: function(value) {
		return this.set('Queues', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::SQS::QueuePolicy has no attributes');
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

module.exports = SQSQueuePolicy;
