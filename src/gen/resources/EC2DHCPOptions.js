var Resource = require('../../resource');

/**
 * AWS::EC2::DHCPOptions - Creates a set of DHCP options for your VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcp-options.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2DHCPOptions(name) {
	Resource.call(this, name, 'AWS::EC2::DHCPOptions');
}

EC2DHCPOptions.prototype = Object.create(Resource.prototype);


/**
 * A domain name of your choice.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2DHCPOptions}
 */
EC2DHCPOptions.prototype.domainName = function(value) {
	return this.set('DomainName', value);
};

/**
 * The IP (IPv4) address of a domain name server. You can specify up to four addresses.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {string[]|Attribute|Reference} value
 * @return {EC2DHCPOptions}
 */
EC2DHCPOptions.prototype.domainNameServers = function(value) {
	return this.set('DomainNameServers', value);
};

/**
 * The IP address (IPv4) of a NetBIOS name server. You can specify up to four addresses.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {string[]|Attribute|Reference} value
 * @return {EC2DHCPOptions}
 */
EC2DHCPOptions.prototype.netbiosNameServers = function(value) {
	return this.set('NetbiosNameServers', value);
};

/**
 * An integer value indicating the NetBIOS node type:
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {number[]|Attribute|Reference} value
 * @return {EC2DHCPOptions}
 */
EC2DHCPOptions.prototype.netbiosNodeType = function(value) {
	return this.set('NetbiosNodeType', value);
};

/**
 * The IP address (IPv4) of a Network Time Protocol (NTP) server. You can specify up to four addresses.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {string[]|Attribute|Reference} value
 * @return {EC2DHCPOptions}
 */
EC2DHCPOptions.prototype.ntpServers = function(value) {
	return this.set('NtpServers', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this resource.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @return {EC2DHCPOptions}
 */
EC2DHCPOptions.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = EC2DHCPOptions;
