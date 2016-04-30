var Resource = require('../../resource');

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
 * AWS::EC2::SubnetNetworkAclAssociation attribute map
 * @typedef {Object} EC2SubnetNetworkAclAssociationAttributeMap
 * @property {Attribute} associationId Returns the value of this object's SubnetId property.
 */
Object.defineProperty(EC2SubnetNetworkAclAssociation.prototype, 'attr', {
	/**
	 * @returns {EC2SubnetNetworkAclAssociationAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {

			/**
			 * Returns the value of this object's SubnetId property.
			 * @returns {Attribute}
			 */
			get associationId() {
				return createAttribute('AssociationId');
			}
		};
	}
});

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

module.exports = EC2SubnetNetworkAclAssociation;
