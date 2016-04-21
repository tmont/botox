var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ApiGateway::ApiKey - The AWS::ApiGateway::ApiKey resource creates a unique key that you can distribute to clients who are executing Amazon API Gateway (API Gateway) Method resources that require an API key. To specify which API key clients must use, map the API key with the RestApi and Stage resources that include the methods requiring a key.
 * @constructor
 */
function ApiGatewayApiKey(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ApiGatewayApiKey.prototype = {
	
	/**
	 * A description of the purpose of the API key.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayApiKey}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * Indicates whether the API key can be used by clients.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {ApiGatewayApiKey}
	 */
	enabled: function(value) {
		return this.set('Enabled', value);
	},

	/**
	 * A name for the API key. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the API key name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {ApiGatewayApiKey}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * A list of stages to associated with this API key.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {APIGatewayApiKeyStageKey[]} value
	 * @return {ApiGatewayApiKey}
	 */
	stageKeys: function(value) {
		return this.set('StageKeys', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ApiGateway::ApiKey has no attributes');
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

module.exports = ApiGatewayApiKey;