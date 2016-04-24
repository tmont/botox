var TemplateItemTrait = require('../../template-item-trait'),
	Condition = require('../../condition');

/**
 * Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true. Fn::Not acts as a NOT operator.
 * @constructor
 * @implements TemplateItemTrait
 * @param {Condition|Not|Equals|Or|And} condition A condition such as Fn::Equals that evaluates to true or false.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html}
 */
function Not(condition) {
	if (!condition) {
		throw new Error('condition is required');
	}

	this.condition = condition;
}

Object.assign(Not.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		var json = this.condition instanceof Condition ?
			{ Condition: this.condition.name } :
			this.condition;

		return {
			'Fn::Not': [ json ]
		};
	}
});

module.exports = Not;
