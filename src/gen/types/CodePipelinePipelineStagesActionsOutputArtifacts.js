var PropertyType = require('../../property-type');

/**
 * OutputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that is the result of an AWS CodePipeline action, such as a test or build artifact.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-outputartifacts.html}
 * @constructor
 */
function CodePipelinePipelineStagesActionsOutputArtifacts() {
	PropertyType.call(this);
}

CodePipelinePipelineStagesActionsOutputArtifacts.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the artifact that is the result of an AWS CodePipeline action, such as My App. Output artifact names must be unique within a pipeline.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodePipelinePipelineStagesActionsOutputArtifacts}
 */
CodePipelinePipelineStagesActionsOutputArtifacts.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = CodePipelinePipelineStagesActionsOutputArtifacts;
