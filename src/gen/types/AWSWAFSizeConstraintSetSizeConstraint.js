/**
 * SizeConstraint is a property of the AWS::WAF::SizeConstraintSet resource that specifies a size constraint and which part of a web request that you want AWS WAF to constrain.
 * @constructor
 */
function AWSWAFSizeConstraintSetSizeConstraint() {
	this.data = {};
}

AWSWAFSizeConstraintSetSizeConstraint.prototype = {
	
	/**
	 * The type of comparison that you want AWS WAF to perform. AWS WAF uses this value in combination with the Size and FieldToMatch property values to check if the size constraint is a match. For more information and valid values, see the ComparisonOperator content for the SizeConstraint data type in the AWS WAF API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSWAFSizeConstraintSetSizeConstraint}
	 */
	comparisonOperator: function(value) {
		return this.set('ComparisonOperator', value);
	},

	/**
	 * The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 *
	 * Required: true
	 *
	 * @param {AWSWAFSizeConstraintSetSizeConstraintFieldToMatch} value
	 * @return {AWSWAFSizeConstraintSetSizeConstraint}
	 */
	fieldToMatch: function(value) {
		return this.set('FieldToMatch', value);
	},

	/**
	 * The size in bytes that you want AWS WAF to compare against the size of the specified FieldToMatch. AWS WAF uses Size in combination with the ComparisonOperator and FieldToMatch property values to check if the size constraint of a web request is a match. For more information and valid values, see the Size content for the SizeConstraint data type in the AWS WAF API Reference.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {AWSWAFSizeConstraintSetSizeConstraint}
	 */
	size: function(value) {
		return this.set('Size', value);
	},

	/**
	 * Specifies how AWS WAF processes the FieldToMatch property before inspecting a request for a match. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the FieldToMatch before inspecting a web request for a match.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSWAFSizeConstraintSetSizeConstraint}
	 */
	textTransformation: function(value) {
		return this.set('TextTransformation', value);
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

module.exports = AWSWAFSizeConstraintSetSizeConstraint;
