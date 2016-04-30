var Resource = require('../../resource');

/**
 * AWS::RDS::DBParameterGroup - Creates a custom parameter group for an RDS database family. For more information about RDS parameter groups, see Working with DB Parameter Groups in the Amazon Relational Database Service User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function RDSDBParameterGroup(name) {
	Resource.call(this, name, 'AWS::RDS::DBParameterGroup');
}

RDSDBParameterGroup.prototype = Object.create(Resource.prototype);

/**
 * A friendly description of the RDS parameter group. For example, "My Parameter Group".
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBParameterGroup}
 */
RDSDBParameterGroup.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * The database family of this RDS parameter group. For example, "MySQL5.1".
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {RDSDBParameterGroup}
 */
RDSDBParameterGroup.prototype.family = function(value) {
	return this.set('Family', value);
};

/**
 * The parameters to set for this RDS parameter group.
 *
 * Required: false
 * Update requires: No interruption or Some interruptions
 *
 * @param {Object|Attribute|Reference} value A JSON object consisting of string key-value pairs, as shown in the following example:
 * @returns {RDSDBParameterGroup}
 */
RDSDBParameterGroup.prototype.parameters = function(value) {
	return this.set('Parameters', value);
};

/**
 * The tags that you want to attach to the RDS parameter group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value A list of resource tags.
 * @returns {RDSDBParameterGroup}
 */
RDSDBParameterGroup.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = RDSDBParameterGroup;
