var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::IAM::AccessKey - The AWS::IAM::AccessKey resource type generates a secret access key and assigns it to an IAM user or AWS account.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function IAMAccessKey(name) {
	Resource.call(this, name, 'AWS::IAM::AccessKey');
}

IAMAccessKey.prototype = Object.create(Resource.prototype);

/**
 * This value is specific to AWS CloudFormation and can only be incremented. Incrementing this value notifies AWS CloudFormation that you want to rotate your access key. When you update your stack, AWS CloudFormation will replace the existing access key with a new key.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @returns {IAMAccessKey}
 */
IAMAccessKey.prototype.serial = function(value) {
	return this.set('Serial', value);
};

/**
 * The status of the access key. By default, AWS CloudFormation sets this property value to Active.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMAccessKey}
 */
IAMAccessKey.prototype.status = function(value) {
	return this.set('Status', value);
};

/**
 * The name of the user that the new key will belong to.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {IAMAccessKey}
 */
IAMAccessKey.prototype.userName = function(value) {
	return this.set('UserName', value);
};

/**
 * AWS::IAM::AccessKey attributes
 * @constructor
 * @param {Resource} resource
 */
function IAMAccessKeyAttributes(resource) {
	this.resource = resource;
}
IAMAccessKeyAttributes.prototype = {
	/**
	 * Returns the secret access key for the specified AWS::IAM::AccessKey resource. For example: wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY.
	 * @type {Attribute}
	 */
	get secretAccessKey() {
		return new Attribute(this.resource, 'SecretAccessKey');
	}
};

/**
 * Gets attribute map for AWS::IAM::AccessKey
 * @returns {IAMAccessKeyAttributes}
 */
IAMAccessKey.prototype.attr = function() {
	return new IAMAccessKeyAttributes(this);
};

module.exports = IAMAccessKey;
