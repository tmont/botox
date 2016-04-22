/**
 * GitHubLocation is a property of the AWS CodeDeploy DeploymentGroup Deployment Revision property that specifies the location of an application revision that is stored in GitHub.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision-githublocation.html}
 * @constructor
 */
function AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation() {
	this.data = {};
}

AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation.prototype = {
	
	/**
	 * The SHA1 commit ID of the GitHub commit to use as your application revision.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation}
	 */
	commitId: function(value) {
		return this.set('CommitId', value);
	},

	/**
	 * The GitHub account and repository name that includes the application revision. Specify the value as account/repository_name.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation}
	 */
	repository: function(value) {
		return this.set('Repository', value);
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

module.exports = AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation;
