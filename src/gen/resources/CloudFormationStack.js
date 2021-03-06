var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::CloudFormation::Stack - The AWS::CloudFormation::Stack type nests a stack as a resource in a top-level template.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudFormationStack(name) {
	Resource.call(this, name, 'AWS::CloudFormation::Stack');
}

CloudFormationStack.prototype = Object.create(Resource.prototype);

/**
 * A list of existing Amazon SNS topics where notifications about stack events are sent.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {CloudFormationStack}
 */
CloudFormationStack.prototype.notificationARNs = function(value) {
	return this.set('NotificationARNs', value);
};

/**
 * The set of parameters passed to AWS CloudFormation when this nested stack is created.
 *
 * Required: false
 * Update requires: Whether an update causes interruptions depends on the resources that are being update. An update never causes a nested stack to be replaced.
 *
 * @param {CloudFormationStackParametersPropertyType|Attribute|Reference} value CloudFormation Stack Parameters Property Type
 * @returns {CloudFormationStack}
 */
CloudFormationStack.prototype.parameters = function(value) {
	return this.set('Parameters', value);
};

/**
 * An arbitrary set of tags (key–value pairs) to describe this stack.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {CloudFormationStack}
 */
CloudFormationStack.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * The URL of a template that specifies the stack that you want to create as a resource. The template must be stored on an Amazon S3 bucket, so the URL must have the form: https://s3.amazonaws.com/.../TemplateName.template
 *
 * Required: true
 * Update requires: Whether an update causes interruptions depends on the resources that are being update. An update never causes a nested stack to be replaced.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {CloudFormationStack}
 */
CloudFormationStack.prototype.templateURL = function(value) {
	return this.set('TemplateURL', value);
};

/**
 * The length of time, in minutes, that AWS CloudFormation waits for the nested stack to reach the CREATE_COMPLETE state. The default is no timeout. When AWS CloudFormation detects that the nested stack has reached the CREATE_COMPLETE state, it marks the nested stack resource as CREATE_COMPLETE in the parent stack and resumes creating the parent stack. If the timeout period expires before the nested stack reaches CREATE_COMPLETE, AWS CloudFormation marks the nested stack as failed and rolls back both the nested stack and parent stack.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {CloudFormationStack}
 */
CloudFormationStack.prototype.timeoutInMinutes = function(value) {
	return this.set('TimeoutInMinutes', value);
};

/**
 * AWS::CloudFormation::Stack attributes
 * @constructor
 * @param {Resource} resource
 */
function CloudFormationStackAttributes(resource) {
	this.resource = resource;
}
CloudFormationStackAttributes.prototype = {
	/**
	 * Returns: The output value from the specified nested stack where NestedStackOutputName is the name of the output value.
	 * @type {Attribute}
	 */
	get outputsNestedStackOutputName() {
		return new Attribute(this.resource, 'Outputs.NestedStackOutputName');
	}
};

/**
 * Gets attribute map for AWS::CloudFormation::Stack
 * @returns {CloudFormationStackAttributes}
 */
CloudFormationStack.prototype.attr = function() {
	return new CloudFormationStackAttributes(this);
};

module.exports = CloudFormationStack;
