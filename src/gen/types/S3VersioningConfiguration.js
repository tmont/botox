var PropertyType = require('../../property-type');

/**
 * Describes the versioning state of an AWS::S3::Bucket resource. For more information, see PUT Bucket versioning in the Amazon Simple Storage Service API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-versioningconfig.html}
 * @constructor
 */
function S3VersioningConfiguration() {
	PropertyType.call(this);
}

S3VersioningConfiguration.prototype = Object.create(PropertyType.prototype);

/**
 * The versioning state of an Amazon S3 bucket. If you enable versioning, you must suspend versioning to disable it.
 *
 * Required: true
 *
 * @param {String} value
 * @return {S3VersioningConfiguration}
 */
S3VersioningConfiguration.prototype.status = function(value) {
	return this.set('Status', value);
};

module.exports = S3VersioningConfiguration;
