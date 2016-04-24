var Resource = require('../../resource');

/**
 * AWS::Config::ConfigurationRecorder - The AWS::Config::ConfigurationRecorder resource describes the AWS resource types for which AWS Config records configuration changes. The configuration recorder stores the configurations of the supported resources in your account as configuration items.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function ConfigConfigurationRecorder(name) {
	Resource.call(this, name, 'AWS::Config::ConfigurationRecorder');
}

ConfigConfigurationRecorder.prototype = Object.create(Resource.prototype);


/**
 * A name for the configuration recorder. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the configuration recorder name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigConfigurationRecorder}
 */
ConfigConfigurationRecorder.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * Indicates whether to record configurations for all supported resources or for a list of resource types. The resource types that you list must be supported by AWS Config.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {ConfigConfigurationRecorderRecordingGroup|Attribute|Reference} value AWS Config ConfigurationRecorder RecordingGroup
 * @return {ConfigConfigurationRecorder}
 */
ConfigConfigurationRecorder.prototype.recordingGroup = function(value) {
	return this.set('RecordingGroup', value);
};

/**
 * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to make read or write requests to the delivery channel that you specify and to get configuration details for supported AWS resources. For more information, see Permissions for the AWS Config IAM Role in the AWS Config Developer Guide.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {ConfigConfigurationRecorder}
 */
ConfigConfigurationRecorder.prototype.roleARN = function(value) {
	return this.set('RoleARN', value);
};

module.exports = ConfigConfigurationRecorder;
