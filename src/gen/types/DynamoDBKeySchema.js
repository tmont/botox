var PropertyType = require('../../property-type');

/**
 * Describes a primary key for the AWS::DynamoDB::Table resource or a key schema for an index. Each element is composed of an AttributeName and KeyType.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-keyschema.html}
 * @constructor
 */
function DynamoDBKeySchema() {
	PropertyType.call(this);
}

DynamoDBKeySchema.prototype = Object.create(PropertyType.prototype);

/**
 * The attribute name that is used as the primary key for this table. Primary key element names can be 1 – 255 characters long and have no character restrictions.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DynamoDBKeySchema}
 */
DynamoDBKeySchema.prototype.attributeName = function(value) {
	return this.set('AttributeName', value);
};

/**
 * Represents the attribute data, consisting of the data type and the attribute value itself. You can specify HASH or RANGE.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DynamoDBKeySchema}
 */
DynamoDBKeySchema.prototype.keyType = function(value) {
	return this.set('KeyType', value);
};

module.exports = DynamoDBKeySchema;
