var Resource = require('../../resource');

/**
 * AWS::CodePipeline::CustomActionType - The AWS::CodePipeline::CustomActionType resource creates a custom action for activities that aren't included in the AWS CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline. For more information, see Create and Add a Custom Action in AWS CodePipeline in the AWS CodePipeline User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CodePipelineCustomActionType(name) {
	Resource.call(this, name, 'AWS::CodePipeline::CustomActionType');
}

CodePipelineCustomActionType.prototype = Object.create(Resource.prototype);

/**
 * The category of the custom action, such as a source action or a build action. For valid values, see CreateCustomActionType in the AWS CodePipeline API Reference.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodePipelineCustomActionType}
 */
CodePipelineCustomActionType.prototype.category = function(value) {
	return this.set('Category', value);
};

/**
 * The configuration properties for the custom action.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {CodePipelineCustomActionTypeConfigurationProperties[]|Attribute|Reference} value List of AWS CodePipeline CustomActionType ConfigurationProperties
 * @return {CodePipelineCustomActionType}
 */
CodePipelineCustomActionType.prototype.configurationProperties = function(value) {
	return this.set('ConfigurationProperties', value);
};

/**
 * The input artifact details for this custom action.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {CodePipelineCustomActionTypeArtifactDetails|Attribute|Reference} value AWS CodePipeline CustomActionType ArtifactDetails
 * @return {CodePipelineCustomActionType}
 */
CodePipelineCustomActionType.prototype.inputArtifactDetails = function(value) {
	return this.set('InputArtifactDetails', value);
};

/**
 * The output artifact details for this custom action.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {CodePipelineCustomActionTypeArtifactDetails|Attribute|Reference} value AWS CodePipeline CustomActionType ArtifactDetails
 * @return {CodePipelineCustomActionType}
 */
CodePipelineCustomActionType.prototype.outputArtifactDetails = function(value) {
	return this.set('OutputArtifactDetails', value);
};

/**
 * The name of the service provider that AWS CodePipeline uses for this custom action.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodePipelineCustomActionType}
 */
CodePipelineCustomActionType.prototype.provider = function(value) {
	return this.set('Provider', value);
};

/**
 * URLs that provide users information about this custom action.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {CodePipelineCustomActionTypeSettings|Attribute|Reference} value AWS CodePipeline CustomActionType Settings
 * @return {CodePipelineCustomActionType}
 */
CodePipelineCustomActionType.prototype.settings = function(value) {
	return this.set('Settings', value);
};

/**
 * The version number of this custom action.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CodePipelineCustomActionType}
 */
CodePipelineCustomActionType.prototype.version = function(value) {
	return this.set('Version', value);
};

module.exports = CodePipelineCustomActionType;
