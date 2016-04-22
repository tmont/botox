/**
 * InputArtifacts is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies an artifact that the AWS CodePipeline action works on, such as a test or build artifact.
 * @constructor
 */
function AWSCodePipelinePipelineStagesActionsInputArtifacts() {
	this.data = {};
}

AWSCodePipelinePipelineStagesActionsInputArtifacts.prototype = {
	
	/**
	 * The name of the artifact that the AWS CodePipeline action works on, such as My App.The input artifact of an action must match the output artifact from any preceding action.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActionsInputArtifacts}
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

module.exports = AWSCodePipelinePipelineStagesActionsInputArtifacts;
