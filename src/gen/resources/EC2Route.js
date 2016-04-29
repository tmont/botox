var Resource = require('../../resource');

/**
 * AWS::EC2::Route - Creates a new route in a route table within a VPC. The route's target can be either a gateway attached to the VPC or a NAT instance in the VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2Route(name) {
	Resource.call(this, name, 'AWS::EC2::Route');
}

EC2Route.prototype = Object.create(Resource.prototype);

/**
 * The CIDR address block used for the destination match. For example, 0.0.0.0/0. Routing decisions are based on the most specific match.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Route}
 */
EC2Route.prototype.destinationCidrBlock = function(value) {
	return this.set('DestinationCidrBlock', value);
};

/**
 * The ID of an Internet gateway or virtual private gateway that is attached to your VPC. For example: igw-eaad4883.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Route}
 */
EC2Route.prototype.gatewayId = function(value) {
	return this.set('GatewayId', value);
};

/**
 * The ID of a NAT instance in your VPC. For example, i-1a2b3c4d.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Route}
 */
EC2Route.prototype.instanceId = function(value) {
	return this.set('InstanceId', value);
};

/**
 * The ID of a NAT gateway. For example, nat-0a12bc456789de0fg.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Route}
 */
EC2Route.prototype.natGatewayId = function(value) {
	return this.set('NatGatewayId', value);
};

/**
 * Allows the routing of network interface IDs.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Route}
 */
EC2Route.prototype.networkInterfaceId = function(value) {
	return this.set('NetworkInterfaceId', value);
};

/**
 * The ID of the route table where the route will be added.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Route}
 */
EC2Route.prototype.routeTableId = function(value) {
	return this.set('RouteTableId', value);
};

/**
 * The ID of a VPC peering connection.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Route}
 */
EC2Route.prototype.vpcPeeringConnectionId = function(value) {
	return this.set('VpcPeeringConnectionId', value);
};

module.exports = EC2Route;
