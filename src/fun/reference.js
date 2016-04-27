var TemplateItemTrait = require('../template-item-trait');

/**
 * Creates a reference to a resource/parameter/condition/etc.
 * @param {Resource|String} object The resource/parameter/condition instance to reference
 * @constructor
 */
function Reference(object) {
	if (!object) {
		throw new Error('object is required');
	}

	this.ref = object;
}

Reference.prototype = Object.create(TemplateItemTrait);
Reference.prototype.toJSON = function() {
	return {
		Ref: this.ref.name ? this.ref.name : this.ref
	};
};

module.exports = Reference;
