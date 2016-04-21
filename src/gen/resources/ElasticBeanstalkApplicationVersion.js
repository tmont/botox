var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ElasticBeanstalk::ApplicationVersion - Creates an application version, an iteration of deployable code, for an Elastic Beanstalk application.
 * @constructor
 */
function ElasticBeanstalkApplicationVersion(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ElasticBeanstalkApplicationVersion.prototype = {
	
	/**
	 * Name of the Elastic Beanstalk application that is associated with this application version.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkApplicationVersion}
	 */
	applicationName: function(value) {
		return this.set('ApplicationName', value);
	},

	/**
	 * A description of this application version.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkApplicationVersion}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The location of the source bundle for this version.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {SourceBundle} value
	 * @return {ElasticBeanstalkApplicationVersion}
	 */
	sourceBundle: function(value) {
		return this.set('SourceBundle', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ElasticBeanstalk::ApplicationVersion has no attributes');
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

module.exports = ElasticBeanstalkApplicationVersion;
