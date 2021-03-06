var PropertyType = require('../../property-type');

/**
 * ActionTypeId is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies the action type and provider for an AWS CodePipeline action.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-actiontypeid.html}
 * @constructor
 */
function CodePipelinePipelineStagesActionsActionTypeId() {
	PropertyType.call(this);
}

CodePipelinePipelineStagesActionsActionTypeId.prototype = Object.create(PropertyType.prototype);

/**
 * A category that defines which action type the owner (the entitiy that performs the action) performs. The category that you select determine the providers that you can specify for the Provider property. For valid values, see ActionTypeId in the AWS CodePipeline API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodePipelinePipelineStagesActionsActionTypeId}
 */
CodePipelinePipelineStagesActionsActionTypeId.prototype.category = function(value) {
	return this.set('Category', value);
};

/**
 * The entity that performs the action. For valid values, see ActionTypeId in the AWS CodePipeline API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodePipelinePipelineStagesActionsActionTypeId}
 */
CodePipelinePipelineStagesActionsActionTypeId.prototype.owner = function(value) {
	return this.set('Owner', value);
};

/**
 * The service provider that the action calls. The providers that you can specify are determined by the category that you select. For example, a valid provider for the Deploy category is AWS CodeDeploy, which you would specify as CodeDeploy.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodePipelinePipelineStagesActionsActionTypeId}
 */
CodePipelinePipelineStagesActionsActionTypeId.prototype.provider = function(value) {
	return this.set('Provider', value);
};

/**
 * A version identifier for this action.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodePipelinePipelineStagesActionsActionTypeId}
 */
CodePipelinePipelineStagesActionsActionTypeId.prototype.version = function(value) {
	return this.set('Version', value);
};

module.exports = CodePipelinePipelineStagesActionsActionTypeId;
