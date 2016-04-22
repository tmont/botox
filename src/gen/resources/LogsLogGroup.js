var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Logs::LogGroup - The AWS::Logs::LogGroup resource creates an Amazon CloudWatch Logs log group that defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsLogGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

LogsLogGroup.prototype = {
	
	/**
	 * The number of days log events are kept in CloudWatch Logs. When a log event expires, CloudWatch Logs automatically deletes it. For valid values, see PutRetentionPolicy in the Amazon CloudWatch Logs API Reference.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {LogsLogGroup}
	 */
	retentionInDays: function(value) {
		return this.set('RetentionInDays', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		var self = this;
		return {
			
			/**
			 * The Amazon resource name (ARN) of the CloudWatch Logs log group, such as arn:aws:logs:us-east-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*.
			 */
			arn: function() {
				return new Attribute(self, 'Arn');
			}
		};
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = LogsLogGroup;
