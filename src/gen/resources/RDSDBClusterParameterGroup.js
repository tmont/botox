var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::RDS::DBClusterParameterGroup - The AWS::RDS::DBClusterParameterGroup resource creates a new Amazon Relational Database Service (Amazon RDS) database (DB) cluster parameter group. For more information about DB cluster parameter groups, see Appendix: DB Cluster and DB Instance Parameters in the Amazon Relational Database Service User Guide.
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBClusterParameterGroup(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

RDSDBClusterParameterGroup.prototype = {
	
	/**
	 * A friendly description for this DB cluster parameter group.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBClusterParameterGroup}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The database family of this DB cluster parameter group, such as aurora5.6.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {RDSDBClusterParameterGroup}
	 */
	family: function(value) {
		return this.set('Family', value);
	},

	/**
	 * The parameters to set for this DB cluster parameter group. For a list of parameter keys, see Appendix: DB Cluster and DB Instance Parameters in the Amazon Relational Database Service User Guide.
	 *
	 * Required: true
	 * Update requires: No interruption or some interruptions, depending on the parameters that you update.
	 *
	 * @param {AJSONobjectconsistingofstringkeyvaluepairsasshowninthefollowingexample} value
	 * @return {RDSDBClusterParameterGroup}
	 */
	parameters: function(value) {
		return this.set('Parameters', value);
	},

	/**
	 * The tags that you want to attach to this parameter group.
	 *
	 * Required: false
	 * Update requires: Updates are not supported.
	 *
	 * @param {resourcetag[]} value
	 * @return {RDSDBClusterParameterGroup}
	 */
	tags: function(value) {
		return this.set('Tags', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::RDS::DBClusterParameterGroup has no attributes');
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

module.exports = RDSDBClusterParameterGroup;
