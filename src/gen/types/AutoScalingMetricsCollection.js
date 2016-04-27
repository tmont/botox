var PropertyType = require('../../property-type');

/**
 * The MetricsCollection is a property of the AWS::AutoScaling::AutoScalingGroup resource that describes the group metrics that an Auto Scaling group sends to CloudWatch. These metrics describe the group rather than any of its instances. For more information, see EnableMetricsCollection in the Auto Scaling API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-metricscollection.html}
 * @constructor
 */
function AutoScalingMetricsCollection() {
	PropertyType.call(this);
}

AutoScalingMetricsCollection.prototype = Object.create(PropertyType.prototype);

/**
 * The frequency at which Auto Scaling sends aggregated data to CloudWatch. For example, you can specify 1Minute to send aggregated data to CloudWatch every minute.
 *
 * Required: true
 *
 * @param {String} value
 * @return {AutoScalingMetricsCollection}
 */
AutoScalingMetricsCollection.prototype.granularity = function(value) {
	return this.set('Granularity', value);
};

/**
 * The list of metrics to collect. If you don't specify any metrics, all metrics are enabled.
 *
 * Required: false
 *
 * @param {string[]} value
 * @return {AutoScalingMetricsCollection}
 */
AutoScalingMetricsCollection.prototype.metrics = function(value) {
	return this.set('Metrics', value);
};

module.exports = AutoScalingMetricsCollection;
