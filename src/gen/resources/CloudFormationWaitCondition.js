var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::CloudFormation::WaitCondition - Important
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationWaitCondition(name) {
	Resource.call(this, name, 'AWS::CloudFormation::WaitCondition');
}

CloudFormationWaitCondition.prototype = Object.create(Resource.prototype);

/**
 * The number of success signals that AWS CloudFormation must receive before it continues the stack creation process. When the wait condition receives the requisite number of success signals, AWS CloudFormation resumes the creation of the stack. If the wait condition does not receive the specified number of success signals before the Timeout period expires, AWS CloudFormation assumes that the wait condition has failed and rolls the stack back.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {CloudFormationWaitCondition}
 */
CloudFormationWaitCondition.prototype.count = function(value) {
	return this.set('Count', value);
};

/**
 * A reference to the wait condition handle used to signal this wait condition. Use the Ref intrinsic function to specify an AWS::CloudFormation::WaitConditionHandle resource.
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {CloudFormationWaitCondition}
 */
CloudFormationWaitCondition.prototype.handle = function(value) {
	return this.set('Handle', value);
};

/**
 * The length of time (in seconds) to wait for the number of signals that the Count property specifies. Timeout is a minimum-bound property, meaning the timeout occurs no sooner than the time you specify, but can occur shortly thereafter. The maximum time that can be specified for this property is 12 hours (43200 seconds).
 *
 * Required: true
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {CloudFormationWaitCondition}
 */
CloudFormationWaitCondition.prototype.timeout = function(value) {
	return this.set('Timeout', value);
};

/**
 * Sets a CreationPolicy for this resource
 * @param {CreationPolicy} creationPolicy
 * @returns {CloudFormationWaitCondition}
 */
CloudFormationWaitCondition.prototype.creationPolicy = function(creationPolicy) {
	return this.setResourceAttribute('CreationPolicy', creationPolicy);
};

/**
 * AWS::CloudFormation::WaitCondition attributes
 * @constructor
 * @param {Resource} resource
 */
function CloudFormationWaitConditionAttributes(resource) {
	this.resource = resource;
}
CloudFormationWaitConditionAttributes.prototype = {
	/**
	 * Returns: A JSON object that contains the UniqueId and Data values from the wait condition signal(s) for the specified wait condition. For more information about wait condition signals, see Wait Condition Signal JSON Format.Example return value for a wait condition with 2 signals: { "Signal1" : "Step 1 complete." , "Signal2" : "Step 2 complete." }
	 * @type {Attribute}
	 */
	get data() {
		return new Attribute(this.resource, 'Data');
	}
};

/**
 * Gets attribute map for AWS::CloudFormation::WaitCondition
 * @returns {CloudFormationWaitConditionAttributes}
 */
CloudFormationWaitCondition.prototype.attr = function() {
	return new CloudFormationWaitConditionAttributes(this);
};

module.exports = CloudFormationWaitCondition;
