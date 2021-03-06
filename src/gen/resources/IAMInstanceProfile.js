var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::IAM::InstanceProfile - Creates an AWS Identity and Access Management (IAM) Instance Profile that can be used with IAM Roles for EC2 Instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMInstanceProfile(name) {
	Resource.call(this, name, 'AWS::IAM::InstanceProfile');
}

IAMInstanceProfile.prototype = Object.create(Resource.prototype);

/**
 * The path associated with this IAM instance profile. For information about IAM paths, see Friendly Names and Paths in the AWS Identity and Access Management User Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMInstanceProfile}
 */
IAMInstanceProfile.prototype.path = function(value) {
	return this.set('Path', value);
};

/**
 * The roles associated with this IAM instance profile.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {IAMRole[]|Attribute|Reference} value List of references to AWS::IAM::Roles. Currently, a maximum of one role can be assigned to an instance profile.
 * @returns {IAMInstanceProfile}
 */
IAMInstanceProfile.prototype.roles = function(value) {
	return this.set('Roles', value);
};

/**
 * AWS::IAM::InstanceProfile attributes
 * @constructor
 * @param {Resource} resource
 */
function IAMInstanceProfileAttributes(resource) {
	this.resource = resource;
}
IAMInstanceProfileAttributes.prototype = {
	/**
	 * Returns the Amazon Resource Name (ARN) for the instance profile. For example:{"Fn::GetAtt" : ["MyProfile", "Arn"] }This will return a value such as “arn:aws:iam::1234567890:instance-profile/MyProfile-ASDNSDLKJ”.
	 * @type {Attribute}
	 */
	get arn() {
		return new Attribute(this.resource, 'Arn');
	}
};

/**
 * Gets attribute map for AWS::IAM::InstanceProfile
 * @returns {IAMInstanceProfileAttributes}
 */
IAMInstanceProfile.prototype.attr = function() {
	return new IAMInstanceProfileAttributes(this);
};

module.exports = IAMInstanceProfile;
