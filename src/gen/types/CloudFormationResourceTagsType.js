var PropertyType = require('../../property-type');

/**
 * You can use the AWS CloudFormation Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with AWS CloudFormation, see the individual resources in AWS Resource Types Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html}
 * @constructor
 */
function CloudFormationResourceTagsType() {
	PropertyType.call(this);
}

CloudFormationResourceTagsType.prototype = Object.create(PropertyType.prototype);

/**
 * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CloudFormationResourceTagsType}
 */
CloudFormationResourceTagsType.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CloudFormationResourceTagsType}
 */
CloudFormationResourceTagsType.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = CloudFormationResourceTagsType;
