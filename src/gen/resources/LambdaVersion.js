var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::Lambda::Version - The AWS::Lambda::Version resource publishes a specified version of an AWS Lambda (Lambda) function. When publishing a new version of your function, Lambda copies the latest version of your function. For more information, see Introduction to AWS Lambda Versioning in the AWS Lambda Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LambdaVersion(name) {
	Resource.call(this, name, 'AWS::Lambda::Version');
}

LambdaVersion.prototype = Object.create(Resource.prototype);

/**
 * The SHA-256 hash of the deployment package that you want to publish. This value must match the SHA-256 hash of the $LATEST version of the function. Specify this property to validate that you are publishing the correct package.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {LambdaVersion}
 */
LambdaVersion.prototype.codeSha256 = function(value) {
	return this.set('CodeSha256', value);
};

/**
 * A description of the version you are publishing. If you don't specify a value, Lambda copies the description from the $LATEST version of the function.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {LambdaVersion}
 */
LambdaVersion.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The Lambda function for which you want to publish a version. You can specify the function's name or its Amazon Resource Name (ARN).
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {LambdaVersion}
 */
LambdaVersion.prototype.functionName = function(value) {
	return this.set('FunctionName', value);
};

/**
 * AWS::Lambda::Version attributes
 * @constructor
 * @param {Resource} resource
 */
function LambdaVersionAttributes(resource) {
	this.resource = resource;
}
LambdaVersionAttributes.prototype = {
	/**
	 * The published version of a Lambda version, such as 1.
	 * @type {Attribute}
	 */
	get version() {
		return new Attribute(this.resource, 'Version');
	}
};

/**
 * Gets attribute map for AWS::Lambda::Version
 * @returns {LambdaVersionAttributes}
 */
LambdaVersion.prototype.attr = function() {
	return new LambdaVersionAttributes(this);
};

module.exports = LambdaVersion;
