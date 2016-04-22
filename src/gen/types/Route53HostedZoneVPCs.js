/**
 * The HostedZoneVPCs property is part of the AWS::Route53::HostedZone resource that specifies the VPCs to associate with the hosted zone.
 * @constructor
 */
function Route53HostedZoneVPCs() {
	this.data = {};
}

Route53HostedZoneVPCs.prototype = {
	
	/**
	 * The ID of the Amazon VPC that you want to associate with the hosted zone.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {Route53HostedZoneVPCs}
	 */
	vpcid: function(value) {
		return this.set('VPCId', value);
	},

	/**
	 * The region in which the Amazon VPC was created as specified in the VPCId property.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {Route53HostedZoneVPCs}
	 */
	vpcregion: function(value) {
		return this.set('VPCRegion', value);
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

module.exports = Route53HostedZoneVPCs;
