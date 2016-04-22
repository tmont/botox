var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::WAF::SqlInjectionMatchSet - The AWS::WAF::SqlInjectionMatchSet resource creates an AWS WAF SqlInjectionMatchSet, which you use to allow, block, or count requests that contain malicious SQL code in a specific part of web requests. For more information, see CreateSqlInjectionMatchSet in the AWS WAF API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFSqlInjectionMatchSet(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

WAFSqlInjectionMatchSet.prototype = {
	
	/**
	 * A friendly name or description of the SqlInjectionMatchSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFSqlInjectionMatchSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuple[]} value
	 * @return {WAFSqlInjectionMatchSet}
	 */
	sqlInjectionMatchTuples: function(value) {
		return this.set('SqlInjectionMatchTuples', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::WAF::SqlInjectionMatchSet has no attributes');
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

module.exports = WAFSqlInjectionMatchSet;
