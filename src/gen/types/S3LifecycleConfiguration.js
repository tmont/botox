/**
 * Describes the lifecycle configuration for objects in an AWS::S3::Bucket resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig.html}
 * @constructor
 */
function S3LifecycleConfiguration() {
	this.data = {};
}

S3LifecycleConfiguration.prototype = {
	
	/**
	 * A lifecycle rule for individual objects in an S3 bucket.
	 *
	 * Required: true
	 *
	 * @param {S3LifecycleRule} value
	 * @return {S3LifecycleConfiguration}
	 */
	rules: function(value) {
		return this.set('Rules', value);
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

module.exports = S3LifecycleConfiguration;
