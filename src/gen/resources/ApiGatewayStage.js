var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Stage - The AWS::ApiGateway::Stage resource creates a stage for an Amazon API Gateway (API Gateway) deployment.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayStage(name) {
	Resource.call(this, name, 'AWS::ApiGateway::Stage');
}

ApiGatewayStage.prototype = Object.create(Resource.prototype);

/**
 * Indicates whether cache clustering is enabled for the stage.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.cacheClusterEnabled = function(value) {
	return this.set('CacheClusterEnabled', value);
};

/**
 * The stage's cache cluster size.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.cacheClusterSize = function(value) {
	return this.set('CacheClusterSize', value);
};

/**
 * The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.clientCertificateId = function(value) {
	return this.set('ClientCertificateId', value);
};

/**
 * The ID of the deployment that the stage points to.
 *
 * Required: true
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.deploymentId = function(value) {
	return this.set('DeploymentId', value);
};

/**
 * A description of the stage's purpose.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * Settings for all methods in the stage.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {APIGatewayStageMethodSetting|Attribute|Reference} value Amazon API Gateway Stage MethodSetting
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.methodSettings = function(value) {
	return this.set('MethodSettings', value);
};

/**
 * The ID of the RestApi resource that you're deploying with this stage.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.restApiId = function(value) {
	return this.set('RestApiId', value);
};

/**
 * The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.stageName = function(value) {
	return this.set('StageName', value);
};

/**
 * A map (string to string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {key[]|Attribute|Reference} value List of key-value pairs
 * @return {ApiGatewayStage}
 */
ApiGatewayStage.prototype.variables = function(value) {
	return this.set('Variables', value);
};

module.exports = ApiGatewayStage;
