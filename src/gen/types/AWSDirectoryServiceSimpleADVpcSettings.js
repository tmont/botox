/**
 * VpcSettings is a property of the AWS::DirectoryService::SimpleAD resource that specifies the VPC settings for a directory server.
 * @constructor
 */
function AWSDirectoryServiceSimpleADVpcSettings(initialData) {
	this.data = initialData || {};
}

AWSDirectoryServiceSimpleADVpcSettings.prototype = {
	
	/**
	 * A list of two subnet IDs for the directory servers. Each subnet must be in different Availability Zones (AZ). AWS Directory Service creates a directory server and a DNS server in each subnet.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {AWSDirectoryServiceSimpleADVpcSettings}
	 */
	subnetIds: function(value) {
		return this.set('SubnetIds', value);
	},

	/**
	 * The VPC ID in which to create the Simple AD directory.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSDirectoryServiceSimpleADVpcSettings}
	 */
	vpcId: function(value) {
		return this.set('VpcId', value);
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

module.exports = AWSDirectoryServiceSimpleADVpcSettings;
