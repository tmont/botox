var PropertyType = require('../../property-type');

/**
 * Revision is a property of the AWS::CodeDeploy::DeploymentGroup property that defines the location of the AWS CodeDeploy application revision to deploy.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision.html}
 * @constructor
 */
function CodeDeployDeploymentGroupDeploymentRevision() {
	PropertyType.call(this);
}

CodeDeployDeploymentGroupDeploymentRevision.prototype = Object.create(PropertyType.prototype);

/**
 * If your application revision is stored in GitHub, information about the location where it is stored.
 *
 * Required: false
 *
 * @param {CodeDeployDeploymentGroupDeploymentRevisionGitHubLocation} value
 * @return {CodeDeployDeploymentGroupDeploymentRevision}
 */
CodeDeployDeploymentGroupDeploymentRevision.prototype.gitHubLocation = function(value) {
	return this.set('GitHubLocation', value);
};

/**
 * The application revision's location, such as in an S3 bucket or GitHub repository. For valid values, see RevisionLocation in the AWS CodeDeploy API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @return {CodeDeployDeploymentGroupDeploymentRevision}
 */
CodeDeployDeploymentGroupDeploymentRevision.prototype.revisionType = function(value) {
	return this.set('RevisionType', value);
};

/**
 * If the application revision is stored in an S3 bucket, information about the location.
 *
 * Required: false
 *
 * @param {CodeDeployDeploymentGroupDeploymentRevisionS3Location} value
 * @return {CodeDeployDeploymentGroupDeploymentRevision}
 */
CodeDeployDeploymentGroupDeploymentRevision.prototype.s3Location = function(value) {
	return this.set('S3Location', value);
};

module.exports = CodeDeployDeploymentGroupDeploymentRevision;
