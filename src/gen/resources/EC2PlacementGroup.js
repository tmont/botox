var Resource = require('../../resource');

/**
 * AWS::EC2::PlacementGroup - The AWS::EC2::PlacementGroup resource is a logical grouping of instances within a single Availability Zone (AZ) that enables applications to participate in a low-latency, 10 Gbps network. You create a placement group first, and then you can launch instances in the placement group.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2PlacementGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2PlacementGroup, Resource);

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
	}
};

module.exports = EC2PlacementGroup;
