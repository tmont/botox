var Resource = require('../../resource');

/**
 * AWS::IAM::UserToGroupAddition - The AWS::IAM::UserToGroupAddition type adds AWS Identity and Access Management (IAM) users to a group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMUserToGroupAddition(name) {
	Resource.call(this, name, 'AWS::IAM::UserToGroupAddition');
}

IAMUserToGroupAddition.prototype = Object.create(Resource.prototype);

/**
 * The name of group to add users to.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMUserToGroupAddition}
 */
IAMUserToGroupAddition.prototype.groupName = function(value) {
	return this.set('GroupName', value);
};

/**
 * Required: Yes
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {user[]|Attribute|Reference} value
 * @returns {IAMUserToGroupAddition}
 */
IAMUserToGroupAddition.prototype.users = function(value) {
	return this.set('Users', value);
};

module.exports = IAMUserToGroupAddition;
