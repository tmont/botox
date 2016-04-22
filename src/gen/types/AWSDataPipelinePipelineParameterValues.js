/**
 * ParameterValues is a property of the AWS::DataPipeline::Pipeline resource that sets values for parameters that are used in a pipeline definition.
 * @constructor
 */
function AWSDataPipelinePipelineParameterValues() {
	this.data = {};
}

AWSDataPipelinePipelineParameterValues.prototype = {
	
	/**
	 * The ID of a parameter object.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelinePipelineParameterValues}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * A value to associate with the parameter object.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelinePipelineParameterValues}
	 */
	stringValue: function(value) {
		return this.set('StringValue', value);
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

module.exports = AWSDataPipelinePipelineParameterValues;
