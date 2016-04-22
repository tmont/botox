var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Stage - The AWS::ApiGateway::Stage resource creates a stage for an Amazon API Gateway (API Gateway) deployment.
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayStage(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ApiGatewayStage, Resource);

ApiGatewayStage.prototype = {
	
	
	/**
	 * Indicates whether cache clustering is enabled for the stage.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {Boolean} value
	 * @return {ApiGatewayStage}
	 */
	cacheClusterEnabled: function(value) {
		return this.set('CacheClusterEnabled', value);
	},

	/**
	 * The stage's cache cluster size.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {ApiGatewayStage}
	 */
	cacheClusterSize: function(value) {
		return this.set('CacheClusterSize', value);
	},

	/**
	 * The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {ApiGatewayStage}
	 */
	clientCertificateId: function(value) {
		return this.set('ClientCertificateId', value);
	},

	/**
	 * The ID of the deployment that the stage points to.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {ApiGatewayStage}
	 */
	deploymentId: function(value) {
		return this.set('DeploymentId', value);
	},

	/**
	 * A description of the stage's purpose.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {ApiGatewayStage}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * Settings for all methods in the stage.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {APIGatewayStageMethodSetting} value
	 * @return {ApiGatewayStage}
	 */
	methodSettings: function(value) {
		return this.set('MethodSettings', value);
	},

	/**
	 * The ID of the RestApi resource that you're deploying with this stage.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {ApiGatewayStage}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	},

	/**
	 * The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {ApiGatewayStage}
	 */
	stageName: function(value) {
		return this.set('StageName', value);
	},

	/**
	 * A map (string to string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {key[]} value
	 * @return {ApiGatewayStage}
	 */
	variables: function(value) {
		return this.set('Variables', value);
	}
};

module.exports = ApiGatewayStage;
