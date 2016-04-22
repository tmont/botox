/**
 * Use settings from another Elastic Beanstalk configuration template for the AWS::ElasticBeanstalk::ConfigurationTemplate resource type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-configurationtemplate-sourceconfiguration.html}
 * @constructor
 */
function ElasticBeanstalkSourceConfigurationPropertyType() {
	this.data = {};
}

ElasticBeanstalkSourceConfigurationPropertyType.prototype = {
	
	/**
	 * The name of the Elastic Beanstalk application that contains the configuration template that you want to use.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkSourceConfigurationPropertyType}
	 */
	applicationName: function(value) {
		return this.set('ApplicationName', value);
	},

	/**
	 * The name of the configuration template.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkSourceConfigurationPropertyType}
	 */
	templateName: function(value) {
		return this.set('TemplateName', value);
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

module.exports = ElasticBeanstalkSourceConfigurationPropertyType;
