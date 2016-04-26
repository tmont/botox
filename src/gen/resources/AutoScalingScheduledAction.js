var Resource = require('../../resource');

/**
 * AWS::AutoScaling::ScheduledAction - Creates a scheduled scaling action for an Auto Scaling group, changing the number of servers available for your application in response to predictable load changes.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-scheduledaction.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function AutoScalingScheduledAction(name) {
	Resource.call(this, name, 'AWS::AutoScaling::ScheduledAction');
}

AutoScalingScheduledAction.prototype = Object.create(Resource.prototype);

/**
 * The name or ARN of the Auto Scaling group.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScheduledAction}
 */
AutoScalingScheduledAction.prototype.autoScalingGroupName = function(value) {
	return this.set('AutoScalingGroupName', value);
};

/**
 * The number of Amazon EC2 instances that should be running in the Auto Scaling group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {AutoScalingScheduledAction}
 */
AutoScalingScheduledAction.prototype.desiredCapacity = function(value) {
	return this.set('DesiredCapacity', value);
};

/**
 * The time in UTC for this schedule to end. For example, 2010-06-01T00:00:00Z.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScheduledAction}
 */
AutoScalingScheduledAction.prototype.endTime = function(value) {
	return this.set('EndTime', value);
};

/**
 * The maximum number of Amazon EC2 instances in the Auto Scaling group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {AutoScalingScheduledAction}
 */
AutoScalingScheduledAction.prototype.maxSize = function(value) {
	return this.set('MaxSize', value);
};

/**
 * The minimum number of Amazon EC2 instances in the Auto Scaling group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {AutoScalingScheduledAction}
 */
AutoScalingScheduledAction.prototype.minSize = function(value) {
	return this.set('MinSize', value);
};

/**
 * The time in UTC when recurring future actions will start. You specify the start time by following the Unix cron syntax format. For more information about cron syntax, go to http://en.wikipedia.org/wiki/Cron.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScheduledAction}
 */
AutoScalingScheduledAction.prototype.recurrence = function(value) {
	return this.set('Recurrence', value);
};

/**
 * The time in UTC for this schedule to start. For example, 2010-06-01T00:00:00Z.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScheduledAction}
 */
AutoScalingScheduledAction.prototype.startTime = function(value) {
	return this.set('StartTime', value);
};

module.exports = AutoScalingScheduledAction;
