var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Resource - The AWS::ApiGateway::Resource resource creates a resource in an Amazon API Gateway (API Gateway) API.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayResource(name) {
	Resource.call(this, name, 'AWS::ApiGateway::Resource');
}

ApiGatewayResource.prototype = Object.create(Resource.prototype);

/**
 * If you want to create a child resource, the ID of the parent resource.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayResource}
 */
ApiGatewayResource.prototype.parentId = function(value) {
	return this.set('ParentId', value);
};

/**
 * A path name for the resource.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayResource}
 */
ApiGatewayResource.prototype.pathPart = function(value) {
	return this.set('PathPart', value);
};

/**
 * The ID of the RestApi resource in which you want to create this resource.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayResource}
 */
ApiGatewayResource.prototype.restApiId = function(value) {
	return this.set('RestApiId', value);
};

module.exports = ApiGatewayResource;
