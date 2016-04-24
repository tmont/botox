var PropertyType = require('../../property-type');

/**
 * Stages is a property of the AWS::CodePipeline::Pipeline resource that specifies a sequence of tasks for AWS CodePipeline to complete on an artifact.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages.html}
 * @constructor
 */
function CodePipelinePipelineStages() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CodePipelinePipelineStages, PropertyType);

CodePipelinePipelineStages.prototype = {
	
	/**
	 * The actions to include in this stage.
	 *
	 * Required: true
	 *
	 * @param {CodePipelinePipelineStagesActions[]} value
	 * @return {CodePipelinePipelineStages}
	 */
	actions: function(value) {
		return this.set('Actions', value);
	},

	/**
	 * The gates included in a stage.
	 *
	 * Required: false
	 *
	 * @param {CodePipelinePipelineStagesBlockers[]} value
	 * @return {CodePipelinePipelineStages}
	 */
	blockers: function(value) {
		return this.set('Blockers', value);
	},

	/**
	 * A name for this stage.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CodePipelinePipelineStages}
	 */
	name: function(value) {
		return this.set('Name', value);
	}
};

module.exports = CodePipelinePipelineStages;
