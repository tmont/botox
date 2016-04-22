var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::PlacementGroup - The AWS::EC2::PlacementGroup resource is a logical grouping of instances within a single Availability Zone (AZ) that enables applications to participate in a low-latency, 10 Gbps network. You create a placement group first, and then you can launch instances in the placement group.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2PlacementGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EC2PlacementGroup.prototype = {
	
	/**
	 * The placement strategy, which relates to the instance types that can be added to the placement group. For example, for the cluster strategy, you can cluster C4 instance types but not T2 instance types. For valid values, see CreatePlacementGroup in the Amazon EC2 API Reference. By default, AWS CloudFormation sets the value of this property to cluster.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2PlacementGroup}
	 */
	strategy: function(value) {
		return this.set('Strategy', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::PlacementGroup has no attributes');
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

module.exports = EC2PlacementGroup;
