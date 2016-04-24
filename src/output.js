var TemplateItemTrait = require('./template-item-trait');

/**
 * Represents an Output in CloudFormation
 * @param {String} name
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html}
 */
function Output(name) {
	if (!name || typeof(name) !== 'string') {
		throw new Error('name must be a non-empty string');
	}
	if (!/^[A-Za-z\d]+$/.test(name)) {
		throw new Error('Output name must be alphanumeric');
	}

	Object.defineProperty(this, 'name', {
		value: name
	});

	Object.defineProperty(this, 'data', {
		value: {
			Description: '',
			Value: ''
		}
	});

	this.condition = null;
}

Output.prototype = {
	/**
	 * Sets the description of the output
	 * @param {String} description Must bes less than 4KB
	 * @returns {Output}
	 */
	description: function(description) {
		if (typeof(description) !== 'string') {
			throw new Error('Output description must be a string');
		}
		if (description.length > 1024 * 4) {
			throw new Error('Output description must be less than 4K in length');
		}

		return this.set('Description', description);
	},
	/**
	 * Sets the output's value
	 * @param {String|Reference|Attribute|Join|FindInMap|Parameter} value
	 * @returns {Output}
	 */
	value: function(value) {
		return this.set('Value', value);
	},
	/**
	 * Sets optional condition
	 * @param {Condition} condition
	 * @returns {Output}
	 */
	condition: function(condition) {
		this.condition = condition;
		return this;
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		var json = Object.assign({}, this.data);

		if (this.condition) {
			json.Condition = this.condition.name;
		}

		return json;
	}
};

Object.assign(Output.prototype, TemplateItemTrait.prototype);

module.exports = Output;
