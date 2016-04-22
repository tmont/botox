/**
 * Refers to an individual Amazon EC2 security group by ID or name in a group set. AWS::EC2::NetworkInterface takes a list of objects of this type in its GroupSet property.
 * @constructor
 */
function EC2NetworkInterfaceGroupItem() {
	this.data = {};
}

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
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = EC2NetworkInterfaceGroupItem;
