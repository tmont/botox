var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::VPCDHCPOptionsAssociation - Associates a set of DHCP options (that you've previously created) with the specified VPC.
 * @constructor
 */
function EC2VPCDHCPOptionsAssociation(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::VPCDHCPOptionsAssociation has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EC2VPCDHCPOptionsAssociation;
