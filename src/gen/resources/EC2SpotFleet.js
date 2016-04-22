var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::SpotFleet - The AWS::EC2::SpotFleet resource creates a request for a collection of Spot instances. The Spot fleet attempts to launch the number of Spot instances to meet the target capacity that you specified. For more information, see Spot Instances in the Amazon EC2 User Guide for Linux Instances.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SpotFleet(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

EC2SpotFleet.prototype = {
	
	/**
	 * The configuration for a Spot fleet request.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {EC2SpotFleetSpotFleetRequestConfigData} value
	 * @return {EC2SpotFleet}
	 */
	spotFleetRequestConfigData: function(value) {
		return this.set('SpotFleetRequestConfigData', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::EC2::SpotFleet has no attributes');
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

module.exports = EC2SpotFleet;
