/**
 * Describes the load-based automatic scaling configuration for an AWS::OpsWorks::Layer resource type. For more information, see SetLoadBasedAutoScaling in the AWS OpsWorks API Reference.
 * @constructor
 */
function AWSOpsWorksLoadBasedAutoScalingType(initialData) {
	this.data = initialData || {};
}

AWSOpsWorksLoadBasedAutoScalingType.prototype = {
	
	/**
	 * The threshold below which the instances are scaled down (stopped). If the load falls below this threshold for a specified amount of time, AWS OpsWorks stops a specified number of instances.
	 *
	 * Required: false
	 *
	 * @param {AWSOpsWorksAutoScalingThresholdsType} value
	 * @return {AWSOpsWorksLoadBasedAutoScalingType}
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
	 * @return {AWSOpsWorksLoadBasedAutoScalingType}
	 */
	enable: function(value) {
		return this.set('Enable', value);
	},

	/**
	 * The threshold above which the instances are scaled up (added). If the load exceeds this thresholds for a specified amount of time, AWS OpsWorks starts a specified number of instances.
	 *
	 * Required: false
	 *
	 * @param {AWSOpsWorksAutoScalingThresholdsType} value
	 * @return {AWSOpsWorksLoadBasedAutoScalingType}
	 */
	upScaling: function(value) {
		return this.set('UpScaling', value);
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

module.exports = AWSOpsWorksLoadBasedAutoScalingType;
