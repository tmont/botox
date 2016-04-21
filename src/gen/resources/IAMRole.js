var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::IAM::Role - Creates an AWS Identity and Access Management (IAM) role. An IAM role can be used to enable applications running on an Amazon EC2 instance to securely access your AWS resources.
 * @constructor
 */
function IAMRole(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

IAMRole.prototype = {
	
	/**
	 * The IAM assume role policy that is associated with this role.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {AJSONpolicydocument} value
	 * @return {IAMRole}
	 */
	assumeRolePolicyDocument: function(value) {
		return this.set('AssumeRolePolicyDocument', value);
	},

	/**
	 * One or more managed policy ARNs to attach to this role.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {IAMRole}
	 */
	managedPolicyArns: function(value) {
		return this.set('ManagedPolicyArns', value);
	},

	/**
	 * The path associated with this role. For information about IAM paths, see Friendly Names and Paths in IAM User Guide.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {IAMRole}
	 */
	path: function(value) {
		return this.set('Path', value);
	},

	/**
	 * The policies to associate with this role. Policies can also be specified externally. For sample templates that demonstrates both embedded and external policies, see Template Examples.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {IAMPolicy[]} value
	 * @return {IAMRole}
	 */
	policies: function(value) {
		return this.set('Policies', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * Returns the Amazon Resource Name (ARN) for the instance profile. For example:{"Fn::GetAtt" : ["MyRole", "Arn"] }This will return a value such as “arn:aws:iam::1234567890:role/MyRole-AJJHDSKSDF”.
			 */
			arn: function() {
				return new Attribute(resourceName, 'Arn');
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

module.exports = IAMRole;
