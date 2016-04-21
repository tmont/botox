/**
 * PipelineTags is a property of the AWS::DataPipeline::Pipeline resource that defines arbitrary key-value pairs for a pipeline.
 * @constructor
 */
function AWSDataPipelinePipelinePipelineTags(initialData) {
	this.data = initialData || {};
}

AWSDataPipelinePipelinePipelineTags.prototype = {
	
	/**
	 * The key name of a tag.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelinePipelinePipelineTags}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value to associate with the key name.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDataPipelinePipelinePipelineTags}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = AWSDataPipelinePipelinePipelineTags;