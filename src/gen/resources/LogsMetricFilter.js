var Resource = require('../../resource');

/**
 * AWS::Logs::MetricFilter - The AWS::Logs::MetricFilter resource creates a metric filter that describes how Amazon CloudWatch Logs extracts information from logs that you specify and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsMetricFilter(name) {
	Resource.call(this, name, 'AWS::Logs::MetricFilter');
}

LogsMetricFilter.prototype = Object.create(Resource.prototype);


/**
 * Describes the pattern that CloudWatch Logs follows to interpret each entry in a log. For example, a log entry might contain fields such as timestamps, IP addresses, error codes, bytes transferred, and so on. You use the pattern to specify those fields and to specify what to look for in the log file. For example, if you're interested in error codes that begin with 1234, your filter pattern might be [timestamps, ip_addresses, error_codes = 1234*, size, ...].
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {LogsMetricFilter}
 */
LogsMetricFilter.prototype.filterPattern = function(value) {
	return this.set('FilterPattern', value);
};

/**
 * The name of an existing log group that you want to associate with this metric filter.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LogsMetricFilter}
 */
LogsMetricFilter.prototype.logGroupName = function(value) {
	return this.set('LogGroupName', value);
};

/**
 * Describes how to transform data from a log into a CloudWatch metric.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {CloudWatchLogsMetricFilterMetricTransformationProperty[]|Attribute|Reference} value
 * @return {LogsMetricFilter}
 */
LogsMetricFilter.prototype.metricTransformations = function(value) {
	return this.set('MetricTransformations', value);
};

module.exports = LogsMetricFilter;
