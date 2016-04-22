var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::NetworkAcl - Creates a new network ACL in a VPC.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2NetworkAcl(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EC2NetworkAcl.prototype = {
	
	/**
	 * An arbitrary set of tags (key–value pairs) for this ACL.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2NetworkAcl}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The ID of the VPC where the network ACL will be created.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2NetworkAcl}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::NetworkAcl has no attributes');
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

module.exports = EC2NetworkAcl;
