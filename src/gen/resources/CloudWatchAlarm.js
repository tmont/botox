var Resource = require('../../resource');

/**
 * AWS::CloudWatch::Alarm - The AWS::CloudWatch::Alarm type creates an CloudWatch alarm.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudWatchAlarm(name) {
	Resource.call(this, name, 'AWS::CloudWatch::Alarm');
}

CloudWatchAlarm.prototype = Object.create(Resource.prototype);

/**
 * Indicates whether or not actions should be executed during any changes to the alarm's state.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.actionsEnabled = function(value) {
	return this.set('ActionsEnabled', value);
};

/**
 * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Number (ARN). For more information about creating alarms and the actions you can specify, see Creating Amazon CloudWatch Alarms in the Amazon CloudWatch Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.alarmActions = function(value) {
	return this.set('AlarmActions', value);
};

/**
 * The description for the alarm.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.alarmDescription = function(value) {
	return this.set('AlarmDescription', value);
};

/**
 * A name for the alarm. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the alarm name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.alarmName = function(value) {
	return this.set('AlarmName', value);
};

/**
 * The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.comparisonOperator = function(value) {
	return this.set('ComparisonOperator', value);
};

/**
 * The dimensions for the alarm's associated metric.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudWatchMetricDimensionPropertyType[]|Attribute|Reference} value List of Metric Dimension
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.dimensions = function(value) {
	return this.set('Dimensions', value);
};

/**
 * The number of periods over which data is compared to the specified threshold.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.evaluationPeriods = function(value) {
	return this.set('EvaluationPeriods', value);
};

/**
 * The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Number (ARN). Currently the only action supported is publishing to an Amazon SNS topic or an Amazon Auto Scaling policy.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.insufficientDataActions = function(value) {
	return this.set('InsufficientDataActions', value);
};

/**
 * The name for the alarm's associated metric. For more information about the metrics that you can specify, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the Amazon CloudWatch Developer Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.metricName = function(value) {
	return this.set('MetricName', value);
};

/**
 * The namespace for the alarm's associated metric.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.namespace = function(value) {
	return this.set('Namespace', value);
};

/**
 * The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Number (ARN). Currently the only action supported is publishing to an Amazon SNS topic or an Amazon Auto Scaling policy.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.okActions = function(value) {
	return this.set('OKActions', value);
};

/**
 * The time over which the specified statistic is applied. You must specify a time in seconds that is also a multiple of 60.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.period = function(value) {
	return this.set('Period', value);
};

/**
 * The statistic to apply to the alarm's associated metric.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.statistic = function(value) {
	return this.set('Statistic', value);
};

/**
 * The value against which the specified statistic is compared.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.threshold = function(value) {
	return this.set('Threshold', value);
};

/**
 * The unit for the alarm's associated metric.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {CloudWatchAlarm}
 */
CloudWatchAlarm.prototype.unit = function(value) {
	return this.set('Unit', value);
};

module.exports = CloudWatchAlarm;
