var Resource = require('../../resource');

/**
 * AWS::EC2::VPCPeeringConnection - A VPC peering connection enables a network connection between two virtual private clouds (VPCs) so that you can route traffic between them by means of a private IP addresses. For more information about VPC peering and its limitation, see VPC Peering Overview in the Amazon VPC Peering Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCPeeringConnection(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VPCPeeringConnection, Resource);

EC2VPCPeeringConnection.prototype = {
	
	
	/**
	 * The ID of the VPC with which you are creating the peering connection.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPCPeeringConnection}
	 */
	peerVpcId: function(value) {
		return this.set('PeerVpcId', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2VPCPeeringConnection}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The ID of the VPC that is requesting a peering connection.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPCPeeringConnection}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	}
};

module.exports = EC2VPCPeeringConnection;
