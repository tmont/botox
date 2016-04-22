var Resource = require('../../resource');

/**
 * AWS::EC2::VPNGateway - Creates a virtual private gateway. A virtual private gateway is the VPC-side endpoint for your VPN connection.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNGateway(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VPNGateway, Resource);

EC2VPNGateway.prototype = {
	
	
	/**
	 * The type of VPN connection this virtual private gateway supports. The only valid value is "ipsec.1".
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPNGateway}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2VPNGateway}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	}
};

module.exports = EC2VPNGateway;
