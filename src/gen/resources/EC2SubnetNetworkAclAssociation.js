var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::EC2::SubnetNetworkAclAssociation - Associates a subnet with a network ACL.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SubnetNetworkAclAssociation(name) {
	Resource.call(this, name, 'AWS::EC2::SubnetNetworkAclAssociation');
}

EC2SubnetNetworkAclAssociation.prototype = Object.create(Resource.prototype);

/**
 * The ID representing the current association between the original network ACL and the subnet.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SubnetNetworkAclAssociation}
 */
EC2SubnetNetworkAclAssociation.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

/**
 * The ID of the new ACL to associate with the subnet.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SubnetNetworkAclAssociation}
 */
EC2SubnetNetworkAclAssociation.prototype.networkAclId = function(value) {
	return this.set('NetworkAclId', value);
};

/**
 * AWS::EC2::SubnetNetworkAclAssociation attributes
 * @constructor
 * @param {Resource} resource
 */
function EC2SubnetNetworkAclAssociationAttributes(resource) {
	this.resource = resource;
}
EC2SubnetNetworkAclAssociationAttributes.prototype = {
	/**
	 * Returns the value of this object's SubnetId property.
	 * @type {Attribute}
	 */
	get associationId() {
		return new Attribute(this.resource, 'AssociationId');
	}
};

/**
 * Gets attribute map for AWS::EC2::SubnetNetworkAclAssociation
 * @returns {EC2SubnetNetworkAclAssociationAttributes}
 */
EC2SubnetNetworkAclAssociation.prototype.attr = function() {
	return new EC2SubnetNetworkAclAssociationAttributes(this);
};

module.exports = EC2SubnetNetworkAclAssociation;
