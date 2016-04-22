/**
 * Stages is a property of the AWS::CodePipeline::Pipeline resource that specifies a sequence of tasks for AWS CodePipeline to complete on an artifact.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages.html}
 * @constructor
 */
function AWSCodePipelinePipelineStages() {
	this.data = {};
}

AWSCodePipelinePipelineStages.prototype = {
	
	/**
	 * The actions to include in this stage.
	 *
	 * Required: true
	 *
	 * @param {AWSCodePipelinePipelineStagesAction[]} value
	 * @return {AWSCodePipelinePipelineStages}
	 */
	actions: function(value) {
		return this.set('Actions', value);
	},

	/**
	 * The gates included in a stage.
	 *
	 * Required: false
	 *
	 * @param {AWSCodePipelinePipelineStagesBlocker[]} value
	 * @return {AWSCodePipelinePipelineStages}
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
	 * @return {AWSCodePipelinePipelineStages}
	 */
	name: function(value) {
		return this.set('Name', value);
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

module.exports = AWSCodePipelinePipelineStages;
