var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::IAM::User - The AWS::IAM::User type creates a user.
 * @constructor
 */
function IAMUser(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

IAMUser.prototype = {
	
	/**
	 * A name of a group to which you want to add the user.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {IAMUser}
	 */
	groups: function(value) {
		return this.set('Groups', value);
	},

	/**
	 * Creates a login profile so that the user can access the AWS Management Console.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {IAMUserLoginProfile} value
	 * @return {IAMUser}
	 */
	loginProfile: function(value) {
		return this.set('LoginProfile', value);
	},

	/**
	 * One or more managed policy ARNs to attach to this user.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {IAMUser}
	 */
	managedPolicyArns: function(value) {
		return this.set('ManagedPolicyArns', value);
	},

	/**
	 * The path for the user name. For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {IAMUser}
	 */
	path: function(value) {
		return this.set('Path', value);
	},

	/**
	 * The policies to associate with this user. For information about policies, see Overview of Policies in [Using IAM].
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {IAMPolicy[]} value
	 * @return {IAMUser}
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
			 * Returns the Amazon Resource Name (ARN) for the specified AWS::IAM::User resource. For example: arn:aws:iam::123456789012:user/mystack-myuser-1CCXAFG2H2U4D.
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

module.exports = IAMUser;
