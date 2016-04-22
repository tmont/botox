var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Lambda::Version - The AWS::Lambda::Version resource publishes a specified version of an AWS Lambda (Lambda) function. When publishing a new version of your function, Lambda copies the latest version of your function. For more information, see Introduction to AWS Lambda Versioning in the AWS Lambda Developer Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function LambdaVersion(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

LambdaVersion.prototype = {
	
	/**
	 * The SHA-256 hash of the deployment package that you want to publish. This value must match the SHA-256 hash of the $LATEST version of the function. Specify this property to validate that you are publishing the correct package.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {LambdaVersion}
	 */
	codeSha256: function(value) {
		return this.set('CodeSha256', value);
	},

	/**
	 * A description of the version you are publishing. If you don't specify a value, Lambda copies the description from the $LATEST version of the function.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {LambdaVersion}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The Lambda function for which you want to publish a version. You can specify the function's name or its Amazon Resource Name (ARN).
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LambdaVersion}
	 */
	functionName: function(value) {
		return this.set('FunctionName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * The published version of a Lambda version, such as 1.
			 */
			version: function() {
				return new Attribute(resourceName, 'Version');
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

module.exports = LambdaVersion;
