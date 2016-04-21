var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::EC2::EIP - The AWS::EC2::EIP resource allocates an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
 * @constructor
 */
function EC2EIP(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EC2EIP.prototype = {
	
	/**
	 * The Instance ID of the Amazon EC2 instance that you want to associate with this Elastic IP address.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EC2EIP}
	 */
	instanceId: function(value) {
		return this.set('InstanceId', value);
	},

	/**
	 * Set to vpc to allocate the address to your Virtual Private Cloud (VPC). No other values are supported.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EC2EIP}
	 */
	domain: function(value) {
		return this.set('Domain', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * The ID that AWS assigns to represent the allocation of the address for use with Amazon VPC. This is returned only for VPC elastic IP addresses. Example return value: eipalloc-5723d13e
			 */
			allocationId: function() {
				return new Attribute(resourceName, 'AllocationId');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EC2EIP;
