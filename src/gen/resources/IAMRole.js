var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::IAM::Role - Creates an AWS Identity and Access Management (IAM) role. An IAM role can be used to enable applications running on an Amazon EC2 instance to securely access your AWS resources.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMRole(name) {
	Resource.call(this, name, 'AWS::IAM::Role');
}

IAMRole.prototype = Object.create(Resource.prototype);

/**
 * The IAM assume role policy that is associated with this role.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value A JSON policy document.
 * @returns {IAMRole}
 */
IAMRole.prototype.assumeRolePolicyDocument = function(value) {
	return this.set('AssumeRolePolicyDocument', value);
};

/**
 * One or more managed policy ARNs to attach to this role.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {IAMRole}
 */
IAMRole.prototype.managedPolicyArns = function(value) {
	return this.set('ManagedPolicyArns', value);
};

/**
 * The path associated with this role. For information about IAM paths, see Friendly Names and Paths in IAM User Guide.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMRole}
 */
IAMRole.prototype.path = function(value) {
	return this.set('Path', value);
};

/**
 * Important
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {IAMPolicy[]|Attribute|Reference} value
 * @returns {IAMRole}
 */
IAMRole.prototype.policies = function(value) {
	return this.set('Policies', value);
};

/**
 * AWS::IAM::Role attributes
 * @constructor
 * @param {Resource} resource
 */
function IAMRoleAttributes(resource) {
	this.resource = resource;
}
IAMRoleAttributes.prototype = {
	/**
	 * Returns the Amazon Resource Name (ARN) for the instance profile. For example:{"Fn::GetAtt" : ["MyRole", "Arn"] }This will return a value such as “arn:aws:iam::1234567890:role/MyRole-AJJHDSKSDF”.
	 * @type {Attribute}
	 */
	get arn() {
		return new Attribute(this.resource, 'Arn');
	}
};

/**
 * Gets attribute map for AWS::IAM::Role
 * @returns {IAMRoleAttributes}
 */
IAMRole.prototype.attr = function() {
	return new IAMRoleAttributes(this);
};

module.exports = IAMRole;
