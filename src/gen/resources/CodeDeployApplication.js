var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CodeDeploy::Application - The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application. An application revision, deployment configuration, and deployment group must all be included in an AWS CodeDeploy application. For more information, see AWS CodeDeploy Deployments in the AWS CodeDeploy User Guide.
 * @constructor
 */
function CodeDeployApplication(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

CodeDeployApplication.prototype = {
	
	/**
	 * A name for the application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {CodeDeployApplication}
	 */
	applicationName: function(value) {
		return this.set('ApplicationName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::CodeDeploy::Application has no attributes');
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

module.exports = CodeDeployApplication;
