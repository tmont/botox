/**
 * S3Location is a property of the AWS CodeDeploy DeploymentGroup Deployment Revision property that specifies the location of an application revision that is stored in Amazon Simple Storage Service (Amazon S3).
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision-s3location.html}
 * @constructor
 */
function AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location() {
	this.data = {};
}

AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location.prototype = {
	
	/**
	 * The name of the S3 bucket where the application revision is stored.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location}
	 */
	bucket: function(value) {
		return this.set('Bucket', value);
	},

	/**
	 * The file type of the application revision, such as tar, tgz, or zip. For valid values, see S3Location in the AWS CodeDeploy API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location}
	 */
	bundleType: function(value) {
		return this.set('BundleType', value);
	},

	/**
	 * The Amazon S3 ETag (a file checksum) of the application revision. If you don't specify a value, AWS CodeDeploy skips the ETag validation of your application revision.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location}
	 */
	etag: function(value) {
		return this.set('ETag', value);
	},

	/**
	 * The file name of the application revision (Amazon S3 object name).
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * For versioning-enabled buckets, a specific version of the application revision.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location}
	 */
	version: function(value) {
		return this.set('Version', value);
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

module.exports = AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location;
