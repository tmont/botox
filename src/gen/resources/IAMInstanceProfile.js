var Resource = require('../../resource');

/**
 * AWS::IAM::InstanceProfile - Creates an AWS Identity and Access Management (IAM) Instance Profile that can be used with IAM Roles for EC2 Instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMInstanceProfile(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(IAMInstanceProfile, Resource);

IAMInstanceProfile.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * Returns the Amazon Resource Name (ARN) for the instance profile. For example:{"Fn::GetAtt" : ["MyProfile", "Arn"] }This will return a value such as “arn:aws:iam::1234567890:instance-profile/MyProfile-ASDNSDLKJ”.
			 * @return {Attribute}
			 */
			arn: function() {
				return createAttribute('Arn');
			}
		};
	},

	
	/**
	 * The path associated with this IAM instance profile. For information about IAM paths, see Friendly Names and Paths in the AWS Identity and Access Management User Guide.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {IAMInstanceProfile}
	 */
	path: function(value) {
		return this.set('Path', value);
	},

	/**
	 * The roles associated with this IAM instance profile.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {referencestoAW[]} value
	 * @return {IAMInstanceProfile}
	 */
	roles: function(value) {
		return this.set('Roles', value);
	}
};

module.exports = IAMInstanceProfile;
