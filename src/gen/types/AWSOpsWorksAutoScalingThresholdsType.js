var PropertyType = require('../../property-type');

/**
 * Describes the scaling thresholds for the AWS OpsWorks LoadBasedAutoScaling Type property. For more information, see AutoScalingThresholds in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds.html}
 * @constructor
 */
function AWSOpsWorksAutoScalingThresholdsType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSOpsWorksAutoScalingThresholdsType, PropertyType);

AWSOpsWorksAutoScalingThresholdsType.prototype = {
	
	/**
	 * The percentage of CPU utilization that triggers the starting or stopping of instances (scaling).
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSOpsWorksAutoScalingThresholdsType}
	 */
	cpuThreshold: function(value) {
		return this.set('CpuThreshold', value);
	},

	/**
	 * The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks should ignore metrics and not start any additional scaling events.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSOpsWorksAutoScalingThresholdsType}
	 */
	ignoreMetricsTime: function(value) {
		return this.set('IgnoreMetricsTime', value);
	},

	/**
	 * The number of instances to add or remove when the load exceeds a threshold.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSOpsWorksAutoScalingThresholdsType}
	 */
	instanceCount: function(value) {
		return this.set('InstanceCount', value);
	},

	/**
	 * The degree of system load that triggers the starting or stopping of instances (scaling). For more information about how load is computed, see Load (computing).
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSOpsWorksAutoScalingThresholdsType}
	 */
	loadThreshold: function(value) {
		return this.set('LoadThreshold', value);
	},

	/**
	 * The percentage of memory consumption that triggers the starting or stopping of instances (scaling).
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSOpsWorksAutoScalingThresholdsType}
	 */
	memoryThreshold: function(value) {
		return this.set('MemoryThreshold', value);
	},

	/**
	 * The amount of time, in minutes, that the load must exceed a threshold before instances are added or removed.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {AWSOpsWorksAutoScalingThresholdsType}
	 */
	thresholdsWaitTime: function(value) {
		return this.set('ThresholdsWaitTime', value);
	}
};

module.exports = AWSOpsWorksAutoScalingThresholdsType;
