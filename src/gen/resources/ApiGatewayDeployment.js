var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Deployment - The AWS::ApiGateway::Deployment resource deploys an Amazon API Gateway (API Gateway) RestApi resource to a stage so that clients can call the API over the Internet. The stage acts as an environment
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayDeployment(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ApiGatewayDeployment, Resource);

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
	}
};

module.exports = ApiGatewayDeployment;
