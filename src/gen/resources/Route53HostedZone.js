var Resource = require('../../resource');

/**
 * AWS::Route53::HostedZone - The AWS::Route53::HostedZone resource creates a hosted zone, which can contain a collection of record sets for a domain. You cannot create a hosted zone for a top-level domain (TLD). For more information, see POST CreateHostedZone or POST CreateHostedZone (Private) in the Amazon Route 53 API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function Route53HostedZone(name) {
	Resource.call(this, name, 'AWS::Route53::HostedZone');
}

Route53HostedZone.prototype = Object.create(Resource.prototype);


/**
 * A complex type that contains an optional comment about your hosted zone.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Route53HostedZoneConfigProperty|Attribute|Reference} value Amazon Route 53 HostedZoneConfig Property
 * @return {Route53HostedZone}
 */
Route53HostedZone.prototype.hostedZoneConfig = function(value) {
	return this.set('HostedZoneConfig', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this hosted zone.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Route53HostedZoneTags[]|Attribute|Reference} value List of Amazon Route 53 HostedZoneTags
 * @return {Route53HostedZone}
 */
Route53HostedZone.prototype.hostedZoneTags = function(value) {
	return this.set('HostedZoneTags', value);
};

/**
 * The name of the domain. For resource record types that include a domain name, specify a fully qualified domain name.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {Route53HostedZone}
 */
Route53HostedZone.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * One or more VPCs that you want to associate with this hosted zone. When you specify this property, AWS CloudFormation creates a private hosted zone.
 *
 * Required: false
 * Update requires: undefined
 *
 * @param {Route53HostedZoneVPCs[]|Attribute|Reference} value List of Amazon Route 53 HostedZoneVPCs
 * @return {Route53HostedZone}
 */
Route53HostedZone.prototype.vpCs = function(value) {
	return this.set('VPCs', value);
};

module.exports = Route53HostedZone;
