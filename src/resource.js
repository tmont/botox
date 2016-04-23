var Reference = require('./fun/reference'),
	Attribute = require('./fun/attribute'),
	TemplateItemTrait = require('./template-item-trait');

/**
 * Base class for CloudFormation resources
 * @param {String} name
 * @param {String} type
 * @constructor
 * @implements TemplateItemTrait
 */
function Resource(name, type) {
	if (!name || typeof(name) !== 'string') {
		throw new Error('name must be a non-empty string');
	}
	if (!type || typeof(type) !== 'string') {
		throw new Error('type must be a non-empty string');
	}

	Object.defineProperty(this, 'data', {
		value: {}
	});

	Object.defineProperty(this, 'ref', {
		value: new Reference(this)
	});

	Object.defineProperty(this, 'name', {
		value: name
	});

	Object.defineProperty(this, 'type', {
		value: type
	});
}

Resource.prototype = {
	get attr() {
		throw new Error('This resource has no attributes');
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	createAttribute: function(name) {
		return new Attribute(this, name);
	},

	toJSON: function() {
		return {
			Type: this.type,
			Properties: this.data
		};
	}
};

Object.assign(Resource.prototype, TemplateItemTrait.prototype);

module.exports = Resource;
