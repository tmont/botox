var Resource = require('../../resource');

/**
 * AWS::EC2::VPCGatewayAttachment - Attaches a gateway to a VPC.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCGatewayAttachment(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VPCGatewayAttachment, Resource);

EC2VPCGatewayAttachment.prototype = {
	
	
	/**
	 * The ID of the Internet gateway.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPCGatewayAttachment}
	 */
	internetGatewayId: function(value) {
		return this.set('InternetGatewayId', value);
	},

	/**
	 * The ID of the VPC to associate with this gateway.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPCGatewayAttachment}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	},

	/**
	 * The ID of the virtual private network (VPN) gateway to attach to the VPC.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPCGatewayAttachment}
	 */
	vpnGatewayId: function(value) {
		return this.set('VpnGatewayId', value);
	}
};

module.exports = EC2VPCGatewayAttachment;
