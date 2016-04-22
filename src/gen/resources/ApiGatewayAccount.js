var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::ApiGateway::Account - The AWS::ApiGateway::Account resource specifies the AWS Identity and Access Management (IAM) role that Amazon API Gateway (API Gateway) uses to write API logs to Amazon CloudWatch Logs (CloudWatch Logs).
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayAccount(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

ApiGatewayAccount.prototype = {
	
	/**
	 * The Amazon Resource Name (ARN) of an IAM role that has write access to CloudWatch Logs in your account.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ApiGatewayAccount}
	 */
	cloudWatchRoleArn: function(value) {
		return this.set('CloudWatchRoleArn', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::ApiGateway::Account has no attributes');
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

module.exports = ApiGatewayAccount;
