var TemplateItemTrait = require('../template-item-trait');

/**
 * Joins a bunch of things on a delimiter
 * @constructor
 * @implements TemplateItemTrait
 * @param {Array|Resource} things
 * @param {String} [delimiter]
 */
function Join(things, delimiter) {
	if (!things) {
		throw new Error('things is required');
	}

	this.delimiter = delimiter || '';
	this.things = things;
}

Object.assign(Join.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::Join': [this.delimiter, this.things]
		};
	}
});

module.exports = Join;
