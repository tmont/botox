var Resource = require('../../resource');

/**
 * AWS::EC2::SecurityGroup - Creates an Amazon EC2 security group. To create a VPC security group, use the VpcId property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SecurityGroup(name) {
	Resource.call(this, name, 'AWS::EC2::SecurityGroup');
}

EC2SecurityGroup.prototype = Object.create(Resource.prototype);

/**
 * AWS::EC2::SecurityGroup attribute map
 * @typedef {Object} EC2SecurityGroupAttributeMap
 * @property {Attribute} groupId The group ID of the specified security group, such as sg-94b3a1f6.
 */
Object.defineProperty(EC2SecurityGroup.prototype, 'attr', {
	/**
	 * @return {EC2SecurityGroupAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The group ID of the specified security group, such as sg-94b3a1f6.
			 * @return {Attribute}
			 */
			get groupId() {
				return createAttribute('GroupId');
			}
		};
	}
});

/**
 * Description of the security group.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2SecurityGroup}
 */
EC2SecurityGroup.prototype.groupDescription = function(value) {
	return this.set('GroupDescription', value);
};

/**
 * A list of Amazon EC2 security group egress rules.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {EC2SecurityGroupRulePropertyType[]|Attribute|Reference} value List of EC2 Security Group Rule
 * @return {EC2SecurityGroup}
 */
EC2SecurityGroup.prototype.securityGroupEgress = function(value) {
	return this.set('SecurityGroupEgress', value);
};

/**
 * A list of Amazon EC2 security group ingress rules.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {EC2SecurityGroupRulePropertyType[]|Attribute|Reference} value List of EC2 Security Group Rule
 * @return {EC2SecurityGroup}
 */
EC2SecurityGroup.prototype.securityGroupIngress = function(value) {
	return this.set('SecurityGroupIngress', value);
};

/**
 * The tags that you want to attach to the resource.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags.
 * @return {EC2SecurityGroup}
 */
EC2SecurityGroup.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * The physical ID of the VPC. Can be obtained by using a reference to an AWS::EC2::VPC, such as: { "Ref" : "myVPC" }.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2SecurityGroup}
 */
EC2SecurityGroup.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

module.exports = EC2SecurityGroup;
