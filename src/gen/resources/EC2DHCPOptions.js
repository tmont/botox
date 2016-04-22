var Resource = require('../../resource');

/**
 * AWS::EC2::DHCPOptions - Creates a set of DHCP options for your VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcp-options.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2DHCPOptions(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2DHCPOptions, Resource);

EC2DHCPOptions.prototype = {
	
	
	/**
	 * A domain name of your choice.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2DHCPOptions}
	 */
	domainName: function(value) {
		return this.set('DomainName', value);
	},

	/**
	 * The IP (IPv4) address of a domain name server. You can specify up to four addresses.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {EC2DHCPOptions}
	 */
	domainNameServers: function(value) {
		return this.set('DomainNameServers', value);
	},

	/**
	 * The IP address (IPv4) of a NetBIOS name server. You can specify up to four addresses.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {EC2DHCPOptions}
	 */
	netbiosNameServers: function(value) {
		return this.set('NetbiosNameServers', value);
	},

	/**
	 * An integer value indicating the NetBIOS node type:
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {number[]} value
	 * @return {EC2DHCPOptions}
	 */
	netbiosNodeType: function(value) {
		return this.set('NetbiosNodeType', value);
	},

	/**
	 * The IP address (IPv4) of a Network Time Protocol (NTP) server. You can specify up to four addresses.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {EC2DHCPOptions}
	 */
	ntpServers: function(value) {
		return this.set('NtpServers', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2DHCPOptions}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	}
};

module.exports = EC2DHCPOptions;
