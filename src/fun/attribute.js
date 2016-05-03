var TemplateItemTrait = require('../template-item-trait');

/**
 * Creates an attribute reference, e.g. Fn::GetAtt
 * @param {Object} resource
 * @param {String} attribute Name of the attribute
 * @implements TemplateItemTrait
 * @constructor
 */
function Attribute(resource, attribute) {
	if (!resource) {
		throw new Error('resource is required');
	}
	if (!attribute) {
		throw new Error('attribute is required');
	}
	this.resource = resource;
	this.attribute = attribute;
}

Object.assign(Attribute.prototype, TemplateItemTrait.prototype, {
	toJSON: function() {
		return {
			'Fn::GetAtt': [ this.resource.$name, this.attribute ]
		};
	}
});

module.exports = Attribute;
