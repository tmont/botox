/**
 * Policies is a property of the AWS::IAM::Role, AWS::IAM::Group, and AWS::IAM::User resources. The Policies property describes what actions are allowed on what resources. For more information about IAM policies, see Overview of Policies in IAM User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html}
 * @constructor
 */
function IAMPolicies() {
	this.data = {};
}

IAMPolicies.prototype = {
	
	/**
	 * A policy document that describes what actions are allowed on which resources.
	 *
	 * Required: true
	 *
	 * @param {JSONobject} value
	 * @return {IAMPolicies}
	 */
	policyDocument: function(value) {
		return this.set('PolicyDocument', value);
	},

	/**
	 * The name of the policy.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {IAMPolicies}
	 */
	policyName: function(value) {
		return this.set('PolicyName', value);
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

module.exports = IAMPolicies;
