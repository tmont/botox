var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CloudFormation::WaitCondition - Important
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationWaitCondition(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

CloudFormationWaitCondition.prototype = {
	
	/**
	 * The number of success signals that AWS CloudFormation must receive before it continues the stack creation process. When the wait condition receives the requisite number of success signals, AWS CloudFormation resumes the creation of the stack. If the wait condition does not receive the specified number of success signals before the Timeout period expires, AWS CloudFormation assumes that the wait condition has failed and rolls the stack back.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {CloudFormationWaitCondition}
	 */
	count: function(value) {
		return this.set('Count', value);
	},

	/**
	 * A reference to the wait condition handle used to signal this wait condition. Use the Ref intrinsic function to specify an AWS::CloudFormation::WaitConditionHandle resource.
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {CloudFormationWaitCondition}
	 */
	handle: function(value) {
		return this.set('Handle', value);
	},

	/**
	 * The length of time (in seconds) to wait for the number of signals that the Count property specifies. Timeout is a minimum-bound property, meaning the timeout occurs no sooner than the time you specify, but can occur shortly thereafter. The maximum time that can be specified for this property is 12 hours (43200 seconds).
	 *
	 * Required: true
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {CloudFormationWaitCondition}
	 */
	timeout: function(value) {
		return this.set('Timeout', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * Returns: A JSON object that contains the UniqueId and Data values from the wait condition signal(s) for the specified wait condition. For more information about wait condition signals, see Wait Condition Signal JSON Format.Example return value for a wait condition with 2 signals: { "Signal1" : "Step 1 complete." , "Signal2" : "Step 2 complete." }
			 */
			data: function() {
				return new Attribute(self, 'Data');
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

module.exports = CloudFormationWaitCondition;
