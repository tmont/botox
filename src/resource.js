var Reference = require('./fun/reference'),
	Attribute = require('./fun/attribute');

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

	getTemplateJson: function() {
		return JSON.parse(this.toString());
	},

	toJSON: function() {
		return {
			Type: this.type,
			Properties: this.data
		};
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = Resource;
