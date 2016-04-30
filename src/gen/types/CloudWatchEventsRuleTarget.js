var PropertyType = require('../../property-type');

/**
 * Target is a property of the AWS::Events::Rule resource that specifies the targets that CloudWatch Events invokes when a rule is triggered, such as AWS Lambda (Lambda) functions or Amazon Kinesis streams.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html}
 * @constructor
 */
function CloudWatchEventsRuleTarget() {
	PropertyType.call(this);
}

CloudWatchEventsRuleTarget.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon Resource Name (ARN) of the target.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CloudWatchEventsRuleTarget}
 */
CloudWatchEventsRuleTarget.prototype.arn = function(value) {
	return this.set('Arn', value);
};

/**
 * A unique identifier for the target.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {CloudWatchEventsRuleTarget}
 */
CloudWatchEventsRuleTarget.prototype.id = function(value) {
	return this.set('Id', value);
};

/**
 * A JSON-formatted text string that is passed to the target. This value overrides the matched event.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudWatchEventsRuleTarget}
 */
CloudWatchEventsRuleTarget.prototype.input = function(value) {
	return this.set('Input', value);
};

/**
 * When you don't want to pass the entire matched event, the JSONPath that describes which part of the event to pass to the target.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {CloudWatchEventsRuleTarget}
 */
CloudWatchEventsRuleTarget.prototype.inputPath = function(value) {
	return this.set('InputPath', value);
};

module.exports = CloudWatchEventsRuleTarget;
