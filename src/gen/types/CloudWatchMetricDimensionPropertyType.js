var PropertyType = require('../../property-type');

/**
 * The Metric Dimension is an embedded property of the AWS::CloudWatch::Alarm type. Dimensions are arbitrary name/value pairs that can be associated with a CloudWatch metric. You can specify a maximum of 10 dimensions for a given metric.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-dimension.html}
 * @constructor
 */
function CloudWatchMetricDimensionPropertyType() {
	PropertyType.call(this);
}

CloudWatchMetricDimensionPropertyType.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the dimension, from 1–255 characters in length.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CloudWatchMetricDimensionPropertyType}
 */
CloudWatchMetricDimensionPropertyType.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The value representing the dimension measurement, from 1–255 characters in length.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CloudWatchMetricDimensionPropertyType}
 */
CloudWatchMetricDimensionPropertyType.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = CloudWatchMetricDimensionPropertyType;
