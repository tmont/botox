var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ApiGateway::ClientCertificate - The AWS::ApiGateway::ClientCertificate resource creates a client certificate that Amazon API Gateway (API Gateway) uses to configure client-side SSL authentication for sending requests to the integration endpoint.
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayClientCertificate(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ApiGateway::ClientCertificate has no attributes');
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

module.exports = ApiGatewayClientCertificate;
