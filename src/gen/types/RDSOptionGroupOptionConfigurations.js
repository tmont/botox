/**
 * Use the OptionConfigurations property to configure an option and its settings for an AWS::RDS::OptionGroup resource.
 * @constructor
 */
function RDSOptionGroupOptionConfigurations(initialData) {
	this.data = initialData || {};
}

RDSOptionGroupOptionConfigurations.prototype = {
	
	/**
	 * A list of database security group names for this option. If the option requires access to a port, the security groups must allow access to that port. If you specify this property, don't specify the VPCSecurityGroupMemberships property.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {RDSOptionGroupOptionConfigurations}
	 */
	dbsecurityGroupMemberships: function(value) {
		return this.set('DBSecurityGroupMemberships', value);
	},

	/**
	 * The name of the option. For more information about options, see Working with Option Groups in the Amazon Relational Database Service User Guide.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {RDSOptionGroupOptionConfigurations}
	 */
	optionName: function(value) {
		return this.set('OptionName', value);
	},

	/**
	 * The settings for this option.
	 *
	 * Required: false
	 *
	 * @param {RDSOptionGroupOptionConfigurationsOptionSettings} value
	 * @return {RDSOptionGroupOptionConfigurations}
	 */
	optionSettings: function(value) {
		return this.set('OptionSettings', value);
	},

	/**
	 * The port number that this option uses.
	 *
	 * Required: false
	 *
	 * @param {Number} value
	 * @return {RDSOptionGroupOptionConfigurations}
	 */
	port: function(value) {
		return this.set('Port', value);
	},

	/**
	 * A list of VPC security group IDs for this option. If the option requires access to a port, the security groups must allow access to that port. If you specify this property, don't specify the DBSecurityGroupMemberships property.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {RDSOptionGroupOptionConfigurations}
	 */
	vpcSecurityGroupMemberships: function(value) {
		return this.set('VpcSecurityGroupMemberships', value);
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

module.exports = RDSOptionGroupOptionConfigurations;
