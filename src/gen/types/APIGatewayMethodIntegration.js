var PropertyType = require('../../property-type');

/**
 * Integration is a property of the AWS::ApiGateway::Method resource that specifies information about the target back end that an Amazon API Gateway (API Gateway) method calls.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration.html}
 * @constructor
 */
function APIGatewayMethodIntegration() {
	PropertyType.call(this);
}

APIGatewayMethodIntegration.prototype = Object.create(PropertyType.prototype);

/**
 * A list of request parameters whose values API Gateway will cache.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.cacheKeyParameters = function(value) {
	return this.set('CacheKeyParameters', value);
};

/**
 * An API-specific tag group of related cached parameters.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.cacheNamespace = function(value) {
	return this.set('CacheNamespace', value);
};

/**
 * The credentials required for the integration. To specify an AWS Identity and Access Management (IAM) role that API Gateway assumes, specify the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::\*:user/\*.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.credentials = function(value) {
	return this.set('Credentials', value);
};

/**
 * The integration's HTTP method type.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.integrationHttpMethod = function(value) {
	return this.set('IntegrationHttpMethod', value);
};

/**
 * The response that API Gateway provides after a method's back end completes processing a request. API Gateway intercepts the back end's response so that you can control how API Gateway surfaces back-end responses. For example, you can map the back-end status codes to codes that you define.
 *
 * Required: false
 *
 * @param {APIGatewayMethodIntegrationIntegrationResponse[]} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.integrationResponses = function(value) {
	return this.set('IntegrationResponses', value);
};

/**
 * The request parameters that API Gateway sends with the back-end request. Specify request parameters as key-value pairs (string-to-string maps), with a destination as the key and a source as the value.
 *
 * Required: false
 *
 * @param {key[]} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.requestParameters = function(value) {
	return this.set('RequestParameters', value);
};

/**
 * A map of Apache Velocity templates that are applied on the request payload. The template that API Gateway uses is based on the value of the Content-Type header sent by the client. The content type value is the key, and the template is the value (specified as a string), such as the following snippet:
 *
 * Required: false
 *
 * @param {key[]} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.requestTemplates = function(value) {
	return this.set('RequestTemplates', value);
};

/**
 * The type of back end your method is running, such as HTTP, AWS (for Lambda functions), or MOCK.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * The integration's Uniform Resource Identifier (URI).
 *
 * Required: false
 *
 * @param {String} value
 * @returns {APIGatewayMethodIntegration}
 */
APIGatewayMethodIntegration.prototype.uri = function(value) {
	return this.set('Uri', value);
};

module.exports = APIGatewayMethodIntegration;
