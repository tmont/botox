var Resource = require('../../resource');

/**
 * AWS::EC2::NetworkAcl - Creates a new network ACL in a VPC.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-acl.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2NetworkAcl(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2NetworkAcl, Resource);

EC2NetworkAcl.prototype = {
	
	
	/**
	 * An arbitrary set of tags (key–value pairs) for this ACL.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {EC2NetworkAcl}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The ID of the VPC where the network ACL will be created.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2NetworkAcl}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
	}
};

module.exports = EC2NetworkAcl;
