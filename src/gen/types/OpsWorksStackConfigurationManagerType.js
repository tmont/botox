var PropertyType = require('../../property-type');

/**
 * Describes the stack configuration manager for the AWS::OpsWorks::Stack resource type. For more information, see StackConfigurationManager in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigmanager.html}
 * @constructor
 */
function OpsWorksStackConfigurationManagerType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(OpsWorksStackConfigurationManagerType, PropertyType);

OpsWorksStackConfigurationManagerType.prototype = {
	
	/**
	 * The name of the configuration manager.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {OpsWorksStackConfigurationManagerType}
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
	 * @return {OpsWorksStackConfigurationManagerType}
	 */
	version: function(value) {
		return this.set('Version', value);
	}
};

module.exports = OpsWorksStackConfigurationManagerType;
