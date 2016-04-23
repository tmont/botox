var PropertyType = require('../../property-type');

/**
 * ParameterValues is a property of the AWS::DataPipeline::Pipeline resource that sets values for parameters that are used in a pipeline definition.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parametervalues.html}
 * @constructor
 */
function AWSDataPipelinePipelineParameterValues() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSDataPipelinePipelineParameterValues, PropertyType);

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
	}
};

module.exports = AWSDataPipelinePipelineParameterValues;
