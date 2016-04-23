var PropertyType = require('../../property-type');

/**
 * Use the OptionSettings property to specify settings for an option in the OptionConfigurations property.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfigurations-optionsettings.html}
 * @constructor
 */
function RDSOptionGroupOptionConfigurationsOptionSettings() {
	PropertyType.call(this);
}

Object.setPrototypeOf(RDSOptionGroupOptionConfigurationsOptionSettings, PropertyType);

RDSOptionGroupOptionConfigurationsOptionSettings.prototype = {
	
	/**
	 * The name of the option setting that you want to specify.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {RDSOptionGroupOptionConfigurationsOptionSettings}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The value of the option setting.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {RDSOptionGroupOptionConfigurationsOptionSettings}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = RDSOptionGroupOptionConfigurationsOptionSettings;
