var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::SubnetNetworkAclAssociation - Associates a subnet with a network ACL.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SubnetNetworkAclAssociation(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EC2SubnetNetworkAclAssociation.prototype = {
	
	/**
	 * The ID representing the current association between the original network ACL and the subnet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SubnetNetworkAclAssociation}
	 */
	subnetId: function(value) {
		return this.set('SubnetId', value);
	},

	/**
	 * The ID of the new ACL to associate with the subnet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SubnetNetworkAclAssociation}
	 */
	networkAclId: function(value) {
		return this.set('NetworkAclId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * Returns the value of this object's SubnetId property.
			 */
			associationId: function() {
				return new Attribute(self, 'AssociationId');
			}
		};
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

module.exports = EC2SubnetNetworkAclAssociation;
