var PropertyType = require('../../property-type');

/**
 * Describes the automatic time-based scaling configuration for an AWS::OpsWorks::Instance resource type. For more information, see SetTimeBasedAutoScaling in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html}
 * @constructor
 */
function OpsWorksTimeBasedAutoScalingType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(OpsWorksTimeBasedAutoScalingType, PropertyType);

OpsWorksTimeBasedAutoScalingType.prototype = {
	
	/**
	 * The schedule for Friday.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {OpsWorksTimeBasedAutoScalingType}
	 */
	friday: function(value) {
		return this.set('Friday', value);
	},

	/**
	 * The schedule for Monday.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {OpsWorksTimeBasedAutoScalingType}
	 */
	monday: function(value) {
		return this.set('Monday', value);
	},

	/**
	 * The schedule for Saturday.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {OpsWorksTimeBasedAutoScalingType}
	 */
	saturday: function(value) {
		return this.set('Saturday', value);
	},

	/**
	 * The schedule for Sunday.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {OpsWorksTimeBasedAutoScalingType}
	 */
	sunday: function(value) {
		return this.set('Sunday', value);
	},

	/**
	 * The schedule for Thursday.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {OpsWorksTimeBasedAutoScalingType}
	 */
	thursday: function(value) {
		return this.set('Thursday', value);
	},

	/**
	 * The schedule for Tuesday.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {OpsWorksTimeBasedAutoScalingType}
	 */
	tuesday: function(value) {
		return this.set('Tuesday', value);
	},

	/**
	 * The schedule for Wednesday.
	 *
	 * Required: false
	 *
	 * @param {Object} value
	 * @return {OpsWorksTimeBasedAutoScalingType}
	 */
	wednesday: function(value) {
		return this.set('Wednesday', value);
	}
};

module.exports = OpsWorksTimeBasedAutoScalingType;
