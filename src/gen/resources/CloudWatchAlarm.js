var Resource = require('../../resource');

/**
 * AWS::CloudWatch::Alarm - The AWS::CloudWatch::Alarm type creates an CloudWatch alarm.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function CloudWatchAlarm(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(CloudWatchAlarm, Resource);

CloudWatchAlarm.prototype = {
	
	
	/**
	 * Indicates whether or not actions should be executed during any changes to the alarm's state.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Boolean} value
	 * @return {CloudWatchAlarm}
	 */
	actionsEnabled: function(value) {
		return this.set('ActionsEnabled', value);
	},

	/**
	 * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Number (ARN). For more information about creating alarms and the actions you can specify, see Creating Amazon CloudWatch Alarms in the Amazon CloudWatch Developer Guide.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {CloudWatchAlarm}
	 */
	alarmActions: function(value) {
		return this.set('AlarmActions', value);
	},

	/**
	 * The description for the alarm.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	alarmDescription: function(value) {
		return this.set('AlarmDescription', value);
	},

	/**
	 * A name for the alarm. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the alarm name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	alarmName: function(value) {
		return this.set('AlarmName', value);
	},

	/**
	 * The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	comparisonOperator: function(value) {
		return this.set('ComparisonOperator', value);
	},

	/**
	 * The dimensions for the alarm's associated metric.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {MetricDimension[]} value
	 * @return {CloudWatchAlarm}
	 */
	dimensions: function(value) {
		return this.set('Dimensions', value);
	},

	/**
	 * The number of periods over which data is compared to the specified threshold.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	evaluationPeriods: function(value) {
		return this.set('EvaluationPeriods', value);
	},

	/**
	 * The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Number (ARN). Currently the only action supported is publishing to an Amazon SNS topic or an Amazon Auto Scaling policy.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {CloudWatchAlarm}
	 */
	insufficientDataActions: function(value) {
		return this.set('InsufficientDataActions', value);
	},

	/**
	 * The name for the alarm's associated metric. For more information about the metrics that you can specify, see Amazon CloudWatch Namespaces, Dimensions, and Metrics Reference in the Amazon CloudWatch Developer Guide.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	metricName: function(value) {
		return this.set('MetricName', value);
	},

	/**
	 * The namespace for the alarm's associated metric.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	namespace: function(value) {
		return this.set('Namespace', value);
	},

	/**
	 * The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Number (ARN). Currently the only action supported is publishing to an Amazon SNS topic or an Amazon Auto Scaling policy.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {string[]} value
	 * @return {CloudWatchAlarm}
	 */
	okactions: function(value) {
		return this.set('OKActions', value);
	},

	/**
	 * The time over which the specified statistic is applied. You must specify a time in seconds that is also a multiple of 60.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	period: function(value) {
		return this.set('Period', value);
	},

	/**
	 * The statistic to apply to the alarm's associated metric.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	statistic: function(value) {
		return this.set('Statistic', value);
	},

	/**
	 * The value against which the specified statistic is compared.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	threshold: function(value) {
		return this.set('Threshold', value);
	},

	/**
	 * The unit for the alarm's associated metric.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {CloudWatchAlarm}
	 */
	unit: function(value) {
		return this.set('Unit', value);
	}
};

module.exports = CloudWatchAlarm;
