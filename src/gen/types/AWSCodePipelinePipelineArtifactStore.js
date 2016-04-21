/**
 * ArtifactStore is a property of the AWS::CodePipeline::Pipeline resource that defines the S3 location where AWS CodePipeline stores pipeline artifacts.
 * @constructor
 */
function AWSCodePipelinePipelineArtifactStore(initialData) {
	this.data = initialData || {};
}

AWSCodePipelinePipelineArtifactStore.prototype = {
	
	/**
	 * The encryption key AWS CodePipeline uses to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If you don't specify a key, AWS CodePipeline uses the default key for Amazon Simple Storage Service (Amazon S3).
	 *
	 * Required: false
	 *
	 * @param {AWSCodePipelinePipelineArtifactStoreEncryptionKey} value
	 * @return {AWSCodePipelinePipelineArtifactStore}
	 */
	encryptionKey: function(value) {
		return this.set('EncryptionKey', value);
	},

	/**
	 * The location where AWS CodePipeline stores artifacts for a pipeline, such as an S3 bucket.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineArtifactStore}
	 */
	location: function(value) {
		return this.set('Location', value);
	},

	/**
	 * The type of the artifact store, such as Amazon S3. For valid values, see ArtifactStore in the AWS CodePipeline API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineArtifactStore}
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

module.exports = AWSCodePipelinePipelineArtifactStore;
