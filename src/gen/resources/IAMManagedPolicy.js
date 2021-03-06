var Resource = require('../../resource');

/**
 * AWS::IAM::ManagedPolicy - AWS::IAM::ManagedPolicy creates an AWS Identity and Access Management (IAM) managed policy for your AWS account that you can use to apply permissions to IAM users, groups, and roles. For more information about managed policies, see Managed Policies and Inline Policies in the IAM User Guide guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMManagedPolicy(name) {
	Resource.call(this, name, 'AWS::IAM::ManagedPolicy');
}

IAMManagedPolicy.prototype = Object.create(Resource.prototype);

/**
 * A description of the policy. For example, you can describe the permissions that are defined in the policy.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMManagedPolicy}
 */
IAMManagedPolicy.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The names of groups to attach to this policy.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {IAMManagedPolicy}
 */
IAMManagedPolicy.prototype.groups = function(value) {
	return this.set('Groups', value);
};

/**
 * The path for the policy. By default, the path is /. For more information, see IAM Identifiers in the IAM User Guide guide.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMManagedPolicy}
 */
IAMManagedPolicy.prototype.path = function(value) {
	return this.set('Path', value);
};

/**
 * Policies that define the permissions for this managed policy. For more information about policy syntax, see IAM Policy Elements Reference in IAM User Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @returns {IAMManagedPolicy}
 */
IAMManagedPolicy.prototype.policyDocument = function(value) {
	return this.set('PolicyDocument', value);
};

/**
 * The names of roles to attach to this policy.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {IAMManagedPolicy}
 */
IAMManagedPolicy.prototype.roles = function(value) {
	return this.set('Roles', value);
};

/**
 * The names of users to attach to this policy.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {IAMManagedPolicy}
 */
IAMManagedPolicy.prototype.users = function(value) {
	return this.set('Users', value);
};

module.exports = IAMManagedPolicy;
