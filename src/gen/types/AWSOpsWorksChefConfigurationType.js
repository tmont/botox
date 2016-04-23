var PropertyType = require('../../property-type');

/**
 * Describes the Chef configuration for the AWS::OpsWorks::Stack resource type. For more information, see ChefConfiguration in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html}
 * @constructor
 */
function AWSOpsWorksChefConfigurationType() {
	PropertyType.call(this);
}

Object.setPrototypeOf(AWSOpsWorksChefConfigurationType, PropertyType);

AWSOpsWorksChefConfigurationType.prototype = {
	
	/**
	 * The Berkshelf version.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSOpsWorksChefConfigurationType}
	 */
	berkshelfVersion: function(value) {
		return this.set('BerkshelfVersion', value);
	},

	/**
	 * Whether to enable Berkshelf.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {AWSOpsWorksChefConfigurationType}
	 */
	manageBerkshelf: function(value) {
		return this.set('ManageBerkshelf', value);
	}
};

module.exports = AWSOpsWorksChefConfigurationType;
