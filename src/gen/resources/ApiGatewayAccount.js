var Resource = require('../../resource');

/**
 * AWS::ApiGateway::Account - The AWS::ApiGateway::Account resource specifies the AWS Identity and Access Management (IAM) role that Amazon API Gateway (API Gateway) uses to write API logs to Amazon CloudWatch Logs (CloudWatch Logs).
 * @constructor
 * @param {String} name Name of the resource
 */
function ApiGatewayAccount(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(ApiGatewayAccount, Resource);

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
	}
};

module.exports = ApiGatewayAccount;
