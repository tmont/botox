var Resource = require('../../resource');

/**
 * AWS::Route53::RecordSetGroup - The AWS::Route53::RecordSetGroup resource creates record sets for a hosted zone. For more information about constraints and values for each property, see POST CreateHostedZone for hosted zones and POST ChangeResourceRecordSet for resource record sets.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function Route53RecordSetGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(Route53RecordSetGroup, Resource);

Route53RecordSetGroup.prototype = {
	
	
	/**
	 * Any comments you want to include about the hosted zone.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {Route53RecordSetGroup}
	 */
	comment: function(value) {
		return this.set('Comment', value);
	},

	/**
	 * The ID of the hosted zone.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {Route53RecordSetGroup}
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
	 * @return {Route53RecordSetGroup}
	 */
	hostedZoneName: function(value) {
		return this.set('HostedZoneName', value);
	},

	/**
	 * List of resource record sets to add.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {ListofAWSRoute53RecordSetobjectsasshowninthefollowingexample} value
	 * @return {Route53RecordSetGroup}
	 */
	recordSets: function(value) {
		return this.set('RecordSets', value);
	}
};

module.exports = Route53RecordSetGroup;
