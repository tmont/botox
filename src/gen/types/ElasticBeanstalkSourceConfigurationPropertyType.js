/**
 * Use settings from another Elastic Beanstalk configuration template for the AWS::ElasticBeanstalk::ConfigurationTemplate resource type.
 * @constructor
 */
function ElasticBeanstalkSourceConfigurationPropertyType(initialData) {
	this.data = initialData || {};
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
