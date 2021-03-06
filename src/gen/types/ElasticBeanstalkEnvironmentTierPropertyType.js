var PropertyType = require('../../property-type');

/**
 * Describes the environment tier for an AWS::ElasticBeanstalk::Environment resource. For more information, see Environment Tiers in the AWS Elastic Beanstalk Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment-tier.html}
 * @constructor
 */
function ElasticBeanstalkEnvironmentTierPropertyType() {
	PropertyType.call(this);
}

ElasticBeanstalkEnvironmentTierPropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the environment tier. You can specify WebServer or Worker.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticBeanstalkEnvironmentTierPropertyType}
 */
ElasticBeanstalkEnvironmentTierPropertyType.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The type of this environment tier. You can specify Standard for the WebServer tier or SQS/HTTP for the Worker tier.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticBeanstalkEnvironmentTierPropertyType}
 */
ElasticBeanstalkEnvironmentTierPropertyType.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * The version of this environment tier.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticBeanstalkEnvironmentTierPropertyType}
 */
ElasticBeanstalkEnvironmentTierPropertyType.prototype.version = function(value) {
	return this.set('Version', value);
};

module.exports = ElasticBeanstalkEnvironmentTierPropertyType;
