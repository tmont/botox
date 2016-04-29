var ResourceAttribute = require('../../resource-attribute');

/**
 * You can use the UpdatePolicy attribute to specify how AWS CloudFormation handles updates to the AWS::AutoScaling::AutoScalingGroup resource.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html}
 * @constructor
 */
function UpdatePolicy() {
	ResourceAttribute.call(this);
}

UpdatePolicy.prototype = Object.create(ResourceAttribute.prototype);

/**
 * The maximum number of instances that are terminated at a given time.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {UpdatePolicy}
 */
UpdatePolicy.prototype.maxBatchSize = function(value) {
	return this.set('AutoScalingRollingUpdate', 'MaxBatchSize', value);
};

/**
 * The minimum number of instances that must be in service within the Auto Scaling group while obsolete instances are being terminated.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {UpdatePolicy}
 */
UpdatePolicy.prototype.minInstancesInService = function(value) {
	return this.set('AutoScalingRollingUpdate', 'MinInstancesInService', value);
};

/**
 * The percentage of instances in an Auto Scaling rolling update that must signal success for an update to succeed. You can specify a value from 0 to 100. AWS CloudFormation rounds to the nearest tenth of a percent. For example, if you update five instances with a minimum successful percentage of 50, three instances must signal success.
 *
 * Required: false
 *
 * @param {Number} value
 * @return {UpdatePolicy}
 */
UpdatePolicy.prototype.minSuccessfulInstancesPercent = function(value) {
	return this.set('AutoScalingRollingUpdate', 'MinSuccessfulInstancesPercent', value);
};

/**
 * The amount of time to pause after AWS CloudFormation makes a change to a batch of instances, such as when you scale up the number of instances in an Auto Scaling group. Use the pause time to give your instances time to bootstrap software applications.
 *
 * Required: false
 *
 * @param {String} value
 * @return {UpdatePolicy}
 */
UpdatePolicy.prototype.pauseTime = function(value) {
	return this.set('AutoScalingRollingUpdate', 'PauseTime', value);
};

/**
 * The Auto Scaling processes to suspend during a stack update. Suspending processes is useful when you don't want Auto Scaling to potentially interfere with a stack update. For example, you can suspend process so that no alarms are triggered during an update. For valid values, see SuspendProcesses in the Auto Scaling API Reference.
 *
 * Required: false
 *
 * @param {String[]} value
 * @return {UpdatePolicy}
 */
UpdatePolicy.prototype.suspendProcesses = function(value) {
	return this.set('AutoScalingRollingUpdate', 'SuspendProcesses', value);
};

/**
 * Indicates whether the Auto Scaling group waits on signals during an update. AWS CloudFormation suspends the update of an Auto Scaling group after any new Amazon EC2 instances are launched into the group. AWS CloudFormation must receive a signal from each new instance within the specified pause time before AWS CloudFormation continues the update. You can use the cfn-signal helper script or SignalResource API to signal the Auto Scaling group. This property is useful when you want to ensure instances have completed installing and configuring applications before the Auto Scaling group update proceeds.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {UpdatePolicy}
 */
UpdatePolicy.prototype.waitOnResourceSignals = function(value) {
	return this.set('AutoScalingRollingUpdate', 'WaitOnResourceSignals', value);
};

/**
 * During a stack update, indicates whether AWS CloudFormation ignores any group size property differences between your current Auto Scaling group and the Auto Scaling group that is described in the AWS::AutoScaling::AutoScalingGroup resource of your template. However, if you modified any group size property values in your template, AWS CloudFormation will always use the modified values and update your Auto Scaling group.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {UpdatePolicy}
 */
UpdatePolicy.prototype.ignoreUnmodifiedGroupSizeProperties = function(value) {
	return this.set('AutoScalingScheduledAction', 'IgnoreUnmodifiedGroupSizeProperties', value);
};

module.exports = UpdatePolicy;
