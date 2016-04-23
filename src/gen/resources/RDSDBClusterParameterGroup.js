var Resource = require('../../resource');

/**
 * AWS::RDS::DBClusterParameterGroup - The AWS::RDS::DBClusterParameterGroup resource creates a new Amazon Relational Database Service (Amazon RDS) database (DB) cluster parameter group. For more information about DB cluster parameter groups, see Appendix: DB Cluster and DB Instance Parameters in the Amazon Relational Database Service User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBClusterParameterGroup(name) {
	Resource.call(this, name, 'AWS::RDS::DBClusterParameterGroup');
}

RDSDBClusterParameterGroup.prototype = Object.create(Resource.prototype);


/**
 * A friendly description for this DB cluster parameter group.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBClusterParameterGroup}
 */
RDSDBClusterParameterGroup.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The database family of this DB cluster parameter group, such as aurora5.6.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {RDSDBClusterParameterGroup}
 */
RDSDBClusterParameterGroup.prototype.family = function(value) {
	return this.set('Family', value);
};

/**
 * The parameters to set for this DB cluster parameter group. For a list of parameter keys, see Appendix: DB Cluster and DB Instance Parameters in the Amazon Relational Database Service User Guide.
 *
 * Required: true
 * Update requires: No interruption or some interruptions, depending on the parameters that you update.
 *
 * @param {AJSONobjectconsistingofstringkeyvaluepairsasshowninthefollowingexample|Attribute|Reference} value
 * @return {RDSDBClusterParameterGroup}
 */
RDSDBClusterParameterGroup.prototype.parameters = function(value) {
	return this.set('Parameters', value);
};

/**
 * The tags that you want to attach to this parameter group.
 *
 * Required: false
 * Update requires: Updates are not supported.
 *
 * @param {resourcetag[]|Attribute|Reference} value
 * @return {RDSDBClusterParameterGroup}
 */
RDSDBClusterParameterGroup.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = RDSDBClusterParameterGroup;
