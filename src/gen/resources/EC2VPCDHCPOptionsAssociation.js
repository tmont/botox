var Resource = require('../../resource');

/**
 * AWS::EC2::VPCDHCPOptionsAssociation - Associates a set of DHCP options (that you've previously created) with the specified VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-dhcp-options-assoc.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPCDHCPOptionsAssociation(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2VPCDHCPOptionsAssociation, Resource);

EC2VPCDHCPOptionsAssociation.prototype = {
	
	
	/**
	 * The ID of the DHCP options you want to associate with the VPC. Specify default if you want the VPC to use no DHCP options.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2VPCDHCPOptionsAssociation}
	 */
	dhcpOptionsId: function(value) {
		return this.set('DhcpOptionsId', value);
	},

	/**
	 * The ID of the VPC to associate with this DHCP options set.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2VPCDHCPOptionsAssociation}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	}
};

module.exports = EC2VPCDHCPOptionsAssociation;
