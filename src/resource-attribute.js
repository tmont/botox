var TemplateItemTrait = require('./template-item-trait');

/**
 * @implements TemplateItemTrait
 * @constructor
 */
function ResourceAttribute() {
	Object.defineProperty(this, 'data', {
		value: {}
	});
}

ResourceAttribute.prototype = {
	set: function(key1, key2, value) {
		if (!this.data[key1]) {
			this.data[key1] = {};
		}

		this.data[key1][key2] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(ResourceAttribute.prototype, TemplateItemTrait.prototype);

module.exports = ResourceAttribute;
