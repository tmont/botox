var Resource = require('../../resource');

/**
 * AWS::KMS::Key - The AWS::KMS::Key resource creates a customer master key (CMK) in AWS Key Management Service (AWS KMS). Users (customers) can use the master key to encrypt their data stored in AWS services that are integrated with AWS KMS or within their applications. For more information, see What is the AWS Key Management Service? in the AWS Key Management Service Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function KMSKey(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(KMSKey, Resource);

KMSKey.prototype = {
	
	
	/**
	 * A description of the key. Use a description that helps your users decide whether the key is appropriate for a particular task.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {KMSKey}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * Indicates whether the key is available for use. AWS CloudFormation sets this value to true by default.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {KMSKey}
	 */
	enabled: function(value) {
		return this.set('Enabled', value);
	},

	/**
	 * Indicates whether AWS KMS rotates the key. AWS CloudFormation sets this value to false by default.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {KMSKey}
	 */
	enableKeyRotation: function(value) {
		return this.set('EnableKeyRotation', value);
	},

	/**
	 * An AWS Identity and Access Management (IAM) policy to attach to the key. Use a policy to specify who has permission to use the key and which actions they can perform. For more information, see Key Policies in the AWS Key Management Service Developer Guide.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {KMSKey}
	 */
	keyPolicy: function(value) {
		return this.set('KeyPolicy', value);
	}
};

module.exports = KMSKey;
