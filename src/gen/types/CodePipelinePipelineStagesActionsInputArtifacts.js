var PropertyType = require('../../property-type');

/**
 * InputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that the AWS CodePipeline action works on, such as a test or build artifact.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-inputartifacts.html}
 * @constructor
 */
function CodePipelinePipelineStagesActionsInputArtifacts() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CodePipelinePipelineStagesActionsInputArtifacts, PropertyType);

CodePipelinePipelineStagesActionsInputArtifacts.prototype = {
	
	/**
	 * The name of the artifact that the AWS CodePipeline action works on, such as My App.The input artifact of an action must match the output artifact from any preceding action.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CodePipelinePipelineStagesActionsInputArtifacts}
	 */
	name: function(value) {
		return this.set('Name', value);
	}
};

module.exports = CodePipelinePipelineStagesActionsInputArtifacts;
