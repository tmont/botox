var PropertyType = require('../../property-type');

/**
 * The PrivateIpAddressSpecification type is an embedded property of the AWS::EC2::NetworkInterface type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-privateipspec.html}
 * @constructor
 */
function EC2NetworkInterfacePrivateIPSpecification() {
	PropertyType.call(this);
}

Object.setPrototypeOf(EC2NetworkInterfacePrivateIPSpecification, PropertyType);

EC2NetworkInterfacePrivateIPSpecification.prototype = {
	
	/**
	 * The private IP address of the network interface.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2NetworkInterfacePrivateIPSpecification}
	 */
	privateIpAddress: function(value) {
		return this.set('PrivateIpAddress', value);
	},

	/**
	 * Sets the private IP address as the primary private address. You can set only one primary private IP address. If you don't specify a primary private IP address, Amazon EC2 automatically assigns a primary private IP address.
	 *
	 * Required: true
	 *
	 * @param {Boolean} value
	 * @return {EC2NetworkInterfacePrivateIPSpecification}
	 */
	primary: function(value) {
		return this.set('Primary', value);
	}
};

module.exports = EC2NetworkInterfacePrivateIPSpecification;
