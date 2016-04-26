var TemplateItemTrait = require('../template-item-trait');

/**
 * You can use the UpdatePolicy attribute to specify how AWS CloudFormation handles updates to the AWS::AutoScaling::AutoScalingGroup resource.
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html}
 */
function UpdatePolicy() {
	this.data = {};
}

UpdatePolicy.prototype = {
	/**
	 * The maximum number of instances that are terminated at a given time. Default is 1.
	 * @param {Number} size
	 * @returns {UpdatePolicy}
	 */
	maxBatchSize: function(size) {
		return this.setRollingUpdateValue('MaxBatchSize', size);
	},
	/**
	 * The minimum number of instances that must be in service within the Auto Scaling group while obsolete instances are being terminated. Default is 0.
	 * @param {Number} num
	 * @returns {UpdatePolicy}
	 */
	minInstancesInService: function(num) {
		return this.setRollingUpdateValue('MinInstancesInService', num);
	},
	/**
	 * The percentage of instances in an Auto Scaling rolling update that must signal success for an update to succeed. You can specify a value from 0 to 100. AWS CloudFormation rounds to the nearest tenth of a percent. For example, if you update five instances with a minimum successful percentage of 50, three instances must signal success.
	 *
	 * If an instance doesn't send a signal within the specified pause time, AWS CloudFormation assumes the instance did not successfully update.
	 *
	 * If you specify this property, you must enable the WaitOnResourceSignals property.
	 * @param {Number} percent
	 * @returns {UpdatePolicy}
	 */
	minSuccessfulInstancesPercent: function(percent) {
		return this.setRollingUpdateValue('MinSuccessfulInstancesPercent', percent);
	},
	/**
	 * The amount of time to pause after AWS CloudFormation makes a change to a batch of instances, such as when you scale up the number of instances in an Auto Scaling group. Use the pause time to give your instances time to bootstrap software applications.
	 *
	 * If you enable the WaitOnResourceSignals property, the amount of time to wait until the Auto Scaling group receives the required number of valid signals from added or replaced instances. If the pause time is exceeded before the Auto Scaling group receives the required number of signals, the update times out and fails. For best results, specify a period of time that gives your instances plenty of time to get up and running. In the event of a rollback, a shorter pause time can cause update rollback failures.
	 *
	 * The value must be in ISO8601 duration format, in the form: "PT#H#M#S", where each # is the number of hours, minutes, and/or seconds, respectively. The maximum amount of time that can be specified for the pause time is one hour ("PT1H").
	 *
	 * Default: PT0S (zero seconds). If the WaitOnResourceSignals property is set to true, the default is PT5M.
	 * @param {String} duration
	 * @returns {UpdatePolicy}
	 */
	pauseTime: function(duration) {
		return this.setRollingUpdateValue('PauseTime', duration);
	},
	/**
	 * The Auto Scaling processes to suspend during a stack update. Suspending processes is useful when you don't want Auto Scaling to potentially interfere with a stack update. For example, you can suspend process so that no alarms are triggered during an update. For valid values, see SuspendProcesses in the Auto Scaling API Reference.
	 * @param {String[]} processes
	 * @returns {UpdatePolicy}
	 */
	suspendProcesses: function(processes) {
		return this.setRollingUpdateValue('SuspendProcesses', processes);
	},
	/**
	 * Indicates whether the Auto Scaling group waits on signals during an update. AWS CloudFormation suspends the update of an Auto Scaling group after any new Amazon EC2 instances are launched into the group. AWS CloudFormation must receive a signal from each new instance within the specified pause time before AWS CloudFormation continues the update. You can use the cfn-signal helper script or SignalResource API to signal the Auto Scaling group. This property is useful when you want to ensure instances have completed installing and configuring applications before the Auto Scaling group update proceeds.
	 *
	 * Default is false.
	 *
	 * Required: Conditional. If you specify the MinSuccessfulInstancesPercent property, you must enable this property.
	 * @param {Boolean} shouldWait
	 * @returns {UpdatePolicy}
	 */
	waitOnResourceSignals: function(shouldWait) {
		return this.setRollingUpdateValue('WaitOnResourceSignals', !!shouldWait);
	},
	/**
	 * During a stack update, indicates whether AWS CloudFormation ignores any group size property differences between your current Auto Scaling group and the Auto Scaling group that is described in the AWS::AutoScaling::AutoScalingGroup resource of your template. However, if you modified any group size property values in your template, AWS CloudFormation will always use the modified values and update your Auto Scaling group.
	 *
	 * Default is false.
	 * @param {Boolean} shouldIgnore
	 * @returns {UpdatePolicy}
	 */
	ignoreUnmodifiedGroupSizeProperties: function(shouldIgnore) {
		return this.setScheduledActionValue('IgnoreUnmodifiedGroupSizeProperties', !!shouldIgnore);
	},

	setRollingUpdateValue: function(key, value) {
		if (!this.data.AutoScalingrollingUpdate) {
			this.data.AutoScalingrollingUpdate = {};
		}

		this.data.AutoScalingrollingUpdate[key] = value;
		return this;
	},

	setScheduledActionValue: function(key, value) {
		if (!this.data.AutoScalingScheduledAction) {
			this.data.AutoScalingScheduledAction = {};
		}

		this.data.AutoScalingScheduledAction[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	}
};

Object.assign(UpdatePolicy.prototype, TemplateItemTrait.prototype);

module.exports = UpdatePolicy;
