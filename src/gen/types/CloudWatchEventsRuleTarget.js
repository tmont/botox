/**
 * Target is a property of the AWS::Events::Rule resource that specifies the targets that CloudWatch Events invokes when a rule is triggered, such as AWS Lambda (Lambda) functions or Amazon Kinesis streams.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html}
 * @constructor
 */
function CloudWatchEventsRuleTarget() {
	this.data = {};
}

CloudWatchEventsRuleTarget.prototype = {
	
	/**
	 * The Amazon Resource Name (ARN) of the target.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudWatchEventsRuleTarget}
	 */
	arn: function(value) {
		return this.set('Arn', value);
	},

	/**
	 * A unique identifier for the target.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {CloudWatchEventsRuleTarget}
	 */
	id: function(value) {
		return this.set('Id', value);
	},

	/**
	 * A JSON-formatted text string that is passed to the target. This value overrides the matched event.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudWatchEventsRuleTarget}
	 */
	input: function(value) {
		return this.set('Input', value);
	},

	/**
	 * When you don't want to pass the entire matched event, the JSONPath that describes which part of the event to pass to the target.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {CloudWatchEventsRuleTarget}
	 */
	inputPath: function(value) {
		return this.set('InputPath', value);
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

module.exports = CloudWatchEventsRuleTarget;
