var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::IAM::AccessKey - The AWS::IAM::AccessKey resource type generates a secret access key and assigns it to an IAM user or AWS account.
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMAccessKey(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

IAMAccessKey.prototype = {
	
	/**
	 * This value is specific to AWS CloudFormation and can only be incremented. Incrementing this value notifies AWS CloudFormation that you want to rotate your access key. When you update your stack, AWS CloudFormation will replace the existing access key with a new key.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Number} value
	 * @return {IAMAccessKey}
	 */
	serial: function(value) {
		return this.set('Serial', value);
	},

	/**
	 * The status of the access key. By default, AWS CloudFormation sets this property value to Active.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {IAMAccessKey}
	 */
	status: function(value) {
		return this.set('Status', value);
	},

	/**
	 * The name of the user that the new key will belong to.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {IAMAccessKey}
	 */
	userName: function(value) {
		return this.set('UserName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * Returns the secret access key for the specified AWS::IAM::AccessKey resource. For example: wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY.
			 */
			secretAccessKey: function() {
				return new Attribute(self, 'SecretAccessKey');
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

module.exports = IAMAccessKey;
