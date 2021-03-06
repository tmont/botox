var PropertyType = require('../../property-type');

/**
 * Describes the scaling thresholds for the AWS OpsWorks LoadBasedAutoScaling Type property. For more information, see AutoScalingThresholds in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds.html}
 * @constructor
 */
function OpsWorksAutoScalingThresholdsType() {
	PropertyType.call(this);
}

OpsWorksAutoScalingThresholdsType.prototype = Object.create(PropertyType.prototype);

/**
 * The percentage of CPU utilization that triggers the starting or stopping of instances (scaling).
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {OpsWorksAutoScalingThresholdsType}
 */
OpsWorksAutoScalingThresholdsType.prototype.cpuThreshold = function(value) {
	return this.set('CpuThreshold', value);
};

/**
 * The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks should ignore metrics and not start any additional scaling events.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {OpsWorksAutoScalingThresholdsType}
 */
OpsWorksAutoScalingThresholdsType.prototype.ignoreMetricsTime = function(value) {
	return this.set('IgnoreMetricsTime', value);
};

/**
 * The number of instances to add or remove when the load exceeds a threshold.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {OpsWorksAutoScalingThresholdsType}
 */
OpsWorksAutoScalingThresholdsType.prototype.instanceCount = function(value) {
	return this.set('InstanceCount', value);
};

/**
 * The degree of system load that triggers the starting or stopping of instances (scaling). For more information about how load is computed, see Load (computing).
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {OpsWorksAutoScalingThresholdsType}
 */
OpsWorksAutoScalingThresholdsType.prototype.loadThreshold = function(value) {
	return this.set('LoadThreshold', value);
};

/**
 * The percentage of memory consumption that triggers the starting or stopping of instances (scaling).
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {OpsWorksAutoScalingThresholdsType}
 */
OpsWorksAutoScalingThresholdsType.prototype.memoryThreshold = function(value) {
	return this.set('MemoryThreshold', value);
};

/**
 * The amount of time, in minutes, that the load must exceed a threshold before instances are added or removed.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {OpsWorksAutoScalingThresholdsType}
 */
OpsWorksAutoScalingThresholdsType.prototype.thresholdsWaitTime = function(value) {
	return this.set('ThresholdsWaitTime', value);
};

module.exports = OpsWorksAutoScalingThresholdsType;
