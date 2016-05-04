var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::EC2::Subnet - Creates a subnet in an existing VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2Subnet(name) {
	Resource.call(this, name, 'AWS::EC2::Subnet');
}

EC2Subnet.prototype = Object.create(Resource.prototype);

/**
 * The availability zone in which you want the subnet. Default: AWS selects a zone for you (recommended).
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Subnet}
 */
EC2Subnet.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

/**
 * The CIDR block that you want the subnet to cover (for example, "10.0.0.0/24").
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Subnet}
 */
EC2Subnet.prototype.cidrBlock = function(value) {
	return this.set('CidrBlock', value);
};

/**
 * Indicates whether instances that are launched in this subnet receive a public IP address. By default, the value is false.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2Subnet}
 */
EC2Subnet.prototype.mapPublicIpOnLaunch = function(value) {
	return this.set('MapPublicIpOnLaunch', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this subnet.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {EC2Subnet}
 */
EC2Subnet.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * A Ref structure that contains the ID of the VPC on which you want to create the subnet. The VPC ID is provided as the value of the "Ref" property, as: { "Ref": "VPCID" }.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2Subnet}
 */
EC2Subnet.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

/**
 * AWS::EC2::Subnet attributes
 * @constructor
 * @param {Resource} resource
 */
function EC2SubnetAttributes(resource) {
	this.resource = resource;
}
EC2SubnetAttributes.prototype = {
	/**
	 * Returns the availability zone (for example, "us-east-1a") of this subnet.Example: { "Fn::GetAtt" : [ "mySubnet", "AvailabilityZone" ] }
	 * @type {Attribute}
	 */
	get availabilityZone() {
		return new Attribute(this.resource, 'AvailabilityZone');
	}
};

/**
 * Gets attribute map for AWS::EC2::Subnet
 * @returns {EC2SubnetAttributes}
 */
EC2Subnet.prototype.attr = function() {
	return new EC2SubnetAttributes(this);
};

module.exports = EC2Subnet;
