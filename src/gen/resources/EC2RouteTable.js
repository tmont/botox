var Resource = require('../../resource');

/**
 * AWS::EC2::RouteTable - Creates a new route table within a VPC. After you create a new route table, you can add routes and associate the table with a subnet.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route-table.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2RouteTable(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2RouteTable, Resource);

EC2RouteTable.prototype = {
	
	
	/**
	 * The ID of the VPC where the route table will be created.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2RouteTable}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this route table.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2RouteTable}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	}
};

module.exports = EC2RouteTable;
