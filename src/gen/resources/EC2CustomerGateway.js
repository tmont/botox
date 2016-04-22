var Resource = require('../../resource');

/**
 * AWS::EC2::CustomerGateway - Provides information to AWS about your VPN customer gateway device.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2CustomerGateway(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2CustomerGateway, Resource);

EC2CustomerGateway.prototype = {
	
	
	/**
	 * The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {NumberBgpAsnisalwaysanintegervalue} value
	 * @return {EC2CustomerGateway}
	 */
	bgpAsn: function(value) {
		return this.set('BgpAsn', value);
	},

	/**
	 * The internet-routable IP address for the customer gateway's outside interface. The address must be static.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2CustomerGateway}
	 */
	ipAddress: function(value) {
		return this.set('IpAddress', value);
	},

	/**
	 * The tags that you want to attach to the resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTags} value
	 * @return {EC2CustomerGateway}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The type of VPN connection that this customer gateway supports.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2CustomerGateway}
	 */
	type: function(value) {
		return this.set('Type', value);
	}
};

module.exports = EC2CustomerGateway;
