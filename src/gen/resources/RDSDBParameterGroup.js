var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::RDS::DBParameterGroup - Creates a custom parameter group for an RDS database family. For more information about RDS parameter groups, see Working with DB Parameter Groups in the Amazon Relational Database Service User Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBParameterGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

RDSDBParameterGroup.prototype = {
	
	/**
	 * A friendly description of the RDS parameter group. For example, "My Parameter Group".
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBParameterGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The database family of this RDS parameter group. For example, "MySQL5.1".
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {RDSDBParameterGroup}
	 */
	family: function(value) {
		return this.set('Family', value);
	},

	/**
	 * The parameters to set for this RDS parameter group.
	 *
	 * Required: false
	 * Update requires: No interruption or Some interruptions
	 *
	 * @param {AJSONobjectconsistingofstringkeyvaluepairsasshowninthefollowingexample} value
	 * @return {RDSDBParameterGroup}
	 */
	parameters: function(value) {
		return this.set('Parameters', value);
	},

	/**
	 * The tags that you want to attach to the RDS parameter group.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {resourcetag[]} value
	 * @return {RDSDBParameterGroup}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::RDS::DBParameterGroup has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = RDSDBParameterGroup;
