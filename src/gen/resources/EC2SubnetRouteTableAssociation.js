var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::SubnetRouteTableAssociation - Associates a subnet with a route table.
 * @constructor
 */
function EC2SubnetRouteTableAssociation(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2SubnetRouteTableAssociation.prototype = {
	
	/**
	 * The ID of the route table. This is commonly written as a reference to a route table declared elsewhere in the template. For example:
	 *
	 * Required: true
	 * Update requires: No interruption. However, the physical ID changes when the route table ID is changed.
	 *
	 * @param {String} value
	 * @return {EC2SubnetRouteTableAssociation}
	 */
	routeTableId: function(value) {
		return this.set('RouteTableId', value);
	},

	/**
	 * The ID of the subnet. This is commonly written as a reference to a subnet declared elsewhere in the template. For example:
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SubnetRouteTableAssociation}
	 */
	subnetId: function(value) {
		return this.set('SubnetId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::SubnetRouteTableAssociation has no attributes');
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

module.exports = EC2SubnetRouteTableAssociation;
