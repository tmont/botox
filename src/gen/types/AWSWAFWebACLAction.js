/**
 * Action is a property of the AWS::WAF::WebACL resource and the AWS WAF WebACL Rules property that specifies the action AWS WAF takes when a web request matches or doesn't match all rule conditions.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-action.html}
 * @constructor
 */
function AWSWAFWebACLAction() {
	this.data = {};
}

AWSWAFWebACLAction.prototype = {
	
	/**
	 * For actions that are associated with a rule, the action that AWS WAF takes when a web request matches all conditions in a rule.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSWAFWebACLAction}
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

module.exports = AWSWAFWebACLAction;
