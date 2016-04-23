var PropertyType = require('../../property-type');

/**
 * VpcConfig is a property of the AWS::Lambda::Function resource that enables to your AWS Lambda (Lambda) function to access resources in a VPC. For more information, see Configuring a Lambda Function to Access Resources in an Amazon VPC in the AWS Lambda Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html}
 * @constructor
 */
function AWSLambdaFunctionVPCConfig() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSLambdaFunctionVPCConfig, PropertyType);

AWSLambdaFunctionVPCConfig.prototype = {
	
	/**
	 * A list of one or more security groups IDs in the VPC that includes the resources to which your Lambda function requires access.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {AWSLambdaFunctionVPCConfig}
	 */
	securityGroupIds: function(value) {
		return this.set('SecurityGroupIds', value);
	},

	/**
	 * A list of one or more subnet IDs in the VPC that includes the resources to which your Lambda function requires access.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {AWSLambdaFunctionVPCConfig}
	 */
	subnetIds: function(value) {
		return this.set('SubnetIds', value);
	}
};

module.exports = AWSLambdaFunctionVPCConfig;
