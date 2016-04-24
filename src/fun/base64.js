var TemplateItemTrait = require('../template-item-trait');

/**
 * Returns the Base64 representation of the input string
 * @constructor
 * @implements TemplateItemTrait
 * @param {String|Attribute|Join|Reference} value The string value you want to encode
 */
function Base64(value) {
	if (!value) {
		throw new Error('value is required');
	}

	this.value = value;
}

Object.assign(Base64.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::Base64': this.value
		};
	}
});

module.exports = Base64;
