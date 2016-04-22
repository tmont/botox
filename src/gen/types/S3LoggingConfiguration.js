/**
 * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for an AWS::S3::Bucket resource. These logs track requests to an Amazon S3 bucket. For more information, see PUT Bucket logging in the Amazon Simple Storage Service API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfig.html}
 * @constructor
 */
function S3LoggingConfiguration() {
	this.data = {};
}

S3LoggingConfiguration.prototype = {
	
	/**
	 * The name of an Amazon S3 bucket where Amazon S3 store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the LoggingConfiguration property is defined.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3LoggingConfiguration}
	 */
	destinationBucketName: function(value) {
		return this.set('DestinationBucketName', value);
	},

	/**
	 * A prefix for the all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3LoggingConfiguration}
	 */
	logFilePrefix: function(value) {
		return this.set('LogFilePrefix', value);
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

module.exports = S3LoggingConfiguration;
