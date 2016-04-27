var TemplateItemTrait = require('./template-item-trait');

/**
 * Represents an Condition in CloudFormation
 * @param {String} name
 * @param {If|And|Equals|Not|Or} conditional
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html}
 */
function Condition(name, conditional) {
	if (!name || typeof(name) !== 'string') {
		throw new Error('name must be a non-empty string');
	}
	if (!conditional) {
		throw new Error('conditional is required');
	}

	Object.defineProperty(this, 'name', {
		value: name
	});

	this.conditional = conditional || null;
}

Condition.prototype = {
	toJSON: function() {
		return this.conditional.toJSON();
	}
};

Object.assign(Condition.prototype, TemplateItemTrait.prototype);

module.exports = Condition;
