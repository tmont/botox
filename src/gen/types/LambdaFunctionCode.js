var PropertyType = require('../../property-type');

/**
 * Code is a property of the AWS::Lambda::Function resource that enables to you specify the source code of an AWS Lambda (Lambda) function. You can point to a file in an Amazon Simple Storage Service (Amazon S3) bucket or specify your source code as inline text (for nodejs runtime environments only).
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html}
 * @constructor
 */
function LambdaFunctionCode() {
	PropertyType.call(this);
}

Object.setPrototypeOf(LambdaFunctionCode, PropertyType);

LambdaFunctionCode.prototype = {
	
	/**
	 * The name of the S3 bucket that contains the source code of your Lambda function. The S3 bucket must be in the same region in which the stack is created.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {LambdaFunctionCode}
	 */
	s3Bucket: function(value) {
		return this.set('S3Bucket', value);
	},

	/**
	 * The location and name of your source code .zip file. If you specify this property, you must also specify the S3Bucket property.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {LambdaFunctionCode}
	 */
	s3Key: function(value) {
		return this.set('S3Key', value);
	},

	/**
	 * If you have S3 versioning enabled, the version ID of your source code .zip file. You can specify this property only if you specify a bucket location.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {LambdaFunctionCode}
	 */
	s3ObjectVersion: function(value) {
		return this.set('S3ObjectVersion', value);
	},

	/**
	 * For nodejs runtime environments, the source code of your Lambda function. You cannot use this property with other runtime environments.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {LambdaFunctionCode}
	 */
	zipFile: function(value) {
		return this.set('ZipFile', value);
	}
};

module.exports = LambdaFunctionCode;
