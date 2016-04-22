var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::AutoScaling::ScheduledAction - Creates a scheduled scaling action for an Auto Scaling group, changing the number of servers available for your application in response to predictable load changes.
 * @constructor
 * @param {String} name Name of the resource
 */
function AutoScalingScheduledAction(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

AutoScalingScheduledAction.prototype = {
	
	/**
	 * The name or ARN of the Auto Scaling group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingScheduledAction}
	 */
	autoScalingGroupName: function(value) {
		return this.set('AutoScalingGroupName', value);
	},

	/**
	 * The number of Amazon EC2 instances that should be running in the Auto Scaling group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {AutoScalingScheduledAction}
	 */
	desiredCapacity: function(value) {
		return this.set('DesiredCapacity', value);
	},

	/**
	 * The time in UTC for this schedule to end. For example, 2010-06-01T00:00:00Z.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Timestamp} value
	 * @return {AutoScalingScheduledAction}
	 */
	endTime: function(value) {
		return this.set('EndTime', value);
	},

	/**
	 * The maximum number of Amazon EC2 instances in the Auto Scaling group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {AutoScalingScheduledAction}
	 */
	maxSize: function(value) {
		return this.set('MaxSize', value);
	},

	/**
	 * The minimum number of Amazon EC2 instances in the Auto Scaling group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {AutoScalingScheduledAction}
	 */
	minSize: function(value) {
		return this.set('MinSize', value);
	},

	/**
	 * The time in UTC when recurring future actions will start. You specify the start time by following the Unix cron syntax format. For more information about cron syntax, go to http://en.wikipedia.org/wiki/Cron.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {AutoScalingScheduledAction}
	 */
	recurrence: function(value) {
		return this.set('Recurrence', value);
	},

	/**
	 * The time in UTC for this schedule to start. For example, 2010-06-01T00:00:00Z.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Timestamp} value
	 * @return {AutoScalingScheduledAction}
	 */
	startTime: function(value) {
		return this.set('StartTime', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::AutoScaling::ScheduledAction has no attributes');
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

module.exports = AutoScalingScheduledAction;
