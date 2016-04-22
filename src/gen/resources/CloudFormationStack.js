var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::CloudFormation::Stack - The AWS::CloudFormation::Stack type nests a stack as a resource in a top-level template.
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationStack(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

CloudFormationStack.prototype = {
	
	/**
	 * A list of existing Amazon SNS topics where notifications about stack events are sent.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {CloudFormationStack}
	 */
	notificationARNs: function(value) {
		return this.set('NotificationARNs', value);
	},

	/**
	 * The set of parameters passed to AWS CloudFormation when this nested stack is created.
	 *
	 * Required: false
	 * Update requires: Whether an update causes interruptions depends on the resources that are being update. An update never causes a nested stack to be replaced.
	 *
	 * @param {CloudFormationStackParametersPropertyType} value
	 * @return {CloudFormationStack}
	 */
	parameters: function(value) {
		return this.set('Parameters', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) to describe this stack.
	 *
	 * Required: false
	 * Update requires: No interruption.
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {CloudFormationStack}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	/**
	 * The URL of a template that specifies the stack that you want to create as a resource. The template must be stored on an Amazon S3 bucket, so the URL must have the form: https://s3.amazonaws.com/.../TemplateName.template
	 *
	 * Required: true
	 * Update requires: Whether an update causes interruptions depends on the resources that are being update. An update never causes a nested stack to be replaced.
	 *
	 * @param {String} value
	 * @return {CloudFormationStack}
	 */
	templateURL: function(value) {
		return this.set('TemplateURL', value);
	},

	/**
	 * The length of time, in minutes, that AWS CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. The default is no timeout. When AWS CloudFormation detects that the nested stack has reached the CREATE_COMPLETE state, it marks the nested stack resource as CREATE_COMPLETE in the parent stack and resumes creating the parent stack. If the timeout period expires before the nested stack reaches CREATE_COMPLETE, AWS CloudFormation marks the nested stack as failed and rolls back both the nested stack and parent stack.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {CloudFormationStack}
	 */
	timeoutInMinutes: function(value) {
		return this.set('TimeoutInMinutes', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * Returns: The output value from the specified nested stack where NestedStackOutputName is the name of the output value.
			 */
			outputsNestedStackOutputName: function() {
				return new Attribute(self, 'Outputs.NestedStackOutputName');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = CloudFormationStack;
