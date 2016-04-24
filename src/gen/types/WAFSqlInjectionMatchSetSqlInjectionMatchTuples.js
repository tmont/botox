var PropertyType = require('../../property-type');

/**
 * SqlInjectionMatchTuples is a property of the AWS::WAF::SqlInjectionMatchSet resource that specifies the parts of web requests that AWS WAF inspects for SQL code.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuples.html}
 * @constructor
 */
function WAFSqlInjectionMatchSetSqlInjectionMatchTuples() {
	PropertyType.call(this);
}

Object.setPrototypeOf(WAFSqlInjectionMatchSetSqlInjectionMatchTuples, PropertyType);

WAFSqlInjectionMatchSetSqlInjectionMatchTuples.prototype = {
	
	/**
	 * The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 *
	 * Required: true
	 *
	 * @param {WAFByteMatchSetByteMatchTuplesFieldToMatch} value
	 * @return {WAFSqlInjectionMatchSetSqlInjectionMatchTuples}
	 */
	fieldToMatch: function(value) {
		return this.set('FieldToMatch', value);
	},

	/**
	 * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the target string value before inspecting a web request for a match. For valid values, see the TextTransformation content for the SqlInjectionMatchTuple data type in the AWS WAF API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {WAFSqlInjectionMatchSetSqlInjectionMatchTuples}
	 */
	textTransformation: function(value) {
		return this.set('TextTransformation', value);
	}
};

module.exports = WAFSqlInjectionMatchSetSqlInjectionMatchTuples;
