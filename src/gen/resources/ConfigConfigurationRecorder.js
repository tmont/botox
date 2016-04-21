var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::Config::ConfigurationRecorder - The AWS::Config::ConfigurationRecorder resource describes the AWS resource types for which AWS Config records configuration changes. The configuration recorder stores the configurations of the supported resources in your account as configuration items.
 * @constructor
 */
function ConfigConfigurationRecorder(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

ConfigConfigurationRecorder.prototype = {
	
	/**
	 * A name for the configuration recorder. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the configuration recorder name. For more information, see Name Type.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {String} value
	 * @return {ConfigConfigurationRecorder}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * Indicates whether to record configurations for all supported resources or for a list of resource types. The resource types that you list must be supported by AWS Config.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSConfigConfigurationRecorderRecordingGroup} value
	 * @return {ConfigConfigurationRecorder}
	 */
	recordingGroup: function(value) {
		return this.set('RecordingGroup', value);
	},

	/**
	 * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that is used to make read or write requests to the delivery channel that you specify and to get configuration details for supported AWS resources. For more information, see Permissions for the AWS Config IAM Role in the AWS Config Developer Guide.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {ConfigConfigurationRecorder}
	 */
	roleARN: function(value) {
		return this.set('RoleARN', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::Config::ConfigurationRecorder has no attributes');
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

module.exports = ConfigConfigurationRecorder;
