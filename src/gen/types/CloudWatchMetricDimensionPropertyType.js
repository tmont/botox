/**
 * The Metric Dimension is an embedded property of the AWS::CloudWatch::Alarm type. Dimensions are arbitrary name/value pairs that can be associated with a CloudWatch metric. You can specify a maximum of 10 dimensions for a given metric.
 * @constructor
 */
function CloudWatchMetricDimensionPropertyType() {
	this.data = {};
}

CloudWatchMetricDimensionPropertyType.prototype = {
	
	/**
	 * The name of the dimension, from 1–255 characters in length.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudWatchMetricDimensionPropertyType}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The value representing the dimension measurement, from 1–255 characters in length.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudWatchMetricDimensionPropertyType}
	 */
	value: function(value) {
		return this.set('Value', value);
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

module.exports = CloudWatchMetricDimensionPropertyType;
