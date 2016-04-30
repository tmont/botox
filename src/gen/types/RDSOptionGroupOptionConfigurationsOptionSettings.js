var PropertyType = require('../../property-type');

/**
 * Use the OptionSettings property to specify settings for an option in the OptionConfigurations property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfigurations-optionsettings.html}
 * @constructor
 */
function RDSOptionGroupOptionConfigurationsOptionSettings() {
	PropertyType.call(this);
}

RDSOptionGroupOptionConfigurationsOptionSettings.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the option setting that you want to specify.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {RDSOptionGroupOptionConfigurationsOptionSettings}
 */
RDSOptionGroupOptionConfigurationsOptionSettings.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The value of the option setting.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {RDSOptionGroupOptionConfigurationsOptionSettings}
 */
RDSOptionGroupOptionConfigurationsOptionSettings.prototype.value = function(value) {
	return this.set('Value', value);
};

module.exports = RDSOptionGroupOptionConfigurationsOptionSettings;
