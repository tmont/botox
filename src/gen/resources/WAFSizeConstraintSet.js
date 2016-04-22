var Resource = require('../../resource');

/**
 * AWS::WAF::SizeConstraintSet - The AWS::WAF::SizeConstraintSet resource specifies a size constraint that AWS WAF uses to check the size of a web request and which parts of the request to check. For more information, see CreateSizeConstraintSet in the AWS WAF API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function WAFSizeConstraintSet(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(WAFSizeConstraintSet, Resource);

WAFSizeConstraintSet.prototype = {
	
	
	/**
	 * A friendly name or description for the SizeConstraintSet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {WAFSizeConstraintSet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The size constraint and the part of the web request to check.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {AWSWAFSizeConstraintSetSizeConstraint[]} value
	 * @return {WAFSizeConstraintSet}
	 */
	sizeConstraints: function(value) {
		return this.set('SizeConstraints', value);
	}
};

module.exports = WAFSizeConstraintSet;
