var PropertyType = require('../../property-type');

/**
 * EncryptionKey is a property of the AWS CodePipeline Pipeline ArtifactStore property that specifies which key AWS CodePipeline uses to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore-encryptionkey.html}
 * @constructor
 */
function CodePipelinePipelineArtifactStoreEncryptionKey() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CodePipelinePipelineArtifactStoreEncryptionKey, PropertyType);

CodePipelinePipelineArtifactStoreEncryptionKey.prototype = {
	
	/**
	 * The ID of the key. For an AWS KMS key, specify the key ID or key Amazon Resource Number (ARN).
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CodePipelinePipelineArtifactStoreEncryptionKey}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * The type of encryption key, such as KMS. For valid values, see EncryptionKey in the AWS CodePipeline API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CodePipelinePipelineArtifactStoreEncryptionKey}
	 */
	type: function(value) {
		return this.set('Type', value);
	}
};

module.exports = CodePipelinePipelineArtifactStoreEncryptionKey;
