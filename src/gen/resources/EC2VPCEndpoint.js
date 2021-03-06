var Resource = require('../../resource');

/**
 * AWS::EC2::VPCEndpoint - The AWS::EC2::VPCEndpoint resource creates a VPC endpoint that you can use to establish a private connection between your VPC and another AWS service without requiring access over the Internet, a VPN connection, or AWS Direct Connect.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCEndpoint(name) {
	Resource.call(this, name, 'AWS::EC2::VPCEndpoint');
}

EC2VPCEndpoint.prototype = Object.create(Resource.prototype);

/**
 * A policy to attach to the endpoint that controls access to the service. The policy must be valid JSON. The default policy allows full access to the AWS service. For more information, see Controlling Access to Services in the Amazon VPC User Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @returns {EC2VPCEndpoint}
 */
EC2VPCEndpoint.prototype.policyDocument = function(value) {
	return this.set('PolicyDocument', value);
};

/**
 * One or more route table IDs that are used by the VPC to reach the endpoint.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {EC2VPCEndpoint}
 */
EC2VPCEndpoint.prototype.routeTableIds = function(value) {
	return this.set('RouteTableIds', value);
};

/**
 * The AWS service to which you want to establish a connection. Specify the service name in the form of com.amazonaws.region.service.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VPCEndpoint}
 */
EC2VPCEndpoint.prototype.serviceName = function(value) {
	return this.set('ServiceName', value);
};

/**
 * The ID of the VPC in which the endpoint is used.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VPCEndpoint}
 */
EC2VPCEndpoint.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

module.exports = EC2VPCEndpoint;
