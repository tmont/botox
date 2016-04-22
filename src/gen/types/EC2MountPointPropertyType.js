/**
 * The EC2 MountPoint property is an embedded property of the AWS::EC2::Instance type.
 * @constructor
 */
function EC2MountPointPropertyType() {
	this.data = {};
}

EC2MountPointPropertyType.prototype = {
	
	/**
	 * How the device is exposed to the instance (such as /dev/sdh, or xvdh).
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2MountPointPropertyType}
	 */
	device: function(value) {
		return this.set('Device', value);
	},

	/**
	 * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone and the instance must be running.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {EC2MountPointPropertyType}
	 */
	volumeId: function(value) {
		return this.set('VolumeId', value);
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

module.exports = EC2MountPointPropertyType;
