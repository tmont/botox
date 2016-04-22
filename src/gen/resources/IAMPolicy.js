var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::IAM::Policy - The AWS::IAM::Policy resource associates an IAM policy with IAM users, roles, or groups. For more information about IAM policies, see Overview of IAM Policies in the IAM User Guide guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMPolicy(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

IAMPolicy.prototype = {
	
	/**
	 * The names of groups to which you want to add the policy.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {IAMPolicy}
	 */
	groups: function(value) {
		return this.set('Groups', value);
	},

	/**
	 * A policy document that contains permissions to add to the specified users or groups.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {IAMPolicy}
	 */
	policyDocument: function(value) {
		return this.set('PolicyDocument', value);
	},

	/**
	 * The name of the policy. If you specify multiple policies for an entity, specify unique names. For example, if you specify a list of policies for an IAM role, each policy must have a unique name.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {IAMPolicy}
	 */
	policyName: function(value) {
		return this.set('PolicyName', value);
	},

	/**
	 * The names of AWS::IAM::Roles to attach to this policy.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {IAMPolicy}
	 */
	roles: function(value) {
		return this.set('Roles', value);
	},

	/**
	 * The names of users for whom you want to add the policy.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {IAMPolicy}
	 */
	users: function(value) {
		return this.set('Users', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::IAM::Policy has no attributes');
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

module.exports = IAMPolicy;
