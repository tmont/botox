/**
 * The NotificationConfigurations property is an embedded property of the AWS::AutoScaling::AutoScalingGroup resource that specifies the events for which the Auto Scaling group sends notifications.
 * @constructor
 */
function AutoScalingNotificationConfigurations() {
	this.data = {};
}

AutoScalingNotificationConfigurations.prototype = {
	
	/**
	 * A list of event types that trigger a notification. Event types can include any of the following types: autoscaling:EC2_INSTANCE_LAUNCH, autoscaling:EC2_INSTANCE_LAUNCH_ERROR, autoscaling:EC2_INSTANCE_TERMINATE, autoscaling:EC2_INSTANCE_TERMINATE_ERROR, and autoscaling:TEST_NOTIFICATION. For more information about event types, see DescribeAutoScalingNotificationTypes in the Auto Scaling API Reference.
	 *
	 * Required: true
	 *
	 * @param {string[]} value
	 * @return {AutoScalingNotificationConfigurations}
	 */
	notificationTypes: function(value) {
		return this.set('NotificationTypes', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AutoScalingNotificationConfigurations}
	 */
	topicARN: function(value) {
		return this.set('TopicARN', value);
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

module.exports = AutoScalingNotificationConfigurations;
