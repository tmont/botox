var Resource = require('../../resource');

/**
 * AWS::RDS::OptionGroup - Use the AWS::RDS::OptionGroup resource to create an option group that can make managing data and databases easier. For more information about option groups, see Working with Option Groups in the Amazon Relational Database Service User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSOptionGroup(name) {
	Resource.call(this, name);
}

Object.setPrototypeOf(RDSOptionGroup, Resource);

RDSOptionGroup.prototype = {
	
	
	/**
	 * The name of the database engine that this option group is associated with.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSOptionGroup}
	 */
	engineName: function(value) {
		return this.set('EngineName', value);
	},

	/**
	 * The major version number of the database engine that this option group is associated with.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSOptionGroup}
	 */
	majorEngineVersion: function(value) {
		return this.set('MajorEngineVersion', value);
	},

	/**
	 * A description of the option group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSOptionGroup}
	 */
	optionGroupDescription: function(value) {
		return this.set('OptionGroupDescription', value);
	},

	/**
	 * The configurations for this option group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {RDSOptionGroupOptionConfigurations} value
	 * @return {RDSOptionGroup}
	 */
	optionConfigurations: function(value) {
		return this.set('OptionConfigurations', value);
	},

	/**
	 * An arbitrary set of tags (key–value pairs) for this option group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {AWSCloudFormationResourceTagsType[]} value
	 * @return {RDSOptionGroup}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	}
};

module.exports = RDSOptionGroup;
