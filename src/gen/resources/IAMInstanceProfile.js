var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::IAM::InstanceProfile - Creates an AWS Identity and Access Management (IAM) Instance Profile that can be used with IAM Roles for EC2 Instances.
 * @constructor
 */
function IAMInstanceProfile(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

IAMInstanceProfile.prototype = {
	
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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * Returns the Amazon Resource Name (ARN) for the instance profile. For example:{"Fn::GetAtt" : ["MyProfile", "Arn"] }This will return a value such as “arn:aws:iam::1234567890:instance-profile/MyProfile-ASDNSDLKJ”.
			 */
			arn: function() {
				return new Attribute(resourceName, 'Arn');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = IAMInstanceProfile;
