var Resource = require('../../resource');

/**
 * AWS::EC2::SubnetRouteTableAssociation - Associates a subnet with a route table.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SubnetRouteTableAssociation(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2SubnetRouteTableAssociation, Resource);

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
	}
};

module.exports = EC2SubnetRouteTableAssociation;
