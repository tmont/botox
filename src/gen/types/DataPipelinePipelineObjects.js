var PropertyType = require('../../property-type');

/**
 * PipelineObjects is a property of the AWS::DataPipeline::Pipeline resource that describes a data pipeline object.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobjects.html}
 * @constructor
 */
function DataPipelinePipelineObjects() {
	PropertyType.call(this);
}

DataPipelinePipelineObjects.prototype = Object.create(PropertyType.prototype);

/**
 * Key-value pairs that define the properties of the object.
 *
 * Required: true
 *
 * @param {DataPipelineDataPipelineObjectFields} value
 * @return {DataPipelinePipelineObjects}
 */
DataPipelinePipelineObjects.prototype.fields = function(value) {
	return this.set('Fields', value);
};

/**
 * Identifier of the object.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DataPipelinePipelineObjects}
 */
DataPipelinePipelineObjects.prototype.id = function(value) {
	return this.set('Id', value);
};

/**
 * Name of the object.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DataPipelinePipelineObjects}
 */
DataPipelinePipelineObjects.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = DataPipelinePipelineObjects;
