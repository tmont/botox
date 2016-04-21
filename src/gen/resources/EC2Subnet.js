var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::Subnet - Creates a subnet in an existing VPC.
 * @constructor
 */
function EC2Subnet(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2Subnet.prototype = {
	
	/**
	 * The availability zone in which you want the subnet. Default: AWS selects a zone for you (recommended).
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Subnet}
	 */
	availabilityZone: function(value) {
		return this.set('AvailabilityZone', value);
	},

	/**
	 * The CIDR block that you want the subnet to cover (for example, "10.0.0.0/24").
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2Subnet}
	 */
	cidrBlock: function(value) {
		return this.set('CidrBlock', value);
	},

	/**
	 * Indicates whether instances that are launched in this subnet receive a public IP address. By default, the value is false.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {Boolean} value
	 * @return {EC2Subnet}
	 */
	mapPublicIpOnLaunch: function(value) {
		return this.set('MapPublicIpOnLaunch', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this subnet.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2Subnet}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * A Ref structure that contains the ID of the VPC on which you want to create the subnet. The VPC ID is provided as the value of the "Ref" property, as: { "Ref": "VPCID" }.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {RefID} value
	 * @return {EC2Subnet}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * Returns the availability zone (for example, "us-east-1a") of this subnet.Example: { "Fn::GetAtt" : [ "mySubnet", "AvailabilityZone" ] }
			 */
			availabilityZone: function() {
				return new Attribute(resourceName, 'AvailabilityZone');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EC2Subnet;
