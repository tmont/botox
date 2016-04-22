/**
 * FieldToMatch is a property of the AWS WAF SizeConstraintSet SizeConstraint property that specifies the part of a web request that you want AWS WAF to check for a size constraint, such as a specific header or a query string.
 * @constructor
 */
function AWSWAFSizeConstraintSetSizeConstraintFieldToMatch() {
	this.data = {};
}

AWSWAFSizeConstraintSetSizeConstraintFieldToMatch.prototype = {
	
	/**
	 * If you specify HEADER for the Type property, the name of the header that AWS WAF searches for, such as User-Agent or Referer. If you specify any other value for the Type property, do not specify this property.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSWAFSizeConstraintSetSizeConstraintFieldToMatch}
	 */
	data: function(value) {
		return this.set('Data', value);
	},

	/**
	 * The part of the web request in which AWS WAF searches for the target string. For valid values, see FieldToMatch in the AWS WAF API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSWAFSizeConstraintSetSizeConstraintFieldToMatch}
	 */
	type: function(value) {
		return this.set('Type', value);
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

module.exports = AWSWAFSizeConstraintSetSizeConstraintFieldToMatch;
