/**
 * SqlInjectionMatchTuples is a property of the AWS::WAF::SqlInjectionMatchSet resource that specifies the parts of web requests that AWS WAF inspects for SQL code.
 * @constructor
 */
function AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples() {
	this.data = {};
}

AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples.prototype = {
	
	/**
	 * The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 *
	 * Required: true
	 *
	 * @param {AWSWAFByteMatchSetByteMatchTuplesFieldToMatch} value
	 * @return {AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples}
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
	 * @return {AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples}
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

module.exports = AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples;
