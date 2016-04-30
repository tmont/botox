var Resource = require('../../resource');

/**
 * AWS::RDS::DBSubnetGroup - The AWS::RDS::DBSubnetGroup type creates an RDS database subnet group. Subnet groups must contain at least two subnet in two different Availability Zones in the same region.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnet-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBSubnetGroup(name) {
	Resource.call(this, name, 'AWS::RDS::DBSubnetGroup');
}

RDSDBSubnetGroup.prototype = Object.create(Resource.prototype);

/**
 * The description for the DB Subnet Group.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBSubnetGroup}
 */
RDSDBSubnetGroup.prototype.dbSubnetGroupDescription = function(value) {
	return this.set('DBSubnetGroupDescription', value);
};

/**
 * The EC2 Subnet IDs for the DB Subnet Group.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {RDSDBSubnetGroup}
 */
RDSDBSubnetGroup.prototype.subnetIds = function(value) {
	return this.set('SubnetIds', value);
};

/**
 * The tags that you want to attach to the RDS database subnet group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value A list of resource tags.
 * @returns {RDSDBSubnetGroup}
 */
RDSDBSubnetGroup.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = RDSDBSubnetGroup;
