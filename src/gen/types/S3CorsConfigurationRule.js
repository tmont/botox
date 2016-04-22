/**
 * Describes cross-origin access rules for the Amazon S3 Cors Configuration property.
 * @constructor
 */
function S3CorsConfigurationRule() {
	this.data = {};
}

S3CorsConfigurationRule.prototype = {
	
	/**
	 * Headers that are specified in the Access-Control-Request-Headers header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {S3CorsConfigurationRule}
	 */
	allowedHeaders: function(value) {
		return this.set('AllowedHeaders', value);
	},

	/**
	 * An HTTP method that you allow the origin to execute. The valid values are GET, PUT, HEAD, POST, and DELETE.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {S3CorsConfigurationRule}
	 */
	allowedMethods: function(value) {
		return this.set('AllowedMethods', value);
	},

	/**
	 * An origin that you allow to send cross-domain requests.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {S3CorsConfigurationRule}
	 */
	allowedOrigins: function(value) {
		return this.set('AllowedOrigins', value);
	},

	/**
	 * One or more headers in the response that are accessible to client applications (for example, from a JavaScript XMLHttpRequest object).
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {S3CorsConfigurationRule}
	 */
	exposedHeaders: function(value) {
		return this.set('ExposedHeaders', value);
	},

	/**
	 * A unique identifier for this rule. The value cannot be more than 255 characters.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {S3CorsConfigurationRule}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * The time in seconds that your browser is to cache the preflight response for the specified resource.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {S3CorsConfigurationRule}
	 */
	maxAge: function(value) {
		return this.set('MaxAge', value);
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

module.exports = S3CorsConfigurationRule;
