/**
 * LoginProfile is a property of the AWS::IAM::User resource that creates a login profile for users so that they can access the AWS Management Console.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user-loginprofile.html}
 * @constructor
 */
function IAMUserLoginProfile() {
	this.data = {};
}

IAMUserLoginProfile.prototype = {
	
	/**
	 * The password for the user.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {IAMUserLoginProfile}
	 */
	password: function(value) {
		return this.set('Password', value);
	},

	/**
	 * Specifies whether the user is required to set a new password the next time the user logs in to the AWS Management Console.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {IAMUserLoginProfile}
	 */
	passwordResetRequired: function(value) {
		return this.set('PasswordResetRequired', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = IAMUserLoginProfile;
