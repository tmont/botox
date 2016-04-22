var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ApiGateway::RestApi - The AWS::ApiGateway::RestApi resource contains a collection of Amazon API Gateway (API Gateway) resources and methods that can be invoked through HTTPS endpoints.
 * @constructor
 */
function ApiGatewayRestApi(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ApiGatewayRestApi.prototype = {
	
	/**
	 * A Swagger specification that defines a set of RESTful APIs in JSON or YAML format.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayRestApi}
	 */
	body: function(value) {
		return this.set('Body', value);
	},

	/**
	 * The Amazon Simple Storage Service (Amazon S3) location that points to a Swagger file, which defines a set of RESTful APIs in JSON or YAML format.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {APIGatewayRestApiS3Location} value
	 * @return {ApiGatewayRestApi}
	 */
	bodyS3Location: function(value) {
		return this.set('BodyS3Location', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * The root resource ID for a RestApi resource, such as a0bc123d4e.
			 */
			rootResourceId: function() {
				return new Attribute(resourceName, 'RootResourceId');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = ApiGatewayRestApi;
