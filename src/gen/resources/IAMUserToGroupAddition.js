var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::IAM::UserToGroupAddition - The AWS::IAM::UserToGroupAddition type adds AWS Identity and Access Management (IAM) users to a group.
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMUserToGroupAddition(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

IAMUserToGroupAddition.prototype = {
	
	/**
	 * The name of group to add users to.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {IAMUserToGroupAddition}
	 */
	groupName: function(value) {
		return this.set('GroupName', value);
	},

	/**
	 * Required: Yes
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {user[]} value
	 * @return {IAMUserToGroupAddition}
	 */
	users: function(value) {
		return this.set('Users', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::IAM::UserToGroupAddition has no attributes');
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

module.exports = IAMUserToGroupAddition;
