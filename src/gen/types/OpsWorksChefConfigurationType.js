var PropertyType = require('../../property-type');

/**
 * Describes the Chef configuration for the AWS::OpsWorks::Stack resource type. For more information, see ChefConfiguration in the AWS OpsWorks API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html}
 * @constructor
 */
function OpsWorksChefConfigurationType() {
	PropertyType.call(this);
}

OpsWorksChefConfigurationType.prototype = Object.create(PropertyType.prototype);

/**
 * The Berkshelf version.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {OpsWorksChefConfigurationType}
 */
OpsWorksChefConfigurationType.prototype.berkshelfVersion = function(value) {
	return this.set('BerkshelfVersion', value);
};

/**
 * Whether to enable Berkshelf.
 *
 * Required: false
 *
 * @param {Boolean} value
 * @returns {OpsWorksChefConfigurationType}
 */
OpsWorksChefConfigurationType.prototype.manageBerkshelf = function(value) {
	return this.set('ManageBerkshelf', value);
};

module.exports = OpsWorksChefConfigurationType;
