/**
 * The SourceBundle property is an embedded property of the AWS::ElasticBeanstalk::ApplicationVersion resource.
 * @constructor
 */
function ElasticBeanstalkSourceBundlePropertyType(initialData) {
	this.data = initialData || {};
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
