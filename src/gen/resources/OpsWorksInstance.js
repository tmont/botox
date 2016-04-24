var Resource = require('../../resource');

/**
 * AWS::OpsWorks::Instance - Creates an instance for an AWS OpsWorks stack. These instances are the Amazon Elastic Compute Cloud (Amazon EC2) instances that, for example, handle the work of serving applications and balancing traffic.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function OpsWorksInstance(name) {
	Resource.call(this, name, 'AWS::OpsWorks::Instance');
}

OpsWorksInstance.prototype = Object.create(Resource.prototype);


/**
 * The ID of the custom Amazon Machine Image (AMI) to be used to create the instance. For more information about custom AMIs, see Using Custom AMIs in the AWS OpsWorks User Guide.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.amiId = function(value) {
	return this.set('AmiId', value);
};

/**
 * The instance architecture.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.architecture = function(value) {
	return this.set('Architecture', value);
};

/**
 * For scaling instances, the type of scaling. If you specify load-based scaling, do not specify a time-based scaling configuration. For valid values, see CreateInstance in the AWS OpsWorks API Reference.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.autoScalingType = function(value) {
	return this.set('AutoScalingType', value);
};

/**
 * The instance Availability Zone.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

/**
 * Whether the instance is optimized for Amazon Elastic Block Store (Amazon EBS) I/O. If you specify an Amazon EBS-optimized instance type, AWS OpsWorks enables EBS optimization by default. For more information, see Amazon EBS–Optimized Instances in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.ebsOptimized = function(value) {
	return this.set('EbsOptimized', value);
};

/**
 * Whether to install operating system and package updates when the instance boots.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.installUpdatesOnBoot = function(value) {
	return this.set('InstallUpdatesOnBoot', value);
};

/**
 * The instance type, which must be supported by AWS OpsWorks. For more information, see CreateInstance in the AWS OpsWorks API Reference.
 *
 * Required: true
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.instanceType = function(value) {
	return this.set('InstanceType', value);
};

/**
 * The IDs of the AWS OpsWorks layers to associate with this instance.
 *
 * Required: true
 * Update requires: Some interruptions
 *
 * @param {string[]|Attribute|Reference} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.layerIds = function(value) {
	return this.set('LayerIds', value);
};

/**
 * The instance operating system. For more information, see CreateInstance in the AWS OpsWorks API Reference.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.os = function(value) {
	return this.set('Os', value);
};

/**
 * The root device type of the instance.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.rootDeviceType = function(value) {
	return this.set('RootDeviceType', value);
};

/**
 * The SSH key name of the instance.
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.sshKeyName = function(value) {
	return this.set('SshKeyName', value);
};

/**
 * The ID of the AWS OpsWorks stack that this instance will be associated with.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.stackId = function(value) {
	return this.set('StackId', value);
};

/**
 * The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks to launch the instance in a different subnet.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

/**
 * The time-based scaling configuration for the instance.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {OpsWorksTimeBasedAutoScalingType|Attribute|Reference} value
 * @return {OpsWorksInstance}
 */
OpsWorksInstance.prototype.timeBasedAutoScaling = function(value) {
	return this.set('TimeBasedAutoScaling', value);
};

module.exports = OpsWorksInstance;
