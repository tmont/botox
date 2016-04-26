var Resource = require('../../resource');

/**
 * AWS::Lambda::Permission - The AWS::Lambda::Permission resource associates a policy statement with a specific AWS Lambda (Lambda) function's access policy. The function policy grants a specific AWS service or application permission to invoke the function. For more information, see AddPermission in the AWS Lambda Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LambdaPermission(name) {
	Resource.call(this, name, 'AWS::Lambda::Permission');
}

LambdaPermission.prototype = Object.create(Resource.prototype);

/**
 * The Lambda actions that you want to allow in this statement. For example, you can specify lambda:CreateFunction to specify a certain action, or use a wildcard (lambda:*) to grant permission to all Lambda actions. For a list of actions, see Actions in the AWS Lambda Developer Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaPermission}
 */
LambdaPermission.prototype.action = function(value) {
	return this.set('Action', value);
};

/**
 * The name (physical ID) or Amazon Resource Name (ARN) of the Lambda function that you want to associate with this statement. Lambda adds this statement to the function's access policy.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaPermission}
 */
LambdaPermission.prototype.functionName = function(value) {
	return this.set('FunctionName', value);
};

/**
 * The entity for which you are granting permission to invoke the Lambda function. This entity can be any valid AWS service principal, such as s3.amazonaws.com or sns.amazonaws.com, or, if you are granting cross-account permission, an AWS account ID. For example, you might want to allow a custom application in another AWS account to push events to Lambda by invoking your function.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaPermission}
 */
LambdaPermission.prototype.principal = function(value) {
	return this.set('Principal', value);
};

/**
 * The AWS account ID (without hyphens) of the source owner. For example, if you specify an S3 bucket in the SourceArn property, this value is the bucket owner's account ID. You can use this property to ensure that all source principals are owned by a specific account.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaPermission}
 */
LambdaPermission.prototype.sourceAccount = function(value) {
	return this.set('SourceAccount', value);
};

/**
 * The ARN of a resource that is invoking your function. When granting Amazon Simple Storage Service (Amazon S3) permission to invoke your function, specify this property with the bucket ARN as its value. This ensures that events generated only from the specified bucket, not just any bucket from any AWS account that creates a mapping to your function, can invoke the function.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaPermission}
 */
LambdaPermission.prototype.sourceArn = function(value) {
	return this.set('SourceArn', value);
};

module.exports = LambdaPermission;
