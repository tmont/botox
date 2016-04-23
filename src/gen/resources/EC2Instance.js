var Resource = require('../../resource');

/**
 * AWS::EC2::Instance - The AWS::EC2::Instance type creates an Amazon EC2 instance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2Instance(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2Instance, Resource);

EC2Instance.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * The Availability Zone where the specified instance is launched. For example: us-east-1b.You can retrieve a list of all Availability Zones for a region by using the Fn::GetAZs intrinsic function.
			 * @return {Attribute}
			 */
			availabilityZone: function() {
				return createAttribute('AvailabilityZone');
			},

			/**
			 * The private DNS name of the specified instance. For example: ip-10-24-34-0.ec2.internal.
			 * @return {Attribute}
			 */
			privateDnsName: function() {
				return createAttribute('PrivateDnsName');
			},

			/**
			 * The public DNS name of the specified instance. For example: ec2-107-20-50-45.compute-1.amazonaws.com.
			 * @return {Attribute}
			 */
			publicDnsName: function() {
				return createAttribute('PublicDnsName');
			},

			/**
			 * The private IP address of the specified instance. For example: 10.24.34.0.
			 * @return {Attribute}
			 */
			privateIp: function() {
				return createAttribute('PrivateIp');
			},

			/**
			 * The public IP address of the specified instance. For example: 192.0.2.0.
			 * @return {Attribute}
			 */
			publicIp: function() {
				return createAttribute('PublicIp');
			}
		};
	},

	
	/**
	 * Specifies the name of the Availability Zone in which the instance is located.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	availabilityZone: function(value) {
		return this.set('AvailabilityZone', value);
	},

	/**
	 * Defines a set of Amazon Elastic Block Store block device mappings, ephemeral instance store block device mappings, or both. For more information, see Amazon Elastic Block Store or Amazon EC2 Instance Store in the Amazon EC2 User Guide for Linux Instances.
	 *
	 * Required: false
	 * Update requires: Replacement. If you change only the DeleteOnTermination property for one or more block devices, update requires No interruption.
	 *
	 * @param {EC2BlockDeviceMappingProperty[]} value
	 * @return {EC2Instance}
	 */
	blockDeviceMappings: function(value) {
		return this.set('BlockDeviceMappings', value);
	},

	/**
	 * Specifies whether the instance can be terminated through the API.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {EC2Instance}
	 */
	disableApiTermination: function(value) {
		return this.set('DisableApiTermination', value);
	},

	/**
	 * Specifies whether the instance is optimized for Amazon Elastic Block Store I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance.
	 *
	 * Required: false
	 * Update requires: Some interruptions for Amazon EBS-backed instances
	 *
	 * @param {Boolean} value
	 * @return {EC2Instance}
	 */
	ebsOptimized: function(value) {
		return this.set('EbsOptimized', value);
	},

	/**
	 * The physical ID (resource name) of an instance profile or a reference to an AWS::IAM::InstanceProfile resource.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	iamInstanceProfile: function(value) {
		return this.set('IamInstanceProfile', value);
	},

	/**
	 * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	imageId: function(value) {
		return this.set('ImageId', value);
	},

	/**
	 * Indicates whether an instance stops or terminates when you shut down the instance from the instance's operating system shutdown command. You can specify stop or terminate. For more information, see the RunInstances command in the Amazon EC2 API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	instanceInitiatedShutdownBehavior: function(value) {
		return this.set('InstanceInitiatedShutdownBehavior', value);
	},

	/**
	 * The instance type, such as t2.micro. The default type is "m1.small". For a list of instance types, see Instance Families and Types.
	 *
	 * Required: false
	 * Update requires: Some interruptions for Amazon EBS-backed instances
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	instanceType: function(value) {
		return this.set('InstanceType', value);
	},

	/**
	 * The kernel ID.
	 *
	 * Required: false
	 * Update requires: Some interruptions for Amazon EBS-backed instances
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	kernelId: function(value) {
		return this.set('KernelId', value);
	},

	/**
	 * Provides the name of the Amazon EC2 key pair.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	keyName: function(value) {
		return this.set('KeyName', value);
	},

	/**
	 * Specifies whether monitoring is enabled for the instance.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {EC2Instance}
	 */
	monitoring: function(value) {
		return this.set('Monitoring', value);
	},

	/**
	 * A list of embedded objects that describe the network interfaces to associate with this instance.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {EC2NetworkInterfaceEmbeddedPropertyType[]} value
	 * @return {EC2Instance}
	 */
	networkInterfaces: function(value) {
		return this.set('NetworkInterfaces', value);
	},

	/**
	 * The name of an existing placement group that you want to launch the instance into (for cluster instances).
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	placementGroupName: function(value) {
		return this.set('PlacementGroupName', value);
	},

	/**
	 * The private IP address for this instance.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	privateIpAddress: function(value) {
		return this.set('PrivateIpAddress', value);
	},

	/**
	 * The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the AWS Resource Center and search for the kernel ID.
	 *
	 * Required: false
	 * Update requires: Some interruptions for Amazon EBS-backed instances
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	ramdiskId: function(value) {
		return this.set('RamdiskId', value);
	},

	/**
	 * A list that contains the security group IDs for VPC security groups to assign to the Amazon EC2 instance. If you specified the NetworkInterfaces property, do not specify this property.
	 *
	 * Required: false
	 * Update requires: No interruption for instances that are in a VPC.
	 *
	 * @param {string[]} value
	 * @return {EC2Instance}
	 */
	securityGroupIds: function(value) {
		return this.set('SecurityGroupIds', value);
	},

	/**
	 * Valid only for Amazon EC2 security groups. A list that contains the Amazon EC2 security groups to assign to the Amazon EC2 instance. The list can contain both the name of existing Amazon EC2 security groups or references to AWS::EC2::SecurityGroup resources created in the template.
	 *
	 * Required: false
	 * Update requires: Replacement.
	 *
	 * @param {string[]} value
	 * @return {EC2Instance}
	 */
	securityGroups: function(value) {
		return this.set('SecurityGroups', value);
	},

	/**
	 * Controls whether source/destination checking is enabled on the instance. Also determines if an instance in a VPC will perform network address translation (NAT).
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {EC2Instance}
	 */
	sourceDestCheck: function(value) {
		return this.set('SourceDestCheck', value);
	},

	/**
	 * The Amazon EC2 Simple Systems Manager (SSM) document and parameter values to associate with this instance. To use this property, you must specify an IAM role for the instance. For more information, see Prerequisites for Remotely Running Commands on EC2 Instances in the Amazon EC2 User Guide for Microsoft Windows Instances.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {EC2InstanceSsmAssociations[]} value
	 * @return {EC2Instance}
	 */
	ssmAssociations: function(value) {
		return this.set('SsmAssociations', value);
	},

	/**
	 * If you're using Amazon VPC, this property specifies the ID of the subnet that you want to launch the instance into. If you specified the NetworkInterfaces property, do not specify this property.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	subnetId: function(value) {
		return this.set('SubnetId', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this instance.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2Instance}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The tenancy of the instance that you want to launch. This value can be either "default" or "dedicated". An instance that has a tenancy value of "dedicated" runs on single-tenant hardware and can be launched only into a VPC. For more information, see Using EC2 Dedicated Instances Within Your VPC in the Amazon VPC User Guide.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	tenancy: function(value) {
		return this.set('Tenancy', value);
	},

	/**
	 * Base64-encoded MIME user data that is made available to the instances.
	 *
	 * Required: false
	 * Update requires: Some interruptions for Amazon EBS-backed instances.
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	userData: function(value) {
		return this.set('UserData', value);
	},

	/**
	 * The Amazon EBS volumes to attach to the instance.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {EC2MountPointPropertyType[]} value
	 * @return {EC2Instance}
	 */
	volumes: function(value) {
		return this.set('Volumes', value);
	},

	/**
	 * Reserved.
	 *
	 * Required: false
	 * Update requires: Some interruptions for Amazon EBS-backed instances
	 *
	 * @param {String} value
	 * @return {EC2Instance}
	 */
	additionalInfo: function(value) {
		return this.set('AdditionalInfo', value);
	}
};

module.exports = EC2Instance;
