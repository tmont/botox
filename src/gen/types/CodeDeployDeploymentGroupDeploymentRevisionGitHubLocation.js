var PropertyType = require('../../property-type');

/**
 * GitHubLocation is a property of the AWS CodeDeploy DeploymentGroup Deployment Revision property that specifies the location of an application revision that is stored in GitHub.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision-githublocation.html}
 * @constructor
 */
function CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation() {
	PropertyType.call(this);
}

CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation.prototype = Object.create(PropertyType.prototype);

/**
 * The SHA1 commit ID of the GitHub commit to use as your application revision.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation}
 */
CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation.prototype.commitId = function(value) {
	return this.set('CommitId', value);
};

/**
 * The GitHub account and repository name that includes the application revision. Specify the value as account/repository_name.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation}
 */
CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation.prototype.repository = function(value) {
	return this.set('Repository', value);
};

module.exports = CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation;
