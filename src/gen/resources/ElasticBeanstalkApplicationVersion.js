var Resource = require('../../resource');

/**
 * AWS::ElasticBeanstalk::ApplicationVersion - Creates an application version, an iteration of deployable code, for an Elastic Beanstalk application.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-version.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticBeanstalkApplicationVersion(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElasticBeanstalkApplicationVersion, Resource);

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
	}
};

module.exports = ElasticBeanstalkApplicationVersion;
