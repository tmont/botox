/**
 * OptionSettings is an embedded property of the AWS::ElasticBeanstalk::Environment and AWS::ElasticBeanstalk::ConfigurationTemplate resources. You use the OptionSettings property to specify an array of options for the Elastic Beanstalk environment.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-option-settings.html}
 * @constructor
 */
function ElasticBeanstalkOptionSettingsPropertyType() {
	this.data = {};
}

ElasticBeanstalkOptionSettingsPropertyType.prototype = {
	
	/**
	 * A unique namespace identifying the option's associated AWS resource. For a list of namespaces that you can use, see Configuration Options in the AWS Elastic Beanstalk Developer Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkOptionSettingsPropertyType}
	 */
	namespace: function(value) {
		return this.set('Namespace', value);
	},

	/**
	 * The name of the configuration option. For a list of options that you can use, see Configuration Options in the AWS Elastic Beanstalk Developer Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkOptionSettingsPropertyType}
	 */
	optionName: function(value) {
		return this.set('OptionName', value);
	},

	/**
	 * The value of the setting.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkOptionSettingsPropertyType}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = ElasticBeanstalkOptionSettingsPropertyType;
