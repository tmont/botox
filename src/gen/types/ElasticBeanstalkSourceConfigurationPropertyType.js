var PropertyType = require('../../property-type');

/**
 * Use settings from another Elastic Beanstalk configuration template for the AWS::ElasticBeanstalk::ConfigurationTemplate resource type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-configurationtemplate-sourceconfiguration.html}
 * @constructor
 */
function ElasticBeanstalkSourceConfigurationPropertyType() {
	PropertyType.call(this);
}

ElasticBeanstalkSourceConfigurationPropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the Elastic Beanstalk application that contains the configuration template that you want to use.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticBeanstalkSourceConfigurationPropertyType}
 */
ElasticBeanstalkSourceConfigurationPropertyType.prototype.applicationName = function(value) {
	return this.set('ApplicationName', value);
};

/**
 * The name of the configuration template.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticBeanstalkSourceConfigurationPropertyType}
 */
ElasticBeanstalkSourceConfigurationPropertyType.prototype.templateName = function(value) {
	return this.set('TemplateName', value);
};

module.exports = ElasticBeanstalkSourceConfigurationPropertyType;
