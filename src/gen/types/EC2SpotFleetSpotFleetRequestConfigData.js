var PropertyType = require('../../property-type');

/**
 * SpotFleetRequestConfigData is a property of the AWS::EC2::SpotFleet resource that defines the configuration of a Spot fleet request.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata.html}
 * @constructor
 */
function EC2SpotFleetSpotFleetRequestConfigData() {
	PropertyType.call(this);
}

EC2SpotFleetSpotFleetRequestConfigData.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates how to allocate the target capacity across the Spot pools that you specified in the Spot fleet request. For valid values, see SpotFleetRequestConfigData in the Amazon EC2 API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.allocationStrategy = function(value) {
	return this.set('AllocationStrategy', value);
};

/**
 * Indicates whether running Spot instances are terminated if you decrease the target capacity of the Spot fleet request below the current size of the Spot fleet. For valid values, see SpotFleetRequestConfigData in the Amazon EC2 API Reference.
 *
 * Required: false
 *
 * @param {String} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.excessCapacityTerminationPolicy = function(value) {
	return this.set('ExcessCapacityTerminationPolicy', value);
};

/**
 * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants the Spot fleet the ability to bid on, launch, and terminate instances on your behalf. For more information, see Spot Fleet Prerequisites in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.iamFleetRole = function(value) {
	return this.set('IamFleetRole', value);
};

/**
 * The launch specifications for the Spot fleet request.
 *
 * Required: true
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications[]} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.launchSpecifications = function(value) {
	return this.set('LaunchSpecifications', value);
};

/**
 * The bid price per unit hour. For more information, see How Spot Fleet Works in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: true
 *
 * @param {String} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.spotPrice = function(value) {
	return this.set('SpotPrice', value);
};

/**
 * The number of units to request for the spot fleet. You can choose to set the target capacity as the number of instances or as a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. For more information, see How Spot Fleet Works in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.targetCapacity = function(value) {
	return this.set('TargetCapacity', value);
};

/**
 * Indicates whether running Spot instances are terminated when the Spot fleet request expires.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.terminateInstancesWithExpiration = function(value) {
	return this.set('TerminateInstancesWithExpiration', value);
};

/**
 * The start date and time of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). By default, Amazon Elastic Compute Cloud (Amazon EC2 ) starts fulfilling the request immediately.
 *
 * Required: false
 *
 * @param {String} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.validFrom = function(value) {
	return this.set('ValidFrom', value);
};

/**
 * The end date and time of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). After the end date and time, Amazon EC2 doesn't request new Spot instances or enable them to fulfill the request.
 *
 * Required: false
 *
 * @param {String} value
 * @return {EC2SpotFleetSpotFleetRequestConfigData}
 */
EC2SpotFleetSpotFleetRequestConfigData.prototype.validUntil = function(value) {
	return this.set('ValidUntil', value);
};

module.exports = EC2SpotFleetSpotFleetRequestConfigData;
