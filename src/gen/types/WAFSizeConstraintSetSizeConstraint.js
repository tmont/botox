var PropertyType = require('../../property-type');

/**
 * SizeConstraint is a property of the AWS::WAF::SizeConstraintSet resource that specifies a size constraint and which part of a web request that you want AWS WAF to constrain.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint.html}
 * @constructor
 */
function WAFSizeConstraintSetSizeConstraint() {
	PropertyType.call(this);
}

WAFSizeConstraintSetSizeConstraint.prototype = Object.create(PropertyType.prototype);

/**
 * The type of comparison that you want AWS WAF to perform. AWS WAF uses this value in combination with the Size and FieldToMatch property values to check if the size constraint is a match. For more information and valid values, see the ComparisonOperator content for the SizeConstraint data type in the AWS WAF API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @return {WAFSizeConstraintSetSizeConstraint}
 */
WAFSizeConstraintSetSizeConstraint.prototype.comparisonOperator = function(value) {
	return this.set('ComparisonOperator', value);
};

/**
 * The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
 *
 * Required: true
 *
 * @param {WAFSizeConstraintSetSizeConstraintFieldToMatch} value
 * @return {WAFSizeConstraintSetSizeConstraint}
 */
WAFSizeConstraintSetSizeConstraint.prototype.fieldToMatch = function(value) {
	return this.set('FieldToMatch', value);
};

/**
 * The size in bytes that you want AWS WAF to compare against the size of the specified FieldToMatch. AWS WAF uses Size in combination with the ComparisonOperator and FieldToMatch property values to check if the size constraint of a web request is a match. For more information and valid values, see the Size content for the SizeConstraint data type in the AWS WAF API Reference.
 *
 * Required: true
 *
 * @param {Number} value
 * @return {WAFSizeConstraintSetSizeConstraint}
 */
WAFSizeConstraintSetSizeConstraint.prototype.size = function(value) {
	return this.set('Size', value);
};

/**
 * Specifies how AWS WAF processes the FieldToMatch property before inspecting a request for a match. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the FieldToMatch before inspecting a web request for a match.
 *
 * Required: true
 *
 * @param {String} value
 * @return {WAFSizeConstraintSetSizeConstraint}
 */
WAFSizeConstraintSetSizeConstraint.prototype.textTransformation = function(value) {
	return this.set('TextTransformation', value);
};

module.exports = WAFSizeConstraintSetSizeConstraint;
