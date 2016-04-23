var Resource = require('../../resource');

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
 * AWS::Logs::LogGroup attribute map
 * @typedef {Object} LogsLogGroupAttributeMap
 * @property {Attribute} arn The Amazon resource name (ARN) of the CloudWatch Logs log group, such as arn:aws:logs:us-east-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*.
 */
Object.defineProperty(LogsLogGroup.prototype, 'attr', {
	/**
	 * @return {LogsLogGroupAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The Amazon resource name (ARN) of the CloudWatch Logs log group, such as arn:aws:logs:us-east-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*.
			 * @return {Attribute}
			 */
			get arn() {
				return createAttribute('Arn');
			}
		};
	}
});

/**
 * The number of days log events are kept in CloudWatch Logs. When a log event expires, CloudWatch Logs automatically deletes it. For valid values, see PutRetentionPolicy in the Amazon CloudWatch Logs API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {LogsLogGroup}
 */
LogsLogGroup.prototype.retentionInDays = function(value) {
	return this.set('RetentionInDays', value);
};

module.exports = LogsLogGroup;
