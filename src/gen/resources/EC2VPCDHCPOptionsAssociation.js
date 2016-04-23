var Resource = require('../../resource');

/**
 * AWS::EC2::VPCDHCPOptionsAssociation - Associates a set of DHCP options (that you've previously created) with the specified VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-dhcp-options-assoc.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCDHCPOptionsAssociation(name) {
	Resource.call(this, name, 'AWS::EC2::VPCDHCPOptionsAssociation');
}

EC2VPCDHCPOptionsAssociation.prototype = Object.create(Resource.prototype);


/**
 * The ID of the DHCP options you want to associate with the VPC. Specify default if you want the VPC to use no DHCP options.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPCDHCPOptionsAssociation}
 */
EC2VPCDHCPOptionsAssociation.prototype.dhcpOptionsId = function(value) {
	return this.set('DhcpOptionsId', value);
};

/**
 * The ID of the VPC to associate with this DHCP options set.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2VPCDHCPOptionsAssociation}
 */
EC2VPCDHCPOptionsAssociation.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

module.exports = EC2VPCDHCPOptionsAssociation;
