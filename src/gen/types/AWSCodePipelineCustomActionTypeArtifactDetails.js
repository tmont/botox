var PropertyType = require('../../property-type');

/**
 * ArtifactDetails is a property of the AWS::CodePipeline::CustomActionType resource that specifies the details of an artifact for an AWS CodePipeline custom action. For valid values, see ArtifactDetails in the AWS CodePipeline API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype-artifactdetails.html}
 * @constructor
 */
function AWSCodePipelineCustomActionTypeArtifactDetails() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSCodePipelineCustomActionTypeArtifactDetails, PropertyType);

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
	}
};

module.exports = AWSCodePipelineCustomActionTypeArtifactDetails;
