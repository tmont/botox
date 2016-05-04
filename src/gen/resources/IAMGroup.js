var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::IAM::Group - The AWS::IAM::Group type creates an Identity and Access Management (IAM) group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMGroup(name) {
	Resource.call(this, name, 'AWS::IAM::Group');
}

IAMGroup.prototype = Object.create(Resource.prototype);

/**
 * One or more managed policy ARNs to attach to this group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {IAMGroup}
 */
IAMGroup.prototype.managedPolicyArns = function(value) {
	return this.set('ManagedPolicyArns', value);
};

/**
 * The path to the group. For more information about paths, see Identifiers for IAM Entities in Using IAM.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMGroup}
 */
IAMGroup.prototype.path = function(value) {
	return this.set('Path', value);
};

/**
 * The policies to associate with this group. For information about policies, see Overview of Policies in Using IAM.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {IAMPolicy[]|Attribute|Reference} value
 * @returns {IAMGroup}
 */
IAMGroup.prototype.policies = function(value) {
	return this.set('Policies', value);
};

/**
 * AWS::IAM::Group attributes
 * @constructor
 * @param {Resource} resource
 */
function IAMGroupAttributes(resource) {
	this.resource = resource;
}
IAMGroupAttributes.prototype = {
	/**
	 * Returns the Amazon Resource Name (ARN) for the AWS::IAM::Group resource. For example: arn:aws:iam::123456789012:group/mystack-mygroup-1DZETITOWEKVO.
	 * @type {Attribute}
	 */
	get arn() {
		return new Attribute(this.resource, 'Arn');
	}
};

/**
 * Gets attribute map for AWS::IAM::Group
 * @returns {IAMGroupAttributes}
 */
IAMGroup.prototype.attr = function() {
	return new IAMGroupAttributes(this);
};

module.exports = IAMGroup;
