var ResourceAttribute = require('../../resource-attribute');

/**
 * You associate the CreationPolicy attribute with a resource to prevent its status from reaching create complete until AWS CloudFormation receives a specified number of success signals or the timeout period is exceeded. To signal a resource, you can use the cfn-signal helper script or SignalResource API. AWS CloudFormation publishes valid signals to the stack events so that you track the number of signals sent.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-creationpolicy.html}
 * @constructor
 */
function CreationPolicy() {
	ResourceAttribute.call(this);
}

CreationPolicy.prototype = Object.create(ResourceAttribute.prototype);

/**
 * The number of success signals AWS CloudFormation must receive before it sets the resource status as CREATE_COMPLETE. If the resource receives a failure signal or doesn't receive the specified number of signals before the timeout period expires, the resource creation fails and AWS CloudFormation rolls the stack back.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {CreationPolicy}
 */
CreationPolicy.prototype.count = function(value) {
	return this.set('ResourceSignal', 'Count', value);
};

/**
 * The length of time that AWS CloudFormation waits for the number of signals that was specified in the Count property. The timeout period starts after AWS CloudFormation starts creating the resource, and the timeout expires no sooner than the time you specify but can occur shortly thereafter. The maximum time that you can specify is 12 hours.
 *
 * Required: false
 *
 * @param {String} value
 * @return {CreationPolicy}
 */
CreationPolicy.prototype.timeout = function(value) {
	return this.set('ResourceSignal', 'Timeout', value);
};

module.exports = CreationPolicy;
