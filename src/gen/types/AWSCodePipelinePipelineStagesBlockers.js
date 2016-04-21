/**
 * Blockers is a property of the AWS CodePipeline Pipeline Stages property that specifies an AWS CodePipeline gate declaration.
 * @constructor
 */
function AWSCodePipelinePipelineStagesBlockers(initialData) {
	this.data = initialData || {};
}

AWSCodePipelinePipelineStagesBlockers.prototype = {
	
	/**
	 * The name of the gate declaration.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesBlockers}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The type of gate declaration. For valid values, see BlockerDeclaration in the AWS CodePipeline API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesBlockers}
	 */
	type: function(value) {
		return this.set('Type', value);
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

module.exports = AWSCodePipelinePipelineStagesBlockers;
