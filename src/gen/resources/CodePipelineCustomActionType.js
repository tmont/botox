var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CodePipeline::CustomActionType - The AWS::CodePipeline::CustomActionType resource creates a custom action for activities that aren't included in the AWS CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline. For more information, see Create and Add a Custom Action in AWS CodePipeline in the AWS CodePipeline User Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function CodePipelineCustomActionType(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

CodePipelineCustomActionType.prototype = {
	
	/**
	 * The category of the custom action, such as a source action or a build action. For valid values, see CreateCustomActionType in the AWS CodePipeline API Reference.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {CodePipelineCustomActionType}
	 */
	category: function(value) {
		return this.set('Category', value);
	},

	/**
	 * The configuration properties for the custom action.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {AWSCodePipelineCustomActionTypeConfigurationProperty[]} value
	 * @return {CodePipelineCustomActionType}
	 */
	configurationProperties: function(value) {
		return this.set('ConfigurationProperties', value);
	},

	/**
	 * The input artifact details for this custom action.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {AWSCodePipelineCustomActionTypeArtifactDetails} value
	 * @return {CodePipelineCustomActionType}
	 */
	inputArtifactDetails: function(value) {
		return this.set('InputArtifactDetails', value);
	},

	/**
	 * The output artifact details for this custom action.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {AWSCodePipelineCustomActionTypeArtifactDetails} value
	 * @return {CodePipelineCustomActionType}
	 */
	outputArtifactDetails: function(value) {
		return this.set('OutputArtifactDetails', value);
	},

	/**
	 * The name of the service provider that AWS CodePipeline uses for this custom action.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {CodePipelineCustomActionType}
	 */
	provider: function(value) {
		return this.set('Provider', value);
	},

	/**
	 * URLs that provide users information about this custom action.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {AWSCodePipelineCustomActionTypeSettings} value
	 * @return {CodePipelineCustomActionType}
	 */
	settings: function(value) {
		return this.set('Settings', value);
	},

	/**
	 * The version number of this custom action.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {CodePipelineCustomActionType}
	 */
	version: function(value) {
		return this.set('Version', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::CodePipeline::CustomActionType has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = CodePipelineCustomActionType;
