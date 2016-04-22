var Resource = require('../../resource');

/**
 * AWS::EC2::SecurityGroup - Creates an Amazon EC2 security group. To create a VPC security group, use the VpcId property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SecurityGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2SecurityGroup, Resource);

EC2SecurityGroup.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * The group ID of the specified security group, such as sg-94b3a1f6.
			 * @return {Attribute}
			 */
			groupId: function() {
				return createAttribute('GroupId');
			}
		};
	},

	
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
	}
};

module.exports = EC2SecurityGroup;
