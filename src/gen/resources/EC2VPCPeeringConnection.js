var Resource = require('../../resource');

/**
 * AWS::EC2::VPCPeeringConnection - A VPC peering connection enables a network connection between two virtual private clouds (VPCs) so that you can route traffic between them by means of a private IP addresses. For more information about VPC peering and its limitation, see VPC Peering Overview in the Amazon VPC Peering Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCPeeringConnection(name) {
	Resource.call(this, name, 'AWS::EC2::VPCPeeringConnection');
}

EC2VPCPeeringConnection.prototype = Object.create(Resource.prototype);


/**
 * The ID of the VPC with which you are creating the peering connection.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPCPeeringConnection}
 */
EC2VPCPeeringConnection.prototype.peerVpcId = function(value) {
	return this.set('PeerVpcId', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this resource.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value
 * @return {EC2VPCPeeringConnection}
 */
EC2VPCPeeringConnection.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * The ID of the VPC that is requesting a peering connection.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPCPeeringConnection}
 */
EC2VPCPeeringConnection.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

module.exports = EC2VPCPeeringConnection;
