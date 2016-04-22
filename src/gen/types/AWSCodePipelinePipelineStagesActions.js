/**
 * Actions is a property of the AWS CodePipeline Pipeline Stages property that specifies an action for an AWS CodePipeline stage.
 * @constructor
 */
function AWSCodePipelinePipelineStagesActions(initialData) {
	this.data = initialData || {};
}

AWSCodePipelinePipelineStagesActions.prototype = {
	
	/**
	 * Specifies the action type and the provider of the action.
	 *
	 * Required: true
	 *
	 * @param {AWSCodePipelinePipelineStagesActionsActionTypeId} value
	 * @return {AWSCodePipelinePipelineStagesActions}
	 */
	actionTypeId: function(value) {
		return this.set('ActionTypeId', value);
	},

	/**
	 * The action's configuration. These are key-value pairs that specify input values for an action.
	 *
	 * Required: false
	 *
	 * @param {JSONobject} value
	 * @return {AWSCodePipelinePipelineStagesActions}
	 */
	configuration: function(value) {
		return this.set('Configuration', value);
	},

	/**
	 * The name or ID of the artifact that the action consumes, such as a test or build artifact.
	 *
	 * Required: false
	 *
	 * @param {AWSCodePipelinePipelineStagesActionsInputArtifact[]} value
	 * @return {AWSCodePipelinePipelineStagesActions}
	 */
	inputArtifacts: function(value) {
		return this.set('InputArtifacts', value);
	},

	/**
	 * The action name.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActions}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The artifact name or ID that is a result of the action, such as a test or build artifact.
	 *
	 * Required: false
	 *
	 * @param {AWSCodePipelinePipelineStagesActionsOutputArtifact[]} value
	 * @return {AWSCodePipelinePipelineStagesActions}
	 */
	outputArtifacts: function(value) {
		return this.set('OutputArtifacts', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of a service role that the action uses. The pipeline's role assumes this role.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActions}
	 */
	roleArn: function(value) {
		return this.set('RoleArn', value);
	},

	/**
	 * The order in which AWS CodePipeline runs this action.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSCodePipelinePipelineStagesActions}
	 */
	runOrder: function(value) {
		return this.set('RunOrder', value);
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

module.exports = AWSCodePipelinePipelineStagesActions;
