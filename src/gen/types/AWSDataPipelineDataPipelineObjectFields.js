/**
 * Key-value pairs that describe the properties of a data pipeline object.
 * @constructor
 */
function AWSDataPipelineDataPipelineObjectFields(initialData) {
	this.data = initialData || {};
}

AWSDataPipelineDataPipelineObjectFields.prototype = {
	
	/**
	 * Specifies the name of a field for a particular object. To view fields for a data pipeline object, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelineDataPipelineObjectFields}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * A field value that you specify as an identifier of another object in the same pipeline definition.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSDataPipelineDataPipelineObjectFields}
	 */
	refValue: function(value) {
		return this.set('RefValue', value);
	},

	/**
	 * A field value that you specify as a string. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSDataPipelineDataPipelineObjectFields}
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

module.exports = AWSDataPipelineDataPipelineObjectFields;