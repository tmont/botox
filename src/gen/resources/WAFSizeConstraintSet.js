var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::WAF::SizeConstraintSet - The AWS::WAF::SizeConstraintSet resource specifies a size constraint that AWS WAF uses to check the size of a web request and which parts of the request to check. For more information, see CreateSizeConstraintSet in the AWS WAF API Reference.
 * @constructor
 */
function WAFSizeConstraintSet(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

WAFSizeConstraintSet.prototype = {
	
	/**
	 * A friendly name or description for the SizeConstraintSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFSizeConstraintSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The size constraint and the part of the web request to check.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFSizeConstraintSetSizeConstraint[]} value
	 * @return {WAFSizeConstraintSet}
	 */
	sizeConstraints: function(value) {
		return this.set('SizeConstraints', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::WAF::SizeConstraintSet has no attributes');
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

module.exports = WAFSizeConstraintSet;
