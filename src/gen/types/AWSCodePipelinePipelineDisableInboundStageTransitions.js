/**
 * DisableInboundStageTransitions is a property of the AWS::CodePipeline::Pipeline resource that specifies which AWS CodePipeline stage to disable transitions to.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-disableinboundstagetransitions.html}
 * @constructor
 */
function AWSCodePipelinePipelineDisableInboundStageTransitions() {
	this.data = {};
}

AWSCodePipelinePipelineDisableInboundStageTransitions.prototype = {
	
	/**
	 * An explanation of why the transition between two stages of a pipeline was disabled.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineDisableInboundStageTransitions}
	 */
	reason: function(value) {
		return this.set('Reason', value);
	},

	/**
	 * The name of the stage to which transitions are disabled.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineDisableInboundStageTransitions}
	 */
	stageName: function(value) {
		return this.set('StageName', value);
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

module.exports = AWSCodePipelinePipelineDisableInboundStageTransitions;
