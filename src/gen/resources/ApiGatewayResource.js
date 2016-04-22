var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ApiGateway::Resource - The AWS::ApiGateway::Resource resource creates a resource in an Amazon API Gateway (API Gateway) API.
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayResource(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

ApiGatewayResource.prototype = {
	
	/**
	 * If you want to create a child resource, the ID of the parent resource.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayResource}
	 */
	parentId: function(value) {
		return this.set('ParentId', value);
	},

	/**
	 * A path name for the resource.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayResource}
	 */
	pathPart: function(value) {
		return this.set('PathPart', value);
	},

	/**
	 * The ID of the RestApi resource in which you want to create this resource.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayResource}
	 */
	restApiId: function(value) {
		return this.set('RestApiId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ApiGateway::Resource has no attributes');
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

module.exports = ApiGatewayResource;
