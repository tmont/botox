var PropertyType = require('../../property-type');

/**
 * The RedrivePolicy type is a property of the AWS::SQS::Queue resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-queues-redrivepolicy.html}
 * @constructor
 */
function SQSRedrivePolicy() {
	PropertyType.call(this);
}

Object.setPrototypeOf(SQSRedrivePolicy, PropertyType);

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
	}
};

module.exports = SQSRedrivePolicy;
