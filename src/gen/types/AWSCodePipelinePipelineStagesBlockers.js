var PropertyType = require('../../property-type');

/**
 * Blockers is a property of the AWS CodePipeline Pipeline Stages property that specifies an AWS CodePipeline gate declaration.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-blockers.html}
 * @constructor
 */
function AWSCodePipelinePipelineStagesBlockers() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSCodePipelinePipelineStagesBlockers, PropertyType);

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
	}
};

module.exports = AWSCodePipelinePipelineStagesBlockers;
