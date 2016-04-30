var PropertyType = require('../../property-type');

/**
 * DisableInboundStageTransitions is a property of the AWS::CodePipeline::Pipeline resource that specifies which AWS CodePipeline stage to disable transitions to.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-disableinboundstagetransitions.html}
 * @constructor
 */
function CodePipelinePipelineDisableInboundStageTransitions() {
	PropertyType.call(this);
}

CodePipelinePipelineDisableInboundStageTransitions.prototype = Object.create(PropertyType.prototype);

/**
 * An explanation of why the transition between two stages of a pipeline was disabled.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodePipelinePipelineDisableInboundStageTransitions}
 */
CodePipelinePipelineDisableInboundStageTransitions.prototype.reason = function(value) {
	return this.set('Reason', value);
};

/**
 * The name of the stage to which transitions are disabled.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodePipelinePipelineDisableInboundStageTransitions}
 */
CodePipelinePipelineDisableInboundStageTransitions.prototype.stageName = function(value) {
	return this.set('StageName', value);
};

module.exports = CodePipelinePipelineDisableInboundStageTransitions;
