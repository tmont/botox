var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ElasticBeanstalk::Application - Creates an Elastic Beanstalk application.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticBeanstalkApplication(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ElasticBeanstalk::Application has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = ElasticBeanstalkApplication;
