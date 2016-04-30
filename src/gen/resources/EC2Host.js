var Resource = require('../../resource');

/**
 * AWS::EC2::Host - The AWS::EC2::Host resource allocates a fully dedicated physical server for launching EC2 instances. Because the host is fully dedicated for your use, it can help you address compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses. For more information, see Dedicated Hosts in the Amazon EC2 User Guide for Linux Instances.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-host.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2Host(name) {
	Resource.call(this, name, 'AWS::EC2::Host');
}

EC2Host.prototype = Object.create(Resource.prototype);

/**
 * Indicates if the host accepts EC2 instances with only matching configurations or if instances must also specify the host ID. Instances that don't specify a host ID can't launch onto a host with AutoPlacement set to off. By default, AWS CloudFormation sets this property to on. For more information, see Understanding Instance Placement and Host Affinity in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Host}
 */
EC2Host.prototype.autoPlacement = function(value) {
	return this.set('AutoPlacement', value);
};

/**
 * The Availability Zone (AZ) in which to launch the dedicated host.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Host}
 */
EC2Host.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

/**
 * The instance type that the dedicated host accepts. Only instances of this type can be launched onto the host. For more information, see Supported Instance Types in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Host}
 */
EC2Host.prototype.instanceType = function(value) {
	return this.set('InstanceType', value);
};

module.exports = EC2Host;
