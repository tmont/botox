/**
 * PipelineObjects is a property of the AWS::DataPipeline::Pipeline resource that describes a data pipeline object.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobjects.html}
 * @constructor
 */
function AWSDataPipelinePipelineObjects() {
	this.data = {};
}

AWSDataPipelinePipelineObjects.prototype = {
	
	/**
	 * Key-value pairs that define the properties of the object.
	 *
	 * Required: true
	 *
	 * @param {AWSDataPipelineDataPipelineObjectFields} value
	 * @return {AWSDataPipelinePipelineObjects}
	 */
	fields: function(value) {
		return this.set('Fields', value);
	},

	/**
	 * Identifier of the object.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelinePipelineObjects}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * Name of the object.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelinePipelineObjects}
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

module.exports = AWSDataPipelinePipelineObjects;
