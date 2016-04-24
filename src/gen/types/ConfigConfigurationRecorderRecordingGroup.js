var PropertyType = require('../../property-type');

/**
 * RecordingGroup is property of the AWS::Config::ConfigurationRecorder resource that defines which AWS resource types to include in a recording group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html}
 * @constructor
 */
function ConfigConfigurationRecorderRecordingGroup() {
	PropertyType.call(this);
}

Object.setPrototypeOf(ConfigConfigurationRecorderRecordingGroup, PropertyType);

ConfigConfigurationRecorderRecordingGroup.prototype = {
	
	/**
	 * Indicates whether to record all supported resource types. If you specify this property, do not specify the ResourceTypes property.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {ConfigConfigurationRecorderRecordingGroup}
	 */
	allSupported: function(value) {
		return this.set('AllSupported', value);
	},

	/**
	 * Indicates whether AWS Config records all supported global resource types. When AWS Config supports new global resource types, AWS Config will automatically start recording them if you enable this property.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {ConfigConfigurationRecorderRecordingGroup}
	 */
	includeGlobalResourceTypes: function(value) {
		return this.set('IncludeGlobalResourceTypes', value);
	},

	/**
	 * A list of valid AWS resource types to include in this recording group, such as AWS::EC2::Instance or AWS::CloudTrail::Trail. If you specify this property, do not specify the AllSupported property. For a list of supported resource types, see Supported resource types in the AWS Config Developer Guide.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {ConfigConfigurationRecorderRecordingGroup}
	 */
	resourceTypes: function(value) {
		return this.set('ResourceTypes', value);
	}
};

module.exports = ConfigConfigurationRecorderRecordingGroup;
