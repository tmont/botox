var PropertyType = require('../../property-type');

/**
 * Refers to an individual Amazon EC2 security group by ID or name in a group set. AWS::EC2::NetworkInterface takes a list of objects of this type in its GroupSet property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-groupitem.html}
 * @constructor
 */
function EC2NetworkInterfaceGroupItem() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2NetworkInterfaceGroupItem, PropertyType);

EC2NetworkInterfaceGroupItem.prototype = {
	
	/**
	 * ID of the security group.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceGroupItem}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * Name of the security group.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfaceGroupItem}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = EC2NetworkInterfaceGroupItem;
