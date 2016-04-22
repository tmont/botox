var Resource = require('../../resource');

/**
 * AWS::RDS::DBSubnetGroup - The AWS::RDS::DBSubnetGroup type creates an RDS database subnet group. Subnet groups must contain at least two subnet in two different Availability Zones in the same region.
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBSubnetGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(RDSDBSubnetGroup, Resource);

RDSDBSubnetGroup.prototype = {
	
	
	/**
	 * The description for the DB Subnet Group.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBSubnetGroup}
	 */
	dbsubnetGroupDescription: function(value) {
		return this.set('DBSubnetGroupDescription', value);
	},

	/**
	 * The EC2 Subnet IDs for the DB Subnet Group.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {RDSDBSubnetGroup}
	 */
	subnetIds: function(value) {
		return this.set('SubnetIds', value);
	},

	/**
	 * The tags that you want to attach to the RDS database subnet group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {resourcetag[]} value
	 * @return {RDSDBSubnetGroup}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	}
};

module.exports = RDSDBSubnetGroup;
