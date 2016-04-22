/**
 * Settings is a property of the AWS::CodePipeline::CustomActionType resource that provides URLs that users can access to view information about the AWS CodePipeline custom action.
 * @constructor
 */
function AWSCodePipelineCustomActionTypeSettings() {
	this.data = {};
}

AWSCodePipelineCustomActionTypeSettings.prototype = {
	
	/**
	 * The URL that is returned to the AWS CodePipeline console that links to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodePipelineCustomActionTypeSettings}
	 */
	entityUrlTemplate: function(value) {
		return this.set('EntityUrlTemplate', value);
	},

	/**
	 * The URL that is returned to the AWS CodePipeline console that links to the top-level landing page for the external system, such as the console page for AWS CodeDeploy.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodePipelineCustomActionTypeSettings}
	 */
	executionUrlTemplate: function(value) {
		return this.set('ExecutionUrlTemplate', value);
	},

	/**
	 * The URL that is returned to the AWS CodePipeline console that links to the page where customers can update or change the configuration of the external action.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodePipelineCustomActionTypeSettings}
	 */
	revisionUrlTemplate: function(value) {
		return this.set('RevisionUrlTemplate', value);
	},

	/**
	 * The URL of a sign-up page where users can sign up for an external service and specify the initial configurations for the service's action.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodePipelineCustomActionTypeSettings}
	 */
	thirdPartyConfigurationUrl: function(value) {
		return this.set('ThirdPartyConfigurationUrl', value);
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

module.exports = AWSCodePipelineCustomActionTypeSettings;
