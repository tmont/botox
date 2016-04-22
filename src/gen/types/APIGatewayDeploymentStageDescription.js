/**
 * StageKey is a property of the AWS::ApiGateway::Deployment resource that configures an Amazon API Gateway (API Gateway) deployment stage.
 * @constructor
 */
function APIGatewayDeploymentStageDescription() {
	this.data = {};
}

APIGatewayDeploymentStageDescription.prototype = {
	
	/**
	 * Indicates whether cache clustering is enabled for the stage.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	cacheClusterEnabled: function(value) {
		return this.set('CacheClusterEnabled', value);
	},

	/**
	 * The size of the stage's cache cluster.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	cacheClusterSize: function(value) {
		return this.set('CacheClusterSize', value);
	},

	/**
	 * The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	clientCertificateId: function(value) {
		return this.set('ClientCertificateId', value);
	},

	/**
	 * The ID of the deployment that the stage points to.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	deploymentId: function(value) {
		return this.set('DeploymentId', value);
	},

	/**
	 * A description of the purpose of the stage.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * Configures settings for all of the stage's methods.
	 *
	 * Required: false
	 *
	 * @param {APIGatewayDeploymentStageDescriptionMethodSetting} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	methodSettings: function(value) {
		return this.set('MethodSettings', value);
	},

	/**
	 * The ID of a RestApi resource that you're deploying with this stage.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	},

	/**
	 * The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	stageName: function(value) {
		return this.set('StageName', value);
	},

	/**
	 * A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.
	 *
	 * Required: false
	 *
	 * @param {key[]} value
	 * @return {APIGatewayDeploymentStageDescription}
	 */
	variables: function(value) {
		return this.set('Variables', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = APIGatewayDeploymentStageDescription;
