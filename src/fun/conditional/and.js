var TemplateItemTrait = require('../../template-item-trait'),
	Condition = require('../../condition');

/**
 * Returns true if all the specified conditions evaluate to true, or returns false if any one of the conditions evaluates to false. Fn::And acts as an AND operator. The minimum number of conditions that you can include is 2, and the maximum is 10.
 * @constructor
 * @implements TemplateItemTrait
 * @param conditions Between 2 and 10 conditional functions
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html}
 */
function And(conditions) {
	var arr = [];
	if (arguments.length > 1) {
		arr = [].slice.call(arguments);
	} else {
		if (!Array.isArray(conditions)) {
			throw new Error('conditions must be multiple conditions or an array of conditions');
		}

		arr = conditions;
	}


	if (arr.length < 2 || arr.length > 10) {
		throw new Error('Must provide between 2 and 10 conditions');
	}

	this.conditions = arr;
}

Object.assign(And.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::And': this.conditions.map(function(condition) {
				if (condition instanceof Condition) {
					return { Condition: condition.name };
				}

				return condition;
			})
		};
	}
});

module.exports = And;
