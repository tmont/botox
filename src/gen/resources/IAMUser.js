var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::IAM::User - The AWS::IAM::User type creates a user.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMUser(name) {
	Resource.call(this, name, 'AWS::IAM::User');
}

IAMUser.prototype = Object.create(Resource.prototype);

/**
 * A name of a group to which you want to add the user.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {IAMUser}
 */
IAMUser.prototype.groups = function(value) {
	return this.set('Groups', value);
};

/**
 * Creates a login profile so that the user can access the AWS Management Console.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {IAMUserLoginProfile|Attribute|Reference} value IAM User LoginProfile
 * @returns {IAMUser}
 */
IAMUser.prototype.loginProfile = function(value) {
	return this.set('LoginProfile', value);
};

/**
 * One or more managed policy ARNs to attach to this user.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {IAMUser}
 */
IAMUser.prototype.managedPolicyArns = function(value) {
	return this.set('ManagedPolicyArns', value);
};

/**
 * The path for the user name. For more information about paths, see Identifiers for IAM Entities in Using AWS Identity and Access Management.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMUser}
 */
IAMUser.prototype.path = function(value) {
	return this.set('Path', value);
};

/**
 * The policies to associate with this user. For information about policies, see Overview of Policies in [Using IAM].
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {IAMPolicy[]|Attribute|Reference} value
 * @returns {IAMUser}
 */
IAMUser.prototype.policies = function(value) {
	return this.set('Policies', value);
};

/**
 * AWS::IAM::User attributes
 * @constructor
 * @param {Resource} resource
 */
function IAMUserAttributes(resource) {
	this.resource = resource;
}
IAMUserAttributes.prototype = {
	/**
	 * Returns the Amazon Resource Name (ARN) for the specified AWS::IAM::User resource. For example: arn:aws:iam::123456789012:user/mystack-myuser-1CCXAFG2H2U4D.
	 * @type {Attribute}
	 */
	get arn() {
		return new Attribute(this.resource, 'Arn');
	}
};

/**
 * Gets attribute map for AWS::IAM::User
 * @returns {IAMUserAttributes}
 */
IAMUser.prototype.attr = function() {
	return new IAMUserAttributes(this);
};

module.exports = IAMUser;
