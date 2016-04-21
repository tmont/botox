var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Events::Rule - The AWS::Events::Rule resource creates a rule that matches incoming Amazon CloudWatch Events (CloudWatch Events) events and routes them to one or more targets for processing. For more information, see Using CloudWatch Events in the Amazon CloudWatch Developer Guide.
 * @constructor
 */
function EventsRule(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

EventsRule.prototype = {
	
	/**
	 * A description of the rule's purpose.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EventsRule}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * Describes which events CloudWatch Events routes to the specified target. These routed events are matched events. For more information, see Events and Event Patterns in the Amazon CloudWatch Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {JSONobject} value
	 * @return {EventsRule}
	 */
	eventPattern: function(value) {
		return this.set('EventPattern', value);
	},

	/**
	 * A name for the rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {EventsRule}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants CloudWatch Events permission to make calls to target services, such as AWS Lambda (Lambda) or Amazon Kinesis streams.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EventsRule}
	 */
	roleArn: function(value) {
		return this.set('RoleArn', value);
	},

	/**
	 * The schedule or rate (frequency) that determines when CloudWatch Events runs the rule. For more information, see Schedule Expression Syntax for Rules in the Amazon CloudWatch Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {undefined} value
	 * @return {EventsRule}
	 */
	scheduleExpression: function(value) {
		return this.set('ScheduleExpression', value);
	},

	/**
	 * Indicates whether the rule is enabled. For valid values, see the State parameter for the PutRule action in the Amazon CloudWatch Events API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {EventsRule}
	 */
	state: function(value) {
		return this.set('State', value);
	},

	/**
	 * The resources, such as Lambda functions or Amazon Kinesis streams, that CloudWatch Events routes events to and invokes when the rule is triggered.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {CloudWatchEventsRuleTarget[]} value
	 * @return {EventsRule}
	 */
	targets: function(value) {
		return this.set('Targets', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var resourceName = this.name;
		return {
			
			/**
			 * The event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-1:123456789012:rule/example.
			 */
			arn: function() {
				return new Attribute(resourceName, 'Arn');
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

module.exports = EventsRule;
