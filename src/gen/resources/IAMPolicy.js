var Resource = require('../../resource');

/**
 * AWS::IAM::Policy - The AWS::IAM::Policy resource associates an IAM policy with IAM users, roles, or groups. For more information about IAM policies, see Overview of IAM Policies in the IAM User Guide guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMPolicy(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(IAMPolicy, Resource);

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
	 * @param {Object} value
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
	}
};

module.exports = IAMPolicy;
