var Resource = require('../../resource');

/**
 * AWS::ApiGateway::BasePathMapping - The AWS::ApiGateway::BasePathMapping resource creates a base path that clients who call your Amazon API Gateway API must use in the invocation URL.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayBasePathMapping(name) {
	Resource.call(this, name, 'AWS::ApiGateway::BasePathMapping');
}

ApiGatewayBasePathMapping.prototype = Object.create(Resource.prototype);

/**
 * The base path name that callers of the API must provide in the URL after the domain name.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayBasePathMapping}
 */
ApiGatewayBasePathMapping.prototype.basePath = function(value) {
	return this.set('BasePath', value);
};

/**
 * The name of a DomainName resource.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayBasePathMapping}
 */
ApiGatewayBasePathMapping.prototype.domainName = function(value) {
	return this.set('DomainName', value);
};

/**
 * The name of the API.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayBasePathMapping}
 */
ApiGatewayBasePathMapping.prototype.restApiId = function(value) {
	return this.set('RestApiId', value);
};

/**
 * The name of the API's stage.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayBasePathMapping}
 */
ApiGatewayBasePathMapping.prototype.stage = function(value) {
	return this.set('Stage', value);
};

module.exports = ApiGatewayBasePathMapping;
