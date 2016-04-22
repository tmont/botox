/**
 * Describes the stack configuration manager for the AWS::OpsWorks::Stack resource type. For more information, see StackConfigurationManager in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigmanager.html}
 * @constructor
 */
function AWSOpsWorksStackConfigurationManagerType() {
	this.data = {};
}

AWSOpsWorksStackConfigurationManagerType.prototype = {
	
	/**
	 * The name of the configuration manager.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksStackConfigurationManagerType}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The Chef version.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksStackConfigurationManagerType}
	 */
	version: function(value) {
		return this.set('Version', value);
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

module.exports = AWSOpsWorksStackConfigurationManagerType;
