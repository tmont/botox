var Resource = require('../../resource');

/**
 * AWS::Route53::HostedZone - The AWS::Route53::HostedZone resource creates a hosted zone, which can contain a collection of record sets for a domain. You cannot create a hosted zone for a top-level domain (TLD). For more information, see POST CreateHostedZone or POST CreateHostedZone (Private) in the Amazon Route 53 API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function Route53HostedZone(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(Route53HostedZone, Resource);

Route53HostedZone.prototype = {
	
	
	/**
	 * A complex type that contains an optional comment about your hosted zone.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Route53HostedZoneConfigProperty} value
	 * @return {Route53HostedZone}
	 */
	hostedZoneConfig: function(value) {
		return this.set('HostedZoneConfig', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this hosted zone.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Route53HostedZoneTag[]} value
	 * @return {Route53HostedZone}
	 */
	hostedZoneTags: function(value) {
		return this.set('HostedZoneTags', value);
	},

	/**
	 * The name of the domain. For resource record types that include a domain name, specify a fully qualified domain name.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {Route53HostedZone}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * One or more VPCs that you want to associate with this hosted zone. When you specify this property, AWS CloudFormation creates a private hosted zone.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {Route53HostedZoneVPC[]} value
	 * @return {Route53HostedZone}
	 */
	vpcs: function(value) {
		return this.set('VPCs', value);
	}
};

module.exports = Route53HostedZone;
