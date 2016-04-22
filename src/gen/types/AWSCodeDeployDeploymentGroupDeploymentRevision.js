/**
 * Revision is a property of the AWS::CodeDeploy::DeploymentGroup property that defines the location of the AWS CodeDeploy application revision to deploy.
 * @constructor
 */
function AWSCodeDeployDeploymentGroupDeploymentRevision() {
	this.data = {};
}

AWSCodeDeployDeploymentGroupDeploymentRevision.prototype = {
	
	/**
	 * If your application revision is stored in GitHub, information about the location where it is stored.
	 *
	 * Required: false
	 *
	 * @param {AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevision}
	 */
	gitHubLocation: function(value) {
		return this.set('GitHubLocation', value);
	},

	/**
	 * The application revision's location, such as in an S3 bucket or GitHub repository. For valid values, see RevisionLocation in the AWS CodeDeploy API Reference.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevision}
	 */
	revisionType: function(value) {
		return this.set('RevisionType', value);
	},

	/**
	 * If the application revision is stored in an S3 bucket, information about the location.
	 *
	 * Required: false
	 *
	 * @param {AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevision}
	 */
	s3Location: function(value) {
		return this.set('S3Location', value);
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

module.exports = AWSCodeDeployDeploymentGroupDeploymentRevision;
