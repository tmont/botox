var Resource = require('../../resource');

/**
 * AWS::EC2::InternetGateway - Creates a new Internet gateway in your AWS account. After creating the Internet gateway, you then attach it to a VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internet-gateway.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2InternetGateway(name) {
	Resource.call(this, name, 'AWS::EC2::InternetGateway');
}

EC2InternetGateway.prototype = Object.create(Resource.prototype);


/**
 * An arbitrary set of tags (key–value pairs) for this resource.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @return {EC2InternetGateway}
 */
EC2InternetGateway.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = EC2InternetGateway;
