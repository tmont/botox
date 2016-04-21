/**
 * The EC2 ICMP property is an embedded property of the AWS::EC2::NetworkAclEntry type.
 * @constructor
 */
function EC2ICMPPropertyType(initialData) {
	this.data = initialData || {};
}

EC2ICMPPropertyType.prototype = {
	

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

module.exports = EC2ICMPPropertyType;
