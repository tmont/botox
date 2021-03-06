var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::ApiGateway::RestApi - The AWS::ApiGateway::RestApi resource contains a collection of Amazon API Gateway (API Gateway) resources and methods that can be invoked through HTTPS endpoints.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayRestApi(name) {
	Resource.call(this, name, 'AWS::ApiGateway::RestApi');
}

ApiGatewayRestApi.prototype = Object.create(Resource.prototype);

/**
 * A Swagger specification that defines a set of RESTful APIs in JSON or YAML format.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.body = function(value) {
	return this.set('Body', value);
};

/**
 * The Amazon Simple Storage Service (Amazon S3) location that points to a Swagger file, which defines a set of RESTful APIs in JSON or YAML format.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {APIGatewayRestApiS3Location|Attribute|Reference} value Amazon API Gateway RestApi S3Location
 * @returns {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.bodyS3Location = function(value) {
	return this.set('BodyS3Location', value);
};

/**
 * The ID of the API Gateway RestApi resource that you want to clone.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.cloneFrom = function(value) {
	return this.set('CloneFrom', value);
};

/**
 * A description of the purpose of this API Gateway RestApi resource.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * If a warning occurs while API Gateway is creating the RestApi resource, indicates whether to roll back the resource.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.failOnWarnings = function(value) {
	return this.set('FailOnWarnings', value);
};

/**
 * A name for the API Gateway RestApi resource.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * Custom header parameters for the request.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.parameters = function(value) {
	return this.set('Parameters', value);
};

/**
 * AWS::ApiGateway::RestApi attributes
 * @constructor
 * @param {Resource} resource
 */
function ApiGatewayRestApiAttributes(resource) {
	this.resource = resource;
}
ApiGatewayRestApiAttributes.prototype = {
	/**
	 * The root resource ID for a RestApi resource, such as a0bc123d4e.
	 * @type {Attribute}
	 */
	get rootResourceId() {
		return new Attribute(this.resource, 'RootResourceId');
	}
};

/**
 * Gets attribute map for AWS::ApiGateway::RestApi
 * @returns {ApiGatewayRestApiAttributes}
 */
ApiGatewayRestApi.prototype.attr = function() {
	return new ApiGatewayRestApiAttributes(this);
};

module.exports = ApiGatewayRestApi;
