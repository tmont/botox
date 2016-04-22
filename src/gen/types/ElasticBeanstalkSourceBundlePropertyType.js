/**
 * The SourceBundle property is an embedded property of the AWS::ElasticBeanstalk::ApplicationVersion resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-sourcebundle.html}
 * @constructor
 */
function ElasticBeanstalkSourceBundlePropertyType() {
	this.data = {};
}

ElasticBeanstalkSourceBundlePropertyType.prototype = {
	
	/**
	 * The Amazon S3 bucket where the data is located.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkSourceBundlePropertyType}
	 */
	s3Bucket: function(value) {
		return this.set('S3Bucket', value);
	},

	/**
	 * The Amazon S3 key where the data is located.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkSourceBundlePropertyType}
	 */
	s3Key: function(value) {
		return this.set('S3Key', value);
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

module.exports = ElasticBeanstalkSourceBundlePropertyType;
