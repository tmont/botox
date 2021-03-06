var PropertyType = require('../../property-type');

/**
 * The EC2 Network Interface type is an embedded property of the AWS::EC2::Instance type. It specifies a network interface that is to be attached.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-iface-embedded.html}
 * @constructor
 */
function EC2NetworkInterfaceEmbeddedPropertyType() {
	PropertyType.call(this);
}

EC2NetworkInterfaceEmbeddedPropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * Indicates whether the network interface receives a public IP address. You can associate a public IP address with a network interface only if it has a device index of eth0 and if it is a new network interface (not an existing one). In other words, if you specify true, don't specify a network interface ID. For more information, see Amazon EC2 Instance IP Addressing.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.associatePublicIpAddress = function(value) {
	return this.set('AssociatePublicIpAddress', value);
};

/**
 * Whether to delete the network interface when the instance terminates.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.deleteOnTermination = function(value) {
	return this.set('DeleteOnTermination', value);
};

/**
 * The description of this network interface.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The network interface's position in the attachment order.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.deviceIndex = function(value) {
	return this.set('DeviceIndex', value);
};

/**
 * A list of security group IDs associated with this network interface.
 *
 * Required: false
 *
 * @param {String[]} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.groupSet = function(value) {
	return this.set('GroupSet', value);
};

/**
 * An existing network interface ID.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.networkInterfaceId = function(value) {
	return this.set('NetworkInterfaceId', value);
};

/**
 * Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.privateIpAddress = function(value) {
	return this.set('PrivateIpAddress', value);
};

/**
 * Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want Amazon EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpCount property and do not specify this property.
 *
 * Required: false
 *
 * @param {EC2NetworkInterfacePrivateIPSpecification[]} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.privateIpAddresses = function(value) {
	return this.set('PrivateIpAddresses', value);
};

/**
 * The number of secondary private IP addresses that Amazon EC2 auto assigns to the network interface. Amazon EC2 uses the value of the PrivateIpAddress property as the primary private IP address. If you don't specify that property, Amazon EC2 auto assigns both the primary and secondary private IP addresses.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.secondaryPrivateIpAddressCount = function(value) {
	return this.set('SecondaryPrivateIpAddressCount', value);
};

/**
 * The ID of the subnet to associate with the network interface.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {EC2NetworkInterfaceEmbeddedPropertyType}
 */
EC2NetworkInterfaceEmbeddedPropertyType.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

module.exports = EC2NetworkInterfaceEmbeddedPropertyType;
