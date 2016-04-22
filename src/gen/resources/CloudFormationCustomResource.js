var Resource = require('../../resource');

/**
 * AWS::CloudFormation::CustomResource - In an AWS CloudFormation template, you use the AWS::CloudFormation::CustomResource or Custom::String resource type to specify custom resources.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationCustomResource(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(CloudFormationCustomResource, Resource);

CloudFormationCustomResource.prototype = {
	
	
	/**
	 * The service token that was given to the template developer by the service provider to access the service, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same region in which you are creating the stack.
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {CloudFormationCustomResource}
	 */
	serviceToken: function(value) {
		return this.set('ServiceToken', value);
	}
};

module.exports = CloudFormationCustomResource;
