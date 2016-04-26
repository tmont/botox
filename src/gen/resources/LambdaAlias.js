var Resource = require('../../resource');

/**
 * AWS::Lambda::Alias - The AWS::Lambda::Alias resource creates an alias that points to an AWS Lambda (Lambda) function that you specify. Use aliases when you want to control which version of your function other services or applications invoke. Those services or applications can use your function's alias so that they don't need to be updated whenever you release a new version of your function. For more information, see Introduction to AWS Lambda Aliases in the AWS Lambda Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LambdaAlias(name) {
	Resource.call(this, name, 'AWS::Lambda::Alias');
}

LambdaAlias.prototype = Object.create(Resource.prototype);

/**
 * Information that describes the alias, such as its purpose or the function that it's associated with.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaAlias}
 */
LambdaAlias.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The Lambda function that you want to associate with this alias. You can specify the function's name or its Amazon Resource Name (ARN).
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaAlias}
 */
LambdaAlias.prototype.functionName = function(value) {
	return this.set('FunctionName', value);
};

/**
 * The version of the Lambda function that you want to associate with this alias.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaAlias}
 */
LambdaAlias.prototype.functionVersion = function(value) {
	return this.set('FunctionVersion', value);
};

/**
 * A name for the alias.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaAlias}
 */
LambdaAlias.prototype.name = function(value) {
	return this.set('Name', value);
};

module.exports = LambdaAlias;
