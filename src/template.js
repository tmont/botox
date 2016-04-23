function Template(description) {
	Object.defineProperty(this, 'data', {
		value: {
			AWSTemplateFormatVersion: '2010-09-09',
			Description: description || '',
			Metadata: {},
			Parameters: {},
			Mappings: {},
			Conditions: {},
			Resources: {},
			Outputs: {}
		}
	});
}

Template.prototype = {
	description: function(description) {
		this.data.Description = description;
		return this;
	},
	metadata: function(json) {
		this.data.Metadata = json;
		return this;
	},
	parameter: function(parameter) {
		this.data.Parameters[parameter.name] = parameter;
		return this;
	},
	mapping: function(mapping) {
		this.data.Mappings[mapping.name] = mapping;
		return this;
	},
	condition: function(condition) {
		this.data.Conditions[condition.name] = condition;
		return this;
	},
	resource: function(resource) {
		this.data.Resources[resource.name] = resource;
		return this;
	},
	output: function(output) {
		this.data.Outputs[output.name] = output;
		return this;
	},

	getTemplateJson: function() {
		return JSON.parse(this.toString());
	},

	toJSON: function() {
		var data = {},
			self = this;

		Object.keys(this.data).forEach(function(key) {
			var value = self.data[key];
			if (!value || typeof(value) === 'string') {
				if (value) {
					data[key] = value;
				}
				return;
			}

			if (Object.keys(value).length) {
				data[key] = value;
			}
		});

		return data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = Template;
