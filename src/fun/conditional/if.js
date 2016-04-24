var TemplateItemTrait = require('../../template-item-trait'),
	Condition = require('../../condition');

/**
 * Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false. Currently, AWS CloudFormation supports the Fn::If intrinsic function in the metadata attribute, update policy attribute, and property values in the Resources section and Outputs sections of a template. You can use the AWS::NoValue pseudo parameter as a return value to remove the corresponding property.
 * @constructor
 * @implements TemplateItemTrait
 * @param {Condition} condition
 * @param trueValue
 * @param falseValue
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-conditions.html}
 */
function If(condition, trueValue, falseValue) {
	if (!condition) {
		throw new Error('condition is required');
	}
	if (!(condition instanceof Condition)) {
		throw new Error('condition must be an instance of Condition');
	}
	if (typeof(trueValue) === 'undefined' || trueValue === null) {
		throw new Error('trueValue is required');
	}
	if (typeof(falseValue) === 'undefined' || falseValue === null) {
		throw new Error('falseValue is required');
	}

	this.condition = condition;
	this.trueValue = trueValue;
	this.falseValue = falseValue;
}

Object.assign(If.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::If': [ this.condition.name, this.trueValue, this.falseValue ]
		};
	}
});

module.exports = If;
