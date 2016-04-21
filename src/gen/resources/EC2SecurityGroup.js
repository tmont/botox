var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::SecurityGroup - Creates an Amazon EC2 security group. To create a VPC security group, use the VpcId property.
 * @constructor
 */
function EC2SecurityGroup(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2SecurityGroup.prototype = {
	
	/**
	 * Description of the security group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SecurityGroup}
	 */
	groupDescription: function(value) {
		return this.set('GroupDescription', value);
	},

	/**
	 * A list of Amazon EC2 security group egress rules.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {EC2SecurityGroupRule[]} value
	 * @return {EC2SecurityGroup}
	 */
	securityGroupEgress: function(value) {
		return this.set('SecurityGroupEgress', value);
	},

	/**
	 * A list of Amazon EC2 security group ingress rules.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {EC2SecurityGroupRule[]} value
	 * @return {EC2SecurityGroup}
	 */
	securityGroupIngress: function(value) {
		return this.set('SecurityGroupIngress', value);
	},

	/**
	 * The tags that you want to attach to the resource.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTags} value
	 * @return {EC2SecurityGroup}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The physical ID of the VPC. Can be obtained by using a reference to an AWS::EC2::VPC, such as: { "Ref" : "myVPC" }.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SecurityGroup}
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
			 * The group ID of the specified security group, such as sg-94b3a1f6.
			 */
			groupId: function() {
				return new Attribute(resourceName, 'GroupId');
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

module.exports = EC2SecurityGroup;
