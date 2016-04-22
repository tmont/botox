var Resource = require('../../resource');

/**
 * AWS::ElasticBeanstalk::Application - Creates an Elastic Beanstalk application.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticBeanstalkApplication(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElasticBeanstalkApplication, Resource);

ElasticBeanstalkApplication.prototype = {
	
	
	/**
	 * A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkApplication}
	 */
	applicationName: function(value) {
		return this.set('ApplicationName', value);
	},

	/**
	 * An optional description of this application.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkApplication}
	 */
	description: function(value) {
		return this.set('Description', value);
	}
};

module.exports = ElasticBeanstalkApplication;
