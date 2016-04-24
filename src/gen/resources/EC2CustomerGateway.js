var Resource = require('../../resource');

/**
 * AWS::EC2::CustomerGateway - Provides information to AWS about your VPN customer gateway device.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2CustomerGateway(name) {
	Resource.call(this, name, 'AWS::EC2::CustomerGateway');
}

EC2CustomerGateway.prototype = Object.create(Resource.prototype);


/**
 * The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {NumberBgpAsnisalwaysanintegervalue|Attribute|Reference} value
 * @return {EC2CustomerGateway}
 */
EC2CustomerGateway.prototype.bgpAsn = function(value) {
	return this.set('BgpAsn', value);
};

/**
 * The internet-routable IP address for the customer gateway's outside interface. The address must be static.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2CustomerGateway}
 */
EC2CustomerGateway.prototype.ipAddress = function(value) {
	return this.set('IpAddress', value);
};

/**
 * The tags that you want to attach to the resource.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value
 * @return {EC2CustomerGateway}
 */
EC2CustomerGateway.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * The type of VPN connection that this customer gateway supports.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2CustomerGateway}
 */
EC2CustomerGateway.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = EC2CustomerGateway;
