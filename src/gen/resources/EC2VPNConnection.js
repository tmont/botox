var Resource = require('../../resource');

/**
 * AWS::EC2::VPNConnection - Creates a new VPN connection between an existing virtual private gateway and a VPN customer gateway.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNConnection(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VPNConnection, Resource);

EC2VPNConnection.prototype = {
	
	
	/**
	 * The type of VPN connection this virtual private gateway supports.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPNConnection}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * The ID of the customer gateway. This can either be an embedded JSON object or a reference to a Gateway ID.
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {EC2VPNConnection}
	 */
	customerGatewayId: function(value) {
		return this.set('CustomerGatewayId', value);
	},

	/**
	 * Indicates whether the VPN connection requires static routes.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {EC2VPNConnection}
	 */
	staticRoutesOnly: function(value) {
		return this.set('StaticRoutesOnly', value);
	},

	/**
	 * The tags that you want to attach to the resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTags} value
	 * @return {EC2VPNConnection}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The ID of the virtual private gateway. This can either be an embedded JSON object or a reference to a Gateway ID.
	 *
	 * Required: true
	 * Update requires: undefined
	 *
	 * @param {String} value
	 * @return {EC2VPNConnection}
	 */
	vpnGatewayId: function(value) {
		return this.set('VpnGatewayId', value);
	}
};

module.exports = EC2VPNConnection;
