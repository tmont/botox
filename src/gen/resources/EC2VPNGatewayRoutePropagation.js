var Resource = require('../../resource');

/**
 * AWS::EC2::VPNGatewayRoutePropagation - Enables a virtual private gateway (VGW) to propagate routes to the routing tables of a VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gatewayrouteprop.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNGatewayRoutePropagation(name) {
	Resource.call(this, name, 'AWS::EC2::VPNGatewayRoutePropagation');
}

EC2VPNGatewayRoutePropagation.prototype = Object.create(Resource.prototype);

/**
 * A list of routing table IDs that are associated with a VPC. The routing tables must be associated with the same VPC that the virtual private gateway is attached to.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value List of route table IDs
 * @returns {EC2VPNGatewayRoutePropagation}
 */
EC2VPNGatewayRoutePropagation.prototype.routeTableIds = function(value) {
	return this.set('RouteTableIds', value);
};

/**
 * The ID of the virtual private gateway that is attached to a VPC. The virtual private gateway must be attached to the same VPC that the routing tables are associated with.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VPNGatewayRoutePropagation}
 */
EC2VPNGatewayRoutePropagation.prototype.vpnGatewayId = function(value) {
	return this.set('VpnGatewayId', value);
};

module.exports = EC2VPNGatewayRoutePropagation;
