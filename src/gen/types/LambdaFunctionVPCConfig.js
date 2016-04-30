var PropertyType = require('../../property-type');

/**
 * VpcConfig is a property of the AWS::Lambda::Function resource that enables to your AWS Lambda (Lambda) function to access resources in a VPC. For more information, see Configuring a Lambda Function to Access Resources in an Amazon VPC in the AWS Lambda Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html}
 * @constructor
 */
function LambdaFunctionVPCConfig() {
	PropertyType.call(this);
}

LambdaFunctionVPCConfig.prototype = Object.create(PropertyType.prototype);

/**
 * A list of one or more security groups IDs in the VPC that includes the resources to which your Lambda function requires access.
 *
 * Required: true
 *
 * @param {String[]} value
 * @returns {LambdaFunctionVPCConfig}
 */
LambdaFunctionVPCConfig.prototype.securityGroupIds = function(value) {
	return this.set('SecurityGroupIds', value);
};

/**
 * A list of one or more subnet IDs in the VPC that includes the resources to which your Lambda function requires access.
 *
 * Required: true
 *
 * @param {String[]} value
 * @returns {LambdaFunctionVPCConfig}
 */
LambdaFunctionVPCConfig.prototype.subnetIds = function(value) {
	return this.set('SubnetIds', value);
};

module.exports = LambdaFunctionVPCConfig;
