var PropertyType = require('../../property-type');

/**
 * Key-value pairs that describe the properties of a data pipeline object.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobjects-fields.html}
 * @constructor
 */
function DataPipelineDataPipelineObjectFields() {
	PropertyType.call(this);
}

DataPipelineDataPipelineObjectFields.prototype = Object.create(PropertyType.prototype);

/**
 * Specifies the name of a field for a particular object. To view fields for a data pipeline object, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {DataPipelineDataPipelineObjectFields}
 */
DataPipelineDataPipelineObjectFields.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * A field value that you specify as an identifier of another object in the same pipeline definition.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {DataPipelineDataPipelineObjectFields}
 */
DataPipelineDataPipelineObjectFields.prototype.refValue = function(value) {
	return this.set('RefValue', value);
};

/**
 * A field value that you specify as a string. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {DataPipelineDataPipelineObjectFields}
 */
DataPipelineDataPipelineObjectFields.prototype.stringValue = function(value) {
	return this.set('StringValue', value);
};

module.exports = DataPipelineDataPipelineObjectFields;
