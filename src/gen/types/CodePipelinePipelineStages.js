var PropertyType = require('../../property-type');

/**
 * Stages is a property of the AWS::CodePipeline::Pipeline resource that specifies a sequence of tasks for AWS CodePipeline to complete on an artifact.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages.html}
 * @constructor
 */
function CodePipelinePipelineStages() {
	PropertyType.call(this);
}

CodePipelinePipelineStages.prototype = Object.create(PropertyType.prototype);

/**
 * The actions to include in this stage.
 *
 * Required: true
 *
 * @param {CodePipelinePipelineStagesActions[]} value
 * @return {CodePipelinePipelineStages}
 */
CodePipelinePipelineStages.prototype.actions = function(value) {
	return this.set('Actions', value);
};

/**
 * The gates included in a stage.
 *
 * Required: false
 *
 * @param {CodePipelinePipelineStagesBlockers[]} value
 * @return {CodePipelinePipelineStages}
 */
CodePipelinePipelineStages.prototype.blockers = function(value) {
	return this.set('Blockers', value);
};

/**
 * A name for this stage.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CodePipelinePipelineStages}
 */
CodePipelinePipelineStages.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = CodePipelinePipelineStages;
