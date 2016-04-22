var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::OpsWorks::App - Defines an AWS OpsWorks app for an AWS OpsWorks stack. The app represents code that you want to run on an application server.
 * @constructor
 * @param {String} name Name of the resource
 */
function OpsWorksApp(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

OpsWorksApp.prototype = {
	
	/**
	 * Contains the information required to retrieve an app from a repository.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksSourceType} value
	 * @return {OpsWorksApp}
	 */
	appSource: function(value) {
		return this.set('AppSource', value);
	},

	/**
	 * One or more user-defined key-value pairs to be added to the stack attributes bag.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {key[]} value
	 * @return {OpsWorksApp}
	 */
	attributes: function(value) {
		return this.set('Attributes', value);
	},

	/**
	 * A description of the app.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksApp}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The app virtual host settings, with multiple domains separated by commas. For example, 'www.example.com, example.com'.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {OpsWorksApp}
	 */
	domains: function(value) {
		return this.set('Domains', value);
	},

	/**
	 * Whether to enable SSL for this app.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksApp}
	 */
	enableSsl: function(value) {
		return this.set('EnableSsl', value);
	},

	/**
	 * The environment variables to associate with the AWS OpsWorks app.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksAppEnvironment[]} value
	 * @return {OpsWorksApp}
	 */
	environment: function(value) {
		return this.set('Environment', value);
	},

	/**
	 * The AWS OpsWorks app name.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksApp}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The app short name, which is used internally by AWS OpsWorks and by Chef recipes.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {OpsWorksApp}
	 */
	shortname: function(value) {
		return this.set('Shortname', value);
	},

	/**
	 * The SSL configuration
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSOpsWorksSslConfigurationType} value
	 * @return {OpsWorksApp}
	 */
	sslConfiguration: function(value) {
		return this.set('SslConfiguration', value);
	},

	/**
	 * The AWS OpsWorks stack ID that this app will be associated with.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {OpsWorksApp}
	 */
	stackId: function(value) {
		return this.set('StackId', value);
	},

	/**
	 * The app type. Each supported type is associated with a particular layer. For more information, see CreateApp in the AWS OpsWorks API Reference.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {OpsWorksApp}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::OpsWorks::App has no attributes');
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

module.exports = OpsWorksApp;
