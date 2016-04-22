var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::WAF::XssMatchSet - The AWS::WAF::XssMatchSet resource specifies the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and the name of the header to inspect. For more information, see XssMatchSet in the AWS WAF API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFXssMatchSet(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

WAFXssMatchSet.prototype = {
	
	/**
	 * A friendly name or description for the XssMatchSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFXssMatchSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The parts of web requests that you want to inspect for cross-site scripting attacks.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFXssMatchSetXssMatchTuple[]} value
	 * @return {WAFXssMatchSet}
	 */
	xssMatchTuples: function(value) {
		return this.set('XssMatchTuples', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::WAF::XssMatchSet has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = WAFXssMatchSet;
