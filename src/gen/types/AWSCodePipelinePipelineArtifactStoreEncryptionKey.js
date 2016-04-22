/**
 * EncryptionKey is a property of the AWS CodePipeline Pipeline ArtifactStore property that specifies which key AWS CodePipeline uses to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
 * @constructor
 */
function AWSCodePipelinePipelineArtifactStoreEncryptionKey() {
	this.data = {};
}

AWSCodePipelinePipelineArtifactStoreEncryptionKey.prototype = {
	
	/**
	 * The ID of the key. For an AWS KMS key, specify the key ID or key Amazon Resource Number (ARN).
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineArtifactStoreEncryptionKey}
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
	 * @return {AWSCodePipelinePipelineArtifactStoreEncryptionKey}
	 */
	type: function(value) {
		return this.set('Type', value);
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

module.exports = AWSCodePipelinePipelineArtifactStoreEncryptionKey;
