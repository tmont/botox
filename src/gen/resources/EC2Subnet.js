var Resource = require('../../resource');

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
 * AWS::EC2::Subnet attribute map
 * @typedef {Object} EC2SubnetAttributeMap
 * @property {Attribute} AvailabilityZone Returns the availability zone (for example, "us-east-1a") of this subnet.Example: { "Fn::GetAtt" : [ "mySubnet", "AvailabilityZone" ] }
 */
Object.defineProperty(EC2Subnet.prototype, 'attr', {
	/**
	 * @return {EC2SubnetAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * Returns the availability zone (for example, "us-east-1a") of this subnet.Example: { "Fn::GetAtt" : [ "mySubnet", "AvailabilityZone" ] }
			 * @return {Attribute}
			 */
			get availabilityZone() {
				return createAttribute('AvailabilityZone');
			}
		};
	}
});

/**
 * The availability zone in which you want the subnet. Default: AWS selects a zone for you (recommended).
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2Subnet}
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
 * @return {EC2Subnet}
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
 * @return {EC2Subnet}
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
 * @param {AWSCloudFormationResourceTagsType[]|Attribute|Reference} value
 * @return {EC2Subnet}
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
 * @param {RefID|Attribute|Reference} value
 * @return {EC2Subnet}
 */
EC2Subnet.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

module.exports = EC2Subnet;
