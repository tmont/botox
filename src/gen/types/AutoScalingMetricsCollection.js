/**
 * The MetricsCollection is a property of the AWS::AutoScaling::AutoScalingGroup resource that describes the group metrics that an Auto Scaling group sends to CloudWatch. These metrics describe the group rather than any of its instances. For more information, see EnableMetricsCollection in the Auto Scaling API Reference.
 * @constructor
 */
function AutoScalingMetricsCollection(initialData) {
	this.data = initialData || {};
}

AutoScalingMetricsCollection.prototype = {
	
	/**
	 * The frequency at which Auto Scaling sends aggregated data to CloudWatch. For example, you can specify 1Minute to send aggregated data to CloudWatch every minute.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AutoScalingMetricsCollection}
	 */
	granularity: function(value) {
		return this.set('Granularity', value);
	},

	/**
	 * The list of metrics to collect. If you don't specify any metrics, all metrics are enabled.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {AutoScalingMetricsCollection}
	 */
	metrics: function(value) {
		return this.set('Metrics', value);
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

module.exports = AutoScalingMetricsCollection;
