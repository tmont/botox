var Resource = require('../../resource');

/**
 * AWS::ElasticBeanstalk::ConfigurationTemplate - Creates a configuration template for an Elastic Beanstalk application. You can use configuration templates to deploy different versions of an application by using the configuration settings that you define in the configuration template.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-beanstalk-configurationtemplate.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticBeanstalkConfigurationTemplate(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElasticBeanstalkConfigurationTemplate, Resource);

ElasticBeanstalkConfigurationTemplate.prototype = {
	
	
	/**
	 * Name of the Elastic Beanstalk application that is associated with this configuration template.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkConfigurationTemplate}
	 */
	applicationName: function(value) {
		return this.set('ApplicationName', value);
	},

	/**
	 * An optional description for this configuration.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkConfigurationTemplate}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * An environment whose settings you want to use to create the configuration template. You must specify this property if you don't specify the SolutionStackName or SourceConfiguration properties.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkConfigurationTemplate}
	 */
	environmentId: function(value) {
		return this.set('EnvironmentId', value);
	},

	/**
	 * A list of OptionSettings for this Elastic Beanstalk configuration. For a complete list of Elastic Beanstalk configuration options, see Option Values, in the AWS Elastic Beanstalk Developer Guide.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {OptionSetting[]} value
	 * @return {ElasticBeanstalkConfigurationTemplate}
	 */
	optionSettings: function(value) {
		return this.set('OptionSettings', value);
	},

	/**
	 * The name of an Elastic Beanstalk solution stack that this configuration will use. A solution stack specifies the operating system, architecture, and application server for a configuration template, such as 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. For more information, see Supported Platforms in the AWS Elastic Beanstalk Developer Guide.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkConfigurationTemplate}
	 */
	solutionStackName: function(value) {
		return this.set('SolutionStackName', value);
	},

	/**
	 * A configuration template that is associated with another Elastic Beanstalk application. If you specify the SolutionStackName property and the SourceConfiguration property, the solution stack in the source configuration template must match the value that you specified for the SolutionStackName property.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {ElasticBeanstalkSourceConfigurationPropertyType} value
	 * @return {ElasticBeanstalkConfigurationTemplate}
	 */
	sourceConfiguration: function(value) {
		return this.set('SourceConfiguration', value);
	}
};

module.exports = ElasticBeanstalkConfigurationTemplate;
