var PropertyType = require('../../property-type');

/**
 * Describes the information required to retrieve a cookbook or app from a repository for the AWS::OpsWorks::Stack or AWS::OpsWorks::App resource types. For more information, see Source in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html}
 * @constructor
 */
function OpsWorksSourceType() {
	PropertyType.call(this);
}

OpsWorksSourceType.prototype = Object.create(PropertyType.prototype);

/**
 * This parameter depends on the repository type. For Amazon S3 bundles, set Password to the appropriate IAM secret access key. For HTTP bundles, Git repositories, and Subversion repositories, set Password to the appropriate password.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {OpsWorksSourceType}
 */
OpsWorksSourceType.prototype.password = function(value) {
	return this.set('Password', value);
};

/**
 * The application's version. With AWS OpsWorks, you can deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {OpsWorksSourceType}
 */
OpsWorksSourceType.prototype.revision = function(value) {
	return this.set('Revision', value);
};

/**
 * The repository's SSH key. For more information, see Using Git Repository SSH Keys in the AWS OpsWorks User Guide.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {OpsWorksSourceType}
 */
OpsWorksSourceType.prototype.sshKey = function(value) {
	return this.set('SshKey', value);
};

/**
 * The repository type.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {OpsWorksSourceType}
 */
OpsWorksSourceType.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * The source URL.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {OpsWorksSourceType}
 */
OpsWorksSourceType.prototype.url = function(value) {
	return this.set('Url', value);
};

/**
 * This parameter depends on the repository type. For Amazon S3 bundles, set Username to the appropriate IAM access key ID. For HTTP bundles, Git repositories, and Subversion repositories, set Username to the appropriate user name.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {OpsWorksSourceType}
 */
OpsWorksSourceType.prototype.username = function(value) {
	return this.set('Username', value);
};

module.exports = OpsWorksSourceType;
