var TemplateItemTrait = require('../template-item-trait');

/**
 * Returns a single object from a list of objects by index
 * @constructor
 * @implements TemplateItemTrait
 * @param {Number|String|Reference|FindInMap} index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
 * @param {Array|Reference|Attribute|GetAZs} things The list of objects to select from. This list must not be null, nor can it have null entries.
 */
function Select(index, things) {
	if (typeof(index) === 'undefined' || index === null) {
		throw new Error('index is required');
	}
	if (!things) {
		throw new Error('things is required');
	}

	this.index = index;
	this.things = things;
}

Object.assign(Select.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::Select': [ this.index, this.things ]
		};
	}
});

module.exports = Select;
