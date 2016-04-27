var PropertyType = require('../../property-type');

/**
 * The SourceBundle property is an embedded property of the AWS::ElasticBeanstalk::ApplicationVersion resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-sourcebundle.html}
 * @constructor
 */
function ElasticBeanstalkSourceBundlePropertyType() {
	PropertyType.call(this);
}

ElasticBeanstalkSourceBundlePropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon S3 bucket where the data is located.
 *
 * Required: true
 *
 * @param {String} value
 * @return {ElasticBeanstalkSourceBundlePropertyType}
 */
ElasticBeanstalkSourceBundlePropertyType.prototype.s3Bucket = function(value) {
	return this.set('S3Bucket', value);
};

/**
 * The Amazon S3 key where the data is located.
 *
 * Required: true
 *
 * @param {String} value
 * @return {ElasticBeanstalkSourceBundlePropertyType}
 */
ElasticBeanstalkSourceBundlePropertyType.prototype.s3Key = function(value) {
	return this.set('S3Key', value);
};

module.exports = ElasticBeanstalkSourceBundlePropertyType;
