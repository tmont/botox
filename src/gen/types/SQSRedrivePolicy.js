/**
 * The RedrivePolicy type is a property of the AWS::SQS::Queue resource.
 * @constructor
 */
function SQSRedrivePolicy() {
	this.data = {};
}

SQSRedrivePolicy.prototype = {
	
	/**
	 * The Amazon Resource Name (ARN) of the dead letter queue to which the messages are sent to after the maxReceiveCount value has been exceeded.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {SQSRedrivePolicy}
	 */
	deadLetterTargetArn: function(value) {
		return this.set('deadLetterTargetArn', value);
	},

	/**
	 * The number of times a message is delivered to the source queue before being sent to the dead letter queue.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {SQSRedrivePolicy}
	 */
	maxReceiveCount: function(value) {
		return this.set('maxReceiveCount', value);
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

module.exports = SQSRedrivePolicy;
