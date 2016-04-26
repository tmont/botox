var Resource = require('../../resource');

/**
 * AWS::EC2::SpotFleet - The AWS::EC2::SpotFleet resource creates a request for a collection of Spot instances. The Spot fleet attempts to launch the number of Spot instances to meet the target capacity that you specified. For more information, see Spot Instances in the Amazon EC2 User Guide for Linux Instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SpotFleet(name) {
	Resource.call(this, name, 'AWS::EC2::SpotFleet');
}

EC2SpotFleet.prototype = Object.create(Resource.prototype);

/**
 * The configuration for a Spot fleet request.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {EC2SpotFleetSpotFleetRequestConfigData|Attribute|Reference} value Amazon EC2 SpotFleet SpotFleetRequestConfigData
 * @return {EC2SpotFleet}
 */
EC2SpotFleet.prototype.spotFleetRequestConfigData = function(value) {
	return this.set('SpotFleetRequestConfigData', value);
};

module.exports = EC2SpotFleet;
