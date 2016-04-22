/**
 * OutputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that is the result of an AWS CodePipeline action, such as a test or build artifact.
 * @constructor
 */
function AWSCodePipelinePipelineStagesActionsOutputArtifacts() {
	this.data = {};
}

AWSCodePipelinePipelineStagesActionsOutputArtifacts.prototype = {
	
	/**
	 * The name of the artifact that is the result of an AWS CodePipeline action, such as My App. Output artifact names must be unique within a pipeline.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActionsOutputArtifacts}
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

module.exports = AWSCodePipelinePipelineStagesActionsOutputArtifacts;
