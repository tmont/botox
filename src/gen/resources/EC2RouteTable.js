var Resource = require('../../resource');

/**
 * AWS::EC2::RouteTable - Creates a new route table within a VPC. After you create a new route table, you can add routes and associate the table with a subnet.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route-table.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2RouteTable(name) {
	Resource.call(this, name, 'AWS::EC2::RouteTable');
}

EC2RouteTable.prototype = Object.create(Resource.prototype);

/**
 * The ID of the VPC where the route table will be created.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2RouteTable}
 */
EC2RouteTable.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this route table.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {EC2RouteTable}
 */
EC2RouteTable.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = EC2RouteTable;
