var Resource = require('../../resource');

/**
 * AWS::AutoScaling::ScalingPolicy - The AWS::AutoScaling::ScalingPolicy resource adds a scaling policy to an auto scaling group. A scaling policy specifies whether to scale the auto scaling group up or down, and by how much. For more information on scaling policies, see Scaling by Policy in the Auto Scaling Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function AutoScalingScalingPolicy(name) {
	Resource.call(this, name, 'AWS::AutoScaling::ScalingPolicy');
}

AutoScalingScalingPolicy.prototype = Object.create(Resource.prototype);

/**
 * Specifies whether the ScalingAdjustment is an absolute number or a percentage of the current capacity. Valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.adjustmentType = function(value) {
	return this.set('AdjustmentType', value);
};

/**
 * The name or Amazon Resource Name (ARN) of the Auto Scaling Group that you want to attach the policy to.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.autoScalingGroupName = function(value) {
	return this.set('AutoScalingGroupName', value);
};

/**
 * The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.cooldown = function(value) {
	return this.set('Cooldown', value);
};

/**
 * The estimated time, in seconds, until a newly launched instance can send metrics to CloudWatch. By default, Auto Scaling uses the cooldown period, as specified in the Cooldown property.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.estimatedInstanceWarmup = function(value) {
	return this.set('EstimatedInstanceWarmup', value);
};

/**
 * The aggregation type for the CloudWatch metrics. You can specify Minimum, Maximum, or Average. By default, AWS CloudFormation specifies Average.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.metricAggregationType = function(value) {
	return this.set('MetricAggregationType', value);
};

/**
 * For the PercentChangeInCapacity adjustment type, the minimum number of instances to scale. The scaling policy changes the desired capacity of the Auto Scaling group by a minimum of this many instances. This property replaces the MinAdjustmentStep property.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.minAdjustmentMagnitude = function(value) {
	return this.set('MinAdjustmentMagnitude', value);
};

/**
 * An Auto Scaling policy type. You can specify SimpleScaling or StepScaling. By default, AWS CloudFormation specifies SimpleScaling. For more information, see Scaling Policy Types in the Auto Scaling Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.policyType = function(value) {
	return this.set('PolicyType', value);
};

/**
 * The number of instances by which to scale. The AdjustmentType property determines whether AWS CloudFormation interprets this number as an absolute number (when the ExactCapacityvalue is specified) or as a percentage of the existing Auto Scaling group size (when the PercentChangeInCapacity value is specified). A positive value adds to the current capacity and a negative value subtracts from the current capacity.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.scalingAdjustment = function(value) {
	return this.set('ScalingAdjustment', value);
};

/**
 * A set of adjustments that enable you to scale based on the size of the alarm breach.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {AutoScalingScalingPolicyStepAdjustments[]|Attribute|Reference} value List of Auto Scaling ScalingPolicy StepAdjustments
 * @return {AutoScalingScalingPolicy}
 */
AutoScalingScalingPolicy.prototype.stepAdjustments = function(value) {
	return this.set('StepAdjustments', value);
};

module.exports = AutoScalingScalingPolicy;
