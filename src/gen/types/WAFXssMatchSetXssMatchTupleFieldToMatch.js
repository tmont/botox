var PropertyType = require('../../property-type');

/**
 * FieldToMatch is a property of the AWS WAF XssMatchSet XssMatchTuple property that specifies the part of a web request that you want AWS WAF to search, such as a specific header or a query string.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple-fieldtomatch.html}
 * @constructor
 */
function WAFXssMatchSetXssMatchTupleFieldToMatch() {
	PropertyType.call(this);
}

Object.setPrototypeOf(WAFXssMatchSetXssMatchTupleFieldToMatch, PropertyType);

WAFXssMatchSetXssMatchTupleFieldToMatch.prototype = {
	
	/**
	 * If you specify HEADER for the Type property, the name of the header that AWS WAF searches for, such as User-Agent or Referer. If you specify any other value for the Type property, do not specify this property.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {WAFXssMatchSetXssMatchTupleFieldToMatch}
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
	 * @return {WAFXssMatchSetXssMatchTupleFieldToMatch}
	 */
	type: function(value) {
		return this.set('Type', value);
	}
};

module.exports = WAFXssMatchSetXssMatchTupleFieldToMatch;
