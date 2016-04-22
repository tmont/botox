var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::WAF::ByteMatchSet - The AWS::WAF::ByteMatchSet resource creates an AWS WAF ByteMatchSet that identifies a part of a web request that you want to inspect. For more information, see CreateByteMatchSet in the AWS WAF API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFByteMatchSet(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

WAFByteMatchSet.prototype = {
	
	/**
	 * Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFByteMatchSetByteMatchTuple[]} value
	 * @return {WAFByteMatchSet}
	 */
	byteMatchTuples: function(value) {
		return this.set('ByteMatchTuples', value);
	},

	/**
	 * A friendly name or description of the ByteMatchSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFByteMatchSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::WAF::ByteMatchSet has no attributes');
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

module.exports = WAFByteMatchSet;
