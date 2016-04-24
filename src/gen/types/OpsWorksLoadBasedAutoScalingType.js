var PropertyType = require('../../property-type');

/**
 * Describes the load-based automatic scaling configuration for an AWS::OpsWorks::Layer resource type. For more information, see SetLoadBasedAutoScaling in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html}
 * @constructor
 */
function OpsWorksLoadBasedAutoScalingType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(OpsWorksLoadBasedAutoScalingType, PropertyType);

OpsWorksLoadBasedAutoScalingType.prototype = {
	
	/**
	 * The threshold below which the instances are scaled down (stopped). If the load falls below this threshold for a specified amount of time, AWS OpsWorks stops a specified number of instances.
	 *
	 * Required: false
	 *
	 * @param {OpsWorksAutoScalingThresholdsType} value
	 * @return {OpsWorksLoadBasedAutoScalingType}
	 */
	downScaling: function(value) {
		return this.set('DownScaling', value);
	},

	/**
	 * Whether to enable automatic load-based scaling for the layer.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {OpsWorksLoadBasedAutoScalingType}
	 */
	enable: function(value) {
		return this.set('Enable', value);
	},

	/**
	 * The threshold above which the instances are scaled up (added). If the load exceeds this thresholds for a specified amount of time, AWS OpsWorks starts a specified number of instances.
	 *
	 * Required: false
	 *
	 * @param {OpsWorksAutoScalingThresholdsType} value
	 * @return {OpsWorksLoadBasedAutoScalingType}
	 */
	upScaling: function(value) {
		return this.set('UpScaling', value);
	}
};

module.exports = OpsWorksLoadBasedAutoScalingType;
