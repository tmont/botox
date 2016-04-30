var PropertyType = require('../../property-type');

/**
 * MetricTransformation is a property of the AWS::Logs::MetricFilter resource that describes how to transform log streams into a CloudWatch metric.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html}
 * @constructor
 */
function CloudWatchLogsMetricFilterMetricTransformationProperty() {
	PropertyType.call(this);
}

CloudWatchLogsMetricFilterMetricTransformationProperty.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the CloudWatch metric to which the log information will be published.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CloudWatchLogsMetricFilterMetricTransformationProperty}
 */
CloudWatchLogsMetricFilterMetricTransformationProperty.prototype.metricName = function(value) {
	return this.set('MetricName', value);
};

/**
 * The destination namespace of the CloudWatch metric. Namespaces are containers for metrics. For example, you can add related metrics in the same namespace.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CloudWatchLogsMetricFilterMetricTransformationProperty}
 */
CloudWatchLogsMetricFilterMetricTransformationProperty.prototype.metricNamespace = function(value) {
	return this.set('MetricNamespace', value);
};

/**
 * The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like Error, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $ followed by the name of the field that you specified in the filter pattern, such as $size.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CloudWatchLogsMetricFilterMetricTransformationProperty}
 */
CloudWatchLogsMetricFilterMetricTransformationProperty.prototype.metricValue = function(value) {
	return this.set('MetricValue', value);
};

module.exports = CloudWatchLogsMetricFilterMetricTransformationProperty;
