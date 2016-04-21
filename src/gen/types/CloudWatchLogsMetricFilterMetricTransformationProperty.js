/**
 * MetricTransformation is a property of the AWS::Logs::MetricFilter resource that describes how to transform log streams into a CloudWatch metric.
 * @constructor
 */
function CloudWatchLogsMetricFilterMetricTransformationProperty(initialData) {
	this.data = initialData || {};
}

CloudWatchLogsMetricFilterMetricTransformationProperty.prototype = {
	
	/**
	 * The name of the CloudWatch metric to which the log information will be published.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudWatchLogsMetricFilterMetricTransformationProperty}
	 */
	metricName: function(value) {
		return this.set('MetricName', value);
	},

	/**
	 * The destination namespace of the CloudWatch metric. Namespaces are containers for metrics. For example, you can add related metrics in the same namespace.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudWatchLogsMetricFilterMetricTransformationProperty}
	 */
	metricNamespace: function(value) {
		return this.set('MetricNamespace', value);
	},

	/**
	 * The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like Error, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $ followed by the name of the field that you specified in the filter pattern, such as $size.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudWatchLogsMetricFilterMetricTransformationProperty}
	 */
	metricValue: function(value) {
		return this.set('MetricValue', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = CloudWatchLogsMetricFilterMetricTransformationProperty;
