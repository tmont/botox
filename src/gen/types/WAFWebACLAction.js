var PropertyType = require('../../property-type');

/**
 * Action is a property of the AWS::WAF::WebACL resource and the AWS WAF WebACL Rules property that specifies the action AWS WAF takes when a web request matches or doesn't match all rule conditions.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-action.html}
 * @constructor
 */
function WAFWebACLAction() {
	PropertyType.call(this);
}

WAFWebACLAction.prototype = Object.create(PropertyType.prototype);

/**
 * For actions that are associated with a rule, the action that AWS WAF takes when a web request matches all conditions in a rule.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {WAFWebACLAction}
 */
WAFWebACLAction.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = WAFWebACLAction;
