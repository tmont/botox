var Resource = require('../../resource');

/**
 * AWS::EC2::VPC - Creates a Virtual Private Cloud (VPC) with the CIDR block that you specify.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2VPC(name) {
	Resource.call(this, name, 'AWS::EC2::VPC');
}

EC2VPC.prototype = Object.create(Resource.prototype);

/**
 * AWS::EC2::VPC attribute map
 * @typedef {Object} EC2VPCAttributeMap
 * @property {Attribute} cidrBlock The set of IP addresses for the VPC. For example, 10.0.0.0/16.
 * @property {Attribute} defaultNetworkAcl The default network ACL ID that is associated with the VPC. For example, acl-814dafe3.
 * @property {Attribute} defaultSecurityGroup The default security group ID that is associated with the VPC. For example, sg-b178e0d3.
 */
Object.defineProperty(EC2VPC.prototype, 'attr', {
	/**
	 * @returns {EC2VPCAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {

			/**
			 * The set of IP addresses for the VPC. For example, 10.0.0.0/16.
			 * @returns {Attribute}
			 */
			get cidrBlock() {
				return createAttribute('CidrBlock');
			},

			/**
			 * The default network ACL ID that is associated with the VPC. For example, acl-814dafe3.
			 * @returns {Attribute}
			 */
			get defaultNetworkAcl() {
				return createAttribute('DefaultNetworkAcl');
			},

			/**
			 * The default security group ID that is associated with the VPC. For example, sg-b178e0d3.
			 * @returns {Attribute}
			 */
			get defaultSecurityGroup() {
				return createAttribute('DefaultSecurityGroup');
			}
		};
	}
});

/**
 * The CIDR block you want the VPC to cover. For example: "10.0.0.0/16".
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VPC}
 */
EC2VPC.prototype.cidrBlock = function(value) {
	return this.set('CidrBlock', value);
};

/**
 * Specifies whether DNS resolution is supported for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not. By default the value is set to true.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2VPC}
 */
EC2VPC.prototype.enableDnsSupport = function(value) {
	return this.set('EnableDnsSupport', value);
};

/**
 * Specifies whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not. You can only set EnableDnsHostnames to true if you also set the EnableDnsSupport attribute to true. By default, the value is set to false.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2VPC}
 */
EC2VPC.prototype.enableDnsHostnames = function(value) {
	return this.set('EnableDnsHostnames', value);
};

/**
 * The allowed tenancy of instances launched into the VPC.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2VPC}
 */
EC2VPC.prototype.instanceTenancy = function(value) {
	return this.set('InstanceTenancy', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this VPC.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {EC2VPC}
 */
EC2VPC.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = EC2VPC;
