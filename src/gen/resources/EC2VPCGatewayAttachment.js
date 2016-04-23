var Resource = require('../../resource');

/**
 * AWS::EC2::VPCGatewayAttachment - Attaches a gateway to a VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCGatewayAttachment(name) {
	Resource.call(this, name, 'AWS::EC2::VPCGatewayAttachment');
}

EC2VPCGatewayAttachment.prototype = Object.create(Resource.prototype);


/**
 * The ID of the Internet gateway.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPCGatewayAttachment}
 */
EC2VPCGatewayAttachment.prototype.internetGatewayId = function(value) {
	return this.set('InternetGatewayId', value);
};

/**
 * The ID of the VPC to associate with this gateway.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPCGatewayAttachment}
 */
EC2VPCGatewayAttachment.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

/**
 * The ID of the virtual private network (VPN) gateway to attach to the VPC.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPCGatewayAttachment}
 */
EC2VPCGatewayAttachment.prototype.vpnGatewayId = function(value) {
	return this.set('VpnGatewayId', value);
};

module.exports = EC2VPCGatewayAttachment;
