/**
 * Describes the cross-origin access configuration for objects in an AWS::S3::Bucket resource.
 * @constructor
 */
function S3CorsConfiguration() {
	this.data = {};
}

S3CorsConfiguration.prototype = {
	
	/**
	 * A set of origins and methods that you allow.
	 *
	 * Required: true
	 *
	 * @param {S3CorsConfigurationRule} value
	 * @return {S3CorsConfiguration}
	 */
	corsRules: function(value) {
		return this.set('CorsRules', value);
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

module.exports = S3CorsConfiguration;
