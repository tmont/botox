var PropertyType = require('../../property-type');

/**
 * Settings is a property of the AWS::CodePipeline::CustomActionType resource that provides URLs that users can access to view information about the AWS CodePipeline custom action.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype-settings.html}
 * @constructor
 */
function CodePipelineCustomActionTypeSettings() {
	PropertyType.call(this);
}

Object.setPrototypeOf(CodePipelineCustomActionTypeSettings, PropertyType);

CodePipelineCustomActionTypeSettings.prototype = {
	
	/**
	 * The URL that is returned to the AWS CodePipeline console that links to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CodePipelineCustomActionTypeSettings}
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
	 * @return {CodePipelineCustomActionTypeSettings}
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
	 * @return {CodePipelineCustomActionTypeSettings}
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
	 * @return {CodePipelineCustomActionTypeSettings}
	 */
	thirdPartyConfigurationUrl: function(value) {
		return this.set('ThirdPartyConfigurationUrl', value);
	}
};

module.exports = CodePipelineCustomActionTypeSettings;
