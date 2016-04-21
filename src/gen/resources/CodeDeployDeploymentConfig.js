var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CodeDeploy::DeploymentConfig - The AWS::CodeDeploy::DeploymentConfig resource creates a set of deployment rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy uses during a deployment.
 * @constructor
 */
function CodeDeployDeploymentConfig(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

CodeDeployDeploymentConfig.prototype = {
	
	/**
	 * A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {CodeDeployDeploymentConfig}
	 */
	deploymentConfigName: function(value) {
		return this.set('DeploymentConfigName', value);
	},

	/**
	 * The minimum number of healthy instances that must be available at any time during an AWS CodeDeploy deployment. For example, for a fleet of nine instances, if you specify a minimum of six healthy instances, AWS CodeDeploy deploys your application up to three instances at a time so that you always have six healthy instances. The deployment succeeds if your application successfully deploys to six or more instances; otherwise, the deployment fails.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {AWSCodeDeployDeploymentConfigMinimumHealthyHosts} value
	 * @return {CodeDeployDeploymentConfig}
	 */
	minimumHealthyHosts: function(value) {
		return this.set('MinimumHealthyHosts', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::CodeDeploy::DeploymentConfig has no attributes');
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

module.exports = CodeDeployDeploymentConfig;
