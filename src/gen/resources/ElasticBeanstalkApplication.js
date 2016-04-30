var Resource = require('../../resource');

/**
 * AWS::ElasticBeanstalk::Application - Creates an Elastic Beanstalk application.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticBeanstalkApplication(name) {
	Resource.call(this, name, 'AWS::ElasticBeanstalk::Application');
}

ElasticBeanstalkApplication.prototype = Object.create(Resource.prototype);

/**
 * A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElasticBeanstalkApplication}
 */
ElasticBeanstalkApplication.prototype.applicationName = function(value) {
	return this.set('ApplicationName', value);
};

/**
 * An optional description of this application.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ElasticBeanstalkApplication}
 */
ElasticBeanstalkApplication.prototype.description = function(value) {
	return this.set('Description', value);
};

module.exports = ElasticBeanstalkApplication;
