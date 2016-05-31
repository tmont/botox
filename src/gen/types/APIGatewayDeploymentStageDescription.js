var PropertyType = require('../../property-type');

/**
 * StageDescription is a property of the AWS::ApiGateway::Deployment resource that configures an Amazon API Gateway (API Gateway) deployment stage.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-deployment-stagedescription.html}
 * @constructor
 */
function APIGatewayDeploymentStageDescription() {
	PropertyType.call(this);
}

APIGatewayDeploymentStageDescription.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether cache clustering is enabled for the stage.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.cacheClusterEnabled = function(value) {
	return this.set('CacheClusterEnabled', value);
};

/**
 * The size of the stage's cache cluster.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.cacheClusterSize = function(value) {
	return this.set('CacheClusterSize', value);
};

/**
 * The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.clientCertificateId = function(value) {
	return this.set('ClientCertificateId', value);
};

/**
 * The ID of the deployment that the stage points to.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.deploymentId = function(value) {
	return this.set('DeploymentId', value);
};

/**
 * A description of the purpose of the stage.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * Configures settings for all of the stage's methods.
 *
 * Required: false
 *
 * @param {APIGatewayDeploymentStageDescriptionMethodSetting} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.methodSettings = function(value) {
	return this.set('MethodSettings', value);
};

/**
 * The ID of a RestApi resource that you're deploying with this stage.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.restApiId = function(value) {
	return this.set('RestApiId', value);
};

/**
 * The name of the stage, which API Gateway uses as the first path segment in the invoke Uniform Resource Identifier (URI).
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.stageName = function(value) {
	return this.set('StageName', value);
};

/**
 * A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: [A-Za-z0-9-._~:/?#&amp;=,]+.
 *
 * Required: false
 *
 * @param {Object} value
 * @returns {APIGatewayDeploymentStageDescription}
 */
APIGatewayDeploymentStageDescription.prototype.variables = function(value) {
	return this.set('Variables', value);
};

module.exports = APIGatewayDeploymentStageDescription;
