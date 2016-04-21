/**
 * VpcConfig is a property of the AWS::Lambda::Function resource that enables to your AWS Lambda (Lambda) function to access resources in a VPC. For more information, see Configuring a Lambda Function to Access Resources in an Amazon VPC in the AWS Lambda Developer Guide.
 * @constructor
 */
function AWSLambdaFunctionVPCConfig(initialData) {
	this.data = initialData || {};
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = AWSLambdaFunctionVPCConfig;
