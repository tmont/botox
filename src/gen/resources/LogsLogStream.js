var Resource = require('../../resource');

/**
 * AWS::Logs::LogStream - The AWS::Logs::LogStream resource creates an Amazon CloudWatch Logs log stream in a log group. A log stream represents the sequence of events coming from an application instance or resource that you are monitoring. For more information, see Monitoring Log Files in the Amazon CloudWatch Developer Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsLogStream(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(LogsLogStream, Resource);

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
	}
};

module.exports = LogsLogStream;
