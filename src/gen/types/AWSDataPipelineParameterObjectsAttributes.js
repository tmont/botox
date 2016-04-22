/**
 * Attribute is a property of the AWS Data Pipeline Pipeline ParameterObjects property that defines the attributes of a parameter object as key-value pairs.
 * @constructor
 */
function AWSDataPipelineParameterObjectsAttributes() {
	this.data = {};
}

AWSDataPipelineParameterObjectsAttributes.prototype = {
	
	/**
	 * Specifies the name of a parameter attribute. To view parameter attributes, see Creating a Pipeline Using Parameterized Templates in the AWS Data Pipeline Developer Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelineParameterObjectsAttributes}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * A parameter attribute value.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSDataPipelineParameterObjectsAttributes}
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

module.exports = AWSDataPipelineParameterObjectsAttributes;
