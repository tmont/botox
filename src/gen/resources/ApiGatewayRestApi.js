var Resource = require('../../resource');

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
 * AWS::ApiGateway::RestApi attribute map
 * @typedef {Object} ApiGatewayRestApiAttributeMap
 * @property {Attribute} RootResourceId The root resource ID for a RestApi resource, such as a0bc123d4e.
 */
Object.defineProperty(ApiGatewayRestApi.prototype, 'attr', {
	/**
	 * @return {ApiGatewayRestApiAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The root resource ID for a RestApi resource, such as a0bc123d4e.
			 * @return {Attribute}
			 */
			get rootResourceId() {
				return createAttribute('RootResourceId');
			}
		};
	}
});

/**
 * A Swagger specification that defines a set of RESTful APIs in JSON or YAML format.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ApiGatewayRestApi}
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
 * @param {APIGatewayRestApiS3Location|Attribute|Reference} value
 * @return {ApiGatewayRestApi}
 */
ApiGatewayRestApi.prototype.bodyS3Location = function(value) {
	return this.set('BodyS3Location', value);
};

module.exports = ApiGatewayRestApi;
