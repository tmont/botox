var Resource = require('../../resource');

/**
 * AWS::EC2::SubnetNetworkAclAssociation - Associates a subnet with a network ACL.
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SubnetNetworkAclAssociation(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(EC2SubnetNetworkAclAssociation, Resource);

EC2SubnetNetworkAclAssociation.prototype = {
	get attr() {
		var createAttribute = this.createAttribute.bind(this, this);
		return {
			
			/**
			 * Returns the value of this object's SubnetId property.
			 * @return {Attribute}
			 */
			associationId: function() {
				return createAttribute('AssociationId');
			}
		};
	},

	
	/**
	 * The ID representing the current association between the original network ACL and the subnet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SubnetNetworkAclAssociation}
	 */
	subnetId: function(value) {
		return this.set('SubnetId', value);
	},

	/**
	 * The ID of the new ACL to associate with the subnet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2SubnetNetworkAclAssociation}
	 */
	networkAclId: function(value) {
		return this.set('NetworkAclId', value);
	}
};

module.exports = EC2SubnetNetworkAclAssociation;
