var PropertyType = require('../../property-type');

/**
 * Describes local secondary indexes for the AWS::DynamoDB::Table resource. Each index is scoped to a given hash key value. Tables with one or more local secondary indexes are subject to an item collection size limit, where the amount of data within a given item collection cannot exceed 10 GB.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-lsi.html}
 * @constructor
 */
function DynamoDBLocalSecondaryIndexes() {
	PropertyType.call(this);
}

DynamoDBLocalSecondaryIndexes.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the local secondary index. The index name can be 3 – 255 characters long and have no character restrictions.
 *
 * Required: true
 *
 * @param {String} value
 * @return {DynamoDBLocalSecondaryIndexes}
 */
DynamoDBLocalSecondaryIndexes.prototype.indexName = function(value) {
	return this.set('IndexName', value);
};

/**
 * The complete index key schema for the local secondary index, which consists of one or more pairs of attribute names and key types. For local secondary indexes, the hash key must be the same as that of the source table.
 *
 * Required: true
 *
 * @param {DynamoDBKeySchema} value
 * @return {DynamoDBLocalSecondaryIndexes}
 */
DynamoDBLocalSecondaryIndexes.prototype.keySchema = function(value) {
	return this.set('KeySchema', value);
};

/**
 * Attributes that are copied (projected) from the source table into the index. These attributes are additions to the primary key attributes and index key attributes, which are automatically projected.
 *
 * Required: true
 *
 * @param {DynamoDBProjectionObject} value
 * @return {DynamoDBLocalSecondaryIndexes}
 */
DynamoDBLocalSecondaryIndexes.prototype.projection = function(value) {
	return this.set('Projection', value);
};

module.exports = DynamoDBLocalSecondaryIndexes;
