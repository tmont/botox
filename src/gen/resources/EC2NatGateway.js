var Resource = require('../../resource');

/**
 * AWS::EC2::NatGateway - The AWS::EC2::NatGateway resource creates a network address translation (NAT) gateway in the specified public subnet. Use a NAT gateway to allow instances in a private subnet to connect to the Internet or to other AWS services, but prevent the Internet from initiating a connection with those instances. For more information and a sample architectural diagram, see NAT Gateways in the Amazon VPC User Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2NatGateway(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2NatGateway, Resource);

EC2NatGateway.prototype = {
	
	
	/**
	 * The allocation ID of an Elastic IP address to associate with the NAT gateway. If the Elastic IP address is associated with another resource, you must first disassociate it.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2NatGateway}
	 */
	allocationId: function(value) {
		return this.set('AllocationId', value);
	},

	/**
	 * The public subnet in which to create the NAT gateway.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2NatGateway}
	 */
	subnetId: function(value) {
		return this.set('SubnetId', value);
	}
};

module.exports = EC2NatGateway;
