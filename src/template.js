var TemplateItemTrait = require('./template-item-trait');

/**
 * A template is a JSON-formatted text file that describes your AWS infrastructure. Templates include several major sections. The Resources section is the only section that is required. The first character in the template must be an open brace ({), and the last character must be a closed brace (}). The following template fragment shows the template structure and sections.
 * @param {String} description
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html}
 */
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
	/**
	 * Sets description for the template
	 * @param {String} description
	 * @returns {Template}
	 */
	description: function(description) {
		this.data.Description = description;
		return this;
	},
	/**
	 * JSON objects that provide additional information about the template.
	 * @param {Object} json
	 * @returns {Template}
	 */
	metadata: function(json) {
		this.data.Metadata = json;
		return this;
	},
	/**
	 * Specifies values that you can pass in to your template at runtime (when you create or update a stack). You can refer to parameters in the Resources and Outputs sections of the template.
	 * @param {Parameter} parameter
	 * @returns {Template}
	 */
	parameter: function(parameter) {
		this.data.Parameters[parameter.name] = parameter;
		return this;
	},
	/**
	 * A mapping of keys and associated values that you can use to specify conditional parameter values, similar to a lookup table. You can match a key to a corresponding value by using the Fn::FindInMap intrinsic function in the Resources and Outputs section.
	 * @param {String} name
	 * @param {Object} map A two-level deep JSON object. Second-level keys must be alphanumeric.
	 * @returns {Template}
	 */
	mapping: function(name, map) {
		this.data.Mappings[name] = map;
		return this;
	},
	/**
	 * Defines conditions that control whether certain resources are created or whether certain resource properties are assigned a value during stack creation or update. For example, you could conditionally create a resource that depends on whether the stack is for a production or test environment.
	 * @param {Condition} condition
	 * @returns {Template}
	 */
	condition: function(condition) {
		this.data.Conditions[condition.name] = condition;
		return this;
	},
	/**
	 * Specifies the stack resources and their properties, such as an Amazon Elastic Compute Cloud instance or an Amazon Simple Storage Service bucket. You can refer to resources in the Resources and Outputs sections of the template.
	 * @param {Resource} resource
	 * @returns {Template}
	 */
	resource: function(resource) {
		this.data.Resources[resource.name] = resource;
		return this;
	},
	/**
	 * Describes the values that are returned whenever you view your stack's properties. For example, you can declare an output for an Amazon S3 bucket name and then call the aws cloudformation describe-stacks AWS CLI command to view the name.
	 * @param {Output} output
	 * @returns {Template}
	 */
	output: function(output) {
		this.data.Outputs[output.name] = output;
		return this;
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
	}
};

Object.assign(Template.prototype, TemplateItemTrait.prototype);

module.exports = Template;
