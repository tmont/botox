var Resource = require('../../resource');

/**
 * AWS::EC2::SpotFleet - The AWS::EC2::SpotFleet resource creates a request for a collection of Spot instances. The Spot fleet attempts to launch the number of Spot instances to meet the target capacity that you specified. For more information, see Spot Instances in the Amazon EC2 User Guide for Linux Instances.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SpotFleet(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2SpotFleet, Resource);

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
	}
};

module.exports = EC2SpotFleet;
