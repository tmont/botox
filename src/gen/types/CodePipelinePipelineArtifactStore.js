var PropertyType = require('../../property-type');

/**
 * ArtifactStore is a property of the AWS::CodePipeline::Pipeline resource that defines the S3 location where AWS CodePipeline stores pipeline artifacts.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html}
 * @constructor
 */
function CodePipelinePipelineArtifactStore() {
	PropertyType.call(this);
}

CodePipelinePipelineArtifactStore.prototype = Object.create(PropertyType.prototype);

/**
 * The encryption key AWS CodePipeline uses to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If you don't specify a key, AWS CodePipeline uses the default key for Amazon Simple Storage Service (Amazon S3).
 *
 * Required: false
 *
 * @param {CodePipelinePipelineArtifactStoreEncryptionKey} value
 * @return {CodePipelinePipelineArtifactStore}
 */
CodePipelinePipelineArtifactStore.prototype.encryptionKey = function(value) {
	return this.set('EncryptionKey', value);
};

/**
 * The location where AWS CodePipeline stores artifacts for a pipeline, such as an S3 bucket.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CodePipelinePipelineArtifactStore}
 */
CodePipelinePipelineArtifactStore.prototype.location = function(value) {
	return this.set('Location', value);
};

/**
 * The type of the artifact store, such as Amazon S3. For valid values, see ArtifactStore in the AWS CodePipeline API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CodePipelinePipelineArtifactStore}
 */
CodePipelinePipelineArtifactStore.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = CodePipelinePipelineArtifactStore;
