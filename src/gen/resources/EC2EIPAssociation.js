var Resource = require('../../resource');

/**
 * AWS::EC2::EIPAssociation - The AWS::EC2::EIPAssociation resource type associates an Elastic IP address with an Amazon EC2 instance. The Elastic IP address can be an existing Elastic IP address or an Elastic IP address allocated through an AWS::EC2::EIP resource.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2EIPAssociation(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2EIPAssociation, Resource);

EC2EIPAssociation.prototype = {
	
	
	/**
	 * Allocation ID for the VPC Elastic IP address you want to associate with an Amazon EC2 instance in your VPC.
	 *
	 * Required: false
	 * Update requires: Replacement if you also change the InstanceId or NetworkInterfaceId property. If not, update requires No interruption.
	 *
	 * @param {String} value
	 * @return {EC2EIPAssociation}
	 */
	allocationId: function(value) {
		return this.set('AllocationId', value);
	},

	/**
	 * Elastic IP address that you want to associate with the Amazon EC2 instance specified by the InstanceId property. You can specify an existing Elastic IP address or a reference to an Elastic IP address allocated with a AWS::EC2::EIP resource.
	 *
	 * Required: false
	 * Update requires: Replacement if you also change the InstanceId or NetworkInterfaceId property. If not, update requires No interruption.
	 *
	 * @param {String} value
	 * @return {EC2EIPAssociation}
	 */
	eip: function(value) {
		return this.set('EIP', value);
	},

	/**
	 * Instance ID of the Amazon EC2 instance that you want to associate with the Elastic IP address specified by the EIP property.
	 *
	 * Required: false
	 * Update requires: Replacement if you also change the AllocationId or EIP property. If not, update requires No interruption.
	 *
	 * @param {String} value
	 * @return {EC2EIPAssociation}
	 */
	instanceId: function(value) {
		return this.set('InstanceId', value);
	},

	/**
	 * The ID of the network interface to associate with the Elastic IP address (VPC only).
	 *
	 * Required: false
	 * Update requires: Replacement if you also change the AllocationId or EIP property. If not, update requires No interruption.
	 *
	 * @param {String} value
	 * @return {EC2EIPAssociation}
	 */
	networkInterfaceId: function(value) {
		return this.set('NetworkInterfaceId', value);
	},

	/**
	 * The private IP address that you want to associate with the Elastic IP address. The private IP address is restricted to the primary and secondary private IP addresses that are associated with the network interface. By default, the private IP address that is associated with the EIP is the primary private IP address of the network interface.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2EIPAssociation}
	 */
	privateIpAddress: function(value) {
		return this.set('PrivateIpAddress', value);
	}
};

module.exports = EC2EIPAssociation;
