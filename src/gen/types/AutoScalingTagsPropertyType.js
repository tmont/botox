/**
 * The Auto Scaling Tags property is an embedded property of the AWS::AutoScaling::AutoScalingGroup type. For more information about tags, go to Tagging Auto Scaling Groups and Amazon EC2 Instances in the Auto Scaling Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-tags.html}
 * @constructor
 */
function AutoScalingTagsPropertyType() {
	this.data = {};
}

AutoScalingTagsPropertyType.prototype = {
	
	/**
	 * The key name of the tag.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AutoScalingTagsPropertyType}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value for the tag.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AutoScalingTagsPropertyType}
	 */
	value: function(value) {
		return this.set('Value', value);
	},

	/**
	 * Set to true if you want AWS CloudFormation to copy the tag to EC2 instances that are launched as part of the auto scaling group. Set to false if you want the tag attached only to the auto scaling group and not copied to any instances launched as part of the auto scaling group.
	 *
	 * Required: true
	 *
	 * @param {Boolean} value
	 * @return {AutoScalingTagsPropertyType}
	 */
	propagateAtLaunch: function(value) {
		return this.set('PropagateAtLaunch', value);
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

module.exports = AutoScalingTagsPropertyType;
