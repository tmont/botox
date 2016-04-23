var PropertyType = require('../../property-type');

/**
 * Describes an SSL configuration for the AWS::OpsWorks::App resource type.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html}
 * @constructor
 */
function AWSOpsWorksSslConfigurationType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSOpsWorksSslConfigurationType, PropertyType);

AWSOpsWorksSslConfigurationType.prototype = {
	
	/**
	 * The contents of the certificate's domain.crt file.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksSslConfigurationType}
	 */
	certificate: function(value) {
		return this.set('Certificate', value);
	},

	/**
	 * An intermediate certificate authority key or client authentication.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksSslConfigurationType}
	 */
	chain: function(value) {
		return this.set('Chain', value);
	},

	/**
	 * The private key; the contents of the certificate's domain.kex file.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksSslConfigurationType}
	 */
	privateKey: function(value) {
		return this.set('PrivateKey', value);
	}
};

module.exports = AWSOpsWorksSslConfigurationType;
