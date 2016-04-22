/**
 * The HostedZoneConfig property is part of the AWS::Route53::HostedZone resource that can contain a comment about the hosted zone.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html}
 * @constructor
 */
function Route53HostedZoneConfigProperty() {
	this.data = {};
}

Route53HostedZoneConfigProperty.prototype = {
	
	/**
	 * Any comments that you want to include about the hosted zone.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {Route53HostedZoneConfigProperty}
	 */
	comment: function(value) {
		return this.set('Comment', value);
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

module.exports = Route53HostedZoneConfigProperty;
