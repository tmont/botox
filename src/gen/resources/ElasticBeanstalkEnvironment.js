var Resource = require('../../resource');

/**
 * AWS::ElasticBeanstalk::Environment - Creates or updates an AWS Elastic Beanstalk environment.
 * @constructor
 * @param {String} name Name of the resource
 */
function ElasticBeanstalkEnvironment(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ElasticBeanstalkEnvironment, Resource);

ElasticBeanstalkEnvironment.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * The URL to the load balancer for this environment.Example:awseb-myst-myen-132MQC4KRLAMD-1371280482.us-east-1.elb.amazonaws.com
			 * @return {Attribute}
			 */
			endpointURL: function() {
				return createAttribute('EndpointURL');
			}
		};
	},

	
	/**
	 * The name of the application that is associated with this environment.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	applicationName: function(value) {
		return this.set('ApplicationName', value);
	},

	/**
	 * A prefix for your Elastic Beanstalk environment URL.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	cnameprefix: function(value) {
		return this.set('CNAMEPrefix', value);
	},

	/**
	 * A description that helps you identify this environment.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * A name for the Elastic Beanstalk environment. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the environment name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	environmentName: function(value) {
		return this.set('EnvironmentName', value);
	},

	/**
	 * Key-value pairs defining configuration options for this environment. These options override the values that are defined in the solution stack or the configuration template. If you remove any options during a stack update, the removed options revert to default values.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {OptionSetting[]} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	optionSettings: function(value) {
		return this.set('OptionSettings', value);
	},

	/**
	 * The name of an Elastic Beanstalk solution stack that this configuration will use. For more information, see Supported Platforms in the AWS Elastic Beanstalk Developer Guide. You must specify either this parameter or an Elastic Beanstalk configuration template name.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	solutionStackName: function(value) {
		return this.set('SolutionStackName', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this environment.
	 *
	 * Required: false
	 * Update requires: You can update tags only if you update another property that requires that the environment be replaced, such as the ApplicationName property.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The name of the Elastic Beanstalk configuration template to use with the environment. You must specify either this parameter or a solution stack name.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	templateName: function(value) {
		return this.set('TemplateName', value);
	},

	/**
	 * Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
	 *
	 * Required: false
	 * Update requires: See Elastic Beanstalk Environment Tier Property Type
	 *
	 * @param {ElasticBeanstalkEnvironmentTierPropertyType} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	tier: function(value) {
		return this.set('Tier', value);
	},

	/**
	 * The version to associate with the environment.
	 *
	 * Required: false
	 * Update requires: Some interruptions
	 *
	 * @param {String} value
	 * @return {ElasticBeanstalkEnvironment}
	 */
	versionLabel: function(value) {
		return this.set('VersionLabel', value);
	}
};

module.exports = ElasticBeanstalkEnvironment;
