/**
 * You can use the AWS CloudFormation Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with AWS CloudFormation, see the individual resources in AWS Resource Types Reference.
 * @constructor
 */
function AWSCloudFormationResourceTagsType() {
	this.data = {};
}

AWSCloudFormationResourceTagsType.prototype = {
	
	/**
	 * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCloudFormationResourceTagsType}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCloudFormationResourceTagsType}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = AWSCloudFormationResourceTagsType;
