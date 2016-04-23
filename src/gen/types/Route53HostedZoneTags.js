var PropertyType = require('../../property-type');

/**
 * The HostedZoneTags property describes key-value pairs that are associated with an AWS::Route53::HostedZone resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetags.html}
 * @constructor
 */
function Route53HostedZoneTags() {
	PropertyType.call(this);
}

Object.setPrototypeOf(Route53HostedZoneTags, PropertyType);

Route53HostedZoneTags.prototype = {
	
	/**
	 * The key name of the tag.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {Route53HostedZoneTags}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value for the tag.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {Route53HostedZoneTags}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = Route53HostedZoneTags;
