var PropertyType = require('../../property-type');

/**
 * ConfigurationProperties is a property of the AWS::CodePipeline::CustomActionType resource that defines a configuration for an AWS CodePipeline custom action.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype-configurationproperties.html}
 * @constructor
 */
function CodePipelineCustomActionTypeConfigurationProperties() {
	PropertyType.call(this);
}

CodePipelineCustomActionTypeConfigurationProperties.prototype = Object.create(PropertyType.prototype);

/**
 * A description of this configuration property that will be displayed to users.
 *
 * Required: false
 *
 * @param {String} value
 * @return {CodePipelineCustomActionTypeConfigurationProperties}
 */
CodePipelineCustomActionTypeConfigurationProperties.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * Indicates whether the configuration property is a key.
 *
 * Required: true
 *
 * @param {Boolean} value
 * @return {CodePipelineCustomActionTypeConfigurationProperties}
 */
CodePipelineCustomActionTypeConfigurationProperties.prototype.key = function(value) {
	return this.set('Key', value);
};

/**
 * A name for this configuration property.
 *
 * Required: true
 *
 * @param {String} value
 * @return {CodePipelineCustomActionTypeConfigurationProperties}
 */
CodePipelineCustomActionTypeConfigurationProperties.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * Indicates whether the configuration property will be used with the PollForJobs call. A custom action can have one queryable property. The queryable property must be required (see the Required property) and must not be secret (see the Secret property). For more information, see the queryable contents for the ActionConfigurationProperty data type in the AWS CodePipeline API Reference.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @return {CodePipelineCustomActionTypeConfigurationProperties}
 */
CodePipelineCustomActionTypeConfigurationProperties.prototype.queryable = function(value) {
	return this.set('Queryable', value);
};

/**
 * Indicates whether the configuration property is a required value.
 *
 * Required: true
 *
 * @param {Boolean} value
 * @return {CodePipelineCustomActionTypeConfigurationProperties}
 */
CodePipelineCustomActionTypeConfigurationProperties.prototype.required = function(value) {
	return this.set('Required', value);
};

/**
 * Indicates whether the configuration property is secret. Secret configuration properties are hidden from all AWS CodePipeline calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.
 *
 * Required: true
 *
 * @param {Boolean} value
 * @return {CodePipelineCustomActionTypeConfigurationProperties}
 */
CodePipelineCustomActionTypeConfigurationProperties.prototype.secret = function(value) {
	return this.set('Secret', value);
};

/**
 * The type of the configuration property, such as String, Number, or Boolean.
 *
 * Required: false
 *
 * @param {String} value
 * @return {CodePipelineCustomActionTypeConfigurationProperties}
 */
CodePipelineCustomActionTypeConfigurationProperties.prototype.type = function(value) {
	return this.set('Type', value);
};

module.exports = CodePipelineCustomActionTypeConfigurationProperties;
