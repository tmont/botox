var Resource = require('../../resource');

/**
 * AWS::ApiGateway::ClientCertificate - The AWS::ApiGateway::ClientCertificate resource creates a client certificate that Amazon API Gateway (API Gateway) uses to configure client-side SSL authentication for sending requests to the integration endpoint.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayClientCertificate(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ApiGatewayClientCertificate, Resource);

ApiGatewayClientCertificate.prototype = {
	
	
	/**
	 * A description of the client certificate.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayClientCertificate}
	 */
	description: function(value) {
		return this.set('Description', value);
	}
};

module.exports = ApiGatewayClientCertificate;
