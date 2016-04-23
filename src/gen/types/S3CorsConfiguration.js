var PropertyType = require('../../property-type');

/**
 * Describes the cross-origin access configuration for objects in an AWS::S3::Bucket resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html}
 * @constructor
 */
function S3CorsConfiguration() {
	PropertyType.call(this);
}

Object.setPrototypeOf(S3CorsConfiguration, PropertyType);

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
	}
};

module.exports = S3CorsConfiguration;
