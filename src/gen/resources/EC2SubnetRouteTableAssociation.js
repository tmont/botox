var Resource = require('../../resource');

/**
 * AWS::EC2::SubnetRouteTableAssociation - Associates a subnet with a route table.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-route-table-assoc.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SubnetRouteTableAssociation(name) {
	Resource.call(this, name, 'AWS::EC2::SubnetRouteTableAssociation');
}

EC2SubnetRouteTableAssociation.prototype = Object.create(Resource.prototype);


/**
 * The ID of the route table. This is commonly written as a reference to a route table declared elsewhere in the template. For example:
 *
 * Required: true
 * Update requires: No interruption. However, the physical ID changes when the route table ID is changed.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2SubnetRouteTableAssociation}
 */
EC2SubnetRouteTableAssociation.prototype.routeTableId = function(value) {
	return this.set('RouteTableId', value);
};

/**
 * The ID of the subnet. This is commonly written as a reference to a subnet declared elsewhere in the template. For example:
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2SubnetRouteTableAssociation}
 */
EC2SubnetRouteTableAssociation.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

module.exports = EC2SubnetRouteTableAssociation;
