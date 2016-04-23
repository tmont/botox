var PropertyType = require('../../property-type');

/**
 * StepAdjustments is a property of the AWS::AutoScaling::ScalingPolicy resource that describes a scaling adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. For more information, see StepAdjustment in the Auto Scaling API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-stepadjustments.html}
 * @constructor
 */
function AutoScalingScalingPolicyStepAdjustments() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AutoScalingScalingPolicyStepAdjustments, PropertyType);

AutoScalingScalingPolicyStepAdjustments.prototype = {
	
	/**
	 * The lower bound for the difference between the breach threshold and the CloudWatch metric. If the metric value exceeds the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AutoScalingScalingPolicyStepAdjustments}
	 */
	metricIntervalLowerBound: function(value) {
		return this.set('MetricIntervalLowerBound', value);
	},

	/**
	 * The upper bound for the difference between the breach threshold and the CloudWatch metric. If the metric value exceeds the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AutoScalingScalingPolicyStepAdjustments}
	 */
	metricIntervalUpperBound: function(value) {
		return this.set('MetricIntervalUpperBound', value);
	},

	/**
	 * The amount by which to scale, based on the value that you specified in the AdjustmentType property. A positive value adds to the current capacity and a negative number subtracts from the current capacity.
	 *
	 * Required: true
	 *
	 * @param {Number} value
	 * @return {AutoScalingScalingPolicyStepAdjustments}
	 */
	scalingAdjustment: function(value) {
		return this.set('ScalingAdjustment', value);
	}
};

module.exports = AutoScalingScalingPolicyStepAdjustments;
