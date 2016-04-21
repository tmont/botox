var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Logs::LogStream - The AWS::Logs::LogStream resource creates an Amazon CloudWatch Logs log stream in a log group. A log stream represents the sequence of events coming from an application instance or resource that you are monitoring. For more information, see Monitoring Log Files in the Amazon CloudWatch Developer Guide.
 * @constructor
 */
function LogsLogStream(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

LogsLogStream.prototype = {
	
	/**
	 * The name of the log group where the log stream is created.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LogsLogStream}
	 */
	logGroupName: function(value) {
		return this.set('LogGroupName', value);
	},

	/**
	 * The name of the log stream to create. The name must be unique within the log group.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {LogsLogStream}
	 */
	logStreamName: function(value) {
		return this.set('LogStreamName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Logs::LogStream has no attributes');
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

module.exports = LogsLogStream;
