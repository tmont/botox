var Resource = require('../../resource');

/**
 * AWS::EC2::VPNGateway - Creates a virtual private gateway. A virtual private gateway is the VPC-side endpoint for your VPN connection.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-gateway.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPNGateway(name) {
	Resource.call(this, name, 'AWS::EC2::VPNGateway');
}

EC2VPNGateway.prototype = Object.create(Resource.prototype);


/**
 * The type of VPN connection this virtual private gateway supports. The only valid value is "ipsec.1".
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPNGateway}
 */
EC2VPNGateway.prototype.type = function(value) {
	return this.set('Type', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this resource.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {AWSCloudFormationResourceTagsType[]|Attribute|Reference} value
 * @return {EC2VPNGateway}
 */
EC2VPNGateway.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = EC2VPNGateway;
