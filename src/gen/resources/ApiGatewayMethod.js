var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Method - The AWS::ApiGateway::Method resource creates Amazon API Gateway (API Gateway) methods that define the parameters and body that clients must send in their requests.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayMethod(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ApiGatewayMethod, Resource);

ApiGatewayMethod.prototype = {
	
	
	/**
	 * Indicates whether the method requires clients to submit a valid API key.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {ApiGatewayMethod}
	 */
	apiKeyRequired: function(value) {
		return this.set('ApiKeyRequired', value);
	},

	/**
	 * The method's authorization type.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayMethod}
	 */
	authorizationType: function(value) {
		return this.set('AuthorizationType', value);
	},

	/**
	 * The identifier of the authorizer to use on this method. If you specify this property, specify CUSTOM for the AuthorizationType property.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayMethod}
	 */
	authorizerId: function(value) {
		return this.set('AuthorizerId', value);
	},

	/**
	 * The HTTP method that clients will use to call this method.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayMethod}
	 */
	httpMethod: function(value) {
		return this.set('HttpMethod', value);
	},

	/**
	 * The back-end system that the method calls when it receives a request.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {APIGatewayMethodIntegration} value
	 * @return {ApiGatewayMethod}
	 */
	integration: function(value) {
		return this.set('Integration', value);
	},

	/**
	 * The responses that can be sent to the client who calls the method.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {APIGatewayMethodMethodResponse[]} value
	 * @return {ApiGatewayMethod}
	 */
	methodResponses: function(value) {
		return this.set('MethodResponses', value);
	},

	/**
	 * The resources used for the response's content type. Specify response models as key-value pairs (string-to-string maps), with a content type as the key and a Model resource name as the value.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {key[]} value
	 * @return {ApiGatewayMethod}
	 */
	requestModels: function(value) {
		return this.set('RequestModels', value);
	},

	/**
	 * Request parameters that API Gateway accepts. Specify request parameters as key-value pairs (string-to-Boolean maps), with a source as the key and a Boolean as the value. The Boolean specifies whether a parameter is required. A source must match the following format method.request.location.name, where the location is a query string, path, or header, and name is a valid, unique parameter name.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {key[]} value
	 * @return {ApiGatewayMethod}
	 */
	requestParameters: function(value) {
		return this.set('RequestParameters', value);
	},

	/**
	 * The ID of an API Gateway resource.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayMethod}
	 */
	resourceId: function(value) {
		return this.set('ResourceId', value);
	},

	/**
	 * The ID of the RestApi resource in which API Gateway creates the method.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayMethod}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	}
};

module.exports = ApiGatewayMethod;
