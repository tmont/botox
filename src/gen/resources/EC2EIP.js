var Resource = require('../../resource');

/**
 * AWS::EC2::EIP - The AWS::EC2::EIP resource allocates an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2EIP(name) {
	Resource.call(this, name, 'AWS::EC2::EIP');
}

EC2EIP.prototype = Object.create(Resource.prototype);

/**
 * AWS::EC2::EIP attribute map
 * @typedef {Object} EC2EIPAttributeMap
 * @property {Attribute} AllocationId The ID that AWS assigns to represent the allocation of the address for use with Amazon VPC. This is returned only for VPC elastic IP addresses. Example return value: eipalloc-5723d13e
 */
Object.defineProperty(EC2EIP.prototype, 'attr', {
	/**
	 * @return {EC2EIPAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The ID that AWS assigns to represent the allocation of the address for use with Amazon VPC. This is returned only for VPC elastic IP addresses. Example return value: eipalloc-5723d13e
			 * @return {Attribute}
			 */
			get allocationId() {
				return createAttribute('AllocationId');
			}
		};
	}
});

/**
 * The Instance ID of the Amazon EC2 instance that you want to associate with this Elastic IP address.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2EIP}
 */
EC2EIP.prototype.instanceId = function(value) {
	return this.set('InstanceId', value);
};

/**
 * Set to vpc to allocate the address to your Virtual Private Cloud (VPC). No other values are supported.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EC2EIP}
 */
EC2EIP.prototype.domain = function(value) {
	return this.set('Domain', value);
};

module.exports = EC2EIP;
