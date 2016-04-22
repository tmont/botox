/**
 * The HealthCheckTags property describes key-value pairs that are associated with an AWS::Route53::HealthCheck resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktags.html}
 * @constructor
 */
function Route53HealthCheckTags() {
	this.data = {};
}

Route53HealthCheckTags.prototype = {
	
	/**
	 * The key name of the tag.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {Route53HealthCheckTags}
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
	 * @return {Route53HealthCheckTags}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = Route53HealthCheckTags;
