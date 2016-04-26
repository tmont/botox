var Resource = require('../../resource');

/**
 * AWS::S3::BucketPolicy - The AWS::S3::BucketPolicy type applies an Amazon S3 bucket policy to an Amazon S3 bucket.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function S3BucketPolicy(name) {
	Resource.call(this, name, 'AWS::S3::BucketPolicy');
}

S3BucketPolicy.prototype = Object.create(Resource.prototype);

/**
 * The Amazon S3 bucket that the policy applies to.
 *
 * Required: true
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {S3BucketPolicy}
 */
S3BucketPolicy.prototype.bucket = function(value) {
	return this.set('Bucket', value);
};

/**
 * A policy document containing permissions to add to the specified bucket. For more information, see Access Policy Language Overview in the Amazon Simple Storage Service Developer Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @return {S3BucketPolicy}
 */
S3BucketPolicy.prototype.policyDocument = function(value) {
	return this.set('PolicyDocument', value);
};

module.exports = S3BucketPolicy;
