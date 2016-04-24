var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Deployment - The AWS::ApiGateway::Deployment resource deploys an Amazon API Gateway (API Gateway) RestApi resource to a stage so that clients can call the API over the Internet. The stage acts as an environment
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayDeployment(name) {
	Resource.call(this, name, 'AWS::ApiGateway::Deployment');
}

ApiGatewayDeployment.prototype = Object.create(Resource.prototype);


/**
 * A description of the purpose of the API Gateway deployment.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayDeployment}
 */
ApiGatewayDeployment.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The ID of the RestApi resource to deploy.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayDeployment}
 */
ApiGatewayDeployment.prototype.restApiId = function(value) {
	return this.set('RestApiId', value);
};

/**
 * Configures the stage that API Gateway creates with this deployment.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {APIGatewayDeploymentStageDescription|Attribute|Reference} value Amazon API Gateway Deployment StageDescription
 * @return {ApiGatewayDeployment}
 */
ApiGatewayDeployment.prototype.stageDescription = function(value) {
	return this.set('StageDescription', value);
};

/**
 * A name for the stage that API Gateway creates with this deployment.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayDeployment}
 */
ApiGatewayDeployment.prototype.stageName = function(value) {
	return this.set('StageName', value);
};

module.exports = ApiGatewayDeployment;
