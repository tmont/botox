var TemplateItemTrait = require('../../template-item-trait');

/**
 * Compares if two values are equal. Returns true if the two values are equal or false if they aren't.
 * @constructor
 * @implements TemplateItemTrait
 * @param lhs
 * @param rhs
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html}
 */
function Equals(lhs, rhs) {
	if (typeof(lhs) === 'undefined' || lhs === null) {
		throw new Error('lhs is required');
	}
	if (typeof(rhs) === 'undefined' || rhs === null) {
		throw new Error('rhs is required');
	}

	this.lhs = lhs;
	this.rhs = rhs;
}

Object.assign(Equals.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::Equals': [ this.lhs, this.rhs ]
		};
	}
});

module.exports = Equals;
