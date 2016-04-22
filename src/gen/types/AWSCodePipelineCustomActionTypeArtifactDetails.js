/**
 * ArtifactDetails is a property of the AWS::CodePipeline::CustomActionType resource that specifies the details of an artifact for an AWS CodePipeline custom action. For valid values, see ArtifactDetails in the AWS CodePipeline API Reference.
 * @constructor
 */
function AWSCodePipelineCustomActionTypeArtifactDetails() {
	this.data = {};
}

AWSCodePipelineCustomActionTypeArtifactDetails.prototype = {
	
	/**
	 * The maximum number of artifacts allowed for the action type.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {AWSCodePipelineCustomActionTypeArtifactDetails}
	 */
	maximumCount: function(value) {
		return this.set('MaximumCount', value);
	},

	/**
	 * The minimum number of artifacts allowed for the action type.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {AWSCodePipelineCustomActionTypeArtifactDetails}
	 */
	minimumCount: function(value) {
		return this.set('MinimumCount', value);
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

module.exports = AWSCodePipelineCustomActionTypeArtifactDetails;
