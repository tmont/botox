var PropertyType = require('../../property-type');

/**
 * FieldToMatch is a property of the AWS WAF SizeConstraintSet SizeConstraint property that specifies the part of a web request that you want AWS WAF to check for a size constraint, such as a specific header or a query string.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sizeconstraintset-sizeconstraint-fieldtomatch.html}
 * @constructor
 */
function WAFSizeConstraintSetSizeConstraintFieldToMatch() {
	PropertyType.call(this);
}

WAFSizeConstraintSetSizeConstraintFieldToMatch.prototype = Object.create(PropertyType.prototype);

/**
 * If you specify HEADER for the Type property, the name of the header that AWS WAF searches for, such as User-Agent or Referer. If you specify any other value for the Type property, do not specify this property.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {WAFSizeConstraintSetSizeConstraintFieldToMatch}
 */
WAFSizeConstraintSetSizeConstraintFieldToMatch.prototype.data = function(value) {
	return this.set('Data', value);
};

/**
 * The part of the web request in which AWS WAF searches for the target string. For valid values, see FieldToMatch in the AWS WAF API Reference.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {WAFSizeConstraintSetSizeConstraintFieldToMatch}
 */
WAFSizeConstraintSetSizeConstraintFieldToMatch.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = WAFSizeConstraintSetSizeConstraintFieldToMatch;
