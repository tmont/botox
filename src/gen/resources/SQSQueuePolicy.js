var Resource = require('../../resource');

/**
 * AWS::SQS::QueuePolicy - The AWS::SQS::QueuePolicy type applies a policy to SQS queues.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sqs-policy.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function SQSQueuePolicy(name) {
	Resource.call(this, name, 'AWS::SQS::QueuePolicy');
}

SQSQueuePolicy.prototype = Object.create(Resource.prototype);

/**
 * A policy document containing permissions to add to the specified SQS queues.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @returns {SQSQueuePolicy}
 */
SQSQueuePolicy.prototype.policyDocument = function(value) {
	return this.set('PolicyDocument', value);
};

/**
 * The URLs of the queues to which you want to add the policy. You can use the Ref function to specify an AWS::SQS::Queue resource.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {SQSQueuePolicy}
 */
SQSQueuePolicy.prototype.queues = function(value) {
	return this.set('Queues', value);
};

module.exports = SQSQueuePolicy;
