/**
 * Describes an SSL configuration for the AWS::OpsWorks::App resource type.
 * @constructor
 */
function AWSOpsWorksSslConfigurationType() {
	this.data = {};
}

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

module.exports = AWSOpsWorksSslConfigurationType;
