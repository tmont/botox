var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::EC2::Instance - The AWS::EC2::Instance resource creates an EC2 instance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2Instance(name) {
	Resource.call(this, name, 'AWS::EC2::Instance');
}

EC2Instance.prototype = Object.create(Resource.prototype);

/**
 * Indicates whether Amazon Elastic Compute Cloud (Amazon EC2) always associates the instance with a dedicated host. If you want Amazon EC2 to always restart the instance (if it was stopped) onto the same host on which it was launched, specify host. If you want Amazon EC2 to restart the instance on any available host, but to try to launch the instance onto the last host it ran on (on a best-effort basis), specify default.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.affinity = function(value) {
	return this.set('Affinity', value);
};

/**
 * Specifies the name of the Availability Zone in which the instance is located.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

/**
 * Defines a set of Amazon Elastic Block Store block device mappings, ephemeral instance store block device mappings, or both. For more information, see Amazon Elastic Block Store or Amazon EC2 Instance Store in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: false
 * Update requires: Replacement. If you change only the DeleteOnTermination property for one or more block devices, update requires No interruption.
 *
 * @param {EC2BlockDeviceMappingProperty[]|Attribute|Reference} value A list of Amazon EC2 Block Device Mapping Property.
 * @returns {EC2Instance}
 */
EC2Instance.prototype.blockDeviceMappings = function(value) {
	return this.set('BlockDeviceMappings', value);
};

/**
 * Specifies whether the instance can be terminated through the API.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.disableApiTermination = function(value) {
	return this.set('DisableApiTermination', value);
};

/**
 * Specifies whether the instance is optimized for Amazon Elastic Block Store I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance.
 *
 * Required: false
 * Update requires: Some interruptions for Amazon EBS-backed instances
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.ebsOptimized = function(value) {
	return this.set('EbsOptimized', value);
};

/**
 * If you specify host for the Affinity property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account. This type of launch is called an untargeted launch. Note that for untargeted launches, you must have a compatible, dedicated host available to successfully launch instances.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.hostId = function(value) {
	return this.set('HostId', value);
};

/**
 * The physical ID (resource name) of an instance profile or a reference to an AWS::IAM::InstanceProfile resource.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.iamInstanceProfile = function(value) {
	return this.set('IamInstanceProfile', value);
};

/**
 * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.imageId = function(value) {
	return this.set('ImageId', value);
};

/**
 * Indicates whether an instance stops or terminates when you shut down the instance from the instance's operating system shutdown command. You can specify stop or terminate. For more information, see the RunInstances command in the Amazon EC2 API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.instanceInitiatedShutdownBehavior = function(value) {
	return this.set('InstanceInitiatedShutdownBehavior', value);
};

/**
 * The instance type, such as t2.micro. The default type is "m1.small". For a list of instance types, see Instance Families and Types.
 *
 * Required: false
 * Update requires: Some interruptions for Amazon EBS-backed instances
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.instanceType = function(value) {
	return this.set('InstanceType', value);
};

/**
 * The kernel ID.
 *
 * Required: false
 * Update requires: Some interruptions for Amazon EBS-backed instances
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.kernelId = function(value) {
	return this.set('KernelId', value);
};

/**
 * Provides the name of the Amazon EC2 key pair.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.keyName = function(value) {
	return this.set('KeyName', value);
};

/**
 * Specifies whether monitoring is enabled for the instance.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.monitoring = function(value) {
	return this.set('Monitoring', value);
};

/**
 * A list of embedded objects that describe the network interfaces to associate with this instance.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {EC2NetworkInterfaceEmbeddedPropertyType[]|Attribute|Reference} value A list of EC2 NetworkInterface Embedded Property Type
 * @returns {EC2Instance}
 */
EC2Instance.prototype.networkInterfaces = function(value) {
	return this.set('NetworkInterfaces', value);
};

/**
 * The name of an existing placement group that you want to launch the instance into (for cluster instances).
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.placementGroupName = function(value) {
	return this.set('PlacementGroupName', value);
};

/**
 * The private IP address for this instance.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.privateIpAddress = function(value) {
	return this.set('PrivateIpAddress', value);
};

/**
 * The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the AWS Resource Center and search for the kernel ID.
 *
 * Required: false
 * Update requires: Some interruptions for Amazon EBS-backed instances
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.ramdiskId = function(value) {
	return this.set('RamdiskId', value);
};

/**
 * A list that contains the security group IDs for VPC security groups to assign to the Amazon EC2 instance. If you specified the NetworkInterfaces property, do not specify this property.
 *
 * Required: false
 * Update requires: No interruption for instances that are in a VPC.
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.securityGroupIds = function(value) {
	return this.set('SecurityGroupIds', value);
};

/**
 * Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security groups to assign to the Amazon EC2 instance. The list can contain both the name of existing Amazon EC2 security groups or references to AWS::EC2::SecurityGroup resources created in the template.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.securityGroups = function(value) {
	return this.set('SecurityGroups', value);
};

/**
 * Controls whether source/destination checking is enabled on the instance. Also determines if an instance in a VPC will perform network address translation (NAT).
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.sourceDestCheck = function(value) {
	return this.set('SourceDestCheck', value);
};

/**
 * The Amazon EC2 Simple Systems Manager (SSM) document and parameter values to associate with this instance. To use this property, you must specify an IAM role for the instance. For more information, see Prerequisites for Remotely Running Commands on EC2 Instances in the Amazon EC2 User Guide for Microsoft Windows Instances.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {EC2InstanceSsmAssociations[]|Attribute|Reference} value List of Amazon EC2 Instance SsmAssociations.
 * @returns {EC2Instance}
 */
EC2Instance.prototype.ssmAssociations = function(value) {
	return this.set('SsmAssociations', value);
};

/**
 * If you're using Amazon VPC, this property specifies the ID of the subnet that you want to launch the instance into. If you specified the NetworkInterfaces property, do not specify this property.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this instance.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {EC2Instance}
 */
EC2Instance.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * The tenancy of the instance that you want to launch, such as default, dedicated, or host. If you specify a tenancy value of dedicated or host, you must launch the instance in a VPC. For more information, see Dedicated Instances in the Amazon VPC User Guide.
 *
 * Required: false
 * Update requires: No interruption if this property was set to dedicated and you change it to host or vice versa.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.tenancy = function(value) {
	return this.set('Tenancy', value);
};

/**
 * Base64-encoded MIME user data that is made available to the instances.
 *
 * Required: false
 * Update requires: Some interruptions for Amazon EBS-backed instances.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.userData = function(value) {
	return this.set('UserData', value);
};

/**
 * The Amazon EBS volumes to attach to the instance.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {EC2MountPointPropertyType[]|Attribute|Reference} value A list of EC2 MountPoints.
 * @returns {EC2Instance}
 */
EC2Instance.prototype.volumes = function(value) {
	return this.set('Volumes', value);
};

/**
 * Reserved.
 *
 * Required: false
 * Update requires: Some interruptions for Amazon EBS-backed instances
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Instance}
 */
EC2Instance.prototype.additionalInfo = function(value) {
	return this.set('AdditionalInfo', value);
};

/**
 * Sets a CreationPolicy for this resource
 * @param {CreationPolicy} creationPolicy
 * @returns {EC2Instance}
 */
EC2Instance.prototype.creationPolicy = function(creationPolicy) {
	return this.setResourceAttribute('CreationPolicy', creationPolicy);
};

/**
 * AWS::EC2::Instance attributes
 * @constructor
 * @param {Resource} resource
 */
function EC2InstanceAttributes(resource) {
	this.resource = resource;
}
EC2InstanceAttributes.prototype = {
	/**
	 * The Availability Zone where the specified instance is launched. For example: us-east-1b.You can retrieve a list of all Availability Zones for a region by using the Fn::GetAZs intrinsic function.
	 * @type {Attribute}
	 */
	get availabilityZone() {
		return new Attribute(this.resource, 'AvailabilityZone');
	},

	/**
	 * The private DNS name of the specified instance. For example: ip-10-24-34-0.ec2.internal.
	 * @type {Attribute}
	 */
	get privateDnsName() {
		return new Attribute(this.resource, 'PrivateDnsName');
	},

	/**
	 * The private IP address of the specified instance. For example: 10.24.34.0.
	 * @type {Attribute}
	 */
	get privateIp() {
		return new Attribute(this.resource, 'PrivateIp');
	},

	/**
	 * The public DNS name of the specified instance. For example: ec2-107-20-50-45.compute-1.amazonaws.com.
	 * @type {Attribute}
	 */
	get publicDnsName() {
		return new Attribute(this.resource, 'PublicDnsName');
	},

	/**
	 * The public IP address of the specified instance. For example: 192.0.2.0.
	 * @type {Attribute}
	 */
	get publicIp() {
		return new Attribute(this.resource, 'PublicIp');
	}
};

/**
 * Gets attribute map for AWS::EC2::Instance
 * @returns {EC2InstanceAttributes}
 */
EC2Instance.prototype.attr = function() {
	return new EC2InstanceAttributes(this);
};

module.exports = EC2Instance;
