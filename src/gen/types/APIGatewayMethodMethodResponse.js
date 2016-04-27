var PropertyType = require('../../property-type');

/**
 * MethodResponse is a property of the AWS::ApiGateway::Method resource that defines the responses that can be sent to the client who calls an Amazon API Gateway (API Gateway) method.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-methodresponse.html}
 * @constructor
 */
function APIGatewayMethodMethodResponse() {
	PropertyType.call(this);
}

APIGatewayMethodMethodResponse.prototype = Object.create(PropertyType.prototype);

/**
 * The resources used for the response's content type. Specify response models as key-value pairs (string-to-string maps), with a content type as the key and a Model resource name as the value.
 *
 * Required: false
 *
 * @param {key[]} value
 * @return {APIGatewayMethodMethodResponse}
 */
APIGatewayMethodMethodResponse.prototype.responseModels = function(value) {
	return this.set('ResponseModels', value);
};

/**
 * Response parameters that API Gateway sends to the client that called a method. Specify response parameters as key-value pairs (string-to-Boolean maps), with a destination as the key and a Boolean as the value. Specify the destination using the following pattern: method.response.header.name, where the name is a valid, unique header name. The Boolean specifies whether a parameter is required.
 *
 * Required: false
 *
 * @param {key[]} value
 * @return {APIGatewayMethodMethodResponse}
 */
APIGatewayMethodMethodResponse.prototype.responseParameters = function(value) {
	return this.set('ResponseParameters', value);
};

/**
 * The method response's status code, which you map to an IntegrationResponse.
 *
 * Required: false
 *
 * @param {String} value
 * @return {APIGatewayMethodMethodResponse}
 */
APIGatewayMethodMethodResponse.prototype.statusCode = function(value) {
	return this.set('StatusCode', value);
};

module.exports = APIGatewayMethodMethodResponse;
