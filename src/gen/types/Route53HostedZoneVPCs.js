var PropertyType = require('../../property-type');

/**
 * The HostedZoneVPCs property is part of the AWS::Route53::HostedZone resource that specifies the VPCs to associate with the hosted zone.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone-hostedzonevpcs.html}
 * @constructor
 */
function Route53HostedZoneVPCs() {
	PropertyType.call(this);
}

Route53HostedZoneVPCs.prototype = Object.create(PropertyType.prototype);

/**
 * The ID of the Amazon VPC that you want to associate with the hosted zone.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {Route53HostedZoneVPCs}
 */
Route53HostedZoneVPCs.prototype.vpcId = function(value) {
	return this.set('VPCId', value);
};

/**
 * The region in which the Amazon VPC was created as specified in the VPCId property.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {Route53HostedZoneVPCs}
 */
Route53HostedZoneVPCs.prototype.vpcRegion = function(value) {
	return this.set('VPCRegion', value);
};

module.exports = Route53HostedZoneVPCs;
