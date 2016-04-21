var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::RouteTable - Creates a new route table within a VPC. After you create a new route table, you can add routes and associate the table with a subnet.
 * @constructor
 */
function EC2RouteTable(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::RouteTable has no attributes');
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

module.exports = EC2RouteTable;
