var Resource = require('../../resource');

/**
 * AWS::Logs::LogStream - The AWS::Logs::LogStream resource creates an Amazon CloudWatch Logs log stream in a log group. A log stream represents the sequence of events coming from an application instance or resource that you are monitoring. For more information, see Monitoring Log Files in the Amazon CloudWatch Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function LogsLogStream(name) {
	Resource.call(this, name, 'AWS::Logs::LogStream');
}

LogsLogStream.prototype = Object.create(Resource.prototype);


/**
 * The name of the log group where the log stream is created.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LogsLogStream}
 */
LogsLogStream.prototype.logGroupName = function(value) {
	return this.set('LogGroupName', value);
};

/**
 * The name of the log stream to create. The name must be unique within the log group.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {LogsLogStream}
 */
LogsLogStream.prototype.logStreamName = function(value) {
	return this.set('LogStreamName', value);
};

module.exports = LogsLogStream;
