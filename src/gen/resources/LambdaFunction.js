var Resource = require('../../resource');

/**
 * AWS::Lambda::Function - The AWS::Lambda::Function resource creates an AWS Lambda (Lambda) function that can run code in response to events. For more information, see CreateFunction in the AWS Lambda Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LambdaFunction(name) {
	Resource.call(this, name, 'AWS::Lambda::Function');
}

LambdaFunction.prototype = Object.create(Resource.prototype);

/**
 * AWS::Lambda::Function attribute map
 * @typedef {Object} LambdaFunctionAttributeMap
 * @property {Attribute} arn The ARN of the Lambda function, such as arn:aws:lambda:us-west-2:123456789012:MyStack-AMILookUp-NT5EUXTNTXXD.
 */
Object.defineProperty(LambdaFunction.prototype, 'attr', {
	/**
	 * @return {LambdaFunctionAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The ARN of the Lambda function, such as arn:aws:lambda:us-west-2:123456789012:MyStack-AMILookUp-NT5EUXTNTXXD.
			 * @return {Attribute}
			 */
			get arn() {
				return createAttribute('Arn');
			}
		};
	}
});

/**
 * The source code of your Lambda function. You can point to a file in an Amazon Simple Storage Service (Amazon S3) bucket or specify your source code as inline text.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {LambdaFunctionCode|Attribute|Reference} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.code = function(value) {
	return this.set('Code', value);
};

/**
 * A description of the function.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * A name for the function. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.functionName = function(value) {
	return this.set('FunctionName', value);
};

/**
 * The name of the function (within your source code) that Lambda calls to start running your code. For more information, see the Handler property in the AWS Lambda Developer Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.handler = function(value) {
	return this.set('Handler', value);
};

/**
 * The amount of memory, in MB, that is allocated to your Lambda function. Lambda uses this value to proportionally allocate the amount of CPU power. For more information, see Resource Model in the AWS Lambda Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.memorySize = function(value) {
	return this.set('MemorySize', value);
};

/**
 * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) execution role that Lambda assumes when it runs your code to access AWS services.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.role = function(value) {
	return this.set('Role', value);
};

/**
 * The runtime environment for the Lambda function that you are uploading. For valid values, see the Runtime property in the AWS Lambda Developer Guide.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.runtime = function(value) {
	return this.set('Runtime', value);
};

/**
 * The function execution time (in seconds) after which Lambda terminates the function. Because the execution time affects cost, set this value based on the function's expected execution time. By default, Timeout is set to 3 seconds.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.timeout = function(value) {
	return this.set('Timeout', value);
};

/**
 * If the Lambda function requires access to resources in a VPC, specify a VPC configuration that Lambda uses to set up an elastic network interface (ENI). The ENI enables your function to connect to other resources in your VPC, but it doesn't provide public Internet access. If your function requires Internet access (for example, to access AWS services that don't have VPC endpoints), configure a Network Address Translation (NAT) instance inside your VPC or use an Amazon Virtual Private Cloud (Amazon VPC) NAT gateway. For more information, see NAT Gateways in the Amazon VPC User Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {LambdaFunctionVPCConfig|Attribute|Reference} value
 * @return {LambdaFunction}
 */
LambdaFunction.prototype.vpcConfig = function(value) {
	return this.set('VpcConfig', value);
};

module.exports = LambdaFunction;
