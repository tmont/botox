var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::DataPipeline::Pipeline - Creates a data pipeline that you can use to automate the movement and transformation of data. In each pipeline, you define pipeline objects, such as activities, schedules, data nodes, and resources. For information about pipeline objects and components that you can use, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
 * @constructor
 */
function DataPipelinePipeline(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

DataPipelinePipeline.prototype = {
	
	/**
	 * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {DataPipelinePipeline}
	 */
	activate: function(value) {
		return this.set('Activate', value);
	},

	/**
	 * A description for the pipeline.
	 *
	 * Required: false
	 * Update requires: Replacement.
	 *
	 * @param {String} value
	 * @return {DataPipelinePipeline}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * A name for the pipeline. Because AWS CloudFormation assigns each new pipeline a unique identifier, you can use the same name for multiple pipelines that are associated with your AWS account.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {DataPipelinePipeline}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * Defines the variables that are in the pipeline definition. For more information, see Creating a Pipeline Using Parameterized Templates in the AWS Data Pipeline Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSDataPipelinePipelineParameterObjects} value
	 * @return {DataPipelinePipeline}
	 */
	parameterObjects: function(value) {
		return this.set('ParameterObjects', value);
	},

	/**
	 * Defines the values for the parameters that are defined in the ParameterObjects property. For more information, see Creating a Pipeline Using Parameterized Templates in the AWS Data Pipeline Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSDataPipelinePipelineParameterValues} value
	 * @return {DataPipelinePipeline}
	 */
	parameterValues: function(value) {
		return this.set('ParameterValues', value);
	},

	/**
	 * A list of pipeline objects that make up the pipeline. For more information about pipeline objects and a description of each object, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
	 *
	 * Required: true
	 * Update requires: Some interruptions. Not all objects, fields, and values can be updated. Restrictions on what can be updated are documented in Editing Your Pipelines in the AWS Data Pipeline Developer Guide.
	 *
	 * @param {AWSDataPipelinePipelineObject[]} value
	 * @return {DataPipelinePipeline}
	 */
	pipelineObjects: function(value) {
		return this.set('PipelineObjects', value);
	},

	/**
	 * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSDataPipelinePipelinePipelineTags} value
	 * @return {DataPipelinePipeline}
	 */
	pipelineTags: function(value) {
		return this.set('PipelineTags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::DataPipeline::Pipeline has no attributes');
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

module.exports = DataPipelinePipeline;
