var Resource = require('../../resource');

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
 * AWS::IAM::Role attribute map
 * @typedef {Object} IAMRoleAttributeMap
 * @property {Attribute} Arn Returns the Amazon Resource Name (ARN) for the instance profile. For example:{"Fn::GetAtt" : ["MyRole", "Arn"] }This will return a value such as “arn:aws:iam::1234567890:role/MyRole-AJJHDSKSDF”.
 */
Object.defineProperty(IAMRole.prototype, 'attr', {
	/**
	 * @return {IAMRoleAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * Returns the Amazon Resource Name (ARN) for the instance profile. For example:{"Fn::GetAtt" : ["MyRole", "Arn"] }This will return a value such as “arn:aws:iam::1234567890:role/MyRole-AJJHDSKSDF”.
			 * @return {Attribute}
			 */
			get arn() {
				return createAttribute('Arn');
			}
		};
	}
});

/**
 * The IAM assume role policy that is associated with this role.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {AJSONpolicydocument|Attribute|Reference} value
 * @return {IAMRole}
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
 * @param {string[]|Attribute|Reference} value
 * @return {IAMRole}
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
 * @return {IAMRole}
 */
IAMRole.prototype.path = function(value) {
	return this.set('Path', value);
};

/**
 * The policies to associate with this role. Policies can also be specified externally. For sample templates that demonstrates both embedded and external policies, see Template Examples.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {IAMPolicy[]|Attribute|Reference} value
 * @return {IAMRole}
 */
IAMRole.prototype.policies = function(value) {
	return this.set('Policies', value);
};

module.exports = IAMRole;
