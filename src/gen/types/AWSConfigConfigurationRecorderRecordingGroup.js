/**
 * RecordingGroup is property of the AWS::Config::ConfigurationRecorder resource that defines which AWS resource types to include in a recording group.
 * @constructor
 */
function AWSConfigConfigurationRecorderRecordingGroup(initialData) {
	this.data = initialData || {};
}

AWSConfigConfigurationRecorderRecordingGroup.prototype = {
	
	/**
	 * Indicates whether to record all supported resource types. If you specify this property, do not specify the ResourceTypes property.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {AWSConfigConfigurationRecorderRecordingGroup}
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
	 * @return {AWSConfigConfigurationRecorderRecordingGroup}
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
	 * @return {AWSConfigConfigurationRecorderRecordingGroup}
	 */
	resourceTypes: function(value) {
		return this.set('ResourceTypes', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = AWSConfigConfigurationRecorderRecordingGroup;
