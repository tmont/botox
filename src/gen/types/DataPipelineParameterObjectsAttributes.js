var PropertyType = require('../../property-type');

/**
 * Attribute is a property of the AWS Data Pipeline Pipeline ParameterObjects property that defines the attributes of a parameter object as key-value pairs.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobjects-attributes.html}
 * @constructor
 */
function DataPipelineParameterObjectsAttributes() {
	PropertyType.call(this);
}

DataPipelineParameterObjectsAttributes.prototype = Object.create(PropertyType.prototype);

/**
 * Specifies the name of a parameter attribute. To view parameter attributes, see Creating a Pipeline Using Parameterized Templates in the AWS Data Pipeline Developer Guide.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DataPipelineParameterObjectsAttributes}
 */
DataPipelineParameterObjectsAttributes.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * A parameter attribute value.
 *
 * Required: false
 *
 * @param {String} value
 * @return {DataPipelineParameterObjectsAttributes}
 */
DataPipelineParameterObjectsAttributes.prototype.stringValue = function(value) {
	return this.set('StringValue', value);
};

module.exports = DataPipelineParameterObjectsAttributes;
