var Resource = require('../../resource');

/**
 * AWS::OpsWorks::App - Defines an AWS OpsWorks app for an AWS OpsWorks stack. The app represents code that you want to run on an application server.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function OpsWorksApp(name) {
	Resource.call(this, name, 'AWS::OpsWorks::App');
}

OpsWorksApp.prototype = Object.create(Resource.prototype);

/**
 * Contains the information required to retrieve an app from a repository.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {OpsWorksSourceType|Attribute|Reference} value AWS OpsWorks Source Type
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.appSource = function(value) {
	return this.set('AppSource', value);
};

/**
 * One or more user-defined key-value pairs to be added to the stack attributes bag.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value A list of key-value pairs
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.attributes = function(value) {
	return this.set('Attributes', value);
};

/**
 * A description of the app.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The app virtual host settings, with multiple domains separated by commas. For example, 'www.example.com, example.com'.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.domains = function(value) {
	return this.set('Domains', value);
};

/**
 * Whether to enable SSL for this app.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.enableSsl = function(value) {
	return this.set('EnableSsl', value);
};

/**
 * The environment variables to associate with the AWS OpsWorks app.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {OpsWorksAppEnvironment[]|Attribute|Reference} value List of AWS OpsWorks App Environment
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.environment = function(value) {
	return this.set('Environment', value);
};

/**
 * The AWS OpsWorks app name.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The app short name, which is used internally by AWS OpsWorks and by Chef recipes.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.shortname = function(value) {
	return this.set('Shortname', value);
};

/**
 * The SSL configuration
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {OpsWorksSslConfigurationType|Attribute|Reference} value AWS OpsWorks SslConfiguration Type
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.sslConfiguration = function(value) {
	return this.set('SslConfiguration', value);
};

/**
 * The AWS OpsWorks stack ID that this app will be associated with.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.stackId = function(value) {
	return this.set('StackId', value);
};

/**
 * The app type. Each supported type is associated with a particular layer. For more information, see CreateApp in the AWS OpsWorks API Reference.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {OpsWorksApp}
 */
OpsWorksApp.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = OpsWorksApp;
