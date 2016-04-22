/**
 * ParameterObjects is a property of the AWS::DataPipeline::Pipeline resource that describes parameters that are used in a pipeline definition.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobjects.html}
 * @constructor
 */
function AWSDataPipelinePipelineParameterObjects() {
	this.data = {};
}

AWSDataPipelinePipelineParameterObjects.prototype = {
	
	/**
	 * Key-value pairs that define the attributes of the parameter object.
	 *
	 * Required: true
	 *
	 * @param {AWSDataPipelineParameterObjectsAttributes} value
	 * @return {AWSDataPipelinePipelineParameterObjects}
	 */
	attributes: function(value) {
		return this.set('Attributes', value);
	},

	/**
	 * The identifier of the parameter object.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelinePipelineParameterObjects}
	 */
	id: function(value) {
		return this.set('Id', value);
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

module.exports = AWSDataPipelinePipelineParameterObjects;
