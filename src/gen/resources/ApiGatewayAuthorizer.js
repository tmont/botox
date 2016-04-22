var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Authorizer - The AWS::ApiGateway::Authorizer resource creates an authorization layer that Amazon API Gateway (API Gateway) activates for methods that have authorization enabled. API Gateway activates the authorizer when a client calls those methods.
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayAuthorizer(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ApiGatewayAuthorizer, Resource);

ApiGatewayAuthorizer.prototype = {
	
	
	/**
	 * The credentials required for the authorizer. To specify an AWS Identity and Access Management (IAM) role that API Gateway assumes, specify the role's Amazon Resource Name (ARN). To use resource-based permissions on the AWS Lambda (Lambda) function, specify null.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayAuthorizer}
	 */
	authorizerCredentials: function(value) {
		return this.set('AuthorizerCredentials', value);
	},

	/**
	 * The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches authorizer results. If you specify a value greater than 0, API Gateway caches the authorizer responses. By default, API Gateway sets this property to 300. The maximum value is 3600, or 1 hour.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {ApiGatewayAuthorizer}
	 */
	authorizerResultTtlInSeconds: function(value) {
		return this.set('AuthorizerResultTtlInSeconds', value);
	},

	/**
	 * The authorizer's Uniform Resource Identifier (URI). If you specify TOKEN for the authorizer's Type property, specify a Lambda function URI, which has the form arn:aws:apigateway:region:lambda:path/path. The path usually has the form /2015-03-31/functions/LambdaFunctionARN/invocations.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayAuthorizer}
	 */
	authorizerUri: function(value) {
		return this.set('AuthorizerUri', value);
	},

	/**
	 * The source of the identity in an incoming request. If you specify TOKEN for the authorizer's Type property, specify a mapping expression. The custom header mapping expression has the form method.request.header.name, where name is the name of a custom authorization header that clients submit as part of their requests.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayAuthorizer}
	 */
	identitySource: function(value) {
		return this.set('IdentitySource', value);
	},

	/**
	 * A validation expression for the incoming identity. If you specify TOKEN for the authorizer's Type property, specify a regular expression. API Gateway uses the expression to attempt to match the incoming client token, and proceeds if the token matches. If the token doesn't match, API Gateway responds with a 401 (unauthorized request) error code.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayAuthorizer}
	 */
	identityValidationExpression: function(value) {
		return this.set('IdentityValidationExpression', value);
	},

	/**
	 * A name of the authorizer.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayAuthorizer}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The ID of the RestApi resource in which API Gateway creates the authorizer.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayAuthorizer}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	},

	/**
	 * The type of the authorizer, such as TOKEN.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayAuthorizer}
	 */
	type: function(value) {
		return this.set('Type', value);
	}
};

module.exports = ApiGatewayAuthorizer;
