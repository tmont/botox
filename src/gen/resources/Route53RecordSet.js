var Resource = require('../../resource');

/**
 * AWS::Route53::RecordSet - The AWS::Route53::RecordSet type can be used as a standalone resource or as an embedded property in the AWS::Route53::RecordSetGroup type. Note that some AWS::Route53::RecordSet properties are valid only when used within AWS::Route53::RecordSetGroup.
 * @constructor
 * @param {String} name Name of the resource
 */
function Route53RecordSet(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(Route53RecordSet, Resource);

Route53RecordSet.prototype = {
	
	
	/**
	 * Alias resource record sets only: Information about the domain to which you are redirecting traffic.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AliasTarget} value
	 * @return {Route53RecordSet}
	 */
	aliasTarget: function(value) {
		return this.set('AliasTarget', value);
	},

	/**
	 * Any comments that you want to include about the hosted zone.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	comment: function(value) {
		return this.set('Comment', value);
	},

	/**
	 * Designates the record set as a PRIMARY or SECONDARY failover record set. When you have more than one resource performing the same function, you can configure Amazon Route 53 to check the health of your resources and use only health resources to respond to DNS queries. You cannot create nonfailover resource record sets that have the same Name and Type property values as failover resource record sets. For more information, see the Failover element in the Amazon Route 53 API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	failover: function(value) {
		return this.set('Failover', value);
	},

	/**
	 * Describes how Amazon Route 53 responds to DNS queries based on the geographic origin of the query.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Route53RecordSetGeoLocationProperty} value
	 * @return {Route53RecordSet}
	 */
	geoLocation: function(value) {
		return this.set('GeoLocation', value);
	},

	/**
	 * The health check ID that you want to apply to this record set. Amazon Route 53 returns this resource record set in response to a DNS query only while record set is healthy.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	healthCheckId: function(value) {
		return this.set('HealthCheckId', value);
	},

	/**
	 * The ID of the hosted zone.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	hostedZoneId: function(value) {
		return this.set('HostedZoneId', value);
	},

	/**
	 * The name of the domain for the hosted zone where you want to add the record set.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	hostedZoneName: function(value) {
		return this.set('HostedZoneName', value);
	},

	/**
	 * The name of the domain. You must specify a fully qualified domain name that ends with a period as the last label indication. If you omit the final period, AWS CloudFormation adds it.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * Latency resource record sets only: The Amazon EC2 region where the resource that is specified in this resource record set resides. The resource typically is an AWS resource, for example, Amazon EC2 instance or an Elastic Load Balancing load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.
	 *
	 * Required: false
	 * Update requires: undefined
	 *
	 * @param {undefined} value
	 * @return {Route53RecordSet}
	 */
	region: function(value) {
		return this.set('Region', value);
	},

	/**
	 * List of resource records to add. Each record should be in the format appropriate for the record type specified by the Type property. For information about different record types and their record formats, see Appendix: Domain Name Format in the Amazon Route 53 Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {Route53RecordSet}
	 */
	resourceRecords: function(value) {
		return this.set('ResourceRecords', value);
	},

	/**
	 * A unique identifier that differentiates among multiple resource record sets that have the same combination of DNS name and type.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	setIdentifier: function(value) {
		return this.set('SetIdentifier', value);
	},

	/**
	 * The resource record cache time to live (TTL), in seconds. If you specify this property, do not specify the AliasTarget property. For alias target records, the alias uses a TTL value from the target.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	ttl: function(value) {
		return this.set('TTL', value);
	},

	/**
	 * The type of records to add.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSet}
	 */
	type: function(value) {
		return this.set('Type', value);
	},

	/**
	 * Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines what portion of traffic for the current resource record set is routed to the associated location.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {NumberWeightexpectsintegervalues} value
	 * @return {Route53RecordSet}
	 */
	weight: function(value) {
		return this.set('Weight', value);
	}
};

module.exports = Route53RecordSet;
