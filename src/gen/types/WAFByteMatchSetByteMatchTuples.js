var PropertyType = require('../../property-type');

/**
 * ByteMatchTuples is a property of the AWS::WAF::ByteMatchSet resource that specifies settings for an AWS WAF ByteMatchSet resource, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuples.html}
 * @constructor
 */
function WAFByteMatchSetByteMatchTuples() {
	PropertyType.call(this);
}

Object.setPrototypeOf(WAFByteMatchSetByteMatchTuples, PropertyType);

WAFByteMatchSetByteMatchTuples.prototype = {
	
	/**
	 * The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
	 *
	 * Required: true
	 *
	 * @param {WAFByteMatchSetByteMatchTuplesFieldToMatch} value
	 * @return {WAFByteMatchSetByteMatchTuples}
	 */
	fieldToMatch: function(value) {
		return this.set('FieldToMatch', value);
	},

	/**
	 * How AWS WAF finds matches within the web request part in which you are searching. For valid values, see the PositionalConstraint content for the ByteMatchTuple data type in the AWS WAF API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {WAFByteMatchSetByteMatchTuples}
	 */
	positionalConstraint: function(value) {
		return this.set('PositionalConstraint', value);
	},

	/**
	 * The value that AWS WAF searches for. AWS CloudFormation base64 encodes this value before sending it to AWS WAF.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {WAFByteMatchSetByteMatchTuples}
	 */
	targetString: function(value) {
		return this.set('TargetString', value);
	},

	/**
	 * The base64-encoded value that AWS WAF searches for. AWS CloudFormation sends this value to AWS WAF without encoding it.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {WAFByteMatchSetByteMatchTuples}
	 */
	targetStringBase64: function(value) {
		return this.set('TargetStringBase64', value);
	},

	/**
	 * Specifies how AWS WAF processes the target string value. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms the target string value before inspecting a web request for a match.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {WAFByteMatchSetByteMatchTuples}
	 */
	textTransformation: function(value) {
		return this.set('TextTransformation', value);
	}
};

module.exports = WAFByteMatchSetByteMatchTuples;
