var PropertyType = require('../../property-type');

/**
 * ParameterObjects is a property of the AWS::DataPipeline::Pipeline resource that describes parameters that are used in a pipeline definition.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobjects.html}
 * @constructor
 */
function DataPipelinePipelineParameterObjects() {
	PropertyType.call(this);
}

Object.setPrototypeOf(DataPipelinePipelineParameterObjects, PropertyType);

DataPipelinePipelineParameterObjects.prototype = {
	
	/**
	 * Key-value pairs that define the attributes of the parameter object.
	 *
	 * Required: true
	 *
	 * @param {DataPipelineParameterObjectsAttributes} value
	 * @return {DataPipelinePipelineParameterObjects}
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
	 * @return {DataPipelinePipelineParameterObjects}
	 */
	id: function(value) {
		return this.set('Id', value);
	}
};

module.exports = DataPipelinePipelineParameterObjects;
