var PropertyType = require('../../property-type');

/**
 * LaunchSpecifications is a property of the Amazon EC2 SpotFleet SpotFleetRequestConfigData property that defines the launch specifications for the Spot fleet request.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications.html}
 * @constructor
 */
function ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications() {
	PropertyType.call(this);
}

ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype = Object.create(PropertyType.prototype);

/**
 * Defines the block devices that are mapped to the Spot instances.
 *
 * Required: false
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings[]} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.blockDeviceMappings = function(value) {
	return this.set('BlockDeviceMappings', value);
};

/**
 * Indicates whether the instances are optimized for Amazon Elastic Block Store (Amazon EBS) I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when you use an Amazon EBS-optimized instance.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.ebsOptimized = function(value) {
	return this.set('EbsOptimized', value);
};

/**
 * Defines the AWS Identity and Access Management (IAM) instance profile to associate with the instances.
 *
 * Required: false
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.iamInstanceProfile = function(value) {
	return this.set('IamInstanceProfile', value);
};

/**
 * The unique ID of the Amazon Machine Image (AMI) to launch on the instances.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.imageId = function(value) {
	return this.set('ImageId', value);
};

/**
 * Specifies the instance type of the EC2 instances.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.instanceType = function(value) {
	return this.set('InstanceType', value);
};

/**
 * The ID of the kernel that is associated with the Amazon Elastic Compute Cloud (Amazon EC2) AMI.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.kernelId = function(value) {
	return this.set('KernelId', value);
};

/**
 * An Amazon EC2 key pair to associate with the instances.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.keyName = function(value) {
	return this.set('KeyName', value);
};

/**
 * Enable or disable monitoring for the instances.
 *
 * Required: false
 *
 * @param {EC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.monitoring = function(value) {
	return this.set('Monitoring', value);
};

/**
 * The network interfaces to associate with the instances.
 *
 * Required: false
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces[]} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.networkInterfaces = function(value) {
	return this.set('NetworkInterfaces', value);
};

/**
 * Defines a placement group, which is a logical grouping of instances within a single Availability Zone (AZ).
 *
 * Required: false
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.placement = function(value) {
	return this.set('Placement', value);
};

/**
 * The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.ramdiskId = function(value) {
	return this.set('RamdiskId', value);
};

/**
 * One or more security group IDs to associate with the instances.
 *
 * Required: false
 *
 * @param {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups[]} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.securityGroups = function(value) {
	return this.set('SecurityGroups', value);
};

/**
 * The ID of the subnet in which to launch the instances.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

/**
 * Base64-encoded MIME user data that instances use when starting up.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.userData = function(value) {
	return this.set('UserData', value);
};

/**
 * The number of units provided by the specified instance type. These units are the same units that you chose to set the target capacity in terms of instances or a performance characteristic, such as vCPUs, memory, or I/O. For more information, see How Spot Fleet Works in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications}
 */
ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications.prototype.weightedCapacity = function(value) {
	return this.set('WeightedCapacity', value);
};

module.exports = ElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications;
