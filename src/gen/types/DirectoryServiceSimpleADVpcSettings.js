var PropertyType = require('../../property-type');

/**
 * VpcSettings is a property of the AWS::DirectoryService::SimpleAD resource that specifies the VPC settings for a directory server.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-simplead-vpcsettings.html}
 * @constructor
 */
function DirectoryServiceSimpleADVpcSettings() {
	PropertyType.call(this);
}

DirectoryServiceSimpleADVpcSettings.prototype = Object.create(PropertyType.prototype);

/**
 * A list of two subnet IDs for the directory servers. Each subnet must be in different Availability Zones (AZ). AWS Directory Service creates a directory server and a DNS server in each subnet.
 *
 * Required: true
 *
 * @param {string[]} value
 * @return {DirectoryServiceSimpleADVpcSettings}
 */
DirectoryServiceSimpleADVpcSettings.prototype.subnetIds = function(value) {
	return this.set('SubnetIds', value);
};

/**
 * The VPC ID in which to create the Simple AD directory.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DirectoryServiceSimpleADVpcSettings}
 */
DirectoryServiceSimpleADVpcSettings.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

module.exports = DirectoryServiceSimpleADVpcSettings;
