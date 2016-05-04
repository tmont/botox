var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::Logs::LogGroup - The AWS::Logs::LogGroup resource creates an Amazon CloudWatch Logs log group that defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsLogGroup(name) {
	Resource.call(this, name, 'AWS::Logs::LogGroup');
}

LogsLogGroup.prototype = Object.create(Resource.prototype);

/**
 * The number of days log events are kept in CloudWatch Logs. When a log event expires, CloudWatch Logs automatically deletes it. For valid values, see PutRetentionPolicy in the Amazon CloudWatch Logs API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {LogsLogGroup}
 */
LogsLogGroup.prototype.retentionInDays = function(value) {
	return this.set('RetentionInDays', value);
};

/**
 * AWS::Logs::LogGroup attributes
 * @constructor
 * @param {Resource} resource
 */
function LogsLogGroupAttributes(resource) {
	this.resource = resource;
}
LogsLogGroupAttributes.prototype = {
	/**
	 * The Amazon resource name (ARN) of the CloudWatch Logs log group, such as arn:aws:logs:us-east-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*.
	 * @type {Attribute}
	 */
	get arn() {
		return new Attribute(this.resource, 'Arn');
	}
};

/**
 * Gets attribute map for AWS::Logs::LogGroup
 * @returns {LogsLogGroupAttributes}
 */
LogsLogGroup.prototype.attr = function() {
	return new LogsLogGroupAttributes(this);
};

module.exports = LogsLogGroup;
