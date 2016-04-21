var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ApiGateway::Deployment - The AWS::ApiGateway::Deployment resource deploys an Amazon API Gateway (API Gateway) RestApi resource to a stage so that clients can call the API over the Internet. The stage acts as an environment
 * @constructor
 */
function ApiGatewayDeployment(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ApiGatewayDeployment.prototype = {
	
	/**
	 * A description of the purpose of the API Gateway deployment.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayDeployment}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The ID of the RestApi resource to deploy.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayDeployment}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	},

	/**
	 * Configures the stage that API Gateway creates with this deployment.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {APIGatewayDeploymentStageDescription} value
	 * @return {ApiGatewayDeployment}
	 */
	stageDescription: function(value) {
		return this.set('StageDescription', value);
	},

	/**
	 * A name for the stage that API Gateway creates with this deployment.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayDeployment}
	 */
	stageName: function(value) {
		return this.set('StageName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ApiGateway::Deployment has no attributes');
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

module.exports = ApiGatewayDeployment;
