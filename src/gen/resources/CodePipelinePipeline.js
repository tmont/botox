var Resource = require('../../resource');

/**
 * AWS::CodePipeline::Pipeline - The AWS::CodePipeline::Pipeline resource creates an AWS CodePipeline pipeline that describes how software changes go through a release process. For more information, see What Is AWS CodePipeline? in the AWS CodePipeline User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CodePipelinePipeline(name) {
	Resource.call(this, name, 'AWS::CodePipeline::Pipeline');
}

CodePipelinePipeline.prototype = Object.create(Resource.prototype);


/**
 * The Amazon Simple Storage Service (Amazon S3) location where AWS CodePipeline stores pipeline artifacts. The S3 bucket must have versioning enabled. For more information, see Create an Amazon S3 Bucket for Your Application in the AWS CodePipeline User Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {CodePipelinePipelineArtifactStore|Attribute|Reference} value
 * @return {CodePipelinePipeline}
 */
CodePipelinePipeline.prototype.artifactStore = function(value) {
	return this.set('ArtifactStore', value);
};

/**
 * Prevents artifacts in a pipeline from transitioning to the stage that you specified. This enables you to manually control transitions.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CodePipelinePipelineDisableInboundStageTransitions[]|Attribute|Reference} value
 * @return {CodePipelinePipeline}
 */
CodePipelinePipeline.prototype.disableInboundStageTransitions = function(value) {
	return this.set('DisableInboundStageTransitions', value);
};

/**
 * The name of your AWS CodePipeline pipeline.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodePipelinePipeline}
 */
CodePipelinePipeline.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * Indicates whether to rerun the AWS CodePipeline pipeline after you update it.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {CodePipelinePipeline}
 */
CodePipelinePipeline.prototype.restartExecutionOnUpdate = function(value) {
	return this.set('RestartExecutionOnUpdate', value);
};

/**
 * A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf. For more information, see AWS CodePipeline Access Permissions Reference in the AWS CodePipeline User Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodePipelinePipeline}
 */
CodePipelinePipeline.prototype.roleArn = function(value) {
	return this.set('RoleArn', value);
};

/**
 * Defines the AWS CodePipeline pipeline stages.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {CodePipelinePipelineStages|Attribute|Reference} value
 * @return {CodePipelinePipeline}
 */
CodePipelinePipeline.prototype.stages = function(value) {
	return this.set('Stages', value);
};

module.exports = CodePipelinePipeline;
