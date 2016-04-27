var TemplateItemTrait = require('./template-item-trait');

/**
 * @implements TemplateItemTrait
 * @constructor
 */
function PropertyType() {
	Object.defineProperty(this, 'data', {
		value: {}
	});
}

PropertyType.prototype = {
	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(PropertyType.prototype, TemplateItemTrait.prototype);

module.exports = PropertyType;
