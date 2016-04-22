var Resource = require('../../resource');

/**
 * AWS::IAM::UserToGroupAddition - The AWS::IAM::UserToGroupAddition type adds AWS Identity and Access Management (IAM) users to a group.
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMUserToGroupAddition(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(IAMUserToGroupAddition, Resource);

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
	}
};

module.exports = IAMUserToGroupAddition;
