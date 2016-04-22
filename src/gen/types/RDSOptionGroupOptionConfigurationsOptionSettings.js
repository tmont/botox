/**
 * Use the OptionSettings property to specify settings for an option in the OptionConfigurations property.
 * @constructor
 */
function RDSOptionGroupOptionConfigurationsOptionSettings() {
	this.data = {};
}

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

module.exports = RDSOptionGroupOptionConfigurationsOptionSettings;
